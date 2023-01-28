// import '@/styles/Home.module.css'
import styles from "../styles/Home.module.css";
import { copyDiscordTag } from "../lib/scripts.js";
import Link from "next/link";

export default function programming() {
  return (
    <>
      <title>Jakub Madejczyk</title>
      <link
        rel="icon"
        type="image/png"
        href="https://www.w3docs.com/favicon.ico"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Overpass Mono"
      ></link>

      <div className="big_div">
        <Link href="/">
          <div className="media_div">
            <img className="icon" src="home.svg" height="40vw" />
          </div>
        </Link>
        <div className="media_div"></div>
        <div className="media_div"></div>
        <div className="media_div" style={{ marginRight: "0px" }}></div>
      </div>

      <div
        className="big_div bio_div"
        style={{ minHeight: "50vmin", justifyContent: "space-between" }}
      >
        <div>
          <p
            className="name"
            style={{ marginBottom: "0px", marginBlockStart: "1em" }}
          >
            Software developing
          </p>

          <p
            className="bio_text"
            style={{
              width: "37.8vw",
              marginLeft: "6vw",
              textAlign: "justify",
              marginRight: "4vw",
              fontSize: "2.3vmin",
            }}
          >
            Few years ago, I found out, that programming and computers at
            general are very familiar to me. That’s why I decided to push me
            career towards it. For now, I’m the most familiar with Python, but I
            have been also working with JavaScript, C++, C# or PHP. The website
            you’re browsing now was created by myself, so I also know a little
            bit about web development. I do know something about databases too.
          </p>
        </div>
        <div
          style={{
            position: "relative",
            height: "28vmin",
            marginTop: "6vmin",
            marginRight: "4vw",
            marginBottom: "4vw",
            width: "28vmin",
          }}
        >
          <img
            src="photo.png"
            alt="photo"
            style={{
              borderRadius: "50%",
              width: "25vmin",
              border: "0.6vmin solid #494B50",
              alignSelf: "flex-start",
              minWidth: "0",
            }}
          />
          <a href="https://github.com/Kubx0404">
            <img
              src="github2.svg"
              alt="photo"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "11.5vmin",
              }}
            />
          </a>
        </div>
        <div className="linediv">
          <img src="line.svg" className="line" />
        </div>
        <div style={{ display: "flex", marginBottom: "8vmin" }}>
          <p
            className="bio_text"
            style={{
              // width: "37.8vw",
              marginLeft: "6vw",
              textAlign: "justify",
              marginRight: "5.5vw",
              fontSize: "2.3vmin",
            }}
          >
            “Programming today is a race between software engineers striving to
            build bigger and better idiot-proof programs, and the Universe
            trying to produce bigger and better idiots. So far, the Universe is
            winning.”
          </p>
          <p
            className="bio_text"
            style={{
              // width: "20vw",
              // marginLeft: "6vw",
              // textAlign: "justify",
              marginRight: "4vw",
              fontSize: "2.3vmin",
              paddingRight: "1vw",
            }}
          >
            “Programmer: A machine&nbsp;that&nbsp;turns coffee into code.”
          </p>
        </div>
      </div>
    </>
  );
}
