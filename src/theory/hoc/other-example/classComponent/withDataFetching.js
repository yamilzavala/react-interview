import {Component} from 'react';
//A function that add extra logic to out component - is a fuction that return another function
export const withDataFetching = (props) => {
    return (WrapperComponent) => {
        class WithDataFetching extends Component {

            constructor(props) {
                super()
                this.state = {
                    data: [],
                    loading: true,
                    error: false
                }
            }

            async fetchData() {
                try {
                    const response = await fetch(props.dataSource)
                    const data = await response.json()
                    this.setState({data: data, loading: false})            
                } catch (error) {
                    this.setState({loading: false, error: error.message})   
                }
            }

            componentDidMount() {
                this.fetchData()
            }        

            render() {
                const {loading, error, data} = this.state;
                return <WrapperComponent data={data} loading={loading} error={error} {...props} />
            }
        }

        return WithDataFetching;
    }
}

//withDataFetching({url: ''})(Repos)