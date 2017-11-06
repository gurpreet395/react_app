import React from 'react';
import Content from "./Content.jsx";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                "message": "YO mai",
                "count": 1
            }

        }
    }
    handleState(){
        console.log("clicked")
        let newdata = {
            "message":"state changed",
            "count": this.state.data.count+1
        }
        this.setState(this.state.data = newdata)
    };
    render() {
        var myStyle = {
            color: 'blue'
        };
        return (
            <div style={myStyle}>
                <div>
                    <button onClick={()=>{this.handleState()}}>Click me</button>
                    <Content message={this.state.data}/>
                </div>
            </div>
        );
    }
}
export default App;