import React, { useEffect, useState } from "react";
import { tag } from "../assets/tag";
import { techstack } from "../data";

function skills() {
  // const [icon, setIcon] = useState("");

  // useEffect(() => {
  //   renderIcon();
  // }, [icon]);

  // ternary operator

  return (
    <>
      <div class="flex flex-col items-center justify-center font-light m-10">
        <div class="flex h-auto w-auto flex-wrap items-start justify-start rounded-2xl bg-white bg-opacity-5 bg-gray-600 pl-2 text-white">
          <h1 class="p-2 font-extralight font-poppins text-2xl">Skills:</h1>
          <br />
          <div class="flex h-auto w-auto flex-wrap items-start justify-start">
            {techstack.map((dataObj, index) => {
              const url = tag[dataObj];
              console.log(url);
              return (
                <div
                  class="m-4 ml-2 flex px-4 py-2 w-fit items-center justify-center rounded-full bg-opacity-10 bg-skillbg border hover:bg-opacity-20 cursor-pointer"
                  key={dataObj}
                >
                  <img src={url} alt="" class="mr-2 h-[20px]" />

                  <span class="text-sm">{dataObj}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default skills;
