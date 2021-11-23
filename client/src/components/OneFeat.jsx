import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const OneFeat = () => {
    const {index} = useParams();

    const [featInfo, setFeat] = useState({})

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/feats/${index}`)
            .then(response=>{
                console.log(response)
                setFeat(response.data)
            })
            .catch(err=> console.log(err))
    }, [index]);

    return (
        <div>
            {
                featInfo.name!=null?
                    <div class="d-flex flex-column align-items-center">
                        <h1>{featInfo.name}</h1>
                        {
                            featInfo.prerequisites!=null?
                                <div class="d-flex">
                                    <p>Pre-Requisite(s):</p>
                                    {featInfo.prerequisites.map((prerequisites,i)=>{
                                return (
                                    <div key = {i}>
                                    {
                                        featInfo.prerequisites[i+1]!==undefined?
                                            <p class="mx-1">{prerequisites.ability_score.name}-{prerequisites.minimum_score},</p>
                                        :
                                            <p class="mx-1">{prerequisites.ability_score.name}-{prerequisites.minimum_score}</p>
                                    }
                                    </div>
                                )
                            })}
                                </div>
                            :
                                <div/>
                        }
                        <p>{featInfo.desc}</p>
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