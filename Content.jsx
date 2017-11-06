import React from 'react'
class Content extends React.Component {
    render(){
        return(
            <div>
                <div>{this.props.message.message}</div>
                <div>{this.props.message.count}</div>
            </div>
            );
        }
};
export default Content