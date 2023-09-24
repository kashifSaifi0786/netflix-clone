'use client'

import { useCallback, useState } from "react";
import Input from "../common/Input";
import { FcGoogle, } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from "axios";
import { BiLoaderAlt } from "react-icons/bi";

const Auth = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant(current => current === 'login' ? 'register' : 'login')
    }, [])

    const login = useCallback(async () => {
        setLoading(true);
        signIn('credentials', {
            email,
            password,
            redirect: false,
        })
            .then((callback) => {
                setLoading(false)
                if (callback?.error) {
                    console.log(callback.error)
                }

                else {
                    router.push('/profile')
                }

            });
    }, [email, password, router])

    const register = useCallback(async () => {
        setLoading(true)
        try {
            await axios.post('/api/register', {
                name,
                email,
                password
            })
            login()
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }, [email, name, password, login])


    return (<div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className="text-white font-semibold text-4xl mb-8">
            {variant === 'login' ? 'Sign In' : 'Register'}
        </h2>
        <div className="flex flex-col gap-8">
            {variant == 'register' && <Input
                id="name"
                label="Username"
                value={name}
                onChange={(value) => setName(value)}
            />}
            <Input
                id="email"
                label="Email"
                value={email}
                onChange={(value) => setEmail(value)}
            />
            <Input
                id="password"
                label="Password"
                value={password}
                onChange={(value) => setPassword(value)}
            />
        </div>

        <button
            onClick={variant === 'login' ? login : register}
            className="
            bg-red-600
            text-white
            py-3
            rounded-md
            mt-10
            w-full
            hover:bg-red-700
            transition
            flex 
            items-center
            justify-center
            "
        >
            {loading ? (<BiLoaderAlt className="animate-spin" />) : variant === 'login' ? 'Login' : 'Sign Up'}
        </button>

        <div className="flex items-center justify-center gap-4 mt-10">
            <div
                onClick={() => signIn('google', {
                    callbackUrl: '/profile'
                })}
                className="
                h-10
                w-10
                bg-white
                rounded-full
                hover:opacity-80
                cursor-pointer
                transition
                flex
                items-center
                justify-center
                "
            >
                <FcGoogle size={30} />
            </div>
            <div
                onClick={() => signIn('github', {
                    callbackUrl: '/profile'
                })}
                className="
                h-10
                w-10
                bg-white
                rounded-full
                hover:opacity-80
                cursor-pointer
                transition
                flex
                items-center
                justify-center
                "
            >
                <BsGithub size={30} />
            </div>
        </div>

        <p className="text-neutral-500 mt-12">
            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
            <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer">
                {variant === 'login' ? 'Create an account' : 'Login'}
            </span>
        </p>
    </div>);
}

export default Auth;