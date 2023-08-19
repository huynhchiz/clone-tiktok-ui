import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './InteractItem.module.scss';

const cx = classNames.bind(styles);

function InteractItem({ type, data }) {
   let icon;
   let countInteract;
   switch (type) {
      case 'likes':
         icon = faHeart;
         countInteract = data.likes_count;
         break;
      case 'comments':
         icon = faCommentDots;
         countInteract = data.comments_count;
         break;
      case 'saves':
         icon = faBookmark;
         countInteract = data.shares_count;
         break;
      case 'shares':
         icon = faShare;
         countInteract = data.shares_count;
         break;

      default:
         console.error('invalid type');
   }

   return (
      <div className={cx('wrapper')}>
         <div className={cx('icon-wrapper')}>
            <FontAwesomeIcon className={cx('icon')} icon={icon} />
         </div>
         <strong className={cx('statistical')}>{countInteract}</strong>
      </div>
   );
}

InteractItem.propTypes = {
   type: PropTypes.string.isRequired,
   data: PropTypes.object.isRequired,
};

export default InteractItem;
