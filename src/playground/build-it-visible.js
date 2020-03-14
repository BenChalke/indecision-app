// Get the div from the HTML file
const appRoot = document.getElementById("app");

let visible = false;
let textToggle = ''

const toggleVisiblity = () => {
    visible = !visible;
    render();
}


const render = () => {

    const template = (
        <div>
            <h1>Visibility Toggle</h1>

            <button onClick={toggleVisiblity}>{visible ? 'Hide Details' : 'Show Details'}</button>

            {visible && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();