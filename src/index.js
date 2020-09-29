import React from 'react';
import { render } from 'react-dom';

import 'bulma/css/bulma.css';
import Articles from './Articles';
import { BrowserRouter, Route } from 'react-router-dom';
import Article from './Article';

let jwt =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjA0OTgsInVzZXJuYW1lIjoiZWRjdmZyIiwiZXhwIjoxNjAxMDE3OTQ0fQ.aoSeNvLcNrAb1HN4taA1I8-nyS9QNq5dzd5wNhBzKfE';

function App(props) {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Articles} />
      <Route path='/article/:slug' exact component={Article} />
    </BrowserRouter>
  );
}

render(<App />, document.getElementById('root'));
