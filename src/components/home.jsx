import React from "react";
import MpfpRandom from "../assets/Male.png";
import FpfpRandom from "../assets/Female.png";
import { useNavigate } from "react-router-dom";
import { about, resumeLink, links } from "../data";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-b h-screen from-blackk to-bluee h-full">
        <header>
          <div className="container mx-auto py-4">
            <nav className="flex justify-between">
              <a
                href="/"
                className="font-poppins font-semibold p-4 text-white text-[38px]"
              >
                DEV
              </a>
              <ul className="flex mt-8 mr-8">
                <li>
                  <a
                    href="/"
                    className="px-4 py-2 font-poppins text-white hover:text-white"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="px-4 py-2 font-poppins text-greyy hover:text-white "
                    onClick={() => navigate("/portfolio")}
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
            <section className="py-8">
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 grid place-items-center">
                    <img
                      src={MpfpRandom}
                      alt="logo"
                      className="drop-shadow-xl h-[290px] lg:mb-[-45px] "
                    />

                    {/* if (about.gender === "male") {
                <img src={MpfpRandom} alt="logo" classNameName='drop-shadow-xl h-[290px] lg:mb-[-45px] lg:mt-[-20px]' />
                  } else { 
              <img src={FpfpRandom} alt="logo" classNameName='drop-shadow-xl h-[250px]' />
                  } */}

                    {/* {about.gender === "male" ? (

                  <img src={MpfpRandom} alt="logo" classNameName='drop-shadow-xl h-[320px] lg:mb-[-30px]' />

                ) : (
                  <img src={FpfpRandom} alt="logo" classNameName='drop-shadow-xl h-[250px]' /> 
                )} */}
                  </div>
                  <div className="lg:w-1/2 flex flex-wrap flex-col">
                    <h1 className="font-poppins text-4xl mb-1 font-medium text-white title">
                      {about[0].name}
                    </h1>
                    <p className="font-poppins font-[300] text-2xl text-white mb-3">
                      {about[0].bio}
                    </p>
                    <p className="w-[550px] font-poppins font-[200] text-white mb-4 ">
                      {about[0].about}{" "}
                    </p>
                    <a href={resumeLink} target="-blank">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all"
                      >
                        {" "}
                        Resume{" "}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid place-items-center mt-20">
              <div className="flex flex-wrap justify-center">
                <div className="mr-12 mb-4 h-[62px] w-[62px] bg-gtIcon1 rounded-full flex items-center justify-center shadow-lg shadow-slate-700/50  transition delay-150 ease-in-out hover:scale-110">
                  <a href={links[0].url} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-github text-white h-[32px] w-[32px]"
                      id="github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                </div>

                <div className="mr-12 mb-4 h-[62px] w-[62px] bg-twIcon1 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 transition delay-150 ease-in-out hover:scale-110">
                  <a href={links[1].url} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter text-white h-[28px] w-[28px]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </div>

                <div className="mr-12 mb-4 h-[62px] w-[62px] bg-linkIcon1 rounded-full flex items-center justify-center shadow-lg shadow-blue-700/50  transition delay-150 ease-in-out hover:scale-110">
                  <a href={links[2].url} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin text-white h-[27px] w-[27px]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </div>

                <div className="mr-12 mb-4 h-[62px] w-[62px] bg-webIcon1 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 transition delay-150 ease-in-out hover:scale-110">
                  <a href={links[3].url} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-globe text-white h-[30px] w-[30px]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                    </svg>
                  </a>
                </div>

                {/* <div className="mr-12 mb-4 h-[62px] w-[62px] bg-beIcon1 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/50 transition delay-150 ease-in-out hover:scale-110">
          <a href={links[4].url} target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-behance text-white h-[28px] w-[28px]" viewBox="0 0 16 16">
      <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z"/>
    </svg>
    </a>
          </div> */}
              </div>
            </div>

        </main>





        <footer className="container py-4 mt-10 mx-auto">
          <p className="flex justify-center text-gray">
            Designed and Developed by
            <a
              href="https://github.com/rohitranjan-2702"
              className="ml-1 mr-1 hover:text-blue-500"
            >
              RoHiT{" "}
            </a>
            &
            <a
              href="https://github.com/mohammadshaad"
              className="ml-1 hover:text-blue-500"
            >
              Saad
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
