import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const { register, formState: { errors }, handleSubmit } = useForm();

    if (gUser) {
        console.log(user);
    }

    let signUperror;

    if (loading || gLoading || updating) {
        return <Loading></Loading>


    }
    if (error || gError || UpdateError) {
        signUperror = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    const onSubmit = async data => {

        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('Updated profile');
        navigate('/appointment');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-center text-2xl font-bold">Sign Up</h2>
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
                            <span class="label-text">Name</span>

                        </label>
                            <input

                                type="text"
                                placeholder="your name" class="input input-bordered w-full max-w-xs"
                                {...register("name",

                                    {

                                        required: {
                                            value: true,
                                            message: 'name is required'
                                        }

                                    })
                                }
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

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
                            signUperror
                        }

                        <input className='btn w-full max-w-xs' type="submit" value='SUBMIT' />

                        <p><small>Already have an account ?<Link className='text-secondary' to='/login'>Please Login</Link></small></p>
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

export default SignUp;