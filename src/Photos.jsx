import React, { useEffect, useState } from 'react'

const Photos = () => {
  const [photo, setPhoto] = useState ([])

    const fetchPhoto = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>res.json())
        .then((image)=>setPhoto(image))
        .catch((err)=>console.log(err))
    }


    useEffect (() => {
        fetchPhoto()
    }, [])

  return (
    <div>
      {
        photo.map((p, index)=>(
          <div key={index} className="card" style={{width: '18rem'}}>
            <img src={p.thumbnailUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Photos