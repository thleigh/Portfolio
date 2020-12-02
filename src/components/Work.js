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
                        {['top', 'right', 'bottom', 'left'].map((placement) => (
                            <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                                <Popover.Content>
                                    <strong>Holy guacamole!</strong> Check this info.
                                </Popover.Content>
                                </Popover>
                            }
                            >
                            <Button variant="secondary">Popover on {placement}</Button>
                            </OverlayTrigger>
                        ))}
                    </>
                        <a href="https://affirmations-client.herokuapp.com/" rel="noreferrer" target="_blank">Affirmations</a>
                        <a href="https://github.com/thleigh/Affirmations-App" rel="noreferrer" target="_blank"> Github</a>
                    </div>
                </div>
                <div className="box">
                    <p>
                        <img className="workLogo tbmplogo" alt="the big mac project" src={TBMP} width="90px"/>
                    </p>
                    <div className="workLinks">
                        <a href="" target="_blank">TBMP </a>
                        <a href="https://github.com/thleigh/The_Big_Mac_Front_End" rel="noreferrer" target="_blank"> Github</a>
                    </div>
                </div>
                <div className="box">
                    <p>
                        <img className="workLogo upnextlogo" alt="upnext" src={Upnext} width="110px"/>
                    </p>
                    <div className="workLinks">
                        {/* <a href="http://upnext-app.herokuapp.com/" rel="noreferrer" target="_blank">Upnext </a>
                        <a href="https://github.com/thleigh/upnext" rel="noreferrer" target="_blank"> Github</a> */}
                    </div>
                </div>
                <div className="box">
                    <p>
                        <img className="workLogo" alt="Foodfuse" src={Foodfuse} width="130px"/>
                    </p>
                    <div className="workLinks">
                        {/* <a href="https://foodfuse.herokuapp.com/" rel="noreferrer" target="_blank">FoodFuse </a>
                        <a href="https://github.com/thleigh/FoodFuse" rel="noreferrer" target="_blank"> Github</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work