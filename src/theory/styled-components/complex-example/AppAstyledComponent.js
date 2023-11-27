import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;

const Form = styled.div`
width: 100%;
background: #fff;
padding: 30px;
max-width: 450px;
border-radius: 5px;
box-shadow: rgba(3,3,3,0.1) 10px 0px 50px;
`;

const Field = styled.div`
margin-bottom: 30px`;

const Label = styled.label`
margin-right: 5px;
font-size: 20px`;

const Input = styled.input`
width: 80%;
padding: 10px 10px;
border: 0;
background: #f0f0f0;
border-radius: 5px;
color: #555;
font-weigth: 600; 
font-size: 18px;
`;

const Button = styled.button`
background: #037ef3;
color: #fff;
font-weigth: 600; 
border-radius: 5px;
padding: 10px 10px;
font-size: 18px;
cursor: pointer;
border: 0;

&:hover {
    background: #0271da;
}
`;

const AppStyledComponent = () => {
    return (
        <Container>
            <Form>
                <Field>
                    <Label>Name</Label>
                    <Input type="text" name="name"/>
                </Field>
                <Field>
                    <Label>Email</Label>
                    <Input type="text" name="email"/>
                </Field>
                <Field>
                    <Label>Password</Label>
                    <Input type="password" name="password"/>
                </Field>
                    <Button>Register!</Button>
            </Form>
        </Container>
    );
};

export default AppStyledComponent;