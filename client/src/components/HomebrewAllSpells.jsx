import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from "react-router-dom"

const HomebrewAllSpells = (props) => {

    const [allSpells, setHomebrewAllSpells] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/spells/")
            .then(response=>{
                console.log("All spells response:", response)
                setHomebrewAllSpells(response.data.sort((a, b) => a.name.localeCompare(b.name)))
            })
            .catch(err=>console.log("Error Message:", err))
    },[props.formSubmitted])

    return (
        <div class="d-flex flex-column align-items-center">
            <Link to="/spell/create/:id"><button>Create A Spell</button></Link>
            <div class="d-flex flex-column align-items-center border border-1 rounded p-3">
                <h1>Spell List</h1>
                <div style={{overflow: "auto", maxHeight: "400px", width: "300px"}}>
                    {
                        allSpells.map((spell,i)=>{
                            return (
                                <div key = {i}>
                                    <p><Link to={`/homebrew/spell/${spell._id}`}>
                                        {spell.name}
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

export default HomebrewAllSpells;