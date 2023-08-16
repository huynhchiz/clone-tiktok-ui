import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview';

import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
   return (
      <AccountPreview data={data}>
         <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
               <div className={cx('user-account')}>
                  <span>{data.nickname}</span>
                  {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
               </div>
               <p className={cx('user-name')}>{data.full_name}</p>
            </div>
         </Link>
      </AccountPreview>
   );
}

AccountItem.propTypes = {
   data: PropTypes.object.isRequired,
};

export default AccountItem;
