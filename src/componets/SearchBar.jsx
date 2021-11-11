import React from "react";

const SearchBar = ({ input, setInput, submitHandler }) => {
    return (
        <div className="flex gap-6">
            <div className="w-full   shadow-lg rounded-lg px-4 bg-white   py-2">
                <form className="flex gap-8" onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Find Something...."
                        className="w-full outline-none"
                    />
                    <button className="py-1 px-4 text-white bg-purple-600 rounded-lg">
                        Search
                    </button>
                </form>
            </div>
            <div className="md:flex gap-4 hidden ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="#7c3aed"
                    viewBox="0 0 24 24"
                    stroke="#7c3aed"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
                <img
                    src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg"
                    alt="profile"
                    className="rounded-full h-10 w-10"
                />   <p className="mt-2">Abigail</p>
            </div>
         
        </div>
    );
};

export default SearchBar;
