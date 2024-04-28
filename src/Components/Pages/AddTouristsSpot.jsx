import { useState } from "react";
import Swal from 'sweetalert2'
import Button from "../Sections/Elements/Button";

const AddTouristsSpot = () => {


    const [country, setCountry] = useState('');
    console.log(country)

    const handleChange = (event) => {
        setCountry(event.target.value);
    };



    const handleAddSpot = (e) => {
        e.preventDefault()
        const form = e.target
        const spot = form.spot.value
        const cost = form.cost.value
        const seasonality = form.seasonality.value
        const time = form.time.value
        const location = form.location.value
        const description = form.description.value
        const image = form.image.value
        const visitors = form.visitors.value
        const email = form.email.value
        const name = form.name.value
        const newSpot = {
            spot,
            cost,
            seasonality,
            time,
            location,
            description,
            image,
            visitors,
            email,
            name,
            country
        }
        console.log(newSpot)
        //send data to sever
        
        fetch('http://localhost:5000/UpdateTouristsSpots', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added new Tourist Spot',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <h2 className="text-2xl md:text-4xl text-center font-bold">Update a touring place</h2>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form onSubmit={handleAddSpot} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-semibold">Upload New Tourist Spot</p>
                            <p className="text-xs">Fill up all the requirements and press <span className="font-bold">&ldquo;Submit&ldquo;</span> to upload your Tourist Spot.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full flex flex-col items-start gap-2">
                                <label className="text-sm">Select Country</label>
                                <select value={country} onChange={handleChange}>
                                    <option >Select One</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Cambodia">Cambodia</option>
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
                                <input name="time" type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
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
                                <Button text='Submit' style='w-full'></Button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddTouristsSpot;