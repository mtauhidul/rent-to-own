import React from 'react';

const Description = ({ steps, setSteps, formik }) => {
    const handleNext = () => {
        if (formik.values.name &&
            formik.values.description &&
            formik.values.homeType &&
            formik.values.bedRooms &&
            formik.values.bathRooms &&
            formik.values.accomodates &&
            formik.values.footage &&
            formik.values.petPolicy &&
            formik.values.amOwner &&
            formik.values.isAgree &&
            formik.values.isInsurance){
                setSteps({ ...steps, first: true })
            }
    }
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">Add Your Home</h2>

            <div className="w-full mb-2 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="name">
                    The name of your home listing
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="What is the name of your home listing?"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.name && formik.errors.name &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.name}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-secondary text-sm font-bold mb-2" htmlFor="description">
                    Describe your home
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    type="text"
                    placeholder="Describe your home"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.description && formik.errors.description &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.description}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="homeType">
                    Home Type
                </label>
                <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="homeType"
                    name="homeType"
                    value={formik.values.homeType}
                    onChange={(e) => formik.setFieldValue("homeType", e.target.value)}
                >
                    <option value="">Choose the  type of your home</option>
                    <option value="type-1">Type 1</option>
                    <option value="type-2">Type 2</option>
                    <option value="type-3">Type 3</option>
                </select>
                {
                    formik.errors.homeType &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.homeType}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bedRooms">
                    Number of bedrooms
                </label>
                <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="bedRooms"
                    name="bedRooms"
                    value={formik.values?.bedRooms}
                    onChange={(e) => formik.setFieldValue("bedRooms", e.target.value)}
                >
                    <option value="">Select option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                {
                    formik.errors.bedRooms &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.bedRooms}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bathRooms">
                    Number of bathrooms
                </label>
                <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="bathRooms"
                    name="bathRooms"
                    value={formik.values?.bathRooms}
                    onChange={(e) => formik.setFieldValue("bathRooms", e.target.value)}
                >
                    <option value="">Select option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                {
                    formik.errors.bathRooms &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.bathRooms}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accomodates">
                    Accomodates (Number of people)
                </label>
                <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="accomodates"
                    name="accomodates"
                    value={formik.values?.accomodates}
                    onChange={(e) => formik.setFieldValue("accomodates", e.target.value)}
                >
                    <option value="">Select option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                {
                    formik.errors.accomodates &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.accomodates}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="footage">
                    Approximate square footage
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                    id="footage"
                    name="footage"
                    type="number"
                    placeholder="Approximate square footage"
                    value={formik.values.footage}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.footage && formik.errors.footage &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.footage}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="petPolicy">
                    Pet policy
                </label>
                <select
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="petPolicy"
                    name="petPolicy"
                    value={formik.values.petPolicy}
                    onChange={(e) => formik.setFieldValue("petPolicy", e.target.value)}
                >
                    <option value="">Select option</option>
                    <option value="type-1">Type 1</option>
                    <option value="type-2">Type 2</option>
                    <option value="type-3">Type 3</option>
                </select>
                {
                    formik.errors.petPolicy &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.petPolicy}</div>
                }
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="amOwner"
                        checked={formik.values.amOwner}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        I certify that I own this property or am an authorized representative of the owner
                    </span>
                </label>
                {
                    formik.errors.amOwner &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.amOwner}</div>
                }
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="isAgree"
                        checked={formik.values.isAgree}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        I agree that I will have any renter who contacts me through Rent-to-Own Realty book the rental through Rent-to-Own Realty.
                    </span>
                </label>
                {
                    formik.errors.isAgree &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.isAgree}</div>
                }
            </div>

            <div className="mb-3 p-2">
                <label className=" block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        name="isInsurance"
                        checked={formik.values.isInsurance}
                        onChange={formik.handleChange} />
                    <span class="text-sm">
                        I certify that I have landlord's insurance on this property.
                    </span>
                </label>
                {
                    formik.errors.isInsurance &&
                    <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.isInsurance}</div>
                }
            </div>

            <div className="w-full mb-2 p-2">
                <button 
                type="submit" 
                onClick={handleNext}
                className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
            </div>
        </div>
    );
};

export default Description;