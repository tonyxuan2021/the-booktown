import "./Upload.scss";
import React, { Component } from 'react'
import axios from "axios";


class Upload extends Component {

    state = {
        selectedFile: null
    }

    fileChangeHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }
      
    // fileUploadHandler = e => {
    //     axios.post("")
    // }


  render() {
    return (
        <form className="upload__form">
          <div className="upload__info__wrapper">
            <label className="upload__label" htmlFor="name">Book title</label>
            <input id="name" className="upload__input"/>
          </div>
          <div className="upload__info__wrapper">
            <label className="upload__label" htmlFor="price">Price</label>
            <input id="price" className="upload__input"/>
          </div>
          <div className="upload__info__wrapper">
            <label className="upload__label" htmlFor="city">City of neighborhood</label>
            <input id="city" className="upload__input"/>
          </div>
          <div className="upload__info__wrapper">
            <label className="upload__label" htmlFor="file">Image</label>
            <input type="file" id="file" onChange={this.fileChangeHandler} className="upload__input"/>
          </div>
          <button onClick={this.fileUploadHandler} className="upload__btn">Add Image</button>
          <button className="upload__continue">Continue</button>
        </form>
      );
  }
}




export default Upload;
