import { useState } from 'react'
import * as React from 'react'
import './App.css'

//Making my own custom hook that runs Internally built hooks. What are hooks in React?
const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(localStorage.getItem(key) || initialState); //hook that returns the current state of a cvalue
  React.useEffect(()=>{localStorage.setItem(key, value)}, [value]); //hook to run localStorage side effect that stores the current state

  return [value, setValue]
}

const App = () => {
  
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

const [searchTerm, setSearchTerm] = useStorageState('search','');

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
} // this is a callback handler passed via props
  
const searchedStories = stories.filter((story)=>{
  return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  })
  return (
    // props are passed as values to attributes in components here
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} /> {/**passing searchterm and handlesearch via props to Search component */}
      <hr />
      <List list={searchedStories}/>  {/**Passing the filtered searchStories List via props to List component */}
    </div>  
  );
}

const Search = ({search, onSearch}) => { //object destructuring to obtain search and onSearch properties via props as arrow function parameters. Normally it could be: {search, onSearch} = props

  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"  onChange={onSearch} value={search}/>
    </div>
    );
}

const List = ({list}) => ( //destructring list
    <table border="1">

      <tr>
        <th><b>Title</b></th>
        <th><b>DOI</b></th>
        <th><b>Author</b></th>
        <th><b>Comments</b></th>
        <th><b>Votes</b></th>
      </tr>
      {list.map((item) => (
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
