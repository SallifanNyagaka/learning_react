import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
  
  const welcome = {
    greeting: 'Best books to read in 2024',
    title: 'with their authors',
  };
  
  const stories = [
    {
      title: 'Title',
      url: 'DOI',
      author: 'Author',
      num_comments: 'Comments',
      points: 'Votes',
      objectID: 0,
    },
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
];
  
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories}/>
    </div>  
  );
}

const Search = () => {
  
  const handleChange = (event) =>{
    console.log(event); // Synthetic event
    
    console.log(event.target.value); //value of target (here: input HTML element)
  }
  
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"  onChange={handleChange}/>
    </div>
    );
}

const List = (props) => (
    <table border="1">
      {props.list.map((item) => (
        <tr key={item.objectID}>
          <td>{item.title}</td>
          <td>
          <a href={item.url}>{item.title}</a>
          </td>
          <td>{item.author}</td>
          <td>{item.num_comments}</td>
         <td>{item.points}</td>
         </tr>
      ))}
    </table>
  );

export default App
