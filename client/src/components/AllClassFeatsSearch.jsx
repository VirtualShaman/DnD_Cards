import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {Link} from "react-router-dom";
import axios from 'axios'

const AllClassFeats = (props) => {
    const { infoType, searchName } = useParams();
    const [allClassFeats, setAllClassFeats] = useState([])

    useEffect(()=>{
        axios.get("https://www.dnd5eapi.co/api/features/")
            .then(response=>{
                console.log("All API classfeats response:", response)
                setAllClassFeats(response.data.results.sort((a, b) => a.name.localeCompare(b.name)))
            })
            .catch(err=>console.log("Error Message:", err))
    },[props.formSubmitted])

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center border border-1 rounded p-3">
                <h1>Class Feature List</h1>
                <div style={{overflow: "auto", maxHeight: "400px", width: "300px"}}>
                    {
                        allClassFeats.map((classfeat,i)=>
                        <div key = {`class${i}`}>
                        {infoType==="classFeatures"||"all"?
                                    (((classfeat.name).toLowerCase()).startsWith(searchName.toLowerCase())===true&&
                                    i<allClassFeats.length-1&&
                                    classfeat.name!==allClassFeats[i+1].name?

                                            <p><Link to={`/classfeat/${classfeat.index}`}>
                                                {classfeat.name}
                                            </Link></p>
                                    :
                                        <div />
                                    )
                                :
                                    <p><Link to={`/classfeat/${classfeat.index}`}>
                                        {classfeat.name}
                                    </Link></p>
                        }
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllClassFeats;