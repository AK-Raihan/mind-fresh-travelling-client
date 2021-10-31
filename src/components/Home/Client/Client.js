import React from 'react';
import clint1 from '../../../images/team1.jpg'
import clint2 from '../../../images/team2.jpg'
import clint3 from '../../../images/team3.jpg'

const Client = () => {
    return (
      <div className="container">
        <h3>Our Happy Client</h3>
          <div className="card-group my-5">
          <div className="card">
            <img src={clint1} className="card-img-top rounded-circle w-50 mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Jhon Siba</h5>
              <p className="card-text">Amazing Honeymoon to Crete/Santorini…
                 Seetha and our travel specialist met and exceeded our expectations at every moment.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img src={clint2} className="card-img-top rounded-circle w-50 mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Jasika Toi</h5>
              <p className="card-text">Fantastic! Our Costa Rica travel company took care of everything. The owner and his wife met us at the airport with a care package of coffee </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img src={clint3} className="card-img-top rounded-circle w-50 mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Anuska Foo</h5>
              <p className="card-text"> Beautifull chocolate is so cool. It was such a nice welcome. Our drivers to and from the resort were great. The transportation was</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Client;