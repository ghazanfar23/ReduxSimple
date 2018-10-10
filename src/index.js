import React from 'react';
import ReactDOM from 'react-dom';
// Create new component
// produce some html
const App =  () => {
    // this html is jsx
    return <div>HI!</div>;
}

// take this components HTML and put it
// on the page (DOME)
ReactDOM.render(<App />, document.querySelector('.container'));