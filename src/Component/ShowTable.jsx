import React, { createContext } from 'react'
import TableData from './TableData'

const data = createContext()

function ShowTable({ addContact, setAddContact, toggle, setToggle,EditItem,editItemKey }) {
  // console.log(addContact);
  return (
    <div>
      <data.Provider value={addContact}>
        <TableData setAddContact={setAddContact} toggle={toggle} setToggle={setToggle} EditItem={EditItem} editItemKey={editItemKey}/>
      </data.Provider>
    </div>
  )
}

export default ShowTable;
export { data };