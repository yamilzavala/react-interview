import React, {useContext, createContext} from 'react';

//share data gobally between components that are not necessary a parent child components. We can share data in differents deep

const Context = createContext()

function Child({value}) {
    return <GrandChild/>
}

function GrandChild() {
    const context = useContext(context)
    return <div>{context}</div>
}

const ContextFC = () => {
    return (
        <Context.Provider value={1}>
            <div>
                <Child />
            </div>
        </Context.Provider>
    );
};

export default Context;