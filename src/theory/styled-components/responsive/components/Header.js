import React from 'react';
import {StyledHeader, Nav, Logo, Image} from './styles/Header.styled'
import {Button} from './styles/Button.styled'
import {Flex} from './styles/Flex.styled'
import {Container} from './styles/Container.styled'

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt=''/>
                    <Button>Some text</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Some text</h1>
                        <p> More text....</p>
                    </div>

                    <Button bg='#ff0099' color='#fff'>Btn text</Button>

                    <Image src='./images/illustration-mockups.svg' />
                </Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;