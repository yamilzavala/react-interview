export const mapStateToProps = (state, ownProps) => {
    const usersWithFoo = state.filter(user => user.includes(ownProps.searchText))
    console.log('conect state: ', state, ownProps)
    return {
        users: state,
        usersWithFoo
    }
}

const addUser = (username) => {
    return {type: 'ADD_USER', payload: username}
}

export const mapDispatchToProps = {
   addUser,
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addUser: (username) => dispatch({type: 'ADD_USER', payload: username})
//     }
// }