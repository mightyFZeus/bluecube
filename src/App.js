import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./componets/Body";
import Sidebar from "./componets/Sidebar";

const App = () => {
    const [result, setResult] = useState([]);
    // const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);

    const toggleSideBar = () => {
        setToggle((prevToggle) => !prevToggle);
    };
    useEffect(() => {
        axios
            .get(
                "https://api.unsplash.com/search/photos?query=men?&client_id=o_0bB4EVeMe_U-X_RGn5aPCenTOgSw6pQYzxf8XaFFY&orientation=squarish"
            )
            .then((res) => {
                const main = res.data.results;

                console.log(main);
                setResult(main);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        if (input === "") {
            alert("please enter a search value");
        } else {
            axios
                .get(
                    `https://api.unsplash.com/search/photos?query=${input}?&client_id=o_0bB4EVeMe_U-X_RGn5aPCenTOgSw6pQYzxf8XaFFY&orientation=squarish`
                )
                .then((res) => {
                    const main = res.data.results;
                    console.log(main);

                    setResult(main);
                })
                .catch((err) => {
                    console.log(err);
                    // setError(err);
                });
            setInput("");
        }
    };

    if(loading) return (
        <div className="flex flex-col justify-center content-center">
            <span className="flex ">
                <span className="animate-ping absolute inline-flex h-60 w-60 rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <p>Loading, please wait.....</p>
        </div>
    );

    return (
        <div className="App lg:px-10 lg:py-6 p-4 lg:mt-8  ">
            <div className="flex gap-4 bg-white shadow-lg lg:p-10 p-6  justify-center content-center">
                <div className="hidden xl:block">
                    <Sidebar />
                </div>
                <div className="border-r-2 border-gray-300 hidden md:block"></div>
                <Body
                    result={result}
                    input={input}
                    setInput={setInput}
                    submitHandler={submitHandler}
                    toggleSideBar={toggleSideBar}
                    toggle={toggle}
                />

              
            </div>
        </div>
    );
};

export default App;
