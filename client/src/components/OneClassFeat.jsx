import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const OneClassFeat = () => {
    const {index} = useParams();

    const [classfeatInfo, setClassFeat] = useState({})

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/features/${index}`)
            .then(response=>{
                console.log(response)
                setClassFeat(response.data)
            })
            .catch(err=> console.log(err))
    }, [index]);

    return (
        <div>
            {
                classfeatInfo.name!=null?
                    <div class="d-flex flex-column align-items-center">
                        <h1>{classfeatInfo.name}</h1>
                        <h3>{classfeatInfo.class.name}</h3>
                        <p>{classfeatInfo.desc}</p>
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