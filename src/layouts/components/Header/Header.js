import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus, faGear, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCircle, faUser } from '@fortawesome/free-regular-svg-icons';

import config from '../../../config';
import styles from './Header.module.scss';
import Search from '../Search';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import Menu from '../../../components/Popper/Menu';
import { InboxIcon, MessageIcon } from '../../../components/Icons';
import Image from '../../../components/Image';
import { useState } from 'react';
import { MENU_ITEMS } from '../../../consts';

const cx = classNames.bind(styles);

function Header() {
   const [currentUser, setCurrentUser] = useState(true);

   // Handle logic
   const handleMenuChange = (menuItem) => {
      console.log(menuItem);
      switch (menuItem.type) {
         case 'Language':
            // handle change Language
            break;
         default:
      }
   };

   const menuUser = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/@huynhchi',
      },
      {
         icon: <FontAwesomeIcon icon={faBookmark} />,
         title: 'Favourites',
         to: '/profile/favourite',
      },
      {
         icon: <FontAwesomeIcon icon={faCircle} />,
         title: 'Get Coins',
         to: '/coins',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
         title: 'Log out',
         to: '/logout',
         separate: true,
      },
   ];

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo-wrapper')}>
               <img className={cx('logo-img')} src={images.logoDark} alt="tiktok" />
            </Link>

            <Search />
            <div className={cx('actions-wrapper')}>
               <Button normal leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                        <button className={cx('message')}>
                           <MessageIcon />
                        </button>
                     </Tippy>

                     <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                        <button className={cx('inbox')}>
                           <InboxIcon />
                           <span className={cx('inbox-noti')}>18</span>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button primary onClick={() => setCurrentUser(true)}>
                        Log in
                     </Button>
                  </>
               )}
               {currentUser ? (
                  <Menu items={menuUser} onChange={handleMenuChange}>
                     <Image
                        className={cx('user-avatar')}
                        src=""
                        alt="Huynh Chi"
                        // fallback="https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
                     />
                  </Menu>
               ) : (
                  <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  </Menu>
               )}
            </div>
         </div>
      </header>
   );
}

export default Header;
