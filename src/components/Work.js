import React from 'react';
import Affirmations from '../assets/affirmationslogo.png'
import TBMP from '../assets/tbmplogo.png'
import Upnext from '../assets/upnextlogo.png'
import Foodfuse from '../assets/foodfuselogo.png'
import { Button, Tooltip, OverlayTrigger, Popover } from 'react-bootstrap'


const Work = (props) => {

    return (
        <div>
            <div className="workGrid">   
                <div className="box">
                    <p>
                        <img className="workLogo" alt="affirmations" src={Affirmations} width="100px"/>
                    </p>
                    <div className="workLinks">
                        <>
                            {['top'].map((placement) => (
                                <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                    <Popover.Title as="h3">{`Affirmations App`}</Popover.Title>
                                    <Popover.Content>
                                        <div className="popoverContent">
                                            <p>
                                                Affirmations is a website that provides its users with easily accessible suicide prevention resources and
                                                affirming quotes. Users are able to find local professional help and also have the opportunity to talk to 
                                                random volunteers. 
                                            </p>
                                            <a href="https://affirmations-client.herokuapp.com/" rel="noreferrer" target="_blank">Affirmations Site</a>
                                            <br></br>
                                            <a href="https://github.com/thleigh/Affirmations-App" rel="noreferrer" target="_blank">Github</a>
                                        </div>
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                                <Button variant="secondary">Affirmations</Button>
                                </OverlayTrigger>
                            ))}
                        </>
                    </div>
                </div>
                <div className="box">
                    <p>
                        <img className="workLogo tbmplogo" alt="the big mac project" src={TBMP} width="90px"/>
                    </p>
                    <div className="workLinks">
                        <>
                            {['top'].map((placement) => (
                                <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                    <Popover.Title as="h3">{`The Big Mac Project`}</Popover.Title>
                                    <Popover.Content>
                                        <div className="popoverContent">
                                            <p>
                                                TBMP, otherwise known as "The Big Mac Project", finds the price of every Mcdonald's Big Mac meal across the United States and compares them.
                                                The goal behind The Big Mac Project is to find the relationship between the cost of living between each city and 
                                                how that effects the price of common goods. 
                                            </p>
                                            <a href="" target="_blank">The Big Mac Project Site</a>
                                            <br></br>
                                            <a href="https://github.com/thleigh/The_Big_Mac_Front_End" rel="noreferrer" target="_blank"> Github</a>
                                        </div>
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                                <Button variant="secondary">TBMP</Button>
                                </OverlayTrigger>
                            ))}
                        </>
                    </div>
                </div>
                <div className="box">
                    <p>
                        <img className="workLogo upnextlogo" alt="upnext" src={Upnext} width="110px"/>
                    </p>
                    <div className="workLinks">
                        <>
                            {['bottom'].map((placement) => (
                                <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                    <Popover.Title as="h3">{`Upnext`}</Popover.Title>
                                    <Popover.Content>
                                        <div className="popoverContent">
                                            <p>
                                                TBMP, otherwise known as "The Big Mac Project", finds the price of every Mcdonald's Big Mac meal across the United States and compares them.
                                                The goal behind The Big Mac Project is to find the relationship between the cost of living between each city and 
                                                how that effects the price of common goods. 
                                            </p>
                                            <a href="http://upnext-app.herokuapp.com/" rel="noreferrer" target="_blank">Upnext Site</a>
                                            <br></br>
                                            <a href="https://github.com/thleigh/upnext" rel="noreferrer" target="_blank">Github</a>
                                        </div>
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                                <Button variant="secondary">Upnext</Button>
                                </OverlayTrigger>
                            ))}
                        </>
                    </div>
                </div>
                <div className="box">
                    <p>
                        <img className="workLogo" alt="Foodfuse" src={Foodfuse} width="130px"/>
                    </p>
                    <div className="workLinks">
                        <>
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                    trigger="click"
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Popover id={`popover-positioned-${placement}`}>
                                        <Popover.Title as="h3">{`FoodFuse`}</Popover.Title>
                                        <Popover.Content>
                                            <div className="popoverContent">
                                                <p>
                                                    TBMP, otherwise known as "The Big Mac Project", finds the price of every Mcdonald's Big Mac meal across the United States and compares them.
                                                    The goal behind The Big Mac Project is to find the relationship between the cost of living between each city and 
                                                    how that effects the price of common goods. 
                                                </p>
                                                <a href="https://foodfuse.herokuapp.com/" rel="noreferrer" target="_blank">FoodFuse Site</a>
                                                <br></br>
                                                <a href="https://github.com/thleigh/FoodFuse" rel="noreferrer" target="_blank"> Github</a>
                                            </div>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                    <Button variant="secondary">FoodFuse</Button>
                                    </OverlayTrigger>
                                ))}
                            </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work