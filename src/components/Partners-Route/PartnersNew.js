import classes from './Partners.module.css';
import textData from './PartnersTextData';
import image from '../../resources/images/our-partners.png';
import { Fragment } from 'react';
import image1 from '../../resources/images/p bottom image.png'

export default () => {
    return (
        <div>
            <div className={classes.top}>
                <img src={image} />
            </div>
            <div className={classes.message}>
                The club has collaborated and partnered-up with a bunch of organisations and companies. We have 8 partner-organisations right now and we're expanding our reach and network to bring in more and make this initiative successful for the youth of our country.
            </div>
            <div className={classes.contentWrapper}>
                <div>
                    <img src={textData[0].imgsrc} />
                </div>
                <div>
                    <div className={classes.heading}>{textData[0].heading}</div>
                    <div>{textData[0].message}</div>
                </div>
            </div>
            <div className={classes.bgimage}>
                {
                    textData.map((data, index) => (
                        <div className={classes.contentWrapper} key={index}>
                            { ((index + 1) % 2 != 0) && (index != 0) && (index != textData.length - 1) &&
                                <Fragment>
                                    <div>
                                        <img src={data.imgsrc} />
                                    </div>
                                    <div>
                                        <div className={classes.heading}>{data.heading}</div>
                                        <div>{data.message}</div>
                                    </div>
                                </Fragment>}
                            { ((index + 1) % 2 == 0) && (index != textData.length - 1) &&
                                <Fragment>
                                    <div>
                                        <div className={classes.heading}>{data.heading}</div>
                                        <div>{data.message}</div>
                                    </div>
                                    <div>
                                        <img src={data.imgsrc} />
                                    </div>
                                </Fragment>}
                        </div>
                    ))
                } </div>
            <div className={classes.contentWrapper}>
                <div>
                    <div className={classes.heading}>{textData[textData.length - 1].heading}</div>
                    <div>{textData[textData.length - 1].message}</div>
                </div>
                <div>
                    <img src={textData[textData.length - 1].imgsrc} />
                </div>
            </div>
        </div>
    )
}