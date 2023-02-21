import React from 'react'

const Project = () => {
  return (
    <>
    <div class="bg-gradient-to-b from-blackk to-bluee">
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