import React, {useState, useEffect} from 'react';

export default function Fc({emotion}) {
    const [state, setState] = useState(1)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

   //On every render 
   useEffect(() => {
    console.log('useEffect every render')
   })

    //On first render only - similar to lifecycle componentDidMount
    useEffect(() => {
        console.log('useEffect On first render only')
    }, [])

    //On first render and whenever dependency change
    useEffect(() => {
        console.log('On first render and whenever dependency change: ', state)
    }, [state])

    //similar to lifecycle componentWillUnmount
    useEffect(() => {
        console.log('attach')
        window.addEventListener('resize', updateWindowWidth)

        return () => {
            console.log('detach')
            window.removeEventListener('resize', updateWindowWidth)
        }
    }, [])

 
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    return (<div>
        FC
        <br/>
        State: {state} - {windowWidth}
        <br/>
        Props: {emotion}
        <br/>
        <button onClick={() => setState(state + 1)}>Clic me</button>
    </div>)
} 