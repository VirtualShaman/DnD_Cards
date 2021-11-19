import React, {useEffect, useState} from 'react';
import { useHistory, Link } from "react-router-dom";
import { useParams } from 'react-router';
import axios from 'axios';

const OneFeat = () => {
    const {id} = useParams();
    const history = useHistory();

    const [featInfo, setFeat] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/feats/${id}`)
            .then(response=>{
                console.log(response)
                setFeat(response.data)
            })
            .catch(err=> console.log(err))
    }, [id]);

    const deleteFeat = ()=>{
        axios.delete(`http://localhost:8000/api/feats/delete/${id}`)
            .then(response=>{
                console.log("Response after deletion:", response)
                history.push("/")
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            {
                featInfo.name!=null?
                    <div class="d-flex flex-column align-items-center">
                        <h1>{featInfo.name}</h1>
                                {
                                    featInfo.prereq!=null?
                                        <div class="d-flex">
                                            <p>Pre-Requisite(s):</p>
                                            <p>{featInfo.prereq}</p>
                                        </div>
                                    :
                                    <div/>
                                }
                                <p>{featInfo.description}</p>
                        <div class="d-flex">
                            <button onClick={deleteFeat}>Delete</button>
                            <Link to = {`/feat/edit/${featInfo._id}`}>
                                <button>Edit</button>
                            </Link>
                        </div>
                    </div>
                :
                <div>
                    <h1>Sorry the feat you are looking for is no longer available. If you would like to add this feat or any others please go to the link above.</h1>
                </div>
            }
        </div>
    );
};

export default OneFeat;