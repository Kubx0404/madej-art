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
        <div className="media_div" style={{ marginRight: "0px" }}></div>
      </div>

      <div
        className="big_div bio_div"
        style={{ minHeight: "50vh", justifyContent: "space-evenly" }}
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
            // height: "260px",
            // width: "260px",
            // height: "28vh",
            // width: "13vw",
            width: "25vmin",
            border: "6px solid #494B50",
            // marginTop: "2.8em",
            marginTop: "6vmin",
            marginRight: "4vw",
            marginBottom: "4vw",

            // marginRight: "5vw",
            // aspectRatio: "1/1",
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
              // height: "90px",
              // width: "90px",
              height: "4.5vw",
            }}
            x
          />
        </div>
        <div className="big_button">
          <img
            src="camera.svg"
            alt="code"
            style={{
              height: "4.5vw",
              // width: "3.5vw",
              // aspectRatio: "1/1",
            }}
          />
        </div>
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
        <div className="media_div" style={{ marginRight: "0px" }}></div>
        <div className="media_div"></div>
        <div className="media_div"></div>
        <div className="media_div"></div>
      </div>
    </>
  );
}
