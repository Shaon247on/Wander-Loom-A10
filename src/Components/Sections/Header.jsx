import { Link } from "react-router-dom";
import Button from "./Elements/Button";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

    const { logOut, user, setLoading } = useContext(AuthContext)
    console.log(user)
    const handleSignOut = async () => {
        setLoading(false)
        try {
            await logOut();
            console.log(user.displayName)
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };



    return (
        <div className="navbar bg-base-100 md:px-8 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><><Link to='/'>Home</Link></></li>
                        <li>
                            <details className="dropdown">
                                <summary className="">All Tourists Spot</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><><Link to='/AllTouristsSpot'>All Spots</Link></></li>
                                    <li><><Link to='/Bangladesh'>Bangladesh</Link></></li>
                                    <li><><Link to='/Thailand'>Thailand</Link></></li>
                                    <li><><Link to='/Indonesia'>Indonesia</Link></></li>
                                    <li><><Link to='/Malaysia'>Malaysia</Link></></li>
                                    <li><><Link to='/Vietnam'>Vietnam</Link></></li>
                                    <li><><Link to='/Cambodia'>Cambodia</Link></></li>
                                </ul>
                            </details>
                        </li>
                        <li><><Link to='/AddTouristsSpot'>Add Tourists Spot</Link></></li>
                        <li><><Link to='/MyList'>My List</Link></></li>
                        <li><><Link to='/Register'>Register</Link></></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><><Link to='/'>Home</Link></></li>
                    <li>
                        <details>
                            <summary>All Tourists Spot</summary>
                            <ul className="p-2">
                                <li><><Link to='/AllTouristsSpot'>All Spots</Link></></li>
                                <li><><Link to='/Bangladesh'>Bangladesh</Link></></li>
                                <li><><Link to='/Thailand'>Thailand</Link></></li>
                                <li><><Link to='/Indonesia'>Indonesia</Link></></li>
                                <li><><Link to='/Malaysia'>Malaysia</Link></></li>
                                <li><><Link to='/Vietnam'>Vietnam</Link></></li>
                                <li><><Link to='/Cambodia'>Cambodia</Link></></li>
                            </ul>
                        </details>
                    </li>
                    <li><><Link to='/AddTouristsSpot'>Add Tourists Spot</Link></></li>
                    <li><><Link to='/MyList'>My List</Link></></li>
                    <li><><Link to='/Register'>Register</Link></></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className=" flex items-center gap-6" >
                        <img src={user.photoURL} alt="" className="w-[38px] md:w-[44px] h-[38px] md:h-[44px] avatar object-cover  rounded-full tooltip tooltip-bottom" data-tip={user?.displayName} />
                        <Link to='/Login' ><button className="btn btn-info" onClick={handleSignOut}>Sign Out</button></Link>
                    </div> :
                        <>

                            <Link to='/Login'><Button text='Login' style={'w-32'}></Button></Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;