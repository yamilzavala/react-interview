import {Container} from './components/styles/Container.styled'
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global'
import content from './content'
import Card from './components/Card'
import Footer from './components/Footer'

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
    mobile: '768px',
}

const AppStyledResponsive = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <Header/>
                <Container>
                    {content.map((item, idx) => (
                        <Card key={idx} item={item} />
                    ))}
                </Container>       
                <Footer/> 
            </>
        </ThemeProvider>
    );
};

export default AppStyledResponsive;