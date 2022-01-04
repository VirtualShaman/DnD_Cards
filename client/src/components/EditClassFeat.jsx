import React, {useEffect, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useParams } from "react-router";
import axios from 'axios';

const EditClassFeatForm = (props) => {
    const { id } = useParams();
    const history = useHistory();

    const [formInfo,setFormInfo] = useState({
        name:"",
        description:"",
    })

    const [formErrors, setFormErrors] = useState({
        name:"",
        description:"",
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/classfeats/${id}`)
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
        axios.put(`http://localhost:8000/api/classfeats/update/${id}`, formInfo)
            .then(response=>{
                console.log(response)
                if(response.data.err){
                    setFormErrors(response.data.err.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)

                    setFormInfo({
                        name:"",
                        description:"",
                    })
                    history.push(`/homebrew/classfeat/${formInfo._id}`)
                }
            })
            .catch(err=>console.log("Error creating a classfeat:", err))
    }

    return (
        <div>
            {
                formInfo.name!=null?
                <form onSubmit= {submitHandler}>
                    <table>
                    <tr>
                        <td>ClassFeat Name:</td>
                        <td>
                            <input className="navbtn" onChange={changeHandler} type="text" name="name" value={formInfo.name}/>
                            <p>{formErrors.name?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <textarea className="navbtn" onChange={changeHandler} name="description" value={formInfo.description} cols="25" rows="5"></textarea>
                            <p>{formErrors.description?.message}</p>
                        </td>
                    </tr>
                    </table>
                    <input className="navbtn" type="submit" value="Update ClassFeat"/>
                    <Link to={`/homebrew/classfeat/${formInfo._id}`}><button className="navbtn">Cancel</button></Link>
                </form>
                :
                <div>
                    <h1>Sorry the classfeat you are looking for is no longer available. If you would like to add this classfeat or any others please go to the link above.</h1>
                </div>
            }
        </div>
    );
};

export default EditClassFeatForm;