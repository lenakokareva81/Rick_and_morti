import { Link } from 'react-router-dom'
import error from '../../assets/error-404.png'

export function NotFound() {
    return (
        <>
            <div className="col-lg-7 text-center">
                <img className="col-lg-7 center" src={error} alt="image 404"></img>
                <h2><b>404</b> Страница не найдена</h2>
                <p>посетите главную страницу <br /> возможно вы найдёте её</p>
                <Link to='/' className="cmn-btn mt-4">На главную</Link>
            </div>

        </>

    )
}