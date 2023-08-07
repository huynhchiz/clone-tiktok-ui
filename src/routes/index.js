// Layouts
import { HeaderOnly } from '../components/Layout';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

// public routes là những router ko cần đăng nhập vẫn xem được
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/following', component: Following },
   { path: '/:nickname', component: Profile },
   { path: '/upload', component: Upload, layout: HeaderOnly },
   { path: '/search', component: Search, layout: null },
];

// private routes là những router cần phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
