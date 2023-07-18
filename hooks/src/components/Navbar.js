import React from 'react'

function Navbar({clickCount}) {
  return (
    <div className="my-nav">
        <h2>Memory App</h2>
        <button className="btn btn-warning">
            Start
        </button>
        <h5>Hamle Sayısı : {clickCount}</h5>
    </div>
  )
}

export default Navbar