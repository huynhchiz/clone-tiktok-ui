import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import styles from './ContentItem.module.scss';
import Image from '../../components/Image';
import Button from '../../components/Button';
import InteractItem from '../InteractItem';
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
               <video controls loop className={cx('video')} src={data.file_url} alt="acv" autoPlay muted />

               <div className={cx('interacts')}>
                  <InteractItem type="likes" data={data} />
                  <InteractItem type="comments" data={data} />
                  <InteractItem type="saves" data={data} />
                  <InteractItem type="shares" data={data} />
               </div>
            </div>

            <Button className={cx('follow-btn')} outline>
               Follow
            </Button>
         </div>
      </div>
   );
}

ContentItem.propTypes = {
   data: PropTypes.object.isRequired,
};

export default ContentItem;
