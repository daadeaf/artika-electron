import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Portfolio.css';
import dummy_png from '../assets/img/dummy.png';

/**
 * Component: Portfolio
 * Props: dataImage, dataAuthor, dataCategory, dataPublished, dataExcerpt
 */
class Portfolio extends Component
{
  componentDidMount() {
    /*
    Lazy images
    */
    var lazy = document.getElementsByClassName('lazy');
    if(lazy.length){
      for (var i=0; i < lazy.length; i++) {
        var lazyDataSrc = lazy[i].getAttribute('data-src');
        if(lazyDataSrc) {
          lazy[i].setAttribute('src', lazyDataSrc);
        }
      }
    }
  }

  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 mt-2 portfolio-item">
        <div className="card h-100">
          <NavLink to="post">
            <img className="card-img-top lazy" src={dummy_png} data-src={this.props.dataImage} alt="" />
          </NavLink>
          <div className="card-body">
            <h4 className="card-title">
              <NavLink to="post">{this.props.dataTitle}</NavLink>
            </h4>
            <small className="post-meta">
              <NavLink to="post">{this.props.dataAuthor}</NavLink>,&nbsp;
              <NavLink to="category">{this.props.dataCategory}</NavLink>,&nbsp;
              <NavLink to="post">{this.props.dataPublished}</NavLink>
            </small>
            <p className="card-text">{this.props.dataExcerpt}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
