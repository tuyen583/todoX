import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="404_NotFound.png" alt="404 Not Found" className="max-w-full mb-6 w-96" />
      <p className ="text-xl font-semibold ">Bạn đang đi vào một trang không tồn tại.</p>
      <a href="/" className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark">Quay lại trang chủ</a>
    </div>

  )   
}

export default NotFound