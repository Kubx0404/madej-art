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
            <img
              className="icon"
              src="home.svg"
              height="40vw"
              // color="#303030"
              // fill="#303030"
            />
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
            style={{
              marginBottom: "0px",
              marginBlockStart: "1em",
              marginLeft: "12vw",
              width: "24vw",
              wordWrap: "inherit",
              fontSize: "3.6vw",
            }}
          >
            Photography
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
            Few years ago, when I was buying a better camera, I already had that
            feeling that it would make me create something more than it seemed.
            For now, I still don’t know if it did, but I fell in love with
            photography, so why would I even ask for more? <br />
            <br /> If you want to see some of my photos, click on the instagram
            icon.
          </p>
        </div>
        <div
          style={{
            position: "relative",
            height: "28vmin",
            marginTop: "6vmin",
            marginRight: "4.5vw",
            marginBottom: "4vw",
            width: "27vmin",
          }}
        >
          <img
            src="photo2.jpg"
            alt="photo"
            style={{
              borderRadius: "50%",
              width: "25vmin",
              border: "0.6vmin solid #494B50",
              alignSelf: "flex-start",
              minWidth: "0",
            }}
          />
          <a href="https://www.instagram.com/qba0404/">
            <img
              src="instagram.svg"
              alt="photo"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "10vmin",
              }}
            />
          </a>
        </div>
        <div className="linediv">
          <img src="line2.svg" className="line" style={{ width: "38vw" }} />
        </div>
        <div style={{ display: "flex", marginBottom: "8vmin" }}>
          <p
            className="bio_text"
            style={{
              width: "38vw",
              marginLeft: "6vw",
              textAlign: "justify",
              marginRight: "5.5vw",
              fontSize: "2.3vmin",
            }}
          >
            „I fell in love with the process of taking pictures, with wandering
            around finding things. To me it feels like a kind of performance.
            The picture is a document of that performance.”
          </p>
        </div>
      </div>
    </>
  );
}
