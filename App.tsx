import React from 'react';
import { Provider } from 'react-redux'

import SignIn  from './src/screens/signIn'
import store from './src/store';

const App = () => {
    return(
        <Provider store={store}>
            <SignIn /> 
        </Provider>
    );
} 

export default App;
