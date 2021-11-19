import React, {useEffect, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useParams } from "react-router";
import axios from 'axios';

const EditFeatForm = (props) => {
    const { id } = useParams();
    const history = useHistory();

    const [formInfo,setFormInfo] = useState({
        name:"",
        prereq:"",
        description:"",
    })

    const [formErrors, setFormErrors] = useState({
        name:"",
        prereq:"",
        description:"",
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/feats/${id}`)
            .then(response=>{
                console.log(response)
                setFormInfo(response.data)
            })
            .catch(err=> console.log(err))
    }, [id]);

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/feats/update/${id}`, formInfo)
            .then(response=>{
                console.log(response)
                if(response.data.err){
                    setFormErrors(response.data.err.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)

                    setFormInfo({
                        name:"",
                        prereq:"",
                        description:"",
                    })
                    history.push(`/homebrew/feat/${formInfo._id}`)
                }
            })
            .catch(err=>console.log("Error creating a feat:", err))
    }

    return (
        <div>
            {
                formInfo.name!=null?
                <form onSubmit= {submitHandler}>
                    <table>
                    <tr>
                        <td>Feat Name:</td>
                        <td>
                            <input onChange={changeHandler} type="text" name="name" value={formInfo.name}/>
                            <p>{formErrors.name?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Pre-Requisite(s):
                            <br/>(Optional)
                        </td>
                        <td>
                            <input onChange={changeHandler} type="text" name="prereq" value={formInfo.prereq}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <textarea onChange={changeHandler} name="description" value={formInfo.description} cols="25" rows="5"></textarea>
                            <p>{formErrors.description?.message}</p>
                        </td>
                    </tr>
                    </table>
                    <input type="submit" value="Update Feat"/>
                    <Link to={`/homebrew/feat/${formInfo._id}`}><button>Cancel</button></Link>
                </form>
                :
                <div>
                    <h1>Sorry the feat you are looking for is no longer available. If you would like to add this feat or any others please go to the link above.</h1>
                </div>
            }
        </div>
    );
};

export default EditFeatForm;