
const AddedData = ({ addedSpot, index }) => {

    const indexLength = index + 1
    console.log(addedSpot, index, indexLength)
    const {spot, country, cost, _id} = addedSpot

    const handleDelete = _id=>{
        console.log(_id)
        fetch(`https://touring-site-server.vercel.app/UpdateTouristsSpots/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
            <td className="p-3">
                <p>{indexLength}</p>
            </td>
            <td className="p-3">
                <p>{_id}</p>
            </td>
            <td className="p-3">
                <p>{spot}</p>
            </td>
            <td className="p-3">
                <p>{country}</p>
            </td>
            <td className="p-3">
                <p>{cost}</p>
            </td>
            <td className="p-3 text-center">
                <button className="btn btn-info">Update</button>
            </td>
            <td className="p-3 text-center">
                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <button onClick={()=>handleDelete(_id)} className="btn btn-warning">Delete</button>
                    
                </span>
            </td>
        </tr>
    );
};

export default AddedData;