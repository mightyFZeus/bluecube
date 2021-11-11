import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./componets/Body";
import Sidebar from "./componets/Sidebar";

const App = () => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState("");

    const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false)
  

  const toggleSideBar = () => {
    setToggle(prevToggle => !prevToggle)
  }
    useEffect(() => {
        axios
            .get(
                "https://api.unsplash.com/search/photos?query=dogs?&client_id=o_0bB4EVeMe_U-X_RGn5aPCenTOgSw6pQYzxf8XaFFY&orientation=squarish"
            )
            .then((res) => {
                const main = res.data.results;

                console.log(main);
                setResult(main);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
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
                setError(err);
            });
    };
    return (
        <div className="App lg:px-10 lg:py-10 p-4 ">
            <div className="flex gap-4 ">
                <div className="hidden md:block">
                    <Sidebar />
                </div>
                <div className="border-r-2 border-gray-300"></div>
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
