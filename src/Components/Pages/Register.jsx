import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {Helmet} from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Button from "../Sections/Elements/Button";


const Register = () => {

    const [error, setError] = useState('')
    const [hidden, setHidden] = useState(false)
    const [success, setSuccess] = useState('')
    const {registerAuth, setUser, profileUpdate} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { name, email, photo, password } = data
        const patternPhotoURL = /\.(jpeg|jpg|gif|png|bmp)$/i
        const patternPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        setError('')
        setSuccess('')

        if (!patternPhotoURL.test(photo)) {
            return setError('Kindly Provide a Valid photo URL')
        }
        if (!patternPassword.test(password)) {
            return setError('Kindly provide at least a uppercase, a lowercase & 6 digits of password')
        }
        await registerAuth(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)                
                window.location.reload()                
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
            .then(() => {
              profileUpdate(name, photo);
            })
    }

    return (
        <div className="bg-animated p-0 md:p-20 lg:p-20 pt-4 md:pt-[18px]">
             <Helmet>
                <meta charSet="utf-8" />
                <title>Realty Nest || Register</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
            <div className="text-center mt-[75px] lg:mt-[23px]">
                <p className="animate__animated animate__backInDown animate__fast text-3xl md:text-5xl font-bold text-[#00B5FF]">Register Now</p>
            </div>
            <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row h-[800px] md:h-[950px] lg:h-[600px] mx-auto bg-base-200 items-center gap-2 mt-[23px] rounded-none md:rounded-b-lg lg:rounded-xl overflow-hidden px-7 justify-end md:justify-end lg:justify-between p-0 md:p-5 lg:p-5">
                <div className="relative shrink-0 lg:w-1/2 lg:h-[500px] bg-base-100 md:px-0 lg:px-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label w-80">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="your name"
                                className="input input-bordered"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-500 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                name='photo'
                                type="text"
                                placeholder="your photo url"
                                className="input input-bordered"
                                {...register("photo")}
                            />
                            {errors.photo && <span className="text-red-500 mt-2">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name='password'
                                type={hidden ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500 mt-2">This field is required</span>}
                            <label className="label">
                                <p>Already have an account, <Link to='/login' className="text-blue-500 underline">Login Now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <Button text='Register Now' style='w-full'></Button>
                        </div>
                        <div className="mt-3">
                            {
                                error === "Firebase: Error (auth/email-already-in-use)." ? <p className="text-red-500">Your account is already registered</p> : <p className="text-red-500">{error}</p>

                            }
                            {
                                success && <p className="text-green-500">{success}</p>

                            }
                        </div>
                    </form>
                    <div>
                        <button onClick={() => setHidden(!hidden)} className="absolute bottom-[130px] lg:bottom-[170px] right-[15px] lg:right-[50px] hover:bg-slate-400/75 duration-[400ms] ease-in-out text-[18px] p-[10px] rounded-full">{hidden ? <FaRegEyeSlash ></FaRegEyeSlash> : <FaRegEye></FaRegEye>}</button>
                    </div>
                </div>
                <div className="w-[86%] lg:w-[2px] h-[2px] lg:h-full bg-[#26262633] mb-7 lg:mb-0">
                </div>
                <div className="lg:h-[400px] ">
                    <img src="https://i.pinimg.com/564x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg" alt="" className="w-[200px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[350px] lg:h-[450px] my-auto lg:my-0 rounded-md mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Register;