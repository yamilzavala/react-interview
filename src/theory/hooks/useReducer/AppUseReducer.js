import {useEffect, useReducer} from 'react';
import {reducer, initialState} from './useReducer'
import axios from 'axios';


const AppUseReducer = () => {
    const[state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({type: 'getPostsStart'})        
        axios.get('http://localhost:3001/posts')
            .then(res => {
                dispatch({type:'getPostSuccessfully', payload: res.data})
            }).catch(e => dispatch({type: 'getPostFailed'}))
    }, [])

    const renderedPosts = state.posts?.map((post, idx) => (
        <div key={idx}>{post.name}</div>
    ))

    return (
        <div>
            <h1>useReducer</h1>
            {state.isLoading && <div>Loading...</div>}
            {state.error && <div>Error fetching posts</div>}
            {renderedPosts}
            <button onClick={() => {dispatch({type: 'getPostsStart'});}}>Start getting posts</button>
        </div>
    );
};

export default AppUseReducer;