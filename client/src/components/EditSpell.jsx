import React, {useEffect, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useParams } from "react-router";
import axios from 'axios';

const EditSpellForm = (props) => {
    const { id } = useParams();
    const history = useHistory();

    const [formInfo,setFormInfo] = useState({
        name:"",
        level:"",
        castingTime:"",
        range:"",
        components:"",
        duration:"",
        description:"",
        highLevel:""
    })

    const [formErrors, setFormErrors] = useState({
        name:"",
        level:"",
        castingTime:"",
        range:"",
        components:"",
        duration:"",
        description:"",
        highLevel:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/spells/${id}`)
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
        axios.put(`http://localhost:8000/api/spells/update/${id}`, formInfo)
            .then(response=>{
                console.log(response)
                if(response.data.err){
                    setFormErrors(response.data.err.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)

                    setFormInfo({
                        name:"",
                        level:"",
                        castingTime:"",
                        range:"",
                        components:"",
                        duration:"",
                        description:"",
                        highLevel:""
                    })
                    history.push(`/homebrew/spell/${formInfo._id}`)
                }
            })
            .catch(err=>console.log("Error creating a spell:", err))
    }

    return (
        <div>
            {
                formInfo.name!=null?
                <form onSubmit= {submitHandler}>
                    <table>
                    <tr>
                        <td>Spell Name:</td>
                        <td>
                            <input onChange={changeHandler} type="text" name="name" value={formInfo.name}/>
                            <p>{formErrors.name?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Level:</td>
                        <td>
                            <input onChange={changeHandler} type="text" name="level" value={formInfo.level}/>
                            <p>{formErrors.level?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Casting Time:</td>
                        <td>
                            <input onChange={changeHandler} type="text" name="castingTime" value={formInfo.castingTime}/>
                            <p>{formErrors.castingTime?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Range:</td>
                        <td>
                            <input onChange={changeHandler} type="text" name="range" value={formInfo.range}/>
                            <p>{formErrors.range?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Components:</td>
                        <td>
                            <input onChange={changeHandler} type="text" name="components" value={formInfo.components}/>
                            <p>{formErrors.components?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Duration:</td>
                        <td>
                            <input onChange={changeHandler} type="text" name="duration" value={formInfo.duration}/>
                            <p>{formErrors.duration?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <textarea onChange={changeHandler} name="description" value={formInfo.description} cols="25" rows="5"></textarea>
                            <p>{formErrors.description?.message}</p>
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
                </table>
                    <input type="submit" value="Update Spell"/>
                    <Link to={`/homebrew/spell/${formInfo._id}`}><button>Cancel</button></Link>
                </form>
                :
                <div>
                    <h1>Sorry the spell you are looking for is no longer available. If you would like to add this spell or any others please go to the link above.</h1>
                </div>
            }
        </div>
    );
};

export default EditSpellForm;