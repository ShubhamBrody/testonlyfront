/* eslint-disable import/no-anonymous-default-export */
import classes from './Header.module.css';
import textData from '../../ProjectTextData';

export default () => {
    return (
            <div className={classes.header}>
                <img src={textData.missionmillions.imgSrc} alt="MISSION MILLION BOOKS"/>
                {textData.missionmillions.text.map(para => (
                    <p>{para}</p>
                ))}
            </div>
    )
}