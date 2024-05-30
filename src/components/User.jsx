import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
  const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-center p-4 text-white text-3xl'>
      User: {userid}
    </div>
  )
}

export default User
