import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Video.module.scss';
import { formatSec } from '../../hooks';

const cx = classNames.bind(styles);

function Video({ data, muteAll, onMute, handleVolume, volume }) {
   const thumbRef = useRef();
   const videoRef = useRef();
   const volumeLineRef = useRef();
   const timeProcessRef = useRef();

   const [playing, setPlaying] = useState(false);
   const [timePercent, setTimePercent] = useState(0);
   const [currentTime, setCurrentTime] = useState(0);

   useEffect(() => {
      videoRef.current.volume = volume / 100;
   }, [volume]);

   useEffect(() => {
      setCurrentTime(Math.floor(parseInt((videoRef.current.duration / 1000) * timePercent)));
   }, [timePercent]);

   const handlePlay = () => {
      setPlaying(true);

      thumbRef.current.style.display = 'none';
      videoRef.current.style.display = 'block';
      videoRef.current.play();
   };

   const handlePause = () => {
      setPlaying(false);
      videoRef.current.pause();
   };

   const handleShowTime = () => {
      setTimePercent(Math.floor((videoRef.current.currentTime * 1000) / videoRef.current.duration));
   };

   const handleTimeProcess = (e) => {
      setTimePercent(parseInt(Math.floor(e.target.value)));
      videoRef.current.currentTime = (videoRef.current.duration / 1000) * timePercent;
   };

   return (
      <div className={cx('wrapper')}>
         <Waypoint onEnter={handlePlay} onLeave={handlePause}>
            <div className={cx('video-waypoint')}></div>
         </Waypoint>

         <div className={cx('thumb-wrapper')} ref={thumbRef}>
            <img className={cx('thumb-img')} src={data.thumb_url} alt={data.description} />
         </div>

         <video
            ref={videoRef}
            loop
            className={cx('video')}
            src={data.file_url}
            alt={data.description}
            muted={muteAll}
            onTimeUpdate={handleShowTime}
         />

         <div className={cx('controls')}>
            <div className={cx('buttons')}>
               <div className={cx('play-pause')}>
                  {playing ? (
                     <FontAwesomeIcon
                        className={cx('pause-btn', 'btn-inside-video')}
                        icon={faPause}
                        onClick={handlePause}
                     />
                  ) : (
                     <FontAwesomeIcon
                        className={cx('play-btn', 'btn-inside-video')}
                        icon={faPlay}
                        onClick={handlePlay}
                     />
                  )}
               </div>

               <div className={cx('volume')}>
                  <div className={cx('volume-process-wrapper')}>
                     <input
                        className={cx('volume-process')}
                        type="range"
                        orient="vertical"
                        min="0"
                        max="100"
                        step="1"
                        value={volume}
                        onInput={handleVolume}
                        onMouseUp={handleVolume}
                     />
                     <div
                        className={cx('current-volume-process')}
                        ref={volumeLineRef}
                        style={{ height: `calc(var(--volume-process) * ${volume} / 100)` }}
                     ></div>
                  </div>
                  <div className={cx('volume-on-off')} onClick={onMute}>
                     {!muteAll ? (
                        <FontAwesomeIcon className={cx('volume-on-btn', 'btn-inside-video')} icon={faVolumeHigh} />
                     ) : (
                        <FontAwesomeIcon className={cx('volume-off-btn', 'btn-inside-video')} icon={faVolumeXmark} />
                     )}
                  </div>
               </div>
            </div>

            <div className={cx('timer')}>
               <div className={cx('time-process-wrapper')}>
                  <input
                     className={cx('time-process')}
                     ref={timeProcessRef}
                     type="range"
                     step="1"
                     min="0"
                     max="1000"
                     value={timePercent}
                     onInput={handleTimeProcess}
                     onChange={handleTimeProcess}
                     onMouseDown={handleTimeProcess}
                     onMouseUp={handleTimeProcess}
                  />
                  <div className={cx('current-time-process')} style={{ width: `${timePercent / 10}%` }}></div>
               </div>
               <label className={cx('time-count')}>
                  {formatSec(currentTime)}/{formatSec(data.meta.playtime_seconds)}
               </label>
            </div>
         </div>
      </div>
   );
}

Video.propTypes = {
   data: PropTypes.object.isRequired,
   muteAll: PropTypes.bool.isRequired,
   onMute: PropTypes.func.isRequired,
   handleVolume: PropTypes.func.isRequired,
   volume: PropTypes.number.isRequired,
};

export default Video;
