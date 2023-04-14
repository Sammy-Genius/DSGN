import imageTwentyTwo from '../assets/images/img-22.png';

const SixthSection = () => {
return ( 
      <div className='w-full h-auto lg:h-full flex relative'>
        <div className='w-[30%] h-full hide lg:flex items-center justify-start'>
          <div className='w-[40%] h-[50%]'>
            <img className='w-full h-full fit' src={imageTwentyTwo} alt="" />
          </div>
        </div>
        <div className='w-full lg:w-[70%] h-full flex items-start lg:items-center justify-center lg:justify-start'>
          <div className='w-[80%] lg:w-[60%] h-auto lg:h-[70%] flex flex-col justify-start lg:justify-around items-start mt-[7rem] lg:mt-0'>
            <div className='w-full flex flex-col items-center lg:hide'>
              <h3 className='text-4xl main-text text-white'>That's the way</h3>
              <h3 className='text-4xl main-text text-[#909f9b]'>Aha-aha we like it</h3>
            </div>
            <p className=' text-xl md:text-2xl lg:text-4xl text-[#4f6158] text-center lg:text-justify mt-[10%] leading-[30px]'>We dare to be different. To spark an emotion in the hearts of people interacting with what we create. We experiment. We innovate. We bring things into being. <br /> Check this out!</p>
            <h3 className='text-white text-4xl relative mt-[60px] fill-up-two self-center lg:self-start hover:text-[#ff9a90]'>
              <a href="">Games we play</a>
            </h3>
          </div>
        </div>
      </div>
    );
}
 
export default SixthSection;