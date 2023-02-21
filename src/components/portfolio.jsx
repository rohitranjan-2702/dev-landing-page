import React from 'react'

const Project = () => {
  return (
    <>
    <div class="bg-gradient-to-b from-blackk to-bluee">

    <header>
        <div class="container mx-auto py-4">
          <nav class="flex justify-between">
            <a href="#" class="font-poppins font-semibold p-4 text-white text-[38px]">JD</a>
            <ul class="flex mt-8 mr-8">
                <li><a href="/" class="px-4 py-2 font-poppins text-greyy hover:text-white">Home</a></li>
                <li><a href="/portfolio" class="px-4 py-2 font-poppins text-white hover:text-white">Portfolio</a></li>
            </ul>
          </nav>
        </div>
      </header>


      <div class="flex h-screen items-center justify-center bg-gray-800">
        <div class="flex items-start  h-[200px] w-[600px] rounded-2xl border border-gray-400 bg-gray-600" >
          <div class="h-[35px] w-[100px] bg-slate-400 m-4 p-2 rounded-full flex items-center justify-center border" id="html">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" class="h-[20px] mr-2 "/>
            <span class="text-lg ">HTML</span>
          </div>
          <div class="h-[35px] w-[85px] bg-slate-400 m-4 p-2 ml-1 rounded-full flex items-center justify-center border" id="css">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" class="h-[20px] mr-2 "/>
            <span class="text-lg ">CSS</span>
          </div>
        </div>
      </div>
    </div>
      </>
  )
}

export default Project