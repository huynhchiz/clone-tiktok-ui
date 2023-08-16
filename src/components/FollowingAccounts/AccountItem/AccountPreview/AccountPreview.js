import PropTypes from 'prop-types';
import styles from './AccountPreview.module.scss';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Wrapper from '../../../Popper/Wrapper';
import Button from '../../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview({ children, data }) {
   const renderPreview = (props) => (
      <div tabIndex="-1" {...props}>
         <Wrapper className={cx('wrapper')}>
            <div className={cx('heading')}>
               <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
               {/* <Button primary small>
                Follow
             </Button> */}
               <Button outline small>
                  Message
               </Button>
            </div>
            <div className={cx('user-acount')}>
               <span>{data.nickname}</span>
               {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
            </div>
            <p className={cx('user-name')}>{data.full_name}</p>
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
            placement="bottom"
            offset={[0, 0]}
            delay={[800, 0]}
         >
            {children}
         </Tippy>
      </div>
   );
}

AccountPreview.propTypes = {
   children: PropTypes.node.isRequired,
   data: PropTypes.object.isRequired,
};

export default AccountPreview;
