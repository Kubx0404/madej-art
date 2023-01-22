// import '@/styles/Home.module.css'
import styles from "../styles/Home.module.css";

export default function home() {
  return (
    <>
      <div className="big_div">
        <div className="media_div"></div>
        <div className="media_div"></div>
        <div className="media_div"></div>
        <div className="media_div"></div>
      </div>

      <div className="big_div bio_div">siusiaczek2</div>

      <div className="big_div" style={{ height: "180px" }}>
        siusiaczek2
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
