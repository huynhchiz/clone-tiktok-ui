import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faEllipsisVertical,
   faPlus,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faMoon,
   faGear,
   faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCircle, faUser } from '@fortawesome/free-regular-svg-icons';

import config from '../../../config';
import styles from './Header.module.scss';
import Search from '../Search';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import Menu from '../../../components/Popper/Menu';
import { InboxIcon, MessageIcon } from '../../../components/Icons';
import Image from '../../../components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      //quy ước: cứ phần tử nào có children thì nó có cấp nhỏ hơn
      children: {
         title: 'Language',
         data: [
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'Language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'Language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
   {
      icon: <FontAwesomeIcon icon={faMoon} />,
      title: 'Dark mode',
   },
];

function Header() {
   const currentUser = true;

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
                     <Button primary>Log in</Button>
                  </>
               )}
               {currentUser ? (
                  <Menu items={menuUser} onChange={handleMenuChange}>
                     <Image
                        className={cx('user-avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/977b0eda9dee55b2a2dfd266f5ccd729~c5_720x720.jpeg?x-expires=1691492400&x-signature=FIhG%2B5i33SMXCVfR7956qWRIZ9I%3D"
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
