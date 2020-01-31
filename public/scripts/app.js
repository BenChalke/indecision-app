console.log('this is running');

/* This is JSX code */
// const template = <p>This is JSX from app.js</p>;

/* This is what the output will be with Babel */
const template = React.createElement(
    "p",
    null,
    "This is JSX from app.js",
)

// Get the div from the HTML file
const appRoot = document.getElementById('app');

// Render the content using ReactDOM (what you want to render, where you want to render it)
ReactDOM.render(template, appRoot);