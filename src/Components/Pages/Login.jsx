import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLogin from '../Sections/SocialLogin';


const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [error, setError] = useState('')
    const { loginAuth } = useContext(AuthContext)
    const [hidden, setHidden] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()



    const onSubmit = async (data) => {
        const { email, password } = data
        console.log(email, password)
        setError('')
        // loginAuth(email, password)
        //     .then(result => {
        //         console.log(result.user)
        //         const notify = () => toast.success('Successfully logged in');
        //         notify()
        //         navigate(location?.state ? location.state : '/')
        //         window.location.reload()
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         setError(error.message)

        //     })
        await loginAuth(email, password)
            .then(result => {
                console.log(result.user)
                const notify = () => toast.success('Successfully logged in');
                notify()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="bg-animated p-0 md:p-20 lg:p-20 pt-[18px]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Realty Nest || Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
            <div className="text-center mt-[80px] lg:mt-[23px]">
                <p className="animate__animated animate__backInDown animate__fast text-3xl md:text-5xl font-bold text-[#00B5FF]">Login Now</p>
            </div>
            <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row h-[690px] md:h-[900px] lg:h-[550px] mx-auto bg-base-200 items-center gap-2 mt-[23px] rounded-none md:rounded-xl lg:rounded-xl overflow-hidden px-7 justify-end md:justify-center lg:justify-between p-0 md:p-5 lg:p-5">
                <div className="shrink-0 w-[80%] md:w-3/4 lg:w-1/2  lg:h-[400px] bg-base-100 md:px-0 lg:px-10 relative">
                    <form onSubmit={handleSubmit(onSubmit)} className="lg:py-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 mt-2">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type={hidden ? "text" : "password"}
                                placeholder="password"
                                className="input input-bordered"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500 mt-2">This field is required</span>}
                            <label className="label">
                                <p>New to the website, <Link to='/register' className="text-blue-500 underline">Register Now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#262626] text-white text-lg font-bold">Login</button>
                        </div>
                        <div className="mt-3">
                            <p className="text-red-500 font-semibold">{error === 'Firebase: Error (auth/invalid-credential).' && "Invalid Email or Password"}</p>
                        </div>
                    </form>
                    <div>
                        <button onClick={() => setHidden(!hidden)} className="absolute top-[125px] lg:top-[145px] right-[15px] lg:right-[50px] hover:bg-slate-400/75 duration-[400ms] ease-in-out text-[18px] p-[10px] rounded-full">{hidden ? <FaRegEyeSlash ></FaRegEyeSlash> : <FaRegEye></FaRegEye>}</button>
                    </div>
                    <div className="mt-4 md:mt-6 lg:mt-0">
                        <div className="flex gap-1 items-center justify-center">
                            <div className="border-[1px] border-stone-600 w-full"></div>
                            <div>or</div>
                            <div className="border-[1px] border-stone-600 w-full"></div>
                        </div>
                        <div className="space-x-5 text-center mt-4">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
                <div className="w-[86%] lg:w-[2px] h-[2px] lg:h-full bg-[#26262633] mb-7 lg:mb-0">
                </div>
                <div className="lg:h-full flex ">
                    <img src="https://i.pinimg.com/564x/15/47/c1/1547c11ae29089c573614ed932e8cf4a.jpg" alt="" className="  my-auto w-[600px] h-[200px] md:h-[350px] lg:h-[350px]" />
                </div>
            </div>
        </div>
    );
};

export default Login;