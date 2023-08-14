import config from '../config';

// Layouts
import HeaderOnly from '../layouts/HeaderOnly';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Explore from '../pages/Explore';
import Live from '../pages/Live';

// public routes là những router ko cần đăng nhập vẫn xem được
const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.following, component: Following },
   { path: config.routes.live, component: Live },
   { path: config.routes.profile, component: Profile },
   { path: config.routes.explore, component: Explore },
   { path: config.routes.upload, component: Upload, layout: HeaderOnly },
   { path: config.routes.search, component: Search, layout: null },
];

// private routes là những router cần phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
