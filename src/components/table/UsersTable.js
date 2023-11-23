import React, {useState} from 'react';
import useUserTableContext from '../../hooks/use-user-table-context';
import Pagination from './Pagination';
import UserRow from './UserRow';
import './UsersTable.css'

const UsersTable = () => {
    const {usersData} = useUserTableContext()

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = usersData.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const renderedUsers = currentUsers.map(user => <UserRow key={user.id} user={user} />)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedUsers}
                </tbody>
            </table>
            <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={usersData.length}
            currentPage={currentPage}
            paginate={paginate}
      />
        </div>
    )
}

export default UsersTable;