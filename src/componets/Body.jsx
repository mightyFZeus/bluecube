import React from 'react'
import SearchBar from './SearchBar';
import MobileSidebar from './Sidebar';
import {Slide} from "react-reveal"

const Body = ({ result, input, setInput, submitHandler, toggleSideBar, toggle }) => {
    return (
        <div>
            <div className="hidden md:block">
                <SearchBar
                    input={input}
                    setInput={setInput}
                    submitHandler={submitHandler}
                />
            </div>
            <div className=" flex justify-between md:hidden">
                <p className="text-purple-600 font-black text-3xl">bluecode</p>

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
            </div>
            {toggle && (
                <Slide right duration={500}>
                    <div className=" md:hidden ">
                        <MobileSidebar />
                    </div>
                </Slide>
            )}

            
                <div className=" lg:grid lg:gap-5  lg:grid-cols-5">
                    {result?.map((item) => (
                        <div
                            key={item.id}
                            className=" flex flex-col mb-5 sm:mb-0 "
                            // style={{ backgroundImage: `url(${item.urls.small})` }}
                        >
                            <img
                                src={item.urls.small}
                                alt="what"
                                className="lg:h-44 lg:w-44 rounded-lg"
                            />
                            <div className="absolute lg:mt-32 mt-60">
                                <p>{item.id}</p>
                                <p>{item.alt_description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            
        </div>
    );
};

export default Body
