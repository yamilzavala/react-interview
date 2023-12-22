import React from 'react';

const Skeleton = ({times}) => {
    const boxes = Array(times).fill(0).map((_,idx) => (<div key={idx}/>))
    return boxes;
};

export default Skeleton;