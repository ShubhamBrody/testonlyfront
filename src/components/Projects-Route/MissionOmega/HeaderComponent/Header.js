/* eslint-disable import/no-anonymous-default-export */
import classes from "./Header.module.css";
import Video from "../../../UI/Video";
import textData from "../../ProjectTextData";

export default () => {
  const listItems = textData.missionomega.list.map((data) => {
    return <li style={{ color: '#191919', pointerEvents: 'none' }}>{data}</li>
  })

  return (
    <div className={classes.headerContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.logo}>
        <img src={textData.missionomega.imgSrc} alt="MISSION DIGITAL OMEGA"/>
        </div>
        <div className={classes.video}>
          <Video
            vidSrc={"https://www.youtube.com/embed/HII0i2kvGTY"}
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <div className={classes.rightContainer}>
        {textData.missionomega.text.map((para) => (
          <p>{para}</p>
        ))}
        <ul style={{ listStyleType: "circle" }}> { listItems } </ul>
      </div>
    </div>
  );
};
