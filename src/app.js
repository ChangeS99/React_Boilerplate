console.log("app.js is running");

//JSX
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';

function App () {
    return (
        <div>
            Hello World
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))