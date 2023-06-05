import React, { useEffect, useState } from 'react'
import ProjectCard from './projectCard'
import Skills from './skills'
import { links } from '../data'
import axios from 'axios'

const Project = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Check if the `links` has a github url
    let gh = links.filter(link => link.name === 'github')[0];

    if (!gh) {
      console.log("Github link not found!!!");
    }

    // Extract Github username
    let splitURL = gh.url.split('/');
    let username = splitURL[splitURL.length - 1].trim();

    // Function to fetch all the repos
    const fetchRepos = async () => {
      const data = await axios.get(`https://api.github.com/users/${username}/repos`);
      const repos = data.data;
      setProjects(repos);
      setLoading(false);
      localStorage.setItem('repos', JSON.stringify(repos));
    }

    // Check if the data is cached in local storage
    if (localStorage.getItem('repos')) {
      console.log("[loaded from localStorage]")
      const cachedData = JSON.parse(localStorage.getItem('repos'));
      setProjects(cachedData);
      setLoading(false);
    } else {
      console.log("[loading fresh data]")
      fetchRepos();
    }

  }, []);

  return (
    <>
    <div className="bg-gradient-to-b from-blackk to-bluee">

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
      <div className='grid grid-cols-1 sm:grid-cols-2 mx-10'>
        {projects && projects.map(project => <ProjectCard project={project} key={project.id} loading={loading} />)}
      </div>

    </div>
      </>
  )
}

export default Project