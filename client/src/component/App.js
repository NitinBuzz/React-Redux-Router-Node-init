import React, { Component } from "react";
import Login from "./SignIn";

class App extends Component {
  componentDidMount() {
    fetch("/api/proposals")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(proposals => {
        console.log(`json response from backend ${JSON.stringify(proposals)}`);
      })
      .catch(() => {
        console.log(`errr`);
      });
  }
  render() {
    //rgba(35, 37, 38, 0.78), rgba(65, 67, 69, 0.79)
    // rgba(0, 180, 219, 0.8), rgba(0, 131, 176, 0.8)
    //rgba(59, 58, 62, 0.8), rgba(96, 92, 60, 0.8)
    //rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.81)
    //rgba(21, 153, 87, 0.8), rgba(21, 87, 153, 0.81)
    //rgba(58, 97, 134, 0.8), rgba(136, 37, 62, 0.81)
    return (
      <div
        style={{
          height: "95vh",
          background: `linear-gradient(to right bottom,rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.81)), url(./hero4.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          position: "relative",
          clipPath: `polygon( 0 0, 100% 0, 100% 75%, 0 100%)`
        }}
        className="App"
      >
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px"
          }}
        >
          Durgs
        </div>
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            textAlign: "center"
          }}
        >
          <h1
            style={{
              color: "#fff"
            }}
          >
            <span
              style={{
                display: "block",
                fontWeight: "400",
                fontSize: "60px",
                letterSpacing: "25px"
              }}
            >
              DURGESH
            </span>
            <span
              style={{
                display: "block",
                fontWeight: "700",
                fontSize: "20px",
                letterSpacing: "7px"
              }}
            >
              Register to get free 14 day trail
            </span>
          </h1>
          <button
            style={{
              backgroundColor: "#fff",
              border: "none",
              color: "#049039",
              padding: "10px 10px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer"
            }}
            onClick={e => {
              this.props.history.push("/signup");
            }}
          >
            Register
          </button>
          <p style={{ color: "#fff" }}>or</p>
          <a
            style={{
              border: "none",
              color: "#fff",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "22px",
              cursor: "pointer"
            }}
            href="/signin"
          >
            Click here to sign in
          </a>

          <div style={{ position: "absolute" }} />
        </div>
      </div>
    );
  }
}

export default App;
