import React, {useEffect, useState} from 'react';
import { useHistory, Link } from "react-router-dom";
import { useParams } from 'react-router';
import axios from 'axios';

const OneClassFeat = () => {
    const {id} = useParams();
    const history = useHistory();

    const [classfeatInfo, setClassFeat] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/classfeats/${id}`)
            .then(response=>{
                console.log(response)
                setClassFeat(response.data)
            })
            .catch(err=> console.log(err))
    }, [id]);

    const deleteClassFeat = ()=>{
        axios.delete(`http://localhost:8000/api/classfeats/delete/${id}`)
            .then(response=>{
                console.log("Response after deletion:", response)
                history.push("/")
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            {
                classfeatInfo.name!=null?
                    <div class="d-flex flex-column align-items-center">
                        <h1>{classfeatInfo.name}</h1>
                        <table>
                            <tr>
                                <td>{classfeatInfo.description}</td>
                            </tr>
                        </table>
                        <div class="d-flex">
                            <button className="navbtn" onClick={deleteClassFeat}>Delete</button>
                            <Link to = {`/classfeat/edit/${classfeatInfo._id}`}>
                                <button className="navbtn">Edit</button>
                            </Link>
                        </div>
                    </div>
                :
                <div>
                    <h1>Sorry the classfeat you are looking for is no longer available. If you would like to add this classfeat or any others please go to the link above.</h1>
                </div>
            }
        </div>
    );
};

export default OneClassFeat;