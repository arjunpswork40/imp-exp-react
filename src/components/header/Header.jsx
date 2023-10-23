import React, { useState, useEffect } from 'react';
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'

const Header = () => {

    const [ShowMenu,setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((ShowMenu)=>!ShowMenu)
    }

    useEffect(() => {
        // Check screen width and set initial ShowMenu state
        const handleWindowResize = () => {
          if (window.innerWidth <= 640) {
            setShowMenu(false); // Mobile screen
          } else {
            setShowMenu(true); // Larger screens (monitors)
          }
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleWindowResize);
    
        // Call the handler once to set the initial state
        handleWindowResize();
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt=''/>
                <span>amazon</span>
            </div>
            <div className={css.right}>
                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars/> 
                </div>
                    <ul className={css.menu} style={{display: ShowMenu? 'inherit' : 'none'}}>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
                <input type="text" className={css.search} placeholder='Search' />
                
                <CgShoppingBag className={css.cart}/>
            </div>
        </div>
    )
}

export default Header