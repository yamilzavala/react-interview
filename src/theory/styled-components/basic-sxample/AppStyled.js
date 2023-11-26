import styled from 'styled-components'

//H1
const Title = styled.h1`
font-size: 16px;
text-align: center;
color: green;
`;

//wrapper
const Wrapper = styled.div`
padding: 10px;
`;

//Button
const Button = styled.button`
color: black;
cursor: pointer;
border: 1px solid black;
border-radius: 5px;
padding: 4px;
background: transparent;
font-size: 16px;
&:hover {
    background: blue;
}
`;

//Extend
const ButtonSecondary = styled(Button)`
color: black;
background: transparent;
&:hover {
    background: purple;
}
`;

const Link = ({url, name, className}) => {
    return <a href={url} className={className}>{name}</a>
}

//custom component
const CustomLink = styled(Link)`
color: black;
cursor: pointer;
`;



const AppStyled = () => {
    return (
        <Wrapper>
            <Title>Styled components</Title>
            <Button>Click me</Button>
            <ButtonSecondary>Secondary</ButtonSecondary>
            <CustomLink url={'/'} name='link'></CustomLink>
        </Wrapper>
    );
};

export default AppStyled;