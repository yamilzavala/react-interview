import React, {useState} from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({items}) => {
    const [expandedIdx, setExpandedIdx] = useState(-1);

    const handleExpand = (id) => {
        if (id === expandedIdx) {
            setExpandedIdx(-1)
        } else {
            setExpandedIdx(id)
        }
    }

    const renderedItems = items.map((item, idx) => {
        const isExpanded = expandedIdx === idx;
        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>
        return (
        <div key={item.id} onClick={()=>handleExpand(idx)}>
            <div className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer text-gray-600">{item.label} {icon}</div>
           { isExpanded && <div className="border-b p-5" >{item.content}</div>}
        </div>)
    })

    return (
        <div className='border-x border-t rounded'>
            {renderedItems}
        </div>
    );
};

export default Accordion;