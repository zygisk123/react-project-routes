import { Fragment } from 'react';
import {Outlet} from 'react-router-dom'; //marks the place where child route elements should be rendered to
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
    return <Fragment>
        <MainNavigation />
        <Outlet />
    </Fragment>;
}

export default RootLayout;