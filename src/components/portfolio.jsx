import React from 'react'
import ProjectCard from './projectCard'
import Skills from './skills'

const Project = () => {
  return (
    <>
    <div class="bg-gradient-to-b from-blackk to-bluee">

    <header>
        <div class="container mx-auto py-4">
          <nav class="flex justify-between">
            <a href="/" class="font-poppins font-semibold p-4 text-white text-[38px]">DEV</a>
            <ul class="flex mt-8 mr-8">
                <li><a href="/" class="px-4 py-2 font-poppins text-greyy hover:text-white" onClick={() => navigate("/")}>Home</a></li>
                <li><a href="/portfolio" class="px-4 py-2 font-poppins text-white hover:text-white " onClick={() => navigate("/portfolio")}>Portfolio</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <Skills/>
      <div class='grid grid-cols-1 sm:grid-cols-2 mx-10'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      </div>

    </div>
      </>
  )
}

export default Project