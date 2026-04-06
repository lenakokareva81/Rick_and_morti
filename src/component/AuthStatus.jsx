import { useNavigate } from 'react-router-dom'
import { useAuth } from "../context/AuthProvider"
import { Button } from 'react-bootstrap'

export function AuthStatus() {
    const auth = useAuth()
    const navigate = useNavigate()

    if (auth.user === null) {
        return <> You are non logged in.</>
    }
    const handleSingout = () => {
        auth.singout(() => {
            navigate('/')
        })
    }

    return (<>
        <div className="d-flex justify-content-end">

            Добро пожаловать {auth.user}   <Button variant="secondary" size='sm' onClick={handleSingout}>выйти</Button>
        </div>

    </>)
}