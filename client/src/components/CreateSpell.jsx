import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const NewSpellForm = (props) => {
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

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/spells/create", formInfo)
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
                    history.push("/")
                }
            })
            .catch(err=>console.log("Error adding an spell:", err))
    }

    return (
        <div>
            <h1 className="title">Add A New Spell</h1>
            <form onSubmit= {submitHandler}>
                <table>
                    <tr>
                        <td>Spell Name:</td>
                        <td>
                            <input className="navbtn" onChange={changeHandler} type="text" name="name" value={formInfo.name}/>
                            <p>{formErrors.name?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Level:</td>
                        <td>
                            <input className="navbtn" onChange={changeHandler} type="text" name="level" value={formInfo.level}/>
                            <p>{formErrors.level?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Casting Time:</td>
                        <td>
                            <input className="navbtn" onChange={changeHandler} type="text" name="castingTime" value={formInfo.castingTime}/>
                            <p>{formErrors.castingTime?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Range:</td>
                        <td>
                            <input className="navbtn" onChange={changeHandler} type="text" name="range" value={formInfo.range}/>
                            <p>{formErrors.range?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Components:</td>
                        <td>
                            <input className="navbtn" onChange={changeHandler} type="text" name="components" value={formInfo.components}/>
                            <p>{formErrors.components?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Duration:</td>
                        <td>
                            <input className="navbtn" onChange={changeHandler} type="text" name="duration" value={formInfo.duration}/>
                            <p>{formErrors.duration?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <textarea className="navbtn" onChange={changeHandler} name="description" value={formInfo.description} cols="25" rows="5"></textarea>
                            <p>{formErrors.description?.message}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Pre-Requisite(s):
                            <br/>(Optional)
                        </td>
                        <td>
                            <input className="navbtn" onChange={changeHandler} type="text" name="prereq" value={formInfo.prereq}/>
                        </td>
                    </tr>
                </table>
                <input className="navbtn" type="submit" value="Submit New Spell"/>
                <Link to="/"><button className="navbtn">Cancel</button></Link>
            </form>
        </div>
    );
};

export default NewSpellForm;