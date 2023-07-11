import React from 'react'

const Footer2 = () => {
    const cities =[{city:"Bengaluru"},{city:"NCR"},{city:"Hyderabad"},{city:"Chandigarh"},{city:"Panchkula"},
    {city:"Mohali"},{city:"Mumbai"},{city:"Pune"},{city:"Chennai"},{city:"Coimbatore"},{city:"Jaipur"},
    {city:"Cochin"},{city:"Vijayawada"},{city:"Visakhapatnam"},{city:"Kolkatta"},{city:"Lucknow"},{city:"Kanpur"},
    {city:"Nagpur"},]
  return (
    <div className=''>
    <div className='CitiesMain'>
        <div className='C-head'><span className='CityHead'></span></div>
        <div className="Cities">
        <span className='CityHead'>CITIES WE SERVE</span>
        </div>
        <div className="city">

       {cities.map((item)=> {
       return(
          <div className='City1'>{item.city}</div>
        
        )})}
        
        </div>
    </div>
    </div>
  )
}

export default Footer2