import {Container} from './styles/Container.styled';
import {Flex} from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src='./images/logo_white.svg' alt=''/>
                <Flex>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>

                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>

                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p>&copy; All rights reserved</p>
            </Container>
        </StyledFooter>
    );
};

export default Footer;