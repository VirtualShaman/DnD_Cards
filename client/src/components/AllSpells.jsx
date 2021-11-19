import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from "react-router-dom"

const AllSpells = (props) => {

    const [allSpells, setAllSpells] = useState([])

    useEffect(()=>{
        axios.get("https://www.dnd5eapi.co/api/spells/")
            .then(response=>{
                console.log("All API spells response:", response)
                setAllSpells(response.data.results.sort((a, b) => a.name.localeCompare(b.name)))
            })
            .catch(err=>console.log("Error Message:", err))
    },[props.formSubmitted])

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center border border-1 rounded p-3">
                <h1>Spell List</h1>
                <div style={{overflow: "auto", maxHeight: "400px", width: "300px"}}>
                    {
                        allSpells.map((spell,i)=>{
                            return (
                                <div key = {`spell${i}`}>
                                    <p><Link to={`/spell/${spell.index}`}>
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

export default AllSpells;