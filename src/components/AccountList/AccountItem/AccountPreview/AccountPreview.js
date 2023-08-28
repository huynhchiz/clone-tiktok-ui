import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Wrapper from '../../../Popper/Wrapper';
import Button from '../../../Button/Button';
import Image from '../../../Image';

const cx = classNames.bind(styles);

function AccountPreview({ children, data, messageBtn = false, posittionOffset = [0, 0], big = false }) {
   const renderPreview = (props) => (
      <div tabIndex="-1" {...props}>
         <Wrapper
            className={cx('wrapper', {
               'big-wrapper': big,
            })}
         >
            <div className={cx('heading')}>
               <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
               {messageBtn ? (
                  <Button outline small>
                     Message
                  </Button>
               ) : (
                  <Button primary small>
                     Follow
                  </Button>
               )}
            </div>
            <div className={cx('user-acount')}>
               <span>{data.nickname}</span>
               {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
            </div>
            <p className={cx('user-name')}>{data.first_name + ' ' + data.last_name}</p>
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
            {big && (
               <div className={cx('footer')}>
                  <p className={cx('footer-content')}>{data.bio}</p>
               </div>
            )}
         </Wrapper>
      </div>
   );
   return (
      <div>
         <Tippy
            appendTo={document.getElementById('root')}
            // visible
            hideOnClick={false}
            interactive
            render={renderPreview}
            placement="bottom"
            offset={posittionOffset}
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
   messageBtn: PropTypes.bool,
};

export default AccountPreview;
