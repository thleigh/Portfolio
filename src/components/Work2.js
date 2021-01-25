import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Affirmations from '../assets/affirmationsss.png';
import TBMP from '../assets/affirmationsss.png';
import Upnext from '../assets/upnextss.png';
import Foodfuse from '../assets/foodfusess.png';
import styled from "@emotion/styled/macro"

const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "500px",
  height: "350px",
  cursor: "pointer",
  backgroundImage: "url(../assets/affirmationsss.png)",
});

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
});

const BigTitle = styled.h2({
  textTransform: "uppercase",
  fontFamily: "Helvetica",
});

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});
const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});
const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});

class Work2 extends Component {

  render () {
    return (
        <>
            <div>
                <h3 className="workTitle">Work</h3>
            </div>
            <div>
            <Carousel itemsToShow={1}>
                {/* <div>
                    <div className="affirmationsParent">
                      <div className="affirmationsChild">
                        <h4>Affirmations</h4>
                        <p>
                          Affirmations is a website that provides its users with easily accessible suicide prevention resources and
                          affirming quotes. Users are able to find local professional help and also have the opportunity to talk to 
                          random volunteers. 
                        </p>
                        <a href="https://affirmations-client.herokuapp.com/" rel="noreferrer" target="_blank">Affirmations Site</a>
                        <br></br>
                        <a href="https://github.com/thleigh/Affirmations-App" rel="noreferrer" target="_blank">Github</a>
                      </div>
                    </div>
                    <img className="screenshot" src={Affirmations} alt="Affirmations"></img>
                </div> */}
                <Background>
                  <DisplayOver>
                    <BigTitle>Really Cool Title!</BigTitle>
                    <Hover>
                      <SubTitle>Affirmations</SubTitle>
                      <Paragraph>
                          Affirmations is a website that provides its users with easily accessible suicide prevention resources and
                          affirming quotes. Users are able to find local professional help and also have the opportunity to talk to 
                          random volunteers. 
                      </Paragraph>
                      <CTA>View More +</CTA>
                    </Hover>
                  </DisplayOver>
                </Background>
                <div >
                    <img className="screenshot" src={Upnext} alt="Upnext"></img>
                </div>
                <div>
                    <img className="screenshot" src={TBMP} alt="TBMP"></img>
                </div>
                <div>
                    <img className="screenshot" src={Foodfuse} alt="Foodfuse"></img>
                </div>
            </Carousel>
            </div>
        </>
    )
  }
}

export default Work2