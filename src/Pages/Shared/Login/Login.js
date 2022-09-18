import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from.pathname || "/";


    if (gUser || user) {
        navigate(from, { replace: true });
    }

    let signInerror;

    if (loading || gLoading) {
        return <Loading></Loading>


    }
    if (error || gError) {
        signInerror = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    const onSubmit = data => {

        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs"><label class="label">
                            <span class="label-text">What is your email?</span>

                        </label>
                            <input

                                type="email"
                                placeholder="your email" class="input input-bordered w-full max-w-xs"
                                {...register("email",

                                    {

                                        required: {
                                            value: true,
                                            message: 'email is required'
                                        },

                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'provide a valid email'
                                        }

                                    })
                                }



                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs"><label class="label">
                            <span class="label-text">password</span>

                        </label>
                            <input

                                type="password"
                                placeholder="your email" class="input input-bordered w-full max-w-xs"
                                {...register("password",

                                    {

                                        required: {
                                            value: true,
                                            message: 'password is required'
                                        },

                                        minLength: {
                                            value: 6,
                                            message: 'Atleast 6 characters is required'
                                        }

                                    })
                                }



                            />
                            <label class="label">
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>

                        {
                            signInerror
                        }

                        <input className='btn w-full max-w-xs' type="submit" value='Login' />

                        <p><small>New to doctor portal?<Link className='text-secondary' to='/signup'>Create new account</Link></small></p>
                    </form>

                    <div className="divider">OR</div>
                    <button className="btn btn-outline"
                        onClick={() => signInWithGoogle()}

                    >Continue with google</button>

                </div>
            </div>


        </div>

    );
};

export default Login;