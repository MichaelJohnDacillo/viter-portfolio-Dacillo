import React from 'react'

const PageNotFound = () => {
  return (
    <>
        <div className="container mx-auto p-4 justify-items-center">
          <div className="flex flex-col text-center items-center bg-blue-100 py-44  rounded-xl shadow-lg mt-44 hover:shadow-2xl hover:bg-blue-200 transitin-all duration-200
          lg:w-[50rem]">
            <h1 className='text-red-700 font-bold text-9xl'>404</h1>
            <p className='text-4xl mb-10'>Oops... Page Not Found!</p>
            <p className='text-2xl mb-5'>Or Page Not Done Yet!!!</p>
          </div>
        </div>
        
    </>
  );
};

export default PageNotFound;