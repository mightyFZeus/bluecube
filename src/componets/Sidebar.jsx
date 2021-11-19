import React from 'react'
import { sideBarItems } from '../utils/data';
import "../App.css"

const Sidebar = () => {
    const {share, firstArr,secondArr, logoText} = sideBarItems
    return (
        <div className="flex flex-col justify-center content-center font-bold">
            <p className="text-purple-600 font-black text-3xl mb-10 hidden xl:block">
                {logoText}
            </p>
            <div>
                {firstArr.map(({ text, image }) => (
                    <div className="flex gap-4 text-xs mb-4 text-center px-3 py-1 mt-3 sidebar" key={text}>
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
                        <p className="mt-2">{text}</p>
                    </div>
                ))}
            </div>
            <p className="font-black text-lg mb-6 mt-3">{share}</p>
            <div>
                {secondArr.map(({ text, image }) => (
                    <div className="flex gap-4 text-xs mb-4 test px-3 py-1 sidebar" key={text}>
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
                        <p className="mt-2">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar
