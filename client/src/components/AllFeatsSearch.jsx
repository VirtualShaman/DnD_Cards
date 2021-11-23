import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import {Link} from "react-router-dom"

const AllFeats = (props) => {
    const { infoType, searchName } = useParams();
    const [allFeats, setAllFeats] = useState([])

    useEffect(()=>{
        axios.get("https://www.dnd5eapi.co/api/feats/")
            .then(response=>{
                console.log("All API feats response:", response)
                setAllFeats(response.data.results.sort((a, b) => a.name.localeCompare(b.name)))
            })
            .catch(err=>console.log("Error Message:", err))
    },[props.formSubmitted])

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center border border-1 rounded p-3">
                <h1>Feat List</h1>
                <div style={{overflow: "auto", maxHeight: "400px", width: "300px"}}>
                    {
                        allFeats.map((feat,i)=>{
                            return (
                                <div key = {`feat${i}`}>
                                    {infoType==="feats"||"all"?
                                            (((feat.name).toLowerCase()).startsWith(searchName.toLowerCase())===true?
                                                <p><Link to={`/feat/${feat.index}`}>
                                                    {feat.name}
                                                </Link></p>
                                            :
                                            <div/>
                                            )
                                        :
                                            <p><Link to={`/feat/${feat.index}`}>
                                                {feat.name}
                                            </Link></p>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFeats;