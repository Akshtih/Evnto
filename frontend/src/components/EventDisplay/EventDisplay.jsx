import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import EventItem from '../EventItem/EventItem'
import './EventDisplay.css'

const EventDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div>
        <div className='food-display' id = 'food-display'>
            <h2>Top Events near you</h2>
            <div className='food-display-list'>
                {food_list.map((item,index) => {
                    if(category === "All" || category === item.category){
                        return <EventItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default EventDisplay