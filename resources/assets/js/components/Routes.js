import React from 'react';
import Loadable from 'react-loadable';
import Students from './content/Students';
import Settings from './content/Settings';
import Home from './content/Home';


const routes = [
    { path: '/home', exact:true, name:"Home",icon:"icon-home4", component:Home },
    { path: '/students',exact:true, name:"Students",icon:"icon-home4", component:Students },
    { path: '/settings',exact:true, name:"Settings",icon:"icon-home4", component:Settings }
];

export default routes;