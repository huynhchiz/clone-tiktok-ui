import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Waypoint } from 'react-waypoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video({ data }) {
   const videoRef = useRef();
   const [playing, setPlaying] = useState(false);
   const [mute, setMute] = useState(false);

   const handleVideo = () => {
      if (playing) {
         setPlaying(false);
         videoRef.current.pause();
      } else {
         setPlaying(true);
         videoRef.current.play();
      }
   };

   const handlePlayPause = () => {
      if (playing) {
         setPlaying(false);
         videoRef.current.pause();
      } else {
         setPlaying(true);
         videoRef.current.play();
      }
   };

   const handleSetMute = () => {
      if (!mute) {
         setMute(false);
         videoRef.current.muted = false;
      } else {
         setMute(true);
         videoRef.current.muted = true;
      }

      console.log(mute);
   };

   const handleTimeProcess = () => {};

   return (
      <div className={cx('wrapper')}>
         <Waypoint onEnter={handleVideo} onLeave={handleVideo}>
            <video ref={videoRef} loop className={cx('video')} src={data.file_url} alt={data.description} muted />
         </Waypoint>
         <div className={cx('controls')}>
            <div className={cx('buttons')}>
               <div className={cx('play-pause')} onClick={handlePlayPause}>
                  {playing ? (
                     <FontAwesomeIcon className={cx('pause-btn', 'btn-inside-video')} icon={faPause} />
                  ) : (
                     <FontAwesomeIcon className={cx('play-btn', 'btn-inside-video')} icon={faPlay} />
                  )}
               </div>

               <div className={cx('volume')}>
                  <div className={cx('volume-process-wrapper')}>
                     <div className={cx('volume-process')}>
                        <div className={cx('volume-line')} />
                        <div className={cx('volume-thumb')}></div>
                     </div>
                  </div>
                  <div className={cx('volume-on-off')} onClick={handleSetMute}>
                     <FontAwesomeIcon className={cx('volume-on-btn', 'btn-inside-video')} icon={faVolumeHigh} />
                     <FontAwesomeIcon className={cx('volume-off-btn', 'btn-inside-video')} icon={faVolumeXmark} />
                  </div>
               </div>
            </div>

            <div className={cx('timer')}>
               <input
                  className={cx('time-process')}
                  type="range"
                  step="1"
                  value="0"
                  min={0}
                  max={1000}
                  onChange={handleTimeProcess}
               />
               <label className={cx('time-count')}>00:00/00:50</label>
            </div>
         </div>
      </div>
   );
}

Video.propTypes = {
   data: PropTypes.object.isRequired,
};

export default Video;
