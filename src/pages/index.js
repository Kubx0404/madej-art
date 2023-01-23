// import '@/styles/Home.module.css'
import styles from "../styles/Home.module.css";
import madejzdjontko from "../../public/photo.png";

export default function home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Overpass Mono"
      ></link>
      <div className="big_div">
        <div className="media_div"></div>
        <div className="media_div"></div>
        <div className="media_div"></div>
        <div className="media_div"></div>
      </div>

      <div className="big_div bio_div" style={{ height: "50vh" }}>
        <p
          className="name"
          style={{ marginBottom: "0px", marginBlockStart: "1em" }}
        >
          Jakub Madejczyk
        </p>
        <p style={{ marginLeft: "7em", marginTop: "0px" }} className="bio_text">
          Still developing fungus.
        </p>
        <p className="bio_text" style={{ width: "40vw", marginLeft: "5em" }}>
          Hello! I’m an student of an IT high school in Poznan. My future goal
          is to learn more and more in case of coding and IT stuff. One of my
          biggest interests is photography and teaching rollerblading.
        </p>
        <img
          src="photo.png"
          alt="photo"
          style={{
            borderRadius: "50%",
            height: "260px",
            width: "260px",
            border: "6px solid #494B50",
            marginTop: "2.8em",
            marginRight: "5em",
          }}
        />
      </div>

      <div
        className="big_div"
        style={{
          paddingLeft: "2.5em",
          paddingRight: "2.5em",
          justifyContent: "space-between",
          // padding: "1.5em",
          // paddingTop: "1.5em",
          // paddingBottom: "1.5em",
        }}
      >
        <div className="big_button">
          <img
            src="code.svg"
            alt="code"
            style={{
              height: "90px",
              width: "90px",
            }}
          />
        </div>
        <div className="big_button">
          <img
            src="camera.svg"
            alt="code"
            style={{
              height: "90px",
              width: "90px",
            }}
          />
        </div>
        <div className="big_button">
          <img
            src="student.svg"
            alt="code"
            style={{
              height: "90px",
              width: "90px",
            }}
          />
        </div>
        <div className="big_button">
          <img
            src="rollerblade.svg"
            alt="code"
            style={{
              height: "90px",
              width: "90px",
            }}
          />
        </div>
      </div>

      <div className="big_div flex_reversed">
        <div className="media_div" style={{ marginRight: "0px" }}></div>
        <div className="media_div"></div>
        <div className="media_div"></div>
        <div className="media_div"></div>
      </div>
    </>
  );
}
