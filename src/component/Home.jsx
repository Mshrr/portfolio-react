import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <main className="container mt-5">
      <div className="background-profile row">
        <img
          className="profile col w-75"
          src="../public/images/profile.png"
          alt=""
        />
        <div className="description col text-light fw-bold">
          <h1>Hello,</h1>
          <h2 id="my">
            <TypeAnimation
              sequence={[
                "I'm a Maulana Manshur",
                3000,
                "I'm a College Student",
                3000,
                "I'm a Web Developer",
                3000,
              ]}
              speed={20}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
            />
          </h2>
          <p>
            I Am a Student Of Informatics Engineering Study Program From STMIK
            IKMI CIREBON
          </p>
          <br />
          <hr />
          <p>“Thanks God, I’m Informatic Engineering. I’m Very Proud.”</p>
          <br />
          <a href="http://" class="btn btn-info">
            <img
              style={{ width: "17px" }}
              src="../public/images/download.png"
              alt=""
              srcset=""
            />
            <b>View My Curriculum Vitae</b>
          </a>
          <button></button>
        </div>
      </div>
    </main>
  );
}

export default Home;
