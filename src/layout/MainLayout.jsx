import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Link, Outlet } from 'react-router-dom';

import { AuthStatus } from '../component/AuthStatus';
import { CATEGORY, CATEGORY_NAME } from '../constants';
import { Suspense } from 'react';
import logo from '../assets/logo.png'

export default function MainLayout() {


    return (
        <>
            <AuthStatus />
            <img className="col-lg-7 center mx-auto" src={logo} alt="image 404"></img>
            <ButtonGroup aria-label=""
                className="d-flex justify-content-center align-items-center gap-3 mt-3 mb-5">

                <Link to='/login'>
                    <Button variant="secondary">
                        вход
                    </Button>
                </Link>
                <Link to={`/category/${CATEGORY.CHARACTERS}`}>
                    <Button variant="secondary">
                        {CATEGORY_NAME.characters}
                    </Button>
                </Link>
                <Link to={`/category/${CATEGORY.LOCATION}`}>
                    <Button variant="secondary">{CATEGORY_NAME.location}</Button>
                </Link>

                <Link to={`/category/${CATEGORY.EPISODE}`}>
                    <Button variant="secondary">{CATEGORY_NAME.episode}</Button>
                </Link>

            </ButtonGroup >


            <Suspense fallback={<>loading...</>}>

                <Outlet />
            </Suspense >

        </>
    );
}