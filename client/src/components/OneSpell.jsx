import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const OneSpell = () => {
    const {index} = useParams();

    const [spellInfo, setSpell] = useState({})

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/spells/${index}`)
            .then(response=>{
                console.log(response)
                setSpell(response.data)
            })
            .catch(err=> console.log(err))
    }, [index]);

    return (
        <div>
            {
                spellInfo.name!=null?
                    <div class="d-flex flex-column align-items-center">
                        <h1 className="title">{spellInfo.name}</h1>
                        <div class="d-flex">
                            {spellInfo.classes.map((classes,i)=>{
                                return (
                                    <div key = {i}>
                                        {console.log(spellInfo.classes[i+1])}
                                    {
                                        spellInfo.classes[i+1]!==undefined?
                                            <p className="bold" class="mx-1">{classes.name}, </p>
                                        :
                                            <p className="bold" class="mx-1">{classes.name}</p>
                                    }
                                    </div>
                                )
                            })}
                        </div>
                        <table>
                            <tr>
                                <td className="bold">Casting Level:</td>
                                <td>{spellInfo.level}, {spellInfo.school.name}</td>
                            </tr>
                            <tr>
                                <td className="bold">Casting Time:</td>
                                <td>{spellInfo.casting_time}</td>
                            </tr>
                            <tr>
                                <td className="bold">Casting Range:</td>
                                <td>{spellInfo.range}</td>
                            </tr>
                            <tr>
                                <td className="bold">Components:</td>
                                <td>{spellInfo.components}, {spellInfo.material}</td>
                            </tr>
                            <tr>
                                <td className="bold">Duration:</td>
                                <td>{spellInfo.duration}</td>
                            </tr>
                            <tr>
                                <td className="bold">Description:</td>
                                <td>{spellInfo.desc}</td>
                            </tr>
                            {
                                spellInfo.higher_level!=null?
                                <tr>
                                    <td className="bold">At Higher Levels:</td>
                                    <td>{spellInfo.higher_level}</td>
                                </tr>
                                :
                                <tr/>
                            }
                        </table>
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