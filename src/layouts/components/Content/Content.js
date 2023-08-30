import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

import styles from './Content.module.scss';
import ContentItem from '../../../components/ContentItem';
import * as videoService from '../../../services/videoService';
import TiktokLoading from '../../../components/TiktokLoading';

const cx = classNames.bind(styles);
const MAX_PAGE = 20;

function Content() {
   const [page, setPage] = useState(() => {
      let random = Math.floor(Math.random() * MAX_PAGE);
      if (random > 0) {
         return random;
      }
   });
   const [currentPages, setCurrentPages] = useState([]);
   const [videos, setVideos] = useState([]);

   const [currentVideo, setCurrentVideo] = useState();

   const [muteAll, setMuteAll] = useState(true);
   const [volume, setVolume] = useState(20);

   // call API videos => đưa vào videos
   useEffect(() => {
      const fetchApi = async () => {
         const result = await videoService.getVideoList({ type: 'for-you', page: page });

         setVideos(videos.concat(result));
      };

      fetchApi();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page]);

   // đưa các page đang show vào mảng currentPages
   useEffect(() => {
      if (page !== undefined) {
         setCurrentPages(currentPages.concat(page));
         // console.log(currentPages);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page]);

   // khi scroll đến cuối current page thì set new random page (ko trùng lặp với các page trong currentPages)
   const handleNewPage = () => {
      const randomPage = Math.floor(Math.random() * MAX_PAGE);

      const isDuplicate = currentPages.some((page) => page === randomPage);

      if (!isDuplicate && randomPage !== 0) {
         setPage(randomPage);
      } else {
         handleNewPage();
      }
   };

   useEffect(() => {
      console.log(currentPages);
   }, [currentPages]);

   //get the current video from Component Video
   const getCurrentVideo = (video) => {
      setCurrentVideo(video);
   };

   // pause all video khác, play current video
   useEffect(() => {
      let videoList = document.querySelectorAll('video');

      if (videoList.length > 0) {
         for (let i = 1; i < videoList.length; i++) {
            if (videoList[i] !== currentVideo) {
               videoList[i].pause();
            }
         }
         if (currentVideo) {
            currentVideo.play();

            // scroll to current video (làm tạm)
            window.scroll({
               top: currentVideo.getBoundingClientRect().top + window.scrollY - 150,
               behavior: 'smooth',
            });
         }
      }
   }, [currentVideo]);

   // click mute 1 video => muted all videos
   const handleMuteAll = () => {
      if (muteAll) {
         setMuteAll(false);
      } else {
         setMuteAll(true);
      }
   };

   // setting volume cho 1 video => same for all videos
   const handleVolume = (e) => {
      setVolume(parseInt(e.target.value));

      if (volume <= 0) {
         setMuteAll(true);
      } else {
         setMuteAll(false);
      }
   };

   return (
      <div className={cx('wrapper')}>
         {videos.map((video) => (
            <ContentItem
               key={video.id}
               data={video}
               muteAll={muteAll}
               onMute={handleMuteAll}
               handleVolume={handleVolume}
               volume={volume}
               sendCurrentVideo={getCurrentVideo}
            />
         ))}
         <Waypoint onEnter={handleNewPage}>
            <div className={cx('content-waypoint')}>
               <TiktokLoading />
            </div>
         </Waypoint>
      </div>
   );
}

export default Content;
