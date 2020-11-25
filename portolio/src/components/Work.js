import React from 'react';
import Affirmations from '../assets/affirmationslogo.png'
import TBMP from '../assets/tbmplogo.png'
import Upnext from '../assets/upnextlogo.png'
import Foodfuse from '../assets/foodfuselogo.png'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Work = (props) => {

    const useStyles = makeStyles((theme) => ({
        popover: {
          pointerEvents: 'none',
        },
        paper: {
          padding: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    // Affirmations Popover
    const [AffirmationsPop, setAffirmationsPop] = React.useState(null);
    const handleAffirmationsPop = (event) => {
        setAffirmationsPop(event.currentTarget);
      };
    
    const handleAffirmationsPopClose = () => {
     setAffirmationsPop(null);
    };
    const openAffirmations = Boolean(AffirmationsPop);

    // TBMP Popover
    const [TBMPPop, setTBMPPop] = React.useState(null);
    const handleTBMPPop = (event) => {
        setTBMPPop(event.currentTarget);
      };
    
    const handleTBMPPopClose = () => {
     setTBMPPop(null);
    };
    const openTBMP = Boolean(TBMPPop);

    // Foodfuse Popover
    const [FoodfusePop, setFoodfusePop] = React.useState(null);
    const handleFoodfusePop = (event) => {
        setFoodfusePop(event.currentTarget);
      };
    
    const handleFoodfusePopClose = () => {
     setFoodfusePop(null);
    };
    const openFoodfuse = Boolean(FoodfusePop);

    // Upnext Popover
    const [UpnextPop, setUpnextPop] = React.useState(null);
    const handleUpnextPop = (event) => {
        setUpnextPop(event.currentTarget);
      };
    
    const handleUpnextPopClose = () => {
     setUpnextPop(null);
    };
    const openUpnext = Boolean(UpnextPop);

    return (
        <div>
            <div className="workGrid">   
                <div className="box">
                    <p>
                        <Typography
                            aria-owns={openAffirmations ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handleAffirmationsPop}
                            onMouseLeave={handleAffirmationsPopClose}
                        >
                            <img className="workLogo" alt="affirmations" src={Affirmations} width="100px"/>
                        </Typography>
                        <div>
                            <Popover
                                id="mouse-over-popover"
                                className={classes.popover}
                                classes={{
                                paper: classes.paper,
                                }}
                                openAffirmations={openAffirmations}
                                AffirmationsPop={AffirmationsPop}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                onClose={handleAffirmationsPopClose}
                                disableRestoreFocus
                            >
                                <Typography>
                                    Affirmations is a suicide prevention website built with 
                                    <br></br>
                                    the intention to affirm users and provide them
                                    <br></br>
                                    with the proper resources to find local professionals or volunteers.
                                </Typography>
                            </Popover>
                        </div>
                    </p>
                    <div className="workLinks">
                        <a href="https://affirmations-client.herokuapp.com/" rel="noreferrer" target="_blank">Affirmations </a>
                        <a href="https://github.com/thleigh/Affirmations-App" rel="noreferrer" target="_blank"> Github</a>
                    </div>
                </div>
                <div className="box">
                    <p>
                        <Typography
                            aria-owns={openTBMP ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handleTBMPPop}
                            onMouseLeave={handleTBMPPopClose}
                        >
                            <img className="workLogo tbmplogo" alt="the big mac project" src={TBMP} width="90px"/>
                        </Typography>
                        <div>
                            <Popover
                                id="mouse-over-popover"
                                className={classes.popover}
                                classes={{
                                paper: classes.paper,
                                }}
                                openTBMP={openTBMP}
                                TBMPPop={TBMPPop}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                onClose={handleTBMPPopClose}
                                disableRestoreFocus
                            >
                                <Typography>I use Popover.</Typography>
                            </Popover>
                        </div>
                    </p>
                    <div className="workLinks">
                        <a href="" target="_blank">TBMP </a>
                        <a href="https://github.com/thleigh/The_Big_Mac_Front_End" rel="noreferrer" target="_blank"> Github</a>
                    </div>
                </div>
                <div className="box">
                    <p>
                        <Typography
                            aria-owns={openUpnext ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handleUpnextPop}
                            onMouseLeave={handleUpnextPopClose}
                        >
                            <img className="workLogo upnextlogo" alt="upnext" src={Upnext} width="110px"/>
                        </Typography>
                        <div>
                            <Popover
                                id="mouse-over-popover"
                                className={classes.popover}
                                classes={{
                                paper: classes.paper,
                                }}
                                openUpnext={openUpnext}
                                UpnextPop={UpnextPop}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                onClose={handleUpnextPopClose}
                                disableRestoreFocus
                            >
                                <Typography>I use Popover.</Typography>
                            </Popover>
                        </div>
                    </p>
                    <div className="workLinks">
                        <a href="http://upnext-app.herokuapp.com/" rel="noreferrer" target="_blank">Upnext </a>
                        <a href="https://github.com/thleigh/upnext" rel="noreferrer" target="_blank"> Github</a>
                    </div>
                </div>
                <div className="box">
                    <p>
                        <Typography
                            aria-owns={openFoodfuse ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handleFoodfusePop}
                            onMouseLeave={handleFoodfusePopClose}
                        >
                            <img className="workLogo" alt="Foodfuse" src={Foodfuse} width="130px"/>
                        </Typography>
                        <div>
                            <Popover
                                id="mouse-over-popover"
                                className={classes.popover}
                                classes={{
                                paper: classes.paper,
                                }}
                                openFoodfuse={openFoodfuse}
                                FoodfusePop={FoodfusePop}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                }}
                                onClose={handleFoodfusePopClose}
                                disableRestoreFocus
                            >
                                <Typography>I use Popover.</Typography>
                            </Popover>
                        </div>
                    </p>
                    <div className="workLinks">
                        <a href="https://foodfuse.herokuapp.com/" rel="noreferrer" target="_blank">FoodFuse </a>
                        <a href="https://github.com/thleigh/FoodFuse" rel="noreferrer" target="_blank"> Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work