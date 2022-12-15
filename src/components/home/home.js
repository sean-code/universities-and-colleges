import {React, useEffect}  from "react";
import "./home.css";

function Home({ college }){
    const base_Url = 'http://universities.hipolabs.com/search?'
    // const {alpha_two_code, name, web_pages, country, domains } = college
    useEffect(() => {
        fetch(base_Url)
            .then((response) => response.json())
            .then((data) =>{
                // console.log(data)
            });


    })

    return(
        <div>
            <h1>Home</h1>
            <li className="card">
                <p></p>

            </li>
        </div>
    )
}

export default Home;