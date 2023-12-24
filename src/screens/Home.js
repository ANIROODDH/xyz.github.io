import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Card from '../components/Card'
// import Crausel from '../components/Crausel'
import { useState ,useEffect} from 'react'

export default function Home() {

  const [search,setsearch] =useState('');
  const [foodCat, setfoodCat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loaddata = async () => {
    let response = await fetch('http://localhost:5500/api/fooddata',
      {
        'method': "post",
        headers: {
          'Content-Type': 'application/json'
        }
      });

    response = await response.json();

    setfooditem(response[0]);
    setfoodCat(response[1]);
    // console.log(response[0], response[1]);
  }

  useEffect(() => {
    loaddata()
  }, [])

  return (
    <div>
      <div> <Nav /> </div>
      <div>
        <div id="carouselExampleIndicators car" className="carousel slide" data-bs-ride="carousel" >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" id='crausel'>
            <div className='carousel-caption' style={{ zIndex: 100 }}>
              <div className="d-flex justify-content-centre">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}  />
                {/* <button className="btn btn-outline rounded bg-white" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900x700?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700?momos" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x700?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <section className="w-100 p-4 pb-4 d-flex justify-content-center align-items-center flex-column">
          </section>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div id='card' className='container'>
        {
          foodCat.length !==0
                      ? foodCat.map((data) => {
              return (
                <div  id='xyz'className='row mb-3' >
                  <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                  <hr />
                  {fooditem.length !== 0 ? fooditem.filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase()))
  .map(filteritem => {
                    return (
                      <div id='xyz' key={filteritem._id} className='col-16 col-md-8 col-lg-4 '>
                        <Card  foodname={filteritem.name}
                          option={filteritem.options[0]}
                          image={filteritem.img}
                          dis={filteritem.description}>
                        </Card>
                      </div>
                    )
                  }) : <div>""</div>
                  }
                </div>
              )
            }) : <div> no such data</div>
        }

      </div>
      <div> <Footer /> </div>
    </div>

  )
}
