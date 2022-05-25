import "./Upload.scss";
import React, { Component } from "react";
import axios from "axios";

class Upload extends Component {
  state = {
    selectedFile: null,
    bookData: [],
  };

  handleSubmitContinue = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append(e.target.file.files[0].name, e.target.file.files[0]);

    axios
      .post("http://localhost:5050/usedbook", {
        name: e.target.name.value,
        price: e.target.price.value,
        filepathUrl: e.target.file.files[0].name,
      })
      .then((response) => {
        axios
          .post("http://localhost:5050/usedbook/image", fd)
          .then((response) => {
            console.log(response);
          });
      });

    // console.log(fd);

    e.target.reset();
  };

  fileUploadHandler = (e) => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);

    axios.post("http://localhost:5050/usedbook", fd).then((res) => {
      console.log(res);
    });
  };

  render() {
    // console.log(this.state.selectedFile)

    return (
      <form className="upload__form" onSubmit={this.handleSubmitContinue}>
        <div className="upload__info__wrapper">
          <label className="upload__label" htmlFor="name">
            Book title
          </label>
          <input id="name" className="upload__input" />
        </div>
        <div className="upload__info__wrapper">
          <label className="upload__label" htmlFor="price">
            Price
          </label>
          <input id="price" className="upload__input" />
        </div>
        <div className="upload__info__wrapper">
          <label className="upload__label" htmlFor="file">
            Image
          </label>
          <input
            type="file"
            id="file"
            onChange={this.fileChangeHandler}
            className="upload__input"
          />
        </div>
        <button className="upload__continue">Continue</button>
      </form>
    );
  }
}

export default Upload;
