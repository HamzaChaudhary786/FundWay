import React, { useContext, useState, useEffect } from "react";
const ContextApp = React.createContext();


// const api_url = ` https://apidata1.herokuapp.com/apidata`;
const api_url = 'http://localhost:3001/fundway';

// const initialState = {
//     isLoading: false,
//     isError: false,
//     products: [],
//     featureProducts: [],
//   };

const AppProvider = (({ children }) => {

    const [first, setFirst] = useState([]);
    const [query, setQuery] = useState("");
    const [fundy, setFundy] = useState([]);
    const [list, setList] = useState([]);


    const getProject = async (url) => {


        try {
            const res = await fetch(url);
            const Data = await res.json();

            console.log(Data);
            console.log(fundy);
            if (Data.Response === "True") {
                setFirst(Data.search);
                setFundy(Data.Fund);
                setList(Data.Project)

            }

            else {
                console.log("Error Accurs");
            }




        }
        catch (error) {
            console.log("error");

        }

    }

    const getSingleProduct = async () => {
        try {

            // const res = await fetch(url);
            // const SingleProduct = await res.json();


        } catch (error) {

        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getProject(`${api_url}`);

        }, 3000);

        return () => clearTimeout(timerOut);
    }, [query]);




    return (
        <ContextApp.Provider value={{ query, setQuery, first, fundy , list }}>
            {children}
        </ContextApp.Provider>
    )

})


const useGlobalContext = () => {
    return (
        useContext(ContextApp)
    )
}

export { AppProvider, ContextApp, useGlobalContext };

