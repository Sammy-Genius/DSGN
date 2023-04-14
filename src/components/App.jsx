import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Power4 } from 'gsap';
import Header from './Header';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FithSection from './FifthSection';
import SixthSection from './SixthSection';
import SeventhSection from './SeventhSection';
import EigthSection from './EigthSection';
import Menu from './Menu';


function App() {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  const lineRef = useRef(null),
        leftRef = useRef(null),
        rightRef = useRef(null),
        rightLineRef = useRef(null),
        leftLineRef = useRef(null),
        textOneRef = useRef(null),
        textTwoRef = useRef(null),
        textThreeRef = useRef(null),
        dsRef = useRef(null),
        gnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(textOneRef.current, {opacity:1, scale:1, duration:.35, ease: Power4.easeInOut})
      .to(textOneRef.current, {opacity:0, scale:0, duration:.35, ease: Power4.easeInOut})
      .to(textTwoRef.current, {opacity:1, scale:1, duration:.35, ease: Power4.easeInOut})
      .to(textTwoRef.current, {opacity:0, scale:0, duration:.35, ease: Power4.easeInOut})
      .to(textThreeRef.current, {opacity:1, scale:1, duration:.35, ease: Power4.easeInOut})
      .to(textThreeRef.current, {opacity:0, scale:0, duration:.35, ease: Power4.easeInOut})
      .to(dsRef.current, {opacity:1, clipPath:'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)', duration:1.5, ease: Power4.easeInOut})
      .to(gnRef.current, {opacity:1, clipPath:'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)', duration:1.5, ease: Power4.easeInOut}, '-=1.5')
      .to(lineRef.current, {height:'100%', duration:2.5, ease: Power4.easeInOut})
      .to(lineRef.current, {opacity:0, duration:.5, ease: Power4.easeInOut}, '-=.4')
      .to(rightLineRef.current, {opacity:1, duration:.5}, '-=.5')
      .to(leftLineRef.current, {opacity:1, duration:.5}, '-=.5')
      .to(leftRef.current, {clipPath:'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', duration:1, ease: Power4.easeInOut})
      .to(rightRef.current, {clipPath:'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', duration:1, ease: Power4.easeInOut}, '-=1')
      .to(dsRef.current, {x:-1000, duration:1, ease: Power4.easeInOut}, '-=1')
      .to(gnRef.current, {x:1000, duration:1, ease: Power4.easeInOut}, '-=1')
  }, []);


  const cursorRef = useRef(null),
        cursorTwoRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursorRef.current.style.cssText = cursorTwoRef.current.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    } )
  }, []);

  return (
    <div className="App">
      <Header isMenuOpened = { isMenuOpened } openMenu = { openMenu }/>
      <FirstSection/>
      {/* SECOND SECTION OF WEB PAGE */}
      <SecondSection/>
      {/* THIRD SECTION OF WEB PAGE */}
      <ThirdSection/>
      {/* FOURTH SECTION OF PAGE */}
      <FourthSection/>
      {/* FIFTH SECTION OF PAGE */}
      <FithSection/>
      {/* SIXTH SECTION OF PAGE */}
      <SixthSection/>
      {/* SEVENTH SECTION OF PAGE */}
      <SeventhSection/>
      {/* EIGTH SECTION OF PAGE */}
      <EigthSection/>

      {/* HAMBURGER MENU */}
      <Menu isMenuOpened = { isMenuOpened } openMenu = { openMenu } />

      {/* PPRELOADER */}
      <div className='w-full h-full absolute top-0 left-0 z-[500] pointer-events-none flex'>
        <div className='w-[50%] h-full bg-black flex justify-end move' ref={leftRef}>
          <div className='w-[2px] h-full bg-[#ff9a90] opacity-0' ref={leftLineRef}></div>
        </div>
        <div className='w-[50%] h-full bg-black move flex justify-start' ref={rightRef}>
          <div className='w-[2px] h-full bg-[#ff9a90] opacity-0' ref={rightLineRef}></div>
        </div>
        <div className='w-full h-full absolute top-0 left-0 flex-box'>
          <div className='w-[2.2px] h-0 bg-[#ff9a90]'ref={lineRef}></div>
        </div>
        <div className='w-full h-full absolute top-0 left-0 flex-box'>
          <p className='text-white text-3xl md:text-4xl absolute opacity-0 scale-0 tracking-[5px] uppercase' ref={textOneRef}>Let</p>
          <p className='text-white text-3xl md:text-4xl absolute opacity-0 scale-0 tracking-[5px] uppercase' ref={textTwoRef}>there be</p>
          <p className='text-white text-3xl md:text-4xl absolute opacity-0 scale-0 tracking-[5px] uppercase' ref={textThreeRef}>Light</p>
        </div>
        <div className='w-full h-full absolute top-0 left-0 flex-box overflow-hidden'>
          <h1 className='text-[#ff9a90] sub-font transparent opacity-10 large-text tracking-[3px] clip-circle' ref={dsRef}>DS</h1>
          <h1 className='text-[#ff9a90] sub-font transparent opacity-10 large-text tracking-[3px] clip-circle' ref={gnRef}>GN</h1>
        </div>
      </div>

      {/* MOUSE CUSTOM CURSOR */}
      <div className='cursor hide lg:block' ref={cursorRef}></div>
      <div className='cursor-two hide lg:block' ref={cursorTwoRef}></div>
    </div>
  )
}

export default App;