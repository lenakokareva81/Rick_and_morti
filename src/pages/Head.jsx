import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Link, Outlet } from 'react-router-dom';

export default function Head() {


    return (
        <>


            <ButtonGroup aria-label=""
                className="d-flex justify-content-center align-items-center gap-3 mt-3 mb-5">

                <Link to='/category/characters'>
                    <Button variant="secondary">
                        герои
                    </Button>
                </Link>
                <Link to='/category/episode'>
                    <Button variant="secondary">локации</Button>
                </Link>

                <Link to='/category/location'>
                    <Button variant="secondary">эпизоды</Button>
                </Link>

            </ButtonGroup >
            <Outlet />
        </>
    );
}