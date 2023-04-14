import imageOne from '../assets/images/img-1.jpg';
import imageTwo from '../assets/images/img-2.jpg';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Power4 } from 'gsap';

const FirstSection = () => {
   
  const youRef = useRef(null),
        exRef = useRef(null),
        imgBoxRef = useRef(null),
        imgRef = useRef(null)

  useEffect(() => {
    
    const tl = gsap.timeline();

    setTimeout(() => {
        tl.to(youRef.current, {x:0, duration:1, ease:Power4.easeInOut},'-=3')
          .to(exRef.current, {x:0, duration:1, ease:Power4.easeInOut},'-=3')
          .to(imgBoxRef.current, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration:1, ease:Power4.easeInOut},'-=2')
          .to(imgRef.current, {scale:1, duration:1, ease:Power4.easeInOut},'-=1')
    }, 6200);
  }, [])

  return ( 
    <div className="md:calc-height flex relative flex-col-reverse md:flex-col items-center lg:flex-row lg:mt-0">
        <div className="w-full lg:w-[50%] h-full flex items-center lg:items-end mt-[30px] md:mt-[100px] lg:mt-0">
          <div className="w-full lg:h-[80%] rectClip" ref={imgBoxRef}>
            <img className='w-full h-full img scale-[1.5] ' src={imageOne} alt="dsgn animations replica" ref={imgRef}/>
          </div>
        </div>
        <div className="w-[90%] lg:w-[35%] h-full flex items-center lg:items-end justify-center">
          <div className="w-[90%] h-[50%] flex flex-col items-center justify-center md:mt-[30px] lg:mt-0">
            <h1 className='text-white text-5xl text-center main-font md:hide'><span className="text-[#ff9a90] transparent hide md:block">&#9654;</span> You create</h1>
            <h1 className='text-[#ff9a90] transparent text-5xl text-center main-font md:hide fill'>Experiences</h1>
            <h1 className="text-white text-2xl sub-font hide md:block"> <span className="text-[#ff9a90]">&#9654;</span> Watch Showreel</h1>
            <p className="mt-[20px] block w-full lg:w-[80%] text-center lg:text-justify text-[#4f6158] leading-[30px] sub-font text-xl lg:text-base">DSGN is a digital design and development studio. We create unconventional websites and apps with cool custom graphics, videos photos and animations.</p>
          </div>
        </div>
        <div className="w-[15%] h-full flex items-end justify-end">
          <div className="w-[40%] h-[80%] hide lg:block">
            <img className='w-full h-full img' src={imageTwo} alt="dsgn animations replica"/>
          </div>
        </div>
        <div className="w-full h-full absolute left-0 top-0 z-[200] hide md:block">
          <div className="w-[80%] h-[50%] translate-y-[-15px] lg:translate-y-[40px] center">
            <h1 className="text-white md:text-7xl lg:text-9xl text-shadow main-font translate-x-[100px]" ref={youRef}>You Create</h1>
            <div className="flex items-center justify-center translate-x-[-100px]" ref={exRef}>
              <span className="md:w-[50px] lg:w-[150px] h-[5px] bg-white"></span>
              <h1 className="text-white ml-[80px] md:text-7xl lg:text-9xl text-shadow main-font">Experiences</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute left-0 top-0">
          <div className='w-[80%] h-[50%] translate-y-[40px] center flex justify-end items-end'>
            <h1 className='text-[#ff9a90] sub-font transparent opacity-10 lg:opacity-20 large-text'>DSGN</h1>
          </div>
        </div>
      </div>
     );
}
 
export default FirstSection;