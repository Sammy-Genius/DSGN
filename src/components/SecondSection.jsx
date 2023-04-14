import dart from '../assets/images/dart.png';
import waveLines from '../assets/images/wave-lines.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const SecondSection = () => {

  const  [ ref, inView ]  = useInView();
  const animation = useAnimation();
  const mobileScreen = window.matchMedia("(max-width: 760px)");
  const DesktopScreen = window.matchMedia("(min-width: 1200px)");
  const TabletScreen = window.matchMedia("(min-width: 768px) and (max-width: 1180px)");

    useEffect(() => {

        if(inView && DesktopScreen.matches) {
          animation.start({
            y: '33%',
            x:0,
            transition: {
              type: 'spring',
              duration:.5,
            }
          })
        }
        else if(inView && mobileScreen.matches) {
          animation.start({
            y: '8%',
            x:'-25%',
            transition: {
              type: 'spring',
              duration:.5,
            }
          })
        }
        else if(inView && TabletScreen.matches) {
          animation.start({
            y: '20%',
            x:'-5%',
            transition: {
              type: 'spring',
              duration:.5,
            }
          })
        }
        else {
          animation.start({
            y:300,
            x:-30
          })
        }
      }, [inView]);
      

  const  [ refTwo, inViewTwo]  = useInView();
  const animationTwo = useAnimation();

  useEffect(() => {

    if(inViewTwo) {
      animationTwo.start({
        opacity: 1,
        transition: {
          type: 'tween',
          duration:.2,
          delay:.4,
          staggerChildren:.6
        }
      })
    }
    else {
      animationTwo.start({
        opacity:0
      })
    }
  }, [inViewTwo]);

  return ( 
    <div className='w-full h-full flex pt-10 md:pt-0 md:pb-[50px] relative'>
        <div className='w-full md:w-[90%] h-full flex z-20'>
          <div className='w-[70%]'>
            <div className='h-[50%] b-right b-bottom relative'>
              <p className='text-white text-2xl md:text-3xl sub-font absolute top-[25%] right-[-15%] md:right-[-5%] rotate-[-90deg]'>Subjectivity</p>
              <p className='text-white text-2xl md:text-3xl sub-font absolute bottom-[5%] left-[15%]'>Design</p>
            </div>
            <div className='h-[50%] b-right relative flex-box'>
              <p className='text-white text-2xl md:text-3xl sub-font absolute bottom-[25%] right-[-14%] md:right-[-5%] rotate-[-90deg]'>Objectivity</p>
              <motion.div ref={refTwo} animate={animationTwo} className='w-[70%] h-[70%] flex-box relative'>
                <motion.div ref={ref} animate={animation} className='w-[90%] md:w-[70%] lg:w-[45%] rotate-[2deg] translate-x-[-15%] translate-y-[-30%]  md:translate-y-[20%] lg:translate-x-0 lg:translate-y-[30%] z-20'>
                  <img className='w-full h-full' src={dart} alt="dart clone image objectivity" />
                </motion.div>
                <div className='w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full absolute top-[3%] md:top-[14%] right-[-5%] lg:top-[1%] lg:right-[14%] rounded-border flex-box'>
                  <div className='w-[80%] h-[80%] rounded-full rounded-border flex-box'>
                    <div className='w-[60%] h-[60%] rounded-full rounded-border flex-box'>
                      <div className='w-[60%] h-[60%] rounded-full rounded-border flex-box'>
                        <div className='w-[50%] h-[50%] rounded-full rounded-border'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='h-[50%] b-bottom box-two'>
              <p className='text-white text-2xl md:text-3xl sub-font absolute bottom-[5%] right-[15%] md:right-[5%] sub-font'>Art</p>
            </div>
            <div className='h-[50%] box-four'></div>
          </div>
        </div>
        <div className='w-full h-full absolute top-0 left-0 lg:opacity-50'>
          <img className='w-full h-full fit' src={waveLines} alt="" />
        </div>
    </div>
    );
}
 
export default SecondSection;