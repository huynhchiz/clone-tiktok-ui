import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Content.module.scss';
import ContentItem from '../../../components/ContentItem';
import * as videoService from '../../../services/videoService';

const cx = classNames.bind(styles);

function Content() {
   const [videos, setVideos] = useState([]);
   const [muteAll, setMuteAll] = useState(true);
   const [volume, setVolume] = useState(20);

   useEffect(() => {
      const fetchApi = async () => {
         const result = await videoService.getVideoList({ type: 'for-you', page: 1 });

         setVideos(result);
      };

      fetchApi();
   }, []);

   const handleMuteAll = () => {
      if (muteAll) {
         setMuteAll(false);
      } else {
         setMuteAll(true);
      }
   };

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
            />
         ))}
      </div>
   );
}

export default Content;
