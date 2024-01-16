import React, {Fragment} from 'react'

export default function Table({data, config}) {
  const renderedHeaders = config.map((column, idx) => {
    if(column.header) return <Fragment key={idx}>{column.header()}</Fragment> 
    return <th key={idx}>{column.label}</th>
  })

  const renderedRows = data.map((rowData, idx) => {
    const renderedCells = config.map((col,idx2) => {      
      return <td key={idx2}>{col.render(rowData)}</td>
    })

    return (
      <tr key={idx}>
        {renderedCells}
      </tr>
    )
})
  
  return (
    <table className='table-width'>      
      <thead>
        <tr>
          {renderedHeaders}
        </tr>
      </thead>  

      <tbody>
          {renderedRows}
      </tbody>
    </table>
  )
}
