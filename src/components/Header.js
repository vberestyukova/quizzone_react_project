import {Link} from "react-router-dom";
import '../App.css';
import {useState} from "react";

export const Header = () => {
    const [count, setCount] = useState(0);
    function menuClick() {
        let menu = document.getElementById('menu');
        let menuButton = document.getElementById('menu-icon');
        if (menu.classList.contains('menu-not-visible')) {
            menu.classList.remove('menu-not-visible');
            menuButton.classList.remove('menu-icon-active');
        } else {
            menu.classList.add('menu-not-visible');
            menuButton.classList.add('menu-icon-active');
        }
    }

    function logOut() {
        localStorage.removeItem('login');
        setCount(count - 1);
        document.location.href = '/';
    }

    return (
        <header className='body_nav'>
            <div className="menu">
                <div  className='menu-icon' id='menu-icon' onClick={menuClick}/>
                <div id='menu' className='menu_titles'>
                    <Link to="/" className='menu_title'>Главная</Link>
                    <Link to="/catalog" className='menu_title'>Каталог</Link>
                    <Link to="/about" className='menu_title'>О проекте</Link>
                    <Link to="/feedback" className='menu_title'>Обратная связь</Link>
                    { localStorage.getItem('login') === null ?
                        <Link className='menu_title' to='/login'>Вход</Link> :
                        (<div>
                                <Link to='/account' className='menu_title'>Личный кабинет</Link>
                                <div onClick={logOut} className='menu_title'>Выход</div>
                            </div>
                        )
                    }
                </div>

            </div>
            <div className="menu menu_links">
                <a href="https://github.com/vberestyukova" target="_blank" className='menu_title_links github' />
                <a href="https://twitter.com/" target="_blank" className='menu_title_links twitter' />
                <a href="https://vk.com" target="_blank" className='menu_title_links vk'/>
                <a href="https://www.instagram.com" target="_blank" className='menu_title_links inst'/>
                <a href="https://telegram.org/" target="_blank" className='menu_title_links tele'/>
            </div>
        </header>
    )
}
