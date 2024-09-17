import React from 'react'
import Boards from '../components/Boards'
import TableClients from '../components/TableClients/views/TableClients'

const index = () => {
    return (
        <div className='flex flex-col w-full pt-4'>
            <div className='flex flex-wrap gap-3 mb-5 px-3'>
                <Boards />
            </div>
            <TableClients />
        </div>
    )
}

export default index