import React, {useState} from "react";
import Card from "../MovieCard";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

export default function SearchPage(props) {
    let [path, setPath] = useState('/search');
    return (
        <div className={'main-page'}>
            <input type="text" id="input-field" className={"search-input-field"} onChange={(event)=>setPath(`/search/${event.target.value}`)}/>
            <Link to={path}>
                <button className={"search-button"} >Search</button>
            </Link>
        </div>
    );
}

