import { useRef, useEffect } from 'react';
import imageSix from '../assets/images/img-6.jpg';
import imageSeven from '../assets/images/img-7.jpg';
import imageEight from '../assets/images/img-8.jpg';
import imageNine from '../assets/images/img-9.jpg';
import imageTen from '../assets/images/img-10.jpg';
import imageEleven from '../assets/images/img-11.jpg';
import imageTwelve from '../assets/images/img-12.jpg';
import imageThirteen from '../assets/images/img-13.jpg';
import imageFourteen from '../assets/images/img-14.jpg';
import imageFifteen from '../assets/images/img-15.jpg';
import imageSixteen from '../assets/images/img-16.jpg';
import imageSeventeen from '../assets/images/img-17.jpg';
import imageEighteen from '../assets/images/img-18.jpg';
import imageNineteen from '../assets/images/img-19.jpg';
import imageTwenty from '../assets/images/img-20.jpg';


const FourthSection = () => {

    const boxOne = useRef(null),
            boxTwo = useRef(null),
            boxThree = useRef(null),
            textOne = useRef(null),
            textTwo = useRef(null),
            textThree = useRef(null),
            textFour = useRef(null),
            textFive = useRef(null);

    
    /* CHANGE IMAGE ONE BACKGROUND FOR textOne HOVER*/
    const changeBackgroundForTextOneHover = () => {
        boxOne.current.style.backgroundImage = `url(${imageSix})`;
        boxTwo.current.style.backgroundImage = `url(${imageSeven})`;
        boxThree.current.style.backgroundImage = `url(${imageEight})`;
        textTwo.current.style.color = '';
        textThree.current.style.color = '';
        textFour.current.style.color = '';
        textFive.current.style.color = '';
        textTwo.current.style.zIndex = '';
        textThree.current.style.zIndex = '';
        textFour.current.style.zIndex = '';
        textFive.current.style.zIndex = '';
    }

    useEffect(() => {
        textOne.current.addEventListener('mouseenter', changeBackgroundForTextOneHover);

        return () => {
        textOne.current.removeEventListener('mouseenter', changeBackgroundForTextOneHover);
        }
    }, []);

    useEffect(() => {
    textOne.current.addEventListener('mouseleave', () => {
        textOne.current.style.color = 'white';
        textOne.current.style.zIndex = '100';
    })
    }, [])


    /* CHANGE IMAGE ONE BACKGROUND FOR textTwo HOVER */
    const changeBackgroundForTextTwoHover = () => {
    boxOne.current.style.backgroundImage = `url(${imageTen})`;
    boxTwo.current.style.backgroundImage = `url(${imageNine})`;
    boxThree.current.style.backgroundImage = `url(${imageEleven})`;
    textOne.current.style.color = '';
    textThree.current.style.color = '';
    textFour.current.style.color = '';
    textFive.current.style.color = '';
    textOne.current.style.zIndex = '';
    textThree.current.style.zIndex = '';
    textFour.current.style.zIndex = '';
    textFive.current.style.zIndex = '';
    }

    useEffect(() => {
    textTwo.current.addEventListener('mouseenter', changeBackgroundForTextTwoHover);

    return () => {
        textTwo.current.removeEventListener('mouseenter', changeBackgroundForTextTwoHover);
    }
    }, [])

    useEffect(() => {
    textTwo.current.addEventListener('mouseleave', () => {
        textTwo.current.style.color = 'white';
        textTwo.current.style.zIndex = '100';
    })
    })


    /* CHANGE IMAGE ONE BACKGROUND FOR textThree HOVER */
    const changeBackgroundForTextThreeHover = () => {
    boxOne.current.style.backgroundImage = `url(${imageTwelve})`;
    boxTwo.current.style.backgroundImage = `url(${imageThirteen})`;
    boxThree.current.style.backgroundImage = `url(${imageFourteen})`;
    textOne.current.style.color = '';
    textTwo.current.style.color = '';
    textFour.current.style.color = '';
    textFive.current.style.color = '';
    textOne.current.style.zIndex = '';
    textTwo.current.style.zIndex = '';
    textFour.current.style.zIndex = '';
    textFive.current.style.zIndex = '';
    }

    useEffect(() => {
    textThree.current.addEventListener('mouseenter', changeBackgroundForTextThreeHover);

    return () => {
        textThree.current.removeEventListener('mouseenter', changeBackgroundForTextThreeHover);
    }
    }, [])

    useEffect(() => {
    textThree.current.addEventListener('mouseleave', () => {
        textThree.current.style.color = 'white';
        textThree.current.style.zIndex = '100';
    })
    }, [])

    /* CHANGE IMAGE ONE BACKGROUND FOR textFour HOVER */
    const changeBackgroundForTextFourHover = () => {
    boxOne.current.style.backgroundImage = `url(${imageFifteen})`;
    boxTwo.current.style.backgroundImage = `url(${imageSixteen})`;
    boxThree.current.style.backgroundImage = `url(${imageSeventeen})`;
    textOne.current.style.color = '';
    textTwo.current.style.color = '';
    textThree.current.style.color = '';
    textFive.current.style.color = '';
    textOne.current.style.zIndex = '';
    textTwo.current.style.zIndex = '';
    textThree.current.style.zIndex = '';
    textFive.current.style.zIndex = '';
    }

    useEffect(() => {
    textFour.current.addEventListener('mouseenter', changeBackgroundForTextFourHover);

    return () => {
        textFour.current.removeEventListener('mouseenter', changeBackgroundForTextFourHover);
    }
    }, [])

    useEffect(() => {
    textFour.current.addEventListener('mouseleave', () => {
        textFour.current.style.color = 'white';
        textFour.current.style.zIndex = '300';
    })
    }, [])

    /* CHANGE IMAGE ONE BACKGROUND FOR textFive HOVER */
    const changeBackgroundForTextFiveHover = () => {
    boxOne.current.style.backgroundImage = `url(${imageEighteen})`;
    boxTwo.current.style.backgroundImage = `url(${imageNineteen})`;
    boxThree.current.style.backgroundImage = `url(${imageTwenty})`;
    textOne.current.style.color = '';
    textTwo.current.style.color = '';
    textThree.current.style.color = '';
    textFour.current.style.color = '';
    textOne.current.style.zIndex = '';
    textTwo.current.style.zIndex = '';
    textThree.current.style.zIndex = '';
    textFour.current.style.zIndex = '';
    }

    useEffect(() => {
    textFive.current.addEventListener('mouseenter', changeBackgroundForTextFiveHover);

    return () => {
        textFive.current.removeEventListener('mouseenter', changeBackgroundForTextFiveHover);
    }
    }, [])

    useEffect(() => {
    textFive.current.addEventListener('mouseleave', () => {
        textFive.current.style.color = 'white';
        textFive.current.style.zIndex = '100';
    })
    }, [])

return ( 
    <div className='w-full h-full translate-y-0 md:translate-y-[-10%] lg:translate-y-[20%] relative'>
        <div className='w-[90%] h-full relative flex flex-col lg:flex-row center'>
          <div className='w-full lg:w-[30%] h-full flex-box relative'>
            <a className='text-7xl md:text-8xl lg:medium-text text-[#909f9b] rotate-0 lg:rotate-[-90deg] origin static lg:absolute lg:bottom-0 left-0 lg:left-[60%] cursor-pointer hover:z-[100]' ref={textOne}>
              <span className='relative block fill-up' data-text='Ringba'>Ringba</span>
            </a>
          </div>
          <div className='w-full lg:w-[13.3333%] h-full flex-box relative'>
            <a className='text-7xl md:text-8xl lg:medium-text text-[#909f9b] rotate-0 lg:rotate-[-90deg] origin static lg:absolute lg:bottom-0 left-0 lg:left-[80%] whitespace-nowrap cursor-pointer hover:z-[100]' ref={textTwo}>
              <span className='relative block fill-up' data-text='M-Acquire'>M-Acquire</span>
            </a>
          </div>
          <div className='w-full lg:w-[13.3333%] h-full flex-box relative'>
            <a className='text-7xl md:text-8xl lg:medium-text text-[#909f9b] rotate-0 lg:rotate-[-90deg] origin static lg:absolute lg:bottom-0 left-0 lg:left-[85%] cursor-pointer hover:z-[100]'>
              <span className='relative block fill-up' data-text='Maslo' ref={textThree}>Maslo</span>
            </a>
          </div>
          <div className='w-full lg:w-[13.3333%] h-full flex-box relative'>
            <a className='text-7xl md:text-8xl lg:medium-text text-[#909f9b] rotate-0 lg:rotate-[-90deg] origin static lg:absolute lg:bottom-0 left-0 lg:left-[95%] cursor-pointer hover:z-[100]'>
              <span className='relative block fill-up' data-text='Windmills' ref={textFour}>Windmills</span>
            </a>
          </div>
          <div className='w-full lg:w-[30%] h-full flex-box relative'>
            <a className='text-7xl md:text-8xl lg:medium-text text-[#909f9b] rotate-0 lg:rotate-[-90deg] origin static lg:absolute lg:bottom-0 left-0 lg:left-[90%] cursor-pointer hover:z-[100]'>
              <span className='relative block fill-up' data-text = 'Altruus' ref={textFive}>Altruus</span>
            </a>
          </div>
        </div>
        <div className='w-full h-full absolute top-0 left-0 pointer-events-none hide lg:block'>
          <div className='w-[45%] h-[55%] absolute top-[10%] left-0'>
            <div className='w-full h-full background-img background-default' ref={boxOne}></div>
          </div>
          <div className='w-[40%] h-[50%] absolute top-0 right-0'>
            <div className='w-full h-full background-img background-defaultTwo' ref={boxTwo}></div>
          </div>
          <div className='w-[25%] h-[35%] absolute bottom-[7%] right-0'>
            <div className='w-full h-full background-img background-defaultThree' ref={boxThree}></div>
          </div>
        </div>
    </div>
    );
}
 
export default FourthSection;