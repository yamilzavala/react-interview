import {useContext} from 'react';
import {ThemeContext} from './context/theme'

const AppTheme = () => {
    const {theme, toggleTheme, isDark} = useContext(ThemeContext)

    return (
        <div className='app' style={{ backgroundColor: theme.backgroundColor, color: theme.color}}>
            <div className='text'> {isDark ? 'Dark mode' : 'Light mode'}</div>            
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};

export default AppTheme;