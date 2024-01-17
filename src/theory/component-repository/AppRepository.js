import React from 'react';
import Button from './components/Button';
import { GoBellFill, GoCodeReview, GoDependabot } from "react-icons/go";

const AppRepository = () => {
    const handleClick = () => {
        console.log('Clicked')
    }

    return (
        <div>
            <Button primary onClick={handleClick}>
                <GoBellFill/>
                Some thex
            </Button>
            <Button secondary>
                <GoCodeReview/>
                Some thex
            </Button>
            <Button success>
                <GoDependabot/>
                Some thex
            </Button>
            <Button warning rounded>Some thex</Button>
            <Button danger>Some thex</Button>
        </div>
    );
};

export default AppRepository;