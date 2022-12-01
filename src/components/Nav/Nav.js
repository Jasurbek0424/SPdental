import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './logos.png';

const showOrders = () => {
    return (
        <div>
            <h1>Modalka</h1>
            
        </div>
    )
}


const Nav = () => {

    let [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className='nav__bar'>
                <Link href='/'><Image className='logotype' src={Logo} alt='Logotip' /></Link>
                <label for="menu" className='nav__bar-label'></label>
                <input type="checkbox" name="" id="menu"></input>
                <ul className='nav__list'>
                    <label for="menu" className='nav__list-label'></label>
                    <li><Link className='nav__link' href='/'> Пациентам</Link></li>
                    <li><Link className='nav__link' href='/'>О клинике</Link></li>
                    <li><Link className='nav__link' href='/'>Услуги</Link></li>
                    <li><Link className='nav__link' href='/'>Наши работы</Link></li>
                    <li><Link onClick={() => setModalOpen(modalOpen = !modalOpen)} className={`nav__link ${modalOpen && 'active'}`} href='/'>Цены</Link></li>
                    <li><button className='nav__btn' type="submit">оставить заявку</button></li>
                </ul>
                {modalOpen && (
                    <div className='shoping-cart'>
                        {showOrders()}
                    </div>
                )}
            </div>
        </>
    );
};



export default Nav;