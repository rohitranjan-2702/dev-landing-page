import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Language from './Language';

const projectCard = ({ project, loading }) => {

  const [ langs, setLangs ] = useState([]);

  // Fetch the languages that are used
  useEffect(() => {

    if (!loading) {

      const languages = JSON.parse(localStorage.getItem(project.id));
      
      const fetchLanguages = async () => {
        const data = await axios.get(project.languages_url);
        localStorage.setItem(project.id, JSON.stringify(data.data));
        setLangs(data.data);
      }
  
      // Check the `localStorage` 
      if (languages) {
        setLangs(languages);
      } else {
        fetchLanguages();
      }
  
    }

  }, [loading])

  return (
    <>
  
  <div className="m-4 rounded-xl border border-white bg-gradient-to-r from-slate-800 to-slate-900 p-2">
    <div className="m-2 text-2xl text-white">
      {project.full_name}
    </div>
    <div className="m-2 text-white font-light">{project.description}</div>

    <div className="flex h-auto w-auto flex-wrap items-start justify-start">
          {langs && Object.keys(langs).map((lang,i) => <Language lang={lang} key={i}/>)}
    </div>

    <div className="mt-2 flex justify-end rounded-xl">
      <div className="m-2 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-700 text-white transition delay-150 ease-in-out hover:scale-110 hover:border hover:border-white">        
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-code h-[26px]" viewBox="0 0 16 16">
          <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
        </svg>
      </div>
      <div className="m-2 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-600 text-white transition delay-150 ease-in-out hover:scale-110 hover:border hover:border-white">
          <a href={project.html_url} target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-link-45deg h-[30px]" viewBox="0 0 16 16">
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
            </svg>
          </a>
      </div>
    </div>
  </div>


    </>
  )
}

export default projectCard