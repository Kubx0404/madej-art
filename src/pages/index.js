// import '@/styles/Home.module.css'
import styles from "../styles/Home.module.css";
import { copyDiscordTag } from "../lib/scripts.js";
import Link from "next/link";

export default function home() {
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
              src="https://cdn.simpleicons.org/googlehome/303030"
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
            style={{ marginBottom: "0px", marginBlockStart: "1em" }}
          >
            Jakub Madejczyk
          </p>
          <p
            style={{ marginLeft: "10vw", marginTop: "0px", width: "26vw" }}
            className="bio_text"
          >
            Still developing fungus.
          </p>
          <p className="bio_text" style={{ width: "40vw", marginLeft: "6vw" }}>
            Hello! I’m an student of an IT high school in Poznan. My future goal
            is to learn more and more in case of coding and IT stuff. One of my
            biggest interests is photography and teaching rollerblading.
          </p>
        </div>

        <img
          src="photo.png"
          alt="photo"
          style={{
            borderRadius: "50%",
            width: "25vmin",
            border: "0.6vmin solid #494B50",
            marginTop: "6vmin",
            marginRight: "5.50vw",
            marginBottom: "4vw",
            alignSelf: "flex-start",
            minWidth: "0",
          }}
        />
      </div>

      <div
        className="big_div"
        style={{
          paddingLeft: "5vmin",
          paddingRight: "5vmin",
          justifyContent: "space-between",
        }}
      >
        <Link href="/programming">
          <div className="big_button">
            <img
              src="code.svg"
              alt="code"
              style={{
                height: "4.5vw",
              }}
            />
          </div>
        </Link>
        <Link href="/photo">
          <div className="big_button">
            <img
              src="camera.svg"
              alt="code"
              style={{
                height: "4.5vw",
              }}
            />
          </div>
        </Link>
        <div className="big_button">
          <img
            src="student.svg"
            alt="code"
            style={{
              height: "4.5vw",
            }}
          />
        </div>
        <div className="big_button">
          <img
            src="rollerblade.svg"
            alt="code"
            style={{
              height: "4.5vw",
            }}
          />
        </div>
      </div>

      <div className="big_div flex_reversed">
        <div
          onClick={copyDiscordTag}
          className="media_div"
          style={{ marginRight: "0px" }}
        >
          <img
            className="icon"
            src="https://cdn.simpleicons.org/discord/303030"
          />
        </div>

        <a href="https://www.instagram.com/qba0404/" target="_blank">
          <div className="media_div">
            <img
              className="icon"
              src="https://cdn.simpleicons.org/instagram/303030"
            />
          </div>
        </a>

        <a href="https://www.facebook.com/jakub.madejczyk.921/" target="_blank">
          <div className="media_div">
            <img
              className="icon"
              src="https://cdn.simpleicons.org/facebook/303030"
            />
          </div>
        </a>

        <a href="https://github.com/Kubx0404" target="_blank">
          <div className="media_div">
            <img
              className="icon"
              src="https://cdn.simpleicons.org/github/303030"
            />
          </div>
        </a>
      </div>
    </>
  );
}
