"use client"
import React from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from '@/schemas';
import { useRouter } from 'next/navigation';

function Signup() {

    const router = useRouter();

    const onSubmit = async (values: any, actions: any) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
        actions.resetForm();
        router.push('/')
    }

    const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: signUpSchema, onSubmit
    })

    return (
        <div className="relative mt-36 mb-32 mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10" >
            <div className="w-full">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
                    <p className="mt-2 text-gray-500">Don&apos;t have an account?</p>
                </div>
                <div className="mt-5">
                    <form onSubmit={handleSubmit} action="">
                        <div className="relative mt-6">
                            <input
                                type="text"
                                id="username"
                                onChange={handleChange}
                                value={values.username}
                                placeholder="Full Name"
                                className="peer mt-1 w-full border-b-2 text-black border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                            <label htmlFor="name" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Full Name</label>
                            {errors.username && <p className='-mb-6 text-red-500'>{errors.username}</p>}
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="email"
                                id="email"
                                onChange={handleChange}
                                value={values.email}
                                placeholder="Email Address"
                                className="peer mt-1 w-full border-b-2 text-black border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                            <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                            {errors.email && <p className='-mb-6 text-red-500'>{errors.email}</p>}
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="password"
                                id="password"
                                onChange={handleChange}
                                value={values.password}
                                placeholder="Password"
                                className="peer peer mt-1 w-full border-b-2 text-black border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                            <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                            {errors.password && <p className='-mb-6 text-red-500'>{errors.password}</p>}
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="password"
                                id="confirmPassword"
                                onChange={handleChange}
                                value={values.confirmPassword}
                                placeholder="Password"
                                className="peer peer mt-1 w-full border-b-2 text-black border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                            <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Confirm Password</label>
                            {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
                        </div>
                        <div className="my-6">
                            <button type="submit" disabled={isSubmitting} className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign up</button>
                        </div>
                        <p className="text-center text-sm text-gray-500">Already a member?
                            <a href="/login"
                                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Login
                            </a>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;