import classes from './Partners.module.css';
import textData from './PartnersTextData';
import image from '../../resources/images/our-partners.png';


export default () => {
    return (
        <div>
            <div className={classes.top}>
                <img src={image} />
            </div>
            <div className={classes.message}>
                The club has collaborated and partnered-up with a bunch of organisations and companies. We have 8 partner-organisations right now and we're expanding our reach and network to bring in more and make this initiative successful for the youth of our country.
            </div>
            <div className={classes.societree}>
                <div>
                    <img src={textData[0].imgsrc} />
                </div>
                <div>
                    <div>
                        <p>Societree-Impactpartner</p>
                        </div>
                    <div>{textData[0].message}</div>
                </div>
            </div>
        </div>
    )
}