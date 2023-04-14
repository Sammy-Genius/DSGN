import imageThree from '../assets/images/img-3.jpg';
import imageFive from '../assets/images/img-5.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ThirdSection = () => {

  //ANIMATION FOR UNDERSTAND TEXT
  const  [ ref, inView ]  = useInView();
  const animation = useAnimation();

    useEffect(() => {

        if(inView) {
          animation.start({
            x: -200,
            transition: {
              type: 'tween',
              duration:5,
            }
          })
        }
        else {
          animation.start({
            x:600
          })
        }
      }, [inView]);

  //ANIMATION FOR 'WE WANT TO' TEXT
  const  [ refTwo, inViewTwo]  = useInView();
  const animationTwo = useAnimation();

  useEffect(() => {

    if(inViewTwo) {
      animationTwo.start({
        x: 0,
        transition: {
          type: 'tween',
          duration:.8,
        }
      })
    }
    else {
      animationTwo.start({
        x:-50
      })
    }
  }, [inViewTwo]);

  //ANIMATION FOR 'TO UNDERSTAND' TEXT
  const  [refThree, inViewThree]  = useInView();
  const animationThree = useAnimation();

  useEffect(() => {

    if(inViewThree) {
      animationThree.start({
        x: 0,
        transition: {
          type: 'tween',
          duration:.8,
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
    <div className='section-three flex flex-col lg:flex-row relative'>
        <div className='w-full lg:w-[50%] h-full lg:h-full flex flex-col lg:flex-row md:justify-end lg:justify-start items-center'>
          <h1 className='block md:hide text-white text-5xl text-center main-font my-[50px]'>We want to <br /> Understand <br /> <span className='text-[#4f6158]'>& Collaborate</span> </h1>
          <div className='w-full lg:w-[80%] h-[400px] md:h-[500px] lg:h-[50%] translate-y-0 md:translate-y-[-25%] lg:translate-y-[-20%] mb-[50px] lg:mb-0 about-circle'>
            <img className='w-full h-full fit' src={imageThree} alt="" />
          </div>
        </div>
        <div className='w-full lg:w-[50%] h-full flex items-start lg:items-end'>
          <div className='w-full h-auto lg:h-[60%]'>
            <div className='w-[90%] lg:w-[70%] h-auto center'>
              <h2 className='text-[#909f9b] text-5xl sub-font text-center lg:text-justify'>Cut us, and we bleed</h2>
              <p className='text-[#4f6158] text-xl sub-font block w-full md:w-[80%] my-[20px] md:my-[30px] md:mx-auto lg:my-[30px] lg:m-0 text-center lg:text-justify md:text-xl leading-[30px]'>We proudly stand with our heads in the midst of today's reality that is oversatuated with templated solutions. One foot on over-expending plains of experience, taking a step into the depths of the unkown with the other.</p>
              <a className='text-2xl text-[#909f9b] text-dec lg:text-justify' href=""><h2 className='text-center lg:text-justify'>Look closer at DSGN</h2></a>
            </div>
            <div className='w-full lg:w-[85%] h-[500px] lg:h-[40%] mt-[100px] lg:mt-[60px] flex-box relative'>
              <img className="w-full md:w-[70%] lg:w-full h-[60%] lg:h-full fit" src={imageFive} alt="" />
              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-around lg:hide'>
                <h1 className='transparent-deepInk text-9xl md:large-text self-end whitespace-nowrap text-[#ff9a90] main-font translate-y-[-45%]'>Unders</h1>
                <h1 className='transparent-deepInk text-9xl md:large-text whitespace-nowrap text-[#ff9a90] main-font'>tanding</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[12%] lg:h-[25%] absolute md:top-[5%] lg:top-0 left-0 hide md:block'>
          <div className='w-full h-[33.33333%] flex justify-between'>
            <div className='w-[43%] lg:w-[57%]'></div>
              <motion.div ref={refTwo} animate={animationTwo} className='w-[57%] lg:w-[43%] flex items-center translate-x-0'>
                <div className=' w-[80px] lg:w-[130px] h-[5px] bg-white'></div>
                <h1 className='text-white semi-xl lg:text-9xl whitespace-nowrap main-font text-shadow'>We want</h1>
              </motion.div>
            </div>
          <div className='w-full h-[33.33333%] flex items-center justify-between text-shadow'>
            <motion.div ref={refThree} animate={animationThree} className='w-[43%] lg:w-[57%] translate-x-0'>
              <h1 className='text-white semi-xl lg:text-9xl translate-x-[-27%] lg:translate-x-[-5%] main-font text-shadow '>stand</h1>
            </motion.div>
            <motion.div ref={refThree} animate={animationThree} className='w-[57%] lg:w-[43%] translate-x-0'>
              <h1 className='text-white semi-xl lg:text-9xl whitespace-nowrap main-font text-shadow'>To understand</h1>
            </motion.div>
          </div>
          <div className='w-full h-[33.33333%] flex items-center justify-between'>
            <motion.div ref={refTwo} animate={animationTwo} className='w-[43%] lg:w-[57%] trasnlate-x-0'>
                <h1 className='text-white semi-xl lg:text-9xl translate-x-[-5%] main-font text-shadow'>borate</h1>
            </motion.div>
            <motion.div ref={refTwo} animate={animationTwo} className='w-[57%] lg:w-[43%] translate-x-0'>
                <h1 className='semi-xl lg:text-9xl text-[#4f6158] whitespace-nowrap main-font text-shadow'>And Collaborate</h1>
            </motion.div>
          </div>
        </div>
        <motion.div ref={ref} animate={animation} className='absolute bottom-[-10%] right-[-30%] w-[100%] h-[30%] translate-x-0 hide lg:block'>
          <h1 className='huge-text sub-font transparent-deepInk text-[#ff9a90] absolute z-20'>Understanding</h1>
          <h1 className='huge-text sub-font transparent-deepInk text-[#000000] absolute top-[8%] translate-x-[-1%] opacity-[0.18] '>Understanding</h1>
        </motion.div>
    </div>
    );
}
 
export default ThirdSection;