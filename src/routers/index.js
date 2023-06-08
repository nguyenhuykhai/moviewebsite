//Layouts
import HeaderOnly from '../components/Layout/HeaderOnly';

import Movies from "../pages/Movies";
import About from "../pages/About";
import Detail from '../pages/Detail';
import Contact from '../pages/Contact';

//Public routes
const publicRoutes = [
    { path: '/', component: Movies },
    { path: '/about', component: About, layout: HeaderOnly },
    { path: '/detail/:id/*', component: Detail },
    { path: '/contact', component: Contact, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };