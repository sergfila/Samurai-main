import React from "react";
import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <a href={"#"}><img src={require('../../img/logo2.png')} alt={'logo'}/></a>
        </header>
    );
}

export default Header;