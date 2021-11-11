import React from "react";
import SearchBar from "./SearchBar";
import MobileSidebar from "./Mobile";
import { Slide } from "react-reveal";
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
        <div>
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
                <Slide right duration={500}>
                    <div className=" xl:hidden  ">
                        <MobileSidebar
                            input={input}
                            setInput={setInput}
                            submitHandler={submitHandler}
                        />
                    </div>
                </Slide>
            )}

            <div className="md:flex hidden mt-8 ">
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

            <div className="  lg:grid lg:gap-5 header  lg:mt-8 mt-16 lg:grid-cols-5">
                {result?.map((item) => (
                    <div
                        key={item.id}
                        className="  flex flex-col mb-5 sm:mb-0  "
                    >
                        <img
                            src={item.urls.small}
                            alt="what"
                            className="lg:h-44 lg:w-44 w-full h-full rounded-lg bg-overlay hover:opacity-70 "
                        />
                        <div className="absolute lg:mt-32 mt-60">
                            <p className="text-white bg-overlay ">
                                {item.alt_description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
