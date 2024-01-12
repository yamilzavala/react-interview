import React from 'react'
import { Square } from './Square'


export default function Table({data, config}) {
  const renderedHeaders = config.map((column, idx) => (
    <th key={idx}>{column.label}</th>)
  )

  // const renderedRows = data.map((value, idx) => (
  //   <tr key={idx}>
  //     <td>{config[0].render(value)}</td>
  //     <td><Square color={config[1].render(value)}/></td>
  //     <td>{config[2].render(value)}{value.score}</td>
  //   </tr>
  // ))
  const renderedRows = data.map((fruit, idx) => {
    const renderedCells = config.map((col,idx2) => {
      return <td key={idx2}>{col.render(fruit)}</td>
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
