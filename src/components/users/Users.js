import React from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'



const Users = ({ users, isLoading}) => {
    if(isLoading) {
        return <Spinner />
    } else {
        return (
            <div style={usersStyle}>
                {users.map(user => (
                <Useritem key={user.id} user={user}/>
            ))}
            </div>
        )
    }
}


const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}


Users.propTypes = {
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}
export default Users
