import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleNotch,
   faCircleXmark,
   faEllipsisVertical,
   faMagnifyingGlass,
   faPlus,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faMoon,
   faGear,
   faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCircle, faEnvelope, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Button from '../../../Button';
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';

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
   const [searchResult, setSearchResult] = useState([]);
   const currentUser = true;

   // callAPI to show search result
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 3000);
   }, []);

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
            <div className={cx('logo-wrapper')}>
               <img className={cx('logo-img')} src={images.logo} alt="tiktok" />
            </div>

            <HeadlessTippy
               interactive //hiện tippy
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Acounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search-wrapper')}>
                  <input className={cx('search-input')} placeholder="Search" spellCheck={false} />

                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>

                  <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />

                  <span className={cx('border-between')}></span>

                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </HeadlessTippy>

            <div className={cx('actions-wrapper')}>
               <Button normal leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                        <button className={cx('message')}>
                           <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                     </Tippy>

                     <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                        <button className={cx('inbox')}>
                           <FontAwesomeIcon icon={faEnvelope} />
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
                     <img
                        className={cx('user-avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/977b0eda9dee55b2a2dfd266f5ccd729~c5_720x720.jpeg?x-expires=1691492400&x-signature=FIhG%2B5i33SMXCVfR7956qWRIZ9I%3D"
                        alt="Huynh Chi"
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
