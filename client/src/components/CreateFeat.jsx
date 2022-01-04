import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const NewFeatForm = (props) => {
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

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/feats/create", formInfo)
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
                    history.push("/")
                }
            })
            .catch(err=>console.log("Error adding an feat:", err))
    }

    return (
        <div>
            <h1 className="title">Add A New Feat</h1>
            <form onSubmit= {submitHandler}>
                <table>
                    <tr>
                        <td>Feat Name:</td>
                        <td>
                            <input className="navbtn" onChange={changeHandler} type="text" name="name" value={formInfo.name}/>
                            <p>{formErrors.name?.message}</p>
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
                    <tr>
                        <td>Description:</td>
                        <td>
                            <textarea className="navbtn" onChange={changeHandler} name="description" value={formInfo.description} cols="25" rows="5"></textarea>
                            <p>{formErrors.description?.message}</p>
                        </td>
                    </tr>
                </table>
                <input className="navbtn" type="submit" value="Submit New Feat"/>
                <Link to="/"><button className="navbtn">Cancel</button></Link>
            </form>
        </div>
    );
};

export default NewFeatForm;