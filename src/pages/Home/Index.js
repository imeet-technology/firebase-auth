import React, { useContext } from 'react'
import { ProtectedContext } from '../../context/ProtectedContext'
import Loading from '../../components/Loading';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const {mount,user,handleLogout} = useContext(ProtectedContext);
  // const [mount,setMount] 
  // console.log(value);

  if(mount)
  {
    return <Loading/>
  }

  if(!user)
  {
    navigate('/login');
  }

  return (
    <section>
        <h1 className="text-center  text-gray-900 capitalize text-5xl">
        hlo mr. {user && user.displayName}
        </h1>
       { user && user.photoURL && <img className='w-40 rounded-md ' src={user.photoURL} />
}
        <button onClick={handleLogout} className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>logout</button>
    </section>
  )
}

export default Home