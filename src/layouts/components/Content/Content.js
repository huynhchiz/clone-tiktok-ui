import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Content.module.scss';
import ContentItem from '../../../components/ContentItem';
import * as videoService from '../../../services/videoService';

const cx = classNames.bind(styles);

function Content() {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         const result = await videoService.getVideoList({ type: 'for-you', page: 1 });

         setVideos(result);
      };

      fetchApi();
   }, []);

   return (
      <div className={cx('wrapper')}>
         {videos.map((video) => (
            <ContentItem key={video.id} data={video} />
         ))}
      </div>
   );
}

export default Content;
