import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [expandedIdx, setExpandedIdx] = useState(0);

    const renderedItems = items.map((item, idx) => {
        const isExpanded = expandedIdx === idx;

        return (<div key={item.id}>
            <div>{item.label}</div>
            <div>{item.content}</div>
        </div>)
    })

    return (
        <div>
            {renderedItems}
        </div>
    );
};

export default Accordion;