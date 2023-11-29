import {Component} from 'react';
import {withDataFetching} from './withDataFetching'

export class Repos extends Component {

    render(){
        const {loading, error, data} = this.props;
        if(error) {
            return this.state.error
        }

        if(loading) {
            return 'Loading...'
        }

        return (
            <div>
                <ul>
                    {data.map(({id, html_url, full_name},idx) => (
                        <li key={idx}>
                            <a href={html_url} target="_blank">{full_name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default withDataFetching({dataSource: 'https://api.github.com/users/monsterlessonsacademy/repos'})(Repos);