import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from "react-router-dom"

const HomebrewAllFeats = (props) => {

    const [allFeats, setHomebrewAllFeats] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/feats/")
            .then(response=>{
                console.log("All feats response:", response)
                setHomebrewAllFeats(response.data.sort((a, b) => a.name.localeCompare(b.name)))
            })
            .catch(err=>console.log("Error Message:", err))
    },[props.formSubmitted])

    return (
        <div class="d-flex flex-column align-items-center">
            <Link to="/feat/create/:id"><button>Create A Feat</button></Link>
            <div class="d-flex flex-column align-items-center border border-1 rounded p-3">
                <h1>Feat List</h1>
                <div style={{overflow: "auto", maxHeight: "400px", width: "300px"}}>
                    {
                        allFeats.map((feat,i)=>{
                            return (
                                <div key = {i}>
                                    <p><Link to={`/homebrew/feat/${feat._id}`}>
                                        {feat.name}
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

export default HomebrewAllFeats;