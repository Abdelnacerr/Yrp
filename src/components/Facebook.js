import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Form from "./Form"

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    picture: "",
    reviews: "",
  };
  responseFacebook = (response) => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      picture: response.picture.data.url,
      reviews: response.expiresIn,
    });
  };
  componentClicked = () => {
    console.log("Clicked");
  };
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <>
          <div
            style={{
              margin: "auto",
              width: "400px",
              background: "#f4f4f4",
              padding: "20px",
            }}
          >
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome {this.state.name}</h2>
            <h3>Reviews: {this.state.reviews}</h3>
          </div>
          <div
            style={{
              margin: "auto",
              width: "200px",
              background: "#f4f4f4",
              padding: "20px",
              position: "relative",
              bottom: "-200px",
            }}
          >
            <div
              class="fb-share-button"
              data-href="https://developers.facebook.com/docs/plugins/"
              data-layout="button_count"
              data-size="Large"
            >
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                class="fb-xfbml-parse-ignore"
              >
                Share
              </a>
            </div>
          </div>
          <div
            style={{
              margin: "auto",
              width: "200px",
              background: "#f4f4f4",
              padding: "20px",
              position: "relative",
              bottom: "-250px",
            }}
          >
            <Form />

          </div>
        </>
      );
    } else {
      fbContent = (
        <>
          <div>Please Login to generate your reviews</div>

          <FacebookLogin
            appId="725081001736708"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </>
      );
    }
    return (
      <>
        <div>{fbContent}</div>
      </>
    );
  }
}
