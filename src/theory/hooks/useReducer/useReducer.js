export const initialState = {
    posts: null,
    isLoading: false,
    error: null
} 

export const reducer = (state, action) => {
    console.log('reducer: ',state, action)
    switch(action.type) {
        case 'getPostsStart': 
            return {
                ...state,
                isLoading: true
            }
        case 'getPostSuccessfully':
            return {
                ...state,
                isLoading: false,
                posts: action.payload
            }
        case 'getPostsFailed':
            return {
                ...state,
                isLoading: false,
                error: true
            }    
        default:
            return state;
    }
}

