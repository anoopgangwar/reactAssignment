import React from "react";

// Styles
import {connect} from 'react-redux';
import { Component } from "react";
import image1 from "../../img/image1.png"
import './style.scss'
class Result extends Component {

  render() {
    return (
      <div className="container">    
        
          <h1>Total menu clicked: {this.props.totalView}</h1>
          {
            this.props.vendors?this.props.vendors.map(vendor => (
              <div className="card marginBelow10">                
                <div className="card-body d-flex">
                  <div className="main-image">
                    <img className="main-image" src={vendor.image}></img>
                  </div>
                  <div className="mx-auto">
                    <h4 className="card-title">{vendor.name}</h4>
                    <p className="card-text">{vendor.speciality}</p>
                    <span>{vendor.location}</span><br/>
                    <a href="#" onClick={this.props.menuClick} className="btn btn-primary">Get Menu</a>
                  </div>
                </div>
              </div>
              
            )):null
          }        
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    totalView:state.totalView,
    vendors:state.vendors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    menuClick: () => dispatch({type:"MENU_CLICKED"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Result);
