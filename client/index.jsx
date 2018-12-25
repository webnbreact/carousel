import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';

// constructor() {
//   super();
// }
// render() {
const App = () => (
  <div>
    {' '}
    <Landing />
    {' '}
  </div>
);

ReactDOM.render(<App />, document.getElementById('carouselroot'));
