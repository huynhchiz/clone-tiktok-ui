import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Waypoint } from 'react-waypoint';

import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video({ data }) {
   const videoRef = useRef();
   const [playing, setPlaying] = useState(false);

   const handleVideo = () => {
      if (playing) {
         videoRef.current.pause();
         setPlaying(false);
      } else {
         videoRef.current.play();
         setPlaying(true);
      }
   };

   return (
      <Waypoint onEnter={handleVideo} onLeave={handleVideo}>
         <video ref={videoRef} controls loop className={cx('video')} src={data.file_url} alt={data.description} muted />
      </Waypoint>
   );
}

export default Video;
