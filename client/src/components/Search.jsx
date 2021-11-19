import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = (props) => {
    const [allClasses, setAllClasses] = useState([])

    useEffect(()=>{
        axios.get("https://www.dnd5eapi.co/api/classes/")
            .then(response=>{
                console.log("All API class response:", response)
                setAllClasses(response.data.results.sort((a, b) => a.name.localeCompare(b.name)))
            })
            .catch(err=>console.log("Error Message:", err))
    },[props.formSubmitted])

    return(
    <form action="/" method="get">
        <select>
            <option value="">All Fields</option>
            <option value="">Spells</option>
            <option value="">Class Features</option>
            <option value="">Feats</option>
        </select>
        <select>
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
        </select>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    )
}

export default Search;