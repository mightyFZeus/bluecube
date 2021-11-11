import React from 'react'

const SearchBar = ({ input, setInput, submitHandler }) => {
    return (
        <div className="w-full  shadow-lg rounded-lg px-4 bg-white   py-2">
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
    );
};

export default SearchBar
