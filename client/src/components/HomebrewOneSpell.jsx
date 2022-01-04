import React, {useEffect, useState} from 'react';
import { useHistory, Link } from "react-router-dom";
import { useParams } from 'react-router';
import axios from 'axios';

const OneSpell = () => {
    const {id} = useParams();
    const history = useHistory();

    const [spellInfo, setSpell] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/spells/${id}`)
            .then(response=>{
                console.log(response)
                setSpell(response.data)
            })
            .catch(err=> console.log(err))
    }, [id]);

    const deleteSpell = ()=>{
        axios.delete(`http://localhost:8000/api/spells/delete/${id}`)
            .then(response=>{
                console.log("Response after deletion:", response)
                history.push("/")
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            {
                spellInfo.name!=null?
                    <div class="d-flex flex-column align-items-center">
                        <h1>{spellInfo.name}</h1>
                        <table>
                            <tr>
                                <td>Casting Level:</td>
                                <td>{spellInfo.level}</td>
                            </tr>
                            <tr>
                                <td>Casting Time:</td>
                                <td>{spellInfo.castingTime}</td>
                            </tr>
                            <tr>
                                <td>Casting Range:</td>
                                <td>{spellInfo.range}</td>
                            </tr>
                            <tr>
                                <td>Components:</td>
                                <td>{spellInfo.components}</td>
                            </tr>
                            <tr>
                                <td>Duration:</td>
                                <td>{spellInfo.duration}</td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td>{spellInfo.description}</td>
                            </tr>
                            {
                                spellInfo.highLevel!=null?
                                <tr>
                                    <td>At Higher Levels:</td>
                                    <td>{spellInfo.highLevel}</td>
                                </tr>
                                :
                                <tr/>
                            }
                        </table>
                        <div class="d-flex">
                            <button className="navbtn" onClick={deleteSpell}>Delete</button>
                            <Link to = {`/spell/edit/${spellInfo._id}`}>
                                <button className="navbtn">Edit</button>
                            </Link>
                        </div>
                    </div>
                :
                <div>
                    <h1>Sorry the spell you are looking for is no longer available. If you would like to add this spell or any others please go to the link above.</h1>
                </div>
            }
        </div>
    );
};

export default OneSpell;