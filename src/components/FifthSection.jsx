import imageTwentyOne from '../assets/images/img-21.webp';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const FithSection = () => {

  /*const  [ ref, inView ]  = useInView();
  const animation = useAnimation();

    useEffect(() => {

        if(inView) {
          animation.start({
            scale: 1,
            transition: {
              type: 'tween',
              duration:5,
            }
          })
        }
        else {
          animation.start({
            scale:1.5
          })
        }
      }, [inView]);*/

  const  [ refTwo, inViewTwo]  = useInView();
  const animationTwo = useAnimation();

  useEffect(() => {

    if(inViewTwo) {
      animationTwo.start({
        x: 0,
        transition: {
          type: 'tween',
          duration:.6,
        }
      })
    }
    else {
      animationTwo.start({
        x:-50
      })
    }
  }, [inViewTwo]);


  const  [refThree, inViewThree]  = useInView();
  const animationThree = useAnimation();

  useEffect(() => {

    if(inViewThree) {
      animationThree.start({
        x: 0,
        transition: {
          type: 'tween',
          duration:.6,
        }
      })
    }
    else {
      animationThree.start({
        x:100
      })
    }
  }, [inViewThree]);

  return ( 
    <div className='w-full h-auto lg:h-full flex-box'>
        <div className='w-full lg:w-[90%] h-auto lg:h-[80%] flex-box flex-col lg:flex-row relative translate-y-[10%]'>
          <div className='w-full lg:w-[45%] h-[400px] lg:h-[60%] opacity-100 lg:opacity-80'>
            <img className='w-full h-full fit' src={imageTwentyOne} alt="" />
          </div>
          <motion.div ref={refTwo} animate={animationTwo} className='w-auto h-auto hide lg:flex-box absolute bottom-[15%]'>
            <div className='w-[140px] h-[5px] self-end bg-white translate-y-[-3rem]'></div>
            <h1 className='text-white main-text medium-text text-shadow'>That's the way</h1>
          </motion.div>
          <div className='w-auto h-auto flex-box absolute bottom-0 hide lg:block'>
            <motion.h1 ref={refThree} animate={animationThree}className='text-[#909f9b] medium-text text-9xl text-shadow'>Aha-aha we like it</motion.h1>
          </div>
        </div>
    </div>
    );
}
 
export default FithSection;