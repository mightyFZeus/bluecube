import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./componets/Body";
import Sidebar from "./componets/Sidebar";
import {Fade} from "react-reveal"


const App = () => {
    const [result, setResult] = useState([]);
 
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
                


             
                setResult(main);
                setLoading(false);
                
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        setToggle(false)
        if (input === "") {
            alert("please enter a search value");
        } else {
            setLoading(true)
            axios
                .get(
                    `https://api.unsplash.com/search/photos?query=${input}?&client_id=o_0bB4EVeMe_U-X_RGn5aPCenTOgSw6pQYzxf8XaFFY&orientation=squarish`
                )
                .then((res) => {
                    const main = res.data.results;
                 
                   

                    setTimeout(() => {
                         setLoading(false);
                    }, 2000)
                   
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
        <div className="flex flex-col max-w-md m-auto mt-60 max-h-96">
            <span className="flex ">
                <span className="animate-ping absolute inline-flex h-60 w-60 rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            <p>Loading, please wait.....</p>
        </div>
    );

    if (result.length === 0) {
        return (
            <div className="flex justify-center content-center flex-col max-w-xs shadow-lg rounded-lg">
                <div>
                    <p>No search Results</p>

                    <button
                        className="bg-purple-600 text-white px-4 py-2"
                        onClick={() => window.location.reload(false)}
                    >
                        Click to reload!
                    </button>
                </div>
            </div>
        );
    }

    if (!result) {
        return (
            <div>
                <p>There is a an error somewhere</p>
            </div>
        )
    }


    return (
        <Fade duration={2000}>
            <div className="App lg:px-10 lg:py-6 p-4 lg:mt-8  ">
                <div className="flex gap-4 bg-white xl:shadow-lg lg:p-10 p-6   justify-center content-center">
                    <div className="hidden xl:block">
                        <Sidebar />
                    </div>
                    <div className="border-r-2 border-gray-300 hidden md:block"></div>
                    {loading && (
                        <div className="flex flex-col max-w-md m-auto mt-60 max-h-96">
                            <span className="flex ">
                                <span className="animate-ping absolute inline-flex h-60 w-60 rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                            </span>
                            <p>Loading, please wait.....</p>
                        </div>
                    )}
                    {!loading && (
                        <Fade duration={2000}>
                            <Body
                                result={result}
                                input={input}
                                setInput={setInput}
                                submitHandler={submitHandler}
                                toggleSideBar={toggleSideBar}
                                toggle={toggle}
                                loading={loading}
                            />
                        </Fade>
                    )}
                </div>
            </div>
        </Fade>
    );
};

export default App;
