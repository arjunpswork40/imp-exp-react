import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import {motion} from 'framer-motion'

const Hero = () => {
    const transition = { duration:3, type:"spring"}
    return (
        <div className={css.container}>

            {/* left side */}

            <div className={css.h_sides}>
                <span className={css.text1}>Skin Protection Cream</span>

                <div className={css.text2}>
                    <span>Trendy Collections</span>
                    <span>Seedily say has suitable disposal and boy. Excercise joy man childeren rejoiced.</span>
                </div>
            </div>

            {/* middle side hero image */}

            <div className={css.wrapper}>

                {/* bluecircle animation */}

                <motion.div 
                initial={{bottom:"4rem"}}
                whileInView={{bottom:"0rem"}}
                transition={transition}
                className={css.blueCircle}></motion.div>

                {/* hero image animation */}

                <motion.img
                transition={transition}
                initial={{bottom:"-4rem"}}
                whileInView={{bottom:"0rem"}}
                src={HeroImg} alt="" width={600} />

                {/* cart div animation */}

                <motion.div
                transition={transition}
                initial={{right:"4%"}}
                whileInView={{right:"2%"}}
                className={css.cart2}>
                    <RiShoppingBagFill/>

                    <div className={css.signup}>
                        <span>Best Signup Offers</span>

                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* right side */}

            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100k</span>
                    <span>happy Customers</span>
                </div>
            </div>
        </div>


    )
}

export default Hero