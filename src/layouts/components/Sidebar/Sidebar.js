import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import FollowingAccounts from '../../../components/FollowingAccounts';
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

const cx = classNames.bind(styles);

function Sidebar() {
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

         <FollowingAccounts heading="Following accounts" />
      </aside>
   );
}

export default Sidebar;
