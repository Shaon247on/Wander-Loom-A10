import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import AddedData from "../Sections/AddedData";

const MyList = () => {
    const spots = useLoaderData()
    const { user } = useContext(AuthContext)
    const loggedInUser = spots.filter(spot => spot.email.toLowerCase() === user.email)
    console.log(loggedInUser)
    return (
        <div>
            <div></div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Added {loggedInUser.length == 1? 'Spot': 'Spots'} by: {loggedInUser[0].name}</h2>
            <h2 className="mb-4 font-semibold leading-tight">User Email: <span className="font-medium">{loggedInUser[0].email}</span></h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">No.</th>
                            <th className="p-3">ID</th>
                            <th className="p-3">Spots Name</th>
                            <th className="p-3">Country</th>
                            <th className="p-3">Average Cost</th>
                            <th className="p-3 text-center">Update</th>
                            <th className="p-3 text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          loggedInUser.map((addedSpot, index)=> <AddedData addedSpot={addedSpot} key={addedSpot._id} index={index}></AddedData>)  
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyList;