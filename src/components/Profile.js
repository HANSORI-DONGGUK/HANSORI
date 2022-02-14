import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      imageUrl: "",
    };
  }

  // Google Login
  responseGoogle = (res) => {
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl,
    });

    window.localStorage.setItem("imageUrl", this.state.imageUrl);
    console.log(res);
    // window.location.reload();
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  // Logout Func
  onLogout = () => {
    console.log("로그아웃");
    window.localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <div
        className="contents"
        style={{
          height: "100vh",
          paddingTop: "50vh",
          backgroundColor: "black",
        }}
      >
        {window.localStorage.getItem("imageUrl") ? (
          <GoogleLogout
            clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
            buttonText="로그아웃"
            onLogoutSuccess={this.onLogout}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
            buttonText="Google 로그인"
            onSuccess={this.responseGoogle}
            onFailure={this.responseFail}
          />
        )}
      </div>
    );
  }
}

export default Profile;
