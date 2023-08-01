import React from "react";
class State extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

increment = () => {
    this.setState((prevState) => ({
        count: prevState.count + 1,
    }));

}
decrement = () => {
    this.setState((prevState) => ({
        count: prevState.count - 1,
    }));

}
render()
{
    return (
        <div>
            <div>hey{this.state.count}</div>
            <button onClick={this.increment}>increment </button>
            <button onClick={this.decrement}>decrement</button>


        </div>


    )

}
}
 export default State;
