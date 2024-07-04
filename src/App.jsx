import { useState } from 'react'
import * as React from 'react'
import './App.css'


const App = () => {
  
  const welcome = {
    greeting: 'Best books to read in 2024',
    title: 'with their authors',
  };
  
  const stories = [
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

const [searchTerm, setSearchTerm] = React.useState('');

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
}
  
const searchedStories = stories.filter((story)=>{
  return story.title.toLowerCase().includes(searchTerm.toLowerCase());
})
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories}/>
    </div>  
  );
}

const Search = (props) => {

  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"  onChange={props.onSearch}/>
    </div>
    );
}

const List = (props) => (
    <table border="1">

      <tr>
        <th><b>Title</b></th>
        <th><b>DOI</b></th>
        <th><b>Author</b></th>
        <th><b>Comments</b></th>
        <th><b>Votes</b></th>
      </tr>
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
