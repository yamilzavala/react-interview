import React from 'react';
import {Container, Form, Field, Label, Input, Button} from './styled'

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