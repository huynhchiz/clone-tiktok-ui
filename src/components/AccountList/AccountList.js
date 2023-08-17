import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountList.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function AccountList({ data, heading, onViewChange, btnShow, messageBtn }) {
   return (
      <div className={cx('wrapper')}>
         <h1 className={cx('heading')}>{heading}</h1>
         <div className={cx('body')}>
            {data.map((item) => (
               <AccountItem key={item.id} data={item} messageBtn={messageBtn} />
            ))}
         </div>
         <button className={cx('more-btn')} onClick={onViewChange}>
            {btnShow ? 'See less' : 'See more'}
         </button>
      </div>
   );
}

AccountList.propTypes = {
   data: PropTypes.array,
   heading: PropTypes.string.isRequired,
   onViewChange: PropTypes.func,
   btnShow: PropTypes.bool,
   messageBtn: PropTypes.bool,
};

export default AccountList;
