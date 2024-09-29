import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './EventItem.css'

const EventItem = ({id, name, price, description, image}) => {

    
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='item'>
        <div className='item-img-container'>
            <img  className= "item-image" src={url + "/images/" + image} alt={name} />
            {!cartItems[id]
                ?<img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} />
                :<div className='item-counter'>
                    <img onClick={()=> removeFromCart(id)} src = {assets.remove_icon_red}/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=> addToCart(id)} src = {assets.add_icon_green}/>
                </div>

            }
        </div>
        <div className='item-info'>
            <div className='item-name-rating'>
                <p>{name}</p>
                <img src = {assets.rating_starts} alt = ""/>
            </div>
            <p className='item-desc'>{description}</p>
            <p className='item-price'>₹{price}</p>
        </div>
    </div>
  )
}

export default EventItem