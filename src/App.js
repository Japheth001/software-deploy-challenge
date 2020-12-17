import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ChuckPic from './img/chuckpic.jpg';

function App() {

 const [jokes, setJokes]=useState([])
 const [query, setQuery]=useState('teeth')

 useEffect(()=>{
   getResults();
 })

 const getResults=async()=>{
   const response=await axios
   .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
   setJokes(response.data.result)
 }


 const handleSearch = (e)=>{
   e.preventDefault()
   getResults();
 }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
              <h className="title">Chuck Norris API</h>
              <img src={ChuckPic} alt="Chuck Norris"/>
              <h5 className="initials">Designed by Japheth : Email: mumokimeu3@gmail.com</h5>
          </div>

        </div>
        <h1 className="category">Enter Word of your choice</h1>
      
      </div>
      
      <form onSubmit={handleSearch}>

          <input type="text"
            onChange={e=>setQuery(e.target.value)}
            value={query}
          />
      <button type="submit">Search</button>
      </form>


      {jokes.map(joke=>{
        return(
          <p>{joke.value}</p>
        )
      })}
    </div>
    
  );
}

export default App;
