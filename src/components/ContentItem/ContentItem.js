import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './ContentItem.module.scss';
import Image from '../../components/Image';
import Button from '../../components/Button';
// import AccountPreview from '../AccountList/AccountItem/AccountPreview';

const cx = classNames.bind(styles);

function ContentItem({ data }) {
   return (
      <div className={cx('wrapper')}>
         <div>
            <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
         </div>

         <div className={cx('content')}>
            <div className={cx('heading')}>
               <div className={cx('name-wrapper')}>
                  <h3 className={cx('nickname')}>{data.user.nickname}</h3>
                  <span className={cx('name')}>{data.user.first_name + ' ' + data.user.last_name || 'No name'}</span>
               </div>

               <div className={cx('description')}>
                  <span className={cx('text')}>{data.description}</span>
                  <button className={cx('more-btn')}>more</button>
               </div>

               <div className={cx('song')}>
                  <FontAwesomeIcon className={cx('song-icon')} icon={faMusic} />
                  <p className={cx('song-title')}>{data.music || 'Không chứa bài hát'}</p>
               </div>
            </div>

            <div className={cx('video-wrapper')}>
               <video controls className={cx('video')} src={data.file_url} alt="acv" autoPlay={true} />

               <div className={cx('interacts')}>
                  {/* likes */}
                  <div className={cx('interact-item')}>
                     <div className={cx('interact-icon-wrapper')}>
                        <FontAwesomeIcon className={cx('interact-icon')} icon={faHeart} />
                     </div>
                     <strong className={cx('statistical')}>{data.likes_count}</strong>
                  </div>

                  {/* comments */}
                  <div className={cx('interact-item')}>
                     <div className={cx('interact-icon-wrapper')}>
                        <FontAwesomeIcon className={cx('interact-icon')} icon={faCommentDots} />
                     </div>
                     <strong className={cx('statistical')}>{data.comments_count}</strong>
                  </div>

                  {/* saves */}
                  <div className={cx('interact-item')}>
                     <div className={cx('interact-icon-wrapper')}>
                        <FontAwesomeIcon className={cx('interact-icon')} icon={faBookmark} />
                     </div>
                     <strong className={cx('statistical')}>{data.shares_count}</strong>
                  </div>

                  {/* shares */}
                  <div className={cx('interact-item')}>
                     <div className={cx('interact-icon-wrapper')}>
                        <FontAwesomeIcon className={cx('interact-icon')} icon={faShare} />
                     </div>
                     <strong className={cx('statistical')}>{data.shares_count}</strong>
                  </div>
               </div>
            </div>

            <Button className={cx('follow-btn')} outline>
               Follow
            </Button>
         </div>
      </div>
   );
}

export default ContentItem;
