import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'
import './Add.css'


const Add = ({url}) => {

    
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description:"",
        price: "",
        category: "",
        seats_remaining:"Hackathon"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image",image)
        formData.append("seats_remaining",data.seats_remaining)
        const response = await axios.post(`${url}/api/event/add`,formData)
        if(response.data.success){
            setData({
                name: "",
                description:"",
                price: "",
                category: "Hackathon",
                seats_remaining:""
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className='add-img-upload flex-col'>
                <p>Upload Image</p>
                <label htmlFor = "image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} />
                </label>
                <input onChange={(e) => setImage(e.target.files[0]) } type="file" id="image" hidden required/>
            </div>
            <div className='add-product-name flex-col'>
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Enter Product Name' required/>
            </div>
            <div className='add-product-description flex-col'>
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Enter Product Description' required/>
            </div>
            <div className='add-category-price'>
                <div className='add-category flex-col'>
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} value={data.category} name='category'>
                        <option value='Book Fair'>Book Fair</option>
                        <option value='Hackathon'>Hackathon</option>
                        <option value='Standup Comedy'>Standup Comedy</option>
                        <option value='Music Concerts'>Music Concerts</option>
                        <option value='Movie Release'>Movie Release</option>
                        <option value='Sports Event'>Sports Event</option>
                       
                    </select>
                </div>
                <div className='add-price flex-col'>
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='Enter Product Price' required/>
                </div>
                <div className=' flex-col'>
                    <p>Enter Number of seats</p>
                    <input onChange={onChangeHandler} value={data.seats_remaining} type="number" name='seats_remaining' placeholder='Enter Number of seats' required/>
                </div>
            </div>
            <button type='submit' className='add-btn'>Add</button>
        </form>
    </div>
  )
}

export default Add