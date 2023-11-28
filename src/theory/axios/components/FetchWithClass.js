import { Component } from "react";
import axios from "axios";

const baseUrl = 'http://localhost:3001/posts';

export class FetchClass extends Component {

   state = {
        loading: false,
        data: [],
        error: false
   }

   componentDidMount() {
    try {
        this.setState({loading: true})
        axios.get('http://localhost:3001/posts').then(res => this.setState({data: res.data, loading: false}))        
    } catch (error) {
        this.setState({error: true, loading: false})
    }
   }

    render() {
        return (
            <div>
                {this.state.loading && <div>Loading...</div>}
                {this.state.error && <div>Error fetching data...</div>}
                {this.state.data.map((item,idx) => (
                    <div key={idx}>{item.title}</div>
                ))}
            </div>
        )
    }
};

export default FetchClass;