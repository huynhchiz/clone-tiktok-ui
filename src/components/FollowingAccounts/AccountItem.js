import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './FollowingAccounts.module.scss';
import { Wrapper } from '../Popper';
import Button from '../Button';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
   const renderPreview = (props) => (
      <div tabIndex="-1" {...props}>
         <Wrapper className={cx('account-preview')}>
            <div className={cx('preview-heading')}>
               <img className={cx('preview-avatar')} src={data.avatar} alt={data.nickname} />
               <Button primary small>
                  Follow
               </Button>
            </div>
            <div className={cx('preview-user-acount')}>
               <span>{data.nickname}</span>
               {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
            </div>
            <p className={cx('preview-user-name')}>{data.full_name}</p>
            <div className={cx('fame')}>
               <div className={cx('fame-item')}>
                  <h4>{data.followers_count}</h4>
                  <span>Follower</span>
               </div>
               <div className={cx('fame-item')}>
                  <h4>{data.likes_count}</h4>
                  <span>Likes</span>
               </div>
            </div>
         </Wrapper>
      </div>
   );

   return (
      <div>
         <Tippy
            // visible
            hideOnClick={false}
            interactive
            render={renderPreview}
            placement="bottom-end"
            offset={[100, 0]}
            delay={[800, 0]}
         >
            <Link to={`/@${data.nickname}`} className={cx('account-item')}>
               <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
               <div className={cx('info')}>
                  <div className={cx('user-account')}>
                     <span>{data.nickname}</span>
                     {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
                  </div>
                  <p className={cx('user-name')}>{data.full_name}</p>
               </div>
            </Link>
         </Tippy>
      </div>
   );
}

AccountItem.propTypes = {
   data: PropTypes.object.isRequired,
};

export default AccountItem;
