import { GoChevronDown, GoChevronUp } from "react-icons/go"
import style from '../components/SortablrTable.module.css'

export function getIcons(label, sortBy, sortOrder) {
    if(label !== sortBy){
        return <div className={`${style.flexContainerColum} ${style.marginLeft}`}>
                    <GoChevronUp/>
                    <GoChevronDown/>
              </div>
    }

    if (!sortOrder) {
        return <div className={`${style.flexContainerColum} ${style.marginLeft}`}>
                    <GoChevronUp/>
                    <GoChevronDown/>
               </div>
    } else if(sortOrder === 'asc'){
        return <GoChevronUp className={style.marginLeft}/>
    } else if(sortOrder === 'desc'){
        return <GoChevronDown className={style.marginLeft}/>
    }
}