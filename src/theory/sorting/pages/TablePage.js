import React from 'react'
import { tableConfig } from './Table.config'
import {data} from './Table.data'
import SortableTable from '../components/SortableTable'
import Table from '../components/Table'

export default function TablePage() {

  return (
    <>
      <label>Unsorted table</label>
      <Table data={data} config={tableConfig}/>

      <br/>
      <label>Sorted table</label>
      <SortableTable data={data} config={tableConfig}/>
    </>
  )
}
