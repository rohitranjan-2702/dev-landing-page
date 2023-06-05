import React from 'react'

const Language = ({ lang }) => {
    
    const iconName = () => {
        switch(lang.toLowerCase()) {
            case "html":
                return "html5";
            case "css":
                return "css3";
            case "dockerfile":
                return "docker";
            case "ejs":
                return "nodejs";
            case "shell":
                return "bash";
            default:
                return lang.toLowerCase();
        }
    }

  return (
    <div className="flex h-auto w-auto flex-wrap items-start justify-start">
            <div
              className="m-4 ml-2 mr-2 flex h-[35px] items-center justify-center rounded-full border bg-slate-400 p-2"
              id="html"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName()}/${iconName()}-original.svg`}
                alt=""
                className="mr-2 h-[20px]"
              />
              <span className="text-sm">{lang}</span>
            </div>
    </div>
  )
}

export default Language