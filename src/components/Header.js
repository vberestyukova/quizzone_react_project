import {Link} from "react-router-dom";
import '../App.css';

export const Header = () => {
    function menuClick() {
        console.log('click!');
    }
    return (
        <header className='body_nav'>
            <div className="menu">
                <div  className='menu_icon' onClick={menuClick}/>
                <Link to="/" className='menu_title'>Главная</Link>
                <Link to="/catalog" className='menu_title'>Каталог</Link>
                <Link to="/about" className='menu_title'>О проекте</Link>
                <Link to="/feedback" className='menu_title'>Обратная связь</Link>
                <Link to="/login" className='menu_title'>Вход</Link>

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
