import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {Link} from "react-router-dom";
import axios from 'axios'


const HomebrewAllClassFeats = (props) => {
    const { infoType, searchName } = useParams();
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
                                <div key = {`class${i}`}>
                                {infoType==="classFeatures"||
                                            infoType==="all"?
                                            (((classfeat.name).toLowerCase()).includes(searchName.toLowerCase())===true?

                                                    <p><Link to={`/classfeat/${classfeat._id}`}>
                                                        {classfeat.name}
                                                    </Link></p>
                                            :
                                                <div />
                                            )
                                        :
                                            <p><Link to={`/classfeat/${classfeat._id}`}>
                                                {classfeat.name}
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

export default HomebrewAllClassFeats;