import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from '../environment.js';
import SearchBar from './components/search_bar';

const App = () => {
  return (
    <div>
       <SearchBar />
    </div>
  );
}

console.log(API_KEY)


ReactDOM.render(<App /> , document.querySelector('.container'));
