import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/962a0a11e81c7d164ec364d5de1fd989~c5_300x300.webp?x-expires=1691301600&x-signature=%2B7ipPU5whXNCUe1t1KcT4EQ05NE%3D"
            alt="thanh"
         />
         <div className={cx('info')}>
            <div className={cx('user-account')}>
               <span>thanhmeo.18</span>
               <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
            </div>
            <p className={cx('user-name')}>Thanh Mèo</p>
         </div>
      </div>
   );
}

export default AccountItem;
