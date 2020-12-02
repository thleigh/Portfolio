import React from 'react';
import Affirmations from '../assets/affirmationslogo.png'
import TBMP from '../assets/tbmplogo.png'
import Upnext from '../assets/upnextlogo.png'
import Foodfuse from '../assets/foodfuselogo.png'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Work = (props) => {

    const useStyles = makeStyles((theme) => ({
        typography: {
          padding: theme.spacing(2),
        },
      }));

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div className="workGrid">   
                <div className="box">
                    <p>
                        <img className="workLogo" alt="affirmations" src={Affirmations} width="100px"/>
                    </p>
                    <div className="workLinks">
                    <div>
                        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                            Open Popover
                        </Button>
                    </div>
                        {/* <a href="https://affirmations-client.herokuapp.com/" rel="noreferrer" target="_blank">Affirmations </a>
                        <a href="https://github.com/thleigh/Affirmations-App" rel="noreferrer" target="_blank"> Github</a> */}
                    </div>
                </div>
                <div className="box">
                    <p>
                        <img className="workLogo tbmplogo" alt="the big mac project" src={TBMP} width="90px"/>
                    </p>
                    <div className="workLinks">
                        {/* <a href="" target="_blank">TBMP </a>
                        <a href="https://github.com/thleigh/The_Big_Mac_Front_End" rel="noreferrer" target="_blank"> Github</a> */}
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