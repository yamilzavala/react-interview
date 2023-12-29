import React, {useState} from 'react';
import {GoChevronDown, GoChevronLeft } from 'react-icons/go'
import style from './ExpandablePanel.module.css'

const ExpandablePanel = ({header, children}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={style.card}>
            <div>
                <div className={style.container}>
                    {header}    
                    <div onClick={() => setExpanded(!expanded)}>                    
                        {expanded ? <GoChevronDown/> : <GoChevronLeft/>}              
                    </div> 
                </div>
            </div>

            {expanded && <div> {children} </div>}
            
        </div>
    );
};

export default ExpandablePanel;