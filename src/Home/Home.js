import React, { useState } from 'react'
import ListView from '../ListView/ListView'
import SearchBar from '../SearchBar/SearchBar'
import './home.css';

const Home = () => {

    const [result , setResult] = useState([]);
    const getSearchData = data =>{
        setResult(data);
    }

    return (
        <div>
            <SearchBar searchResult = {getSearchData}/>
            <ListView getData = {result}/>
        </div>
    );
}

export default Home;
