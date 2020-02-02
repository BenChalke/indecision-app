console.log('this is running');

/* This is JSX code */
const template = <h1>Indecision App</h1>;

// Get the div from the HTML file
const appRoot = document.getElementById('app');

// Render the content using ReactDOM (what you want to render, where you want to render it)
ReactDOM.render(template, appRoot);