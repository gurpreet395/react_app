import React from 'react';
import Content from "./Content.jsx";
import Home from "./home.jsx";
import About from "./about.jsx";
import Main from "./main.jsx"
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                "message": "initial state"}
        }
        this.updatedState = this.updatedState.bind(this);
    }
    componentWillMount() {
        console.log("component will moumt ");
    }

    componentDidMount() {
        console.log("component did mount");
    }

    componentWillUpdate(){
        console.log('component will update.');
    };
    handleState(){
        let newdata = {
            "message":"state changed",
            "count": this.state.data.count+1
        }
        this.setState(this.state.data = newdata)
    };
    updatedState(e){
     let new_data = {
         "message": e.target.value
     }
     this.setState(this.state.data = new_data)
    }

    render() {
        var myStyle = {
            color: 'blue'
        };
        return (
            <div style={myStyle}>
                <div>
                    {this.state.data.message}
                    <Main/>
                </div>
            </div>

        );
    }
}
export default App;