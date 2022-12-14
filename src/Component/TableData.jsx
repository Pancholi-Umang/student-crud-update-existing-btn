import React, { useContext } from 'react'
import { data } from './ShowTable'


function TableData({ setAddContact ,EditItem, toggle, setToggle,editItemKey}) {
    const addContact = useContext(data);
    // console.log(addContact);

    const deleteItems = (index) => {
        const DeletMydata = addContact.filter((element) => index !== element.id);
        setAddContact(DeletMydata);
    };

   
    
    return (
        <div className='mt-3'>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th colSpan='2' scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addContact.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.email}</td>
                                    <td><button onClick={() => EditItem(value.id)} className='btn-secondary mb-1'>{editItemKey==value.id?'Update':'Edit'}</button></td>
                                    <td><button onClick={() => deleteItems(value.id)} className='btn-secondary mb-1'>Delete</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TableData