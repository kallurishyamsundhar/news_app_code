import { useEffect, useState } from 'react';
import './App.css';
import News from '../src/News';
function App() {

let[articles,setArticles]=useState([]);
let[category,setCategory]=useState("india");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-10&apiKey=a5a0c16a9e1c4b889f9b7e46278ec1fb`)
      .then(response => response.json()) // Getting the information
      .then(news => {
        // Using the information
        setArticles(news.articles);
        console.log(news.articles)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]); // <-- Corrected the dependency array

  return (
    <div className="App">
      <header className='header'>
      <h1>News App</h1>
      <input type='text' onChange={(event)=>{
        if(event.target.value!=="")
          {
            setCategory(event.target.value);
          }
          else{
            setCategory("india")
          }

      }} placeholder='Search News'></input>
      </header>
      <section className='news-Articles'>
      {
        articles.length!==0?
        articles.map((article)=>{
          return(
            <News article={article} />
          )
        })
        :
        <h3>no news</h3>
      }
      <News/>
      
      </section>
    </div>
  );
}

export default App;
