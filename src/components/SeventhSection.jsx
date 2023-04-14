import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const SeventhSection = () => {

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
    <div className='w-full h-full flex justify-center items-center lg:items-end relative'>
        <div className='w-[85%] h-[90%] md:h-[70%] flex flex-col items-center justify-evenly py-[10%] lg:py-0 md:justify-around px-[10%] md:px-[15%] bg-[#4f6158]'>
          <div className='w-full h-[30%] block md:hide'>
            <h1 className='text-white text-4xl main-font'>Need more?</h1>
            <h1 className='text-[#909f9b] text-4xl main-font mt-[10px]'>Get the</h1>
            <h1 className='text-[#909f9b] text-4xl main-font mt-[10px]'>newsletter</h1>
          </div>
          <p className='text-xl md:text-2xl lg:text-3xl text-white mt-[10%]'>We've got everything you asked for: dope tunes, good reads, sweet art and mind-blowing designs. Delivered twice a month. Get the next one. You'll love it.</p>
          <div className='w-full h-[20%] flex-box white-bottom input-container relative'>
            <div className='w-[90%] h-full flex justify-between items-center input-box'>
              <input className='input text-2xl md:text-4xl' type="text" placeholder='Type your email'/>
                <span className='text-white text-2xl md:text-3xl lg:text-6xl arrow'>&#8594;</span>
            </div>
            <div className='absolute w-full h-[2.5px] bottom-0 left-0 bg-white bottom-line'>
              <div className='inner-line'></div>
            </div>
          </div>
        </div>
        <div className='w-full h-[20%] lg:h-[40%] absolute top-[5%] lg:top-0 left-0 hide md:block'>
          <motion.div ref={refTwo} animate={animationTwo} className='w-full h-[50%] flex-box'>
            <div className='w-[120px] h-[5px] bg-white mx-[20px]'></div>
            <h1 className='text-7xl lg:text-9xl text-white main-font text-shadow'>Need more?</h1>
          </motion.div>
          <div className='w-full h-[50%] flex'>
            <motion.div ref={refThree} animate={animationThree} className='w-[20%] flex items-center justify-start'>
              <h1 className='text-7xl lg:text-9xl text-[#909f9b] main-font text-shadow'>ter</h1>
            </motion.div>
            <motion.div ref={refThree} animate={animationThree} className='w-[80%] flex items-center justify-end'>
              <h1 className=' text-7xl lg:text-9xl text-[#909f9b] main-font text-shadow'>Get the newslet</h1>
            </motion.div>
          </div>
        </div>
    </div>
    );
}
 
export default SeventhSection;