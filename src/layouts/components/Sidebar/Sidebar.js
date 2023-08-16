import { useEffect, useState, useRef } from 'react';
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

function Sidebar() {
   const [suggestedUser, setSuggestedUser] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         const result = await userService.getSuggested({ page: 1, perPage: 5 });

         setSuggestedUser(result);
      };

      fetchApi();
   }, []);

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

         <AccountList heading="Suggested accounts" data={suggestedUser} />
         <AccountList heading="Following accounts" data={suggestedUser} />

         <Links data={LINK_ITEMS} />
      </aside>
   );
}

export default Sidebar;
