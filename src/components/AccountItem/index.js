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
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/977b0eda9dee55b2a2dfd266f5ccd729~c5_720x720.jpeg?x-expires=1691492400&x-signature=FIhG%2B5i33SMXCVfR7956qWRIZ9I%3D"
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
