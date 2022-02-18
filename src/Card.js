import React from 'react';
import './App.css';

const Card = props => {
    console.log(props)
    return (
        <div>
             <div className="card">
          <img src={props.avatar} alt="avatar" style={{width:'100%'}}/>
  <h1>{props.name}</h1>
  <p className="title">{props.title}</p>
  <p className="title">{props.children}</p>
  <p>Harvard University</p>
  <a href="#"><i className="fa fa-dribbble"></i></a>
  <a href="#"><i className="fa fa-twitter"></i></a>
  <a href="#"><i className="fa fa-linkedin"></i></a>
  <a href="#"><i className="fa fa-facebook"></i></a>
  <p><button>Contact</button></p>
</div>
            

        </div>
    )
}

export default Card
