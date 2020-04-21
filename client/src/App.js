import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import {Route} from 'react-router-dom';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
  console.log(savedList)
  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path ='/'>
        <MovieList/>
      </Route>
      <Route exact path ='/movies/:id'>
        <Movie/>
      </Route>

    </div>
  );
};

export default App;
