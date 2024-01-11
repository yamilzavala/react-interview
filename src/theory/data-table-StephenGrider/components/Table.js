import React from 'react'

const Square = ({color}) => {
  return <div className={color}></div>
}

export default function Table({data}) {
  const headerValues = ['Fruit', 'Color', 'Score']

  const renderedHeader = headerValues.map((item, idx) => (
    <th key={idx}>{item}</th>
  ))

  const renderedRows = data.map((value, idx) => (
    <tr key={idx}>
      <td>{value.name}</td>
      <td><Square color={value.color}/></td>
      <td>{value.score}</td>
    </tr>
  ))
  
  return (
    <table className='table-width'>      
      <thead>
        <tr>
          {renderedHeader}
        </tr>
      </thead>  

      <tbody>
          {renderedRows}
      </tbody>
    </table>
  )
}
