'use strict';

console.log('this is running');

/* This is JSX code */
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);

// Get the div from the HTML file
var appRoot = document.getElementById('app');

// Render the content using ReactDOM (what you want to render, where you want to render it)
ReactDOM.render(template, appRoot);
