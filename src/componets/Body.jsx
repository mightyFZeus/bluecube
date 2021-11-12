import React from "react";
import SearchBar from "./SearchBar";
import MobileSidebar from "./Mobile";

import { sideBarItems } from "../utils/data";
import "../App.css";


const Body = ({
    result,
    input,
    setInput,
    submitHandler,
    toggleSideBar,
    toggle,
    
}) => {
    const { know } = sideBarItems;

 

    return (
        <div className="">
            <div className="hidden xl:block">
                <SearchBar
                    input={input}
                    setInput={setInput}
                    submitHandler={submitHandler}
                    toggle={toggle}
                />
            </div>
            <div className=" flex justify-between xl:hidden">
                <p className="text-purple-600 font-black text-3xl">bluecode</p>

                {!toggle && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={toggleSideBar}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
                {toggle && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={toggleSideBar}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )}
            </div>
            {toggle && (
               
                    <div className=" xl:hidden  ">
                        <MobileSidebar
                            input={input}
                            setInput={setInput}
                            submitHandler={submitHandler}
                            toggleSideBar={toggleSideBar}
                        />
                    </div>
              
            )}

            <div className="md:flex hidden mt-4 ">
                {know.map((item) => (
                    <div
                        className="flex  bg-white shadow-lg  border-2 px-10 py-4"
                        key={item}
                    >
                        <p className="capitalize">{item}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                ))}
            </div>

            <div className="  lg:grid lg:gap-5 header  lg:mt-8 mt-16 lg:grid-cols-5 text-xs">
                {result?.map((item) => (
                    <div
                        key={item.id}
                        className="  flex flex-col mb-5 sm:mb-0 container  "
                        // onMouseEnter={Test}
                    >
                        <img
                            src={item.urls.small}
                            alt="what"
                            className="w-full h-full lg:h-44 rounded-lg image "
                        />

                        <div className="absolute rounded-lg w-full px-4 overlay like_icon_container ">
                            <div className="like_icon flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10  "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    // stroke={show? "red" :"white"}
                                    stroke="white"
                                    // onClick={changeColor}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </div>
                            <div className="text">
                                <p className="text-white  capitalize ">
                                    {item.tags[0].title},
                                </p>
                                <p className="text-white  flex gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    {item.user.first_name},{" "}
                                    {item.created_at.substring(0, 10)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-center text-gray-400 m-10 lg:mt-20">
                {" "}
                &copy; blueCube. All right reserved
            </p>
        </div>
    );
};

export default Body;
