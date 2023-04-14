const Header = ({ openMenu }) => {

    return ( 
        <>
            <header className="w-full h-[10%] flex justify-around items-center">
                <span className='text-white text-xl md:text-2xl main-font text-shadow'>DSGN</span>
                <div className="w-[50%] h-full flex items-center justify-end">
                    <div className="w-[10%] h-[50%] flex flex-col justify-center items-start" onClick={ openMenu }>
                        <div className="w-[30px] h-[2px] bg-white"></div>
                        <div className="w-[20px] h-[2px] bg-white mt-[5px]"></div>
                    </div>
                </div>
            </header>
        </>
     );
}
 
export default Header;