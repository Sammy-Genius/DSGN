import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
    from: {
        clipPath: 'circle(0.0% at 0% 100%)'
    },
    to: {
        clipPath: 'circle(100%)',
        transition: {
            duration:.8,
            type:'tween',
            when: 'beforeChildren',
            staggerChildren:.6
        }
    },
    exit: {
        clipPath: 'circle(0% at 100% 0%)',
        transition: {
            duration:.8,
            type:'tween',
            when: 'afterChildren',
            staggerChildren:.6
        }

    }
}

const innerVariants = {
    from: {
        opacity:0,
        y:2000,
    },
    to: {
        opacity:1,
        y:0,
        transition: {
            duration:1.3,
            type:'tween',
            when: 'beforeChildren',
            staggerChildren:.6
        }
    },
    exit: {
        opacity:0,
        y:2000,
        transition: {
            duration:1.3,
            type:'tween',
            after: 'beforeChildren',
            staggerChildren:.6
        }

    }
}



const Menu = ({ isMenuOpened, openMenu }) => {
    return ( 
    <>
    <AnimatePresence>
        { isMenuOpened && ( 
        <motion.div className='w-full h-full fixed top-0 left-0 bg-black z-[300]'
        variants={ menuVariants }
        initial = 'from'
        animate = 'to'
        exit = 'exit'
        >
            <motion.div className='w-[90%] h-[90%] center flex flex-col items-center justify-around'
            variants={innerVariants}
            initial = 'from'
            animate = 'to'
            exit = 'exit'
            >
                <span className='relative block fill-up text-xl text-[#4f6158]' data-text='Close' onClick={ openMenu }>Close</span>
                <a className='text-3xl md:text-5xl text-white  tracking-[3px]' href="">
                    <span className='relative block fill-up-three' data-text='About'>About</span>
                </a>
                <a className='text-3xl md:text-5xl text-white  tracking-[3px]' href="">
                    <span className='relative block fill-up-three' data-text='Works'>Works</span>
                </a>
                <a className='text-3xl md:text-5xl text-white  tracking-[3px]' href="">
                    <span className='relative block fill-up-three' data-text='Career'>Career</span>
                </a>
                <a className='text-3xl md:text-5xl text-white  tracking-[3px]' href="">
                    <span className='relative block fill-up-three' data-text='Blogs'>Blogs</span>
                </a>
                <a className='text-3xl md:text-5xl text-white  tracking-[3px]' href="">
                    <span className='relative block fill-up-three' data-text='Contact'>Contact</span>
                </a>
            </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
      </>
     );
}
 
export default Menu;