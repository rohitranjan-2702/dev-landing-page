import React from 'react'
import { ProjectCard, Skills } from '../../ui'

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-b from-black to-blue">

    <header>
        <div className="container mx-auto py-4">
          <nav className="flex justify-between">
            <a href="/" className="font-poppins font-semibold p-4 text-white text-[38px]">DEV</a>
            <ul className="flex mt-8 mr-8">
                <li><a href="/" className="px-4 py-2 font-poppins text-greyy hover:text-white" onClick={() => navigate("/")}>Home</a></li>
                <li><a href="/portfolio" className="px-4 py-2 font-poppins text-white hover:text-white " onClick={() => navigate("/portfolio")}>Portfolio</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <Skills/>
      <div className='grid grid-cols-1 sm:grid-cols-2 m-10'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      </div>

    </div>
  )
}

export default Portfolio