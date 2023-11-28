import React, { Component } from 'react';

class Button extends Component {
    state = {
        count: 1
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>{this.props.text} {this.state.count}</button>
            </div>
        );
    }
}

class ClassComponent extends Component {
    render() {
        return (
            <div>
                <Button text='hello'/>
            </div>
        );
    }
}

export default ClassComponent;