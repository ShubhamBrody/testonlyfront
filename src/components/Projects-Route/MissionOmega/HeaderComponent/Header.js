/* eslint-disable import/no-anonymous-default-export */
import classes from "./Header.module.css";
import Video from "../../../UI/Video";
import textData from "../../ProjectTextData";

export default () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.logo}>
        <img src={textData.missionomega.imgSrc} alt="MISSION DIGITAL OMEGA"/>
        </div>
        <div className={classes.video}>
          <Video
            vidSrc={"https://www.youtube.com/embed/_lEkD8IGkwo"}
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <div className={classes.rightContainer}>
        {textData.missionomega.text.map((para) => (
          <p>{para}</p>
        ))}
      </div>
    </div>
  );
};
