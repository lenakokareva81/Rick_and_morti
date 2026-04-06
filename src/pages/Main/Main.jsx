import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Link, Outlet } from 'react-router-dom';
import Head from '../Head/Head';
import { AuthStatus } from '../../component/AuthStatus';

export default function Main() {


    return (
        <>
            <AuthStatus />
            <Head />
            <Outlet />



        </>
    );
}