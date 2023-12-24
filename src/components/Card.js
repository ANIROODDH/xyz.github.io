import React from 'react'

export default function Card(props) {

  let options = props.option;
  let priceoptions = Object.keys(options);
  const handleaddtocard= async(e)=>{

  }

  return (
     <div >
    <div className="card mt-3" style={{ "width": "18rem", "maxheight": "360px" }} >
      <img   src={props.image}  className="card-img-top"  style={{height:"120px",objectFit:"fill"}} alt="..." />
      <div className="card-body" id='card'>
        <h5 className="card-title">{props.foodname}</h5>
        <div className='container   w-100'>
          <select className='m-2 h-100  bg-success '>
            {Array.from(Array(6), (e, i) => { 
              return (
                <option key={i + 1} value={i + 1} >{i+1}</option>
              )
            })}
          </select>
          <select className='m-2 h-100  bg-success' >
                {priceoptions.map((data)=>{
                  return(
                  <options key={data} value={data} >{data} </options>
                )})}
              </select>
         <div className='d-inline '> TotalPrice</div>
        </div>
        <hr>
        </hr>
        <button type="button" class="btn btn-outline-success" onClick={handleaddtocard}>Add to Card</button>
       
      </div>
    </div> </div>
  )
}
