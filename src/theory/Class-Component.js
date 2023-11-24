import React from 'react'

export default class ClassComponent extends React.Component {
    //constructor
    constructor(props) {
        console.log('Constructor called')
        super(props)
        this.state = {
            test: 'test state',
            name: 'paul'
        }
    }

    //life cycle - Mount
    //Constructor - render - conponentDidMount
    conponentDidMount() {
        this.setState({name: 'juan'})
        console.log('conponentDidMount called')
    }

     //life cycle - Update
     //render - componentDidUpdate
    componentDidUpdate() { 
        console.log('componentDidUpdate called')
    }

    //life cycle - Unmount
     //componentWillUnmount
     componentWillUnmount() {
        console.log('componentWillUnmount called')
     }

    //render
    render() {
        const {name, test} = this.state;
        const {emotion} = this.props;
        return(
            <div>
                Class component
                <br/>
                State: {test} - {name}
                <br/>
                Props: {emotion}
                <br/>
                <button onClick={() => this.setState({test: 'Updated'})}>Clic me</button>
            </div>
        )    
    }
}