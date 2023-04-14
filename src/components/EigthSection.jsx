import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const EigthSection = () => {

  const  [ ref, inView ]  = useInView();
  const animation = useAnimation();

    useEffect(() => {

        if(inView) {
          animation.start({
            clipPath: ' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: {
              type: 'tween',
              duration:1,
              staggerChildren:.8
            }
          })
        }
        else {
          animation.start({
            clipPath:'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
          })
        }
      }, [inView]);


    return ( 
        <div className='w-full h-full flex-box'>
            <div className='w-[90%] lg:w-[80%] h-[90%] px-[8%] pt-[5%] flex flex-col items-start justify-around lg:justify-between'>
                <motion.div ref={ref} animate={animation} className='w-full h-[80%]'>
                    <p className='text-3xl md:text-5xl lg:text-6xl text-[#4f6158] tracking-[3px]'>Thank you for letting us</p>
                    <p className='text-3xl md:text-5xl lg:text-6xl text-[#4f6158] tracking-[3px] mt-[20px] md:mt-[25px]'>introduce ourselves. If you</p>
                    <p className='text-3xl md:text-5xl lg:text-6xl text-[#4f6158] tracking-[3px] mt-[20px] md:mt-[25px]'>are looking for a partner in</p>
                    <p className='text-3xl md:text-5xl lg:text-6xl text-[#4f6158] tracking-[3px] mt-[20px] md:mt-[25px]'>design or development, we'll</p>
                    <p className='text-3xl md:text-5xl lg:text-6xl text-[#4f6158] tracking-[3px] mt-[20px] md:mt-[25px]'>be happy to be the one.</p>
                </motion.div>
                <div className='w-full mt-[-30%] lg:mt-0 h-auto'>
                    <a className='text-3xl md:text-4xl lg:text-6xl text-white tracking-[3px] fill-up-two relative hover:text-[#ff9a90]' href="">Let's connect.</a>
                </div>
            </div>
        </div>
     );
}
 
export default EigthSection;