import React from "react";
import GoogleLogin from "react-google-login";

const clientId =
  "835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com";

export default function Login({ onGoogleLogin }) {
  const onSuccess = async (response) => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;

    await onGoogleLogin();
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
