import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <div>
      <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Example Image" />
            <div className="card-body">
              <h5 className="card-title">Kart 1</h5>
              <p className="card-text">Bu, kartın qısa təsviridir.</p>
              <a href="#" className="btn btn-primary">Ətraflı bax</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Example Image" />
            <div className="card-body">
              <h5 className="card-title">Kart 2</h5>
              <p className="card-text">Bu, kartın qısa təsviridir.</p>
              <a href="#" className="btn btn-primary">Ətraflı bax</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Example Image" />
            <div className="card-body">
              <h5 className="card-title">Kart 3</h5>
              <p className="card-text">Bu, kartın qısa təsviridir.</p>
              <a href="#" className="btn btn-primary">Ətraflı bax</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
