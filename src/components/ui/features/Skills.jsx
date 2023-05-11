import React from "react";
import { techStack } from "../../../utils/data";

function Skills() {
  return (
      <div className="flex flex-col items-center justify-center font-light m-10">
        <div className="flex h-auto w-auto flex-wrap items-start justify-start rounded-2xl bg-white bg-opacity-5 bg-gray-600 pl-2 text-white">
          <h1 className="p-2 font-extralight font-poppins text-2xl">Skills:</h1>
          <br />
          <div className="flex h-auto w-auto flex-wrap items-start justify-start">
            {techStack.map((dataObj, index) => {
              const url = tag[dataObj];
              return (
                <div
                  className="m-4 ml-2 flex px-4 py-2 w-fit items-center justify-center rounded-full bg-opacity-10 bg-skillbg border hover:bg-opacity-20 cursor-pointer"
                  key={dataObj}
                >
                  <img src={url} alt="" className="mr-2 h-[20px]" />

                  <span className="text-sm">{dataObj}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default Skills;
