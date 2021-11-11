import React from "react";
import { sideBarItems } from "../utils/data";
import SearchBar from "./SearchBar";

const Sidebar = ({input, setInput, submitHandler}) => {
    const { share, firstArr, secondArr, logoText } = sideBarItems;
    return (
        <div className=" ">
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
    );
};

export default Sidebar;
