//Layouts
import HeaderOnly from '../components/Layout/HeaderOnly';

import Movies from "../pages/Movies";
import About from "../pages/About";
import Detail from '../pages/Detail';

//Public routes
const publicRoutes = [
    // { path: '/natigation', component: Natigation },
    { path: '/', component: Movies },
    { path: '/about', component: About, layout: HeaderOnly },
    { path: '/detail/:id/*', component: Detail },
    // { path: '/coming', component: Coming },
    // { path: '/newsletter', component: Newsletters },
    // { path: '/footer', component: Footer },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };