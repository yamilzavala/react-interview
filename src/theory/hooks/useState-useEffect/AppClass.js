import React from 'react';

export class AppClass extends React.Component {
    state = {
        count: 0
    }

    handleCount = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        });
    } 

    componentDidMount() {
        document.title = `Count: ${this.state.count}`
    }

    componentDidUpdate() {
        document.title = `Count: ${this.state.count}`
    }

    render(){
        return(
            <div>
                Count: {this.state.count}
                <button onClick={() => this.handleCount()}>+</button>
            </div>
        )
    }
}