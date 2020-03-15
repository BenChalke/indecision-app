class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisiblity = this.toggleVisiblity.bind(this);
        
        this.state = {
            visible: false,
        }
    }
    toggleVisiblity() {
        this.setState((prevState) => {
            return{
                visible: !prevState.visible, 
            }
        })
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={this.toggleVisiblity}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>

                {this.state.visible && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));