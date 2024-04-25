import { useState } from "react";

const AddTouristsSpot = () => {


    const [selectedValue, setSelectedValue] = useState('');
    console.log(selectedValue)

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    
    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Update a touring place</h2>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Update Information</p>
                            <p className="text-xs">Fill up all the requirements and press <span className="font-bold">&ldquo;Submit&ldquo;</span> to upload your Tourist Spot.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full">
                                <select value={selectedValue} onChange={handleChange}>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Tourist Spot Name</label>
                                <input name="spot" type="text" placeholder="Tourist Spot Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />

                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Average Cost</label>
                                <input name="cost" type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Seasonality</label>
                                <input name="seasonality" type="text" placeholder="Seasonality" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Travel Time</label>
                                <input name="travel-time" type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Location</label>
                                <input name="location" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Short Description</label>
                                <input name="description" type="text" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label className="text-sm">Image URL</label>
                                <input name="image" type="text" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Total Visitors Per Year</label>
                                <input name="visitors" type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Your Email</label>
                                <input name="email" type="text" placeholder="Your Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Your Name</label>
                                <input name="name" type="text" placeholder="Your Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <button name="location" type="submit" placeholder="Location" className="btn btn-info w-full">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddTouristsSpot;