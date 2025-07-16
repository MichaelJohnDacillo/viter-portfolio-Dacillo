import React from 'react'

const Header = () => {
  return (
    <>
        {/* Header */}
            <nav className='bg-[#F1CCC2] shadow-md py-2 px-2 sticky top-0 z-50 flex justify-center'>
                <div className='bg-[#3E7D7B] w-[120rem]'>
                    <div className='max-w-6xl mx-auto flex justify-between items-center py-4 text-white'>
                        <span className='font-bold text-2xl'>MichaelJohnDacillo</span>
                        <div className='flex gap-8 font-semibold '>
                            <a href="" className='hover:text-[#F1CCC2]'>Home</a>
                            <a href="#about" className='hover:text-[#F1CCC2]'>About Me</a>
                            <a href="#projects" className='hover:text-[#F1CCC2]'>Projects</a>
                    </div>
                    </div>
                </div>
            </nav>
    </>
  );
};

export default Header;