// import React, {useState, useEffect} from 'react';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';

const Search = (props) => {
    // const [allClasses, setAllClasses] = useState([])
    const history = useHistory();
    const [formInfo, setFormInfo] = useState({
        searchName:"",
        infoType:"all"
    })
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api/classes/")
    //         .then(response=>{
    //             console.log("All class response:", response)
    //             setAllClasses(response.data.results.sort((a, b) => a.name.localeCompare(b.name)))
    //         })
    //         .catch(err=>console.log("Error Message:", err))
    // },[props.formSubmitted])

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(formInfo.searchName!==""){
            history.push(`/homebrewSearch/${formInfo.infoType}/${formInfo.searchName}`)
        } else{
            history.push(`/homebrew`)
        }
    }

    return(
    <form onSubmit={submitHandler}>
        <select onChange={changeHandler} name="infoType">
            <option value="all">All Fields</option>
            <option value="spells">Spells</option>
            <option value="classFeatures">Class Features</option>
            <option value="feats">Feats</option>
        </select>
        {/* <select>
            <option value="">All Classes</option>
            {
                allClasses.map((search,i)=>{
                    return (
                        <option key = {`search${i}`}>
                            {search.name}
                        </option>
                    )
                })
            }
        </select> */}
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            onChange={changeHandler}
            type="text"
            placeholder="Search blog posts"
            name="searchName" 
        />
        <button type="submit">Search</button>
    </form>
    )
}

export default Search;