import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Providers/AuthProvider';
import { FaSquareXTwitter } from "react-icons/fa6";
import { TwitterAuthProvider } from 'firebase/auth/cordova';
import auth from '../../Firebase/Firebase';
import { signInWithPopup } from 'firebase/auth';

const provider = new TwitterAuthProvider();
const SocialLogin = () => {
    const { googleLogin, twitterLogin  } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }    
    
    // const handleTwitterLogin = () => {
    //     twitterLogin()
    //         .then(result => {
    //             console.log(result.user)
    //             navigate(location?.state ? location.state : '/')
    //         })
    //         .catch(error => {
    //             console.error(error.message);
    //         })
    // }
    // const handleTwitterLogin = ()=>{
    //     signInWithPopup(auth, provider)
    //     .then(result=>{
    //         const credential = TwitterAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken
    //         const secret = credential.secret;
    //         const user = result.user;
    //         navigate(location?.state ? location.state : '/')
    //     }).catch(error=>{
    //         console.error(error)
    //     })
    // }



    return (
        <div className='flex gap-10 justify-center items-center'>
            <button onClick={handleGoogleLogin} className='hover:bg-blue-400/40 duration-[400ms] ease-in-out rounded-full'><FaGoogle className='text-[50px]'></FaGoogle></button>
            {/* <button onClick={handleTwitterLogin} className='hover:bg-blue-400/40 duration-[400ms] ease-in-out rounded-lg'><FaSquareXTwitter className='text-[50px]'></FaSquareXTwitter></button> */}


        </div>
    );
};

export default SocialLogin;