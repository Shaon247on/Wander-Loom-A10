
const AddedData = ({ addedSpot, index }) => {

    const indexLength = index + 1
    console.log(addedSpot, index, indexLength)
    const {spot, country, cost} = addedSpot
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
            <td className="p-3">
                <p>{indexLength}</p>
            </td>
            <td className="p-3">
                <p>97412378923</p>
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
                    <button className="btn btn-warning">Delete</button>
                </span>
            </td>
        </tr>
    );
};

export default AddedData;