import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from "react-router-dom"

const HomebrewAllClassFeats = (props) => {

    const [allClassFeats, setHomebrewAllClassFeats] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/classfeats/")
            .then(response=>{
                console.log("All classfeats response:", response)
                setHomebrewAllClassFeats(response.data.sort((a, b) => a.name.localeCompare(b.name)))
            })
            .catch(err=>console.log("Error Message:", err))
    },[props.formSubmitted])

    return (
        <div class="d-flex flex-column align-items-center">
            <Link to="/classfeat/create/:id"><button>Create A Class Feature</button></Link>
            <div class="d-flex flex-column align-items-center border border-1 rounded p-3">
                <h1>Class Feature List</h1>
                <div style={{overflow: "auto", maxHeight: "400px", width: "300px"}}>
                    {
                        allClassFeats.map((classfeat,i)=>{
                            return (
                                <div key = {i}>
                                    <p><Link to={`/homebrew/classfeat/${classfeat._id}`}>
                                        {classfeat.name}
                                    </Link></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default HomebrewAllClassFeats;