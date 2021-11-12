import React from "react";
import { sideBarItems } from "../utils/data";
import SearchBar from "./SearchBar";

const Sidebar = ({ input, setInput, submitHandler, toggleSideBar }) => {
    const { share, firstArr, secondArr, logoText } = sideBarItems;
    return (
      
            <div className=" flex z-60 ">
                <div
                    className="appearance-none cursor-default focus:outline-none p-6  inline-block md-lg:hidden bg-gray-900 bg-opacity-60  max-h-screen min-h-screen fixed left-0 top-0 z-20"
                    style={{ minWidth: "33.3333%" }}
                    onClick={toggleSideBar}
                ></div>
                <div className="md-lg:hidden inline-block side-nav mt-0 min-h-screen fixed max-h-screen w-2/3 md:w-1/3 px-3 xs:px-6 bg-white top-0 right-0 z-30">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 ml-auto mb-4 mt-4"
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
                    <div className="">
                        <SearchBar
                            input={input}
                            setInput={setInput}
                            submitHandler={submitHandler}
                        />

                        <p className="text-purple-600 font-black text-3xl  hidden md:block">
                            {logoText}
                        </p>
                        <div>
                            {firstArr.map(({ text, image }) => (
                                <div className="flex gap-4 text-xs mb-4 text-center mt-3 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d={image}
                                        />
                                    </svg>
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                        <p className="font-black text-lg mb-6 mt-3">{share}</p>
                        <div>
                            {secondArr.map(({ text, image }) => (
                                <div className="flex gap-4 text-xs mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d={image}
                                        />
                                    </svg>
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
      
    );
};

export default Sidebar;
