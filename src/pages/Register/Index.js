import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { ImSpinner, ImSpinner11 } from 'react-icons/im';
// import {auth} from ''


const Login = () => {
    const navigate  = useNavigate();
    const [loading,setLoading] = useState(false);

  const validationSchema = yup.object({
    email:yup.string().email().required("email is required"),
    password:yup.string().min(6).required("password is required"),
    name:yup.string().min(3).required("Name is required"),
    url:yup.string().min(3).required("url image is required"),
  })


  const initalvalues={
    email:"",
    password:"",
    name:"",
    url:"https://www.w3schools.com/whatis/img_npm.jpg"
  }

  const handlesubmit=async(e,{resetForm})=>{
        try {
          setLoading(true);
            const user = await createUserWithEmailAndPassword(auth,e.email,e.password);
              updateProfile(auth.currentUser,{
                displayName:e.name,
                photoURL:e.url
              })
              navigate('/');
          setLoading(false);
        } catch (error) {
          setLoading(false);
          toast.error(error.message);
        }
  }


  return (
    <>
    
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
 <Formik initialValues={initalvalues} validationSchema={validationSchema} onSubmit={handlesubmit}>
 <Form className="lg:w-[50%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col justify-center w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
     
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
        <Field type="text" id="email" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <p className="text-red-600">
          <ErrorMessage name='name' />
        </p>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <Field type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <p className="text-red-600">
          <ErrorMessage name='email' />
        </p>
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Password </label>
        <Field type="text"  name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <p className="text-red-600">
          <ErrorMessage name='password' />
        </p>
      </div>

      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Image Url </label>
        <Field type="text"  name="url" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <p className="text-red-600">
          <ErrorMessage name='url' />
        </p>
      </div>

      {loading ? <>
            <ImSpinner className='text-2xl text-center m-auto animate-spin' />
      </>:<button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit </button>}
     <Link to={'/login'} className='text-center text-xl '>Login &rarr;</Link>
    </Form>
 </Formik>
    
  </div>
</section>

    </>
  )
}

export default Login