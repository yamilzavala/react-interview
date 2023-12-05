import {Provider} from 'react-redux';
import {user_store} from './store'


const ReduxUserProvider = ({children}) => {
    return (
       <Provider store={user_store}>
            {children}
       </Provider>
    );
};

export default ReduxUserProvider;