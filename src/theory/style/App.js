import './app.css';
import classNames from 'classnames';
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: yellow;
    color: black;
`;

const App = () => {
    const styleApp={
        backgroundColor: 'blue',
        margin: '20px'
    }

    const appClasses = classNames({
        foo: true,
        baz: false
    })

    return (
        <div >
            <div className="app">Class name</div>
            <div style={styleApp}>Style inline</div>
            <div className={appClasses}>Class name librery</div>
            <StyledDiv>Styled component</StyledDiv>
        </div>
    );
};

export default App;