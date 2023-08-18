import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Links from './Links';

import styles from './Sidebar.module.scss';
import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import AccountList from '../../../components/AccountList';
import {
   HomeIcon,
   UserGroupIcon,
   ExploreIcon,
   LiveIcon,
   HomeActiveIcon,
   UserGroupActiveIcon,
   ExploreActiveIcon,
   LiveActiveIcon,
} from '../../../components/Icons/Icons';
import { LINK_ITEMS } from '../../../consts';
import * as userService from '../../../services/userService';

const cx = classNames.bind(styles);

const PAGE = 1;
const PER_PAGE = 5;
const MAX_PER_PAGE = 20;

function Sidebar() {
   const [perPage, setPerPage] = useState(PER_PAGE);
   const [seeBtn, setSeeBtn] = useState(false);
   const [suggestedUser, setSuggestedUser] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         const result = await userService.getSuggestedUsers({ page: PAGE, perPage });

         setSuggestedUser(result);
      };

      fetchApi();
   }, [perPage]);

   const handleViewChange = () => {
      setSeeBtn((seeBtn) => !seeBtn);

      if (!seeBtn) {
         setPerPage(MAX_PER_PAGE);
      } else {
         setPerPage(PER_PAGE);
      }
   };

   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />

            <MenuItem
               title="Following"
               to={config.routes.following}
               icon={<UserGroupIcon />}
               activeIcon={<UserGroupActiveIcon />}
            />

            <MenuItem
               title="Explore"
               to={config.routes.explore}
               icon={<ExploreIcon />}
               activeIcon={<ExploreActiveIcon />}
            />

            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
         </Menu>

         <AccountList
            heading="Suggested accounts"
            // messageBtn //mặc định sẽ là follow button
            data={suggestedUser}
            onViewChange={handleViewChange}
            btnShow={seeBtn}
         />

         <AccountList heading="Following accounts" messageBtn data={suggestedUser} />

         <Links data={LINK_ITEMS} />
      </aside>
   );
}

export default Sidebar;
