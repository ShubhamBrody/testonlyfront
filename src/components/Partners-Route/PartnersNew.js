/* eslint-disable import/no-anonymous-default-export */
import classes from './Partners.module.css';
import textData from './PartnersTextData';
import image from '../../resources/images/our-partners.png';
import { Fragment } from 'react';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import React from 'react';

class Partnercomponent extends React.Component {
    constructor(props) {
        super(props);
        const data = [];
        textData.forEach((item) => {
            data.push(false);
        })
        this.state = {
            isCollapsed: data
        };
        this.fun = this.fun.bind(this);
    }
    fun(index) {
        const temp = this.state.isCollapsed;
        temp[index] = !temp[index];
        this.setState({
            isCollapsed: temp
        });
    }
    render() {
        return (
            <div>
                <div className={classes.top}>
                    <img src={image} alt="refresh for img" />
                </div>
                <div className={classes.message}>
                    The club has collaborated and partnered-up with a bunch of organisations and companies. We have 8 partner-organisations right now and we're expanding our reach and network to bring in more and make this initiative successful for the youth of our country.
            </div>
                {
                    textData.map((item, index) => (
                        <div className={classes.wrapper}>
                            { ((index + 1) % 2 !== 0) &&
                                <Fragment>
                                    <div className={classes.headingWrapper} key={index}>
                                        <button onClick={() => this.fun(index)} type="button" className={classes.heading} data-toggle="collapse" data-target={'#new' + index}>
                                            {
                                                <span>
                                                    {item.heading}
                                                    <span className={classes.arrow}>
                                                        {!this.state.isCollapsed[index] ? <BiDownArrow /> : <BiUpArrow />}
                                                    </span>
                                                </span>
                                            }
                                        </button>
                                    </div>
                                    <div id={'new' + index} class="collapse">
                                        <div className={classes.contentWrapper}>
                                            <img src={item.imgsrc} alt="refresh for img" />
                                            <div>{item.message}</div>
                                        </div>
                                    </div>
                                </Fragment>
                            }
                            { ((index + 1) % 2 === 0) &&
                                <Fragment>
                                    <div className={classes.headingWrapper} key={index}>
                                        <button type="button" onClick={() => this.fun(index)} className={classes.heading} data-toggle="collapse" data-target={'#new' + index}>
                                            {
                                                <span>
                                                    {item.heading}
                                                    <span className={classes.arrow}>
                                                        {!this.state.isCollapsed[index] ? <BiDownArrow /> : <BiUpArrow />}
                                                    </span>
                                                </span>
                                            }
                                        </button>
                                    </div>
                                    <div id={'new' + index} class="collapse">
                                        <div className={classes.contentWrapper1}>
                                            <div>{item.message}</div>
                                            <img src={item.imgsrc} alt="refresh for img" />
                                        </div>
                                    </div>
                                </Fragment>
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default Partnercomponent;