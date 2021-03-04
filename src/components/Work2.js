import React, { Component } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import styled from "@emotion/styled/macro"

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

const Button = styled.button({
  color: "white",
  backgroundColor: "black",
  marginTop: "16%",
  height: "30px",
  width: "50px",   
});

const BigTitle = styled.h2({
  textTransform: "uppercase",
  // fontFamily: "Helvetica",
});

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const SubTitle = styled.h4({
  // fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
  textAlign: "center",
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
  textAlign: "center",
});

const TBMP = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "600px",
  height: "350px",
  cursor: "pointer",
  backgroundImage: "url(/tbmp.jpg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const Upnext = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "600px",
  height: "350px",
  cursor: "pointer",
  backgroundImage: "url(/upnext.jpg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const FoodFuse = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "600px",
  height: "350px",
  cursor: "pointer",
  backgroundImage: "url(/foodfuse.jpg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const Affirmation = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "600px",
  height: "350px",
  cursor: "pointer",
  backgroundImage: "url(/bg.jpg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const Hone = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "600px",
  height: "350px",
  cursor: "pointer",
  backgroundImage: "url(/bg.jpg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const CTA = styled.a({
  position: "absolute",
  bottom: "80px",
  left: "40%",
  textAlign: "center",
});

class Work2 extends Component {

  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '<' : '>'
    return (
      <Button onClick={ onClick } disabled={ isEdge }>
        { pointer }
      </Button>
    )
  }

  render () {
    return (
        <>
            <div>
                <h3 className="workTitle">Work</h3>
            </div>
            <div className="workCarousel">
            <Carousel itemsToShow={1} renderArrow={this.myArrow}>                
                <Hone>
                  <DisplayOver>
                    {/* <BigTitle>Really Cool Title!</BigTitle> */}
                    <Hover>
                      <SubTitle>Hone</SubTitle>
                      <Paragraph className="workText">
                          Hones is a website that provides its users with easily accessible suicide prevention resources and
                          affirming quotes. Users are able to find local professional help and also have the opportunity to talk to 
                          random volunteers. Please reach out for a demo!
                      </Paragraph>
                      <CTA>
                        <a href="http://www.honenetworks.com/" rel="noreferrer" target="_blank">Hone Site</a>
                      </CTA>
                    </Hover>
                  </DisplayOver>
                </Hone>
                <Affirmation>
                  <DisplayOver>
                    {/* <BigTitle>Really Cool Title!</BigTitle> */}
                    <Hover>
                      <SubTitle>Affirmations</SubTitle>
                      <Paragraph className="workText">
                          Affirmations is a website that provides its users with easily accessible suicide prevention resources and
                          affirming quotes. Users are able to find local professional help and also have the opportunity to talk to 
                          random volunteers. 
                      </Paragraph>
                      <CTA>
                        <a href="https://affirmations-client.herokuapp.com/" rel="noreferrer" target="_blank">Affirmations Site</a>
                        <br></br>
                        <a href="https://github.com/thleigh/Affirmations-App" rel="noreferrer" target="_blank">Github</a>
                      </CTA>
                    </Hover>
                  </DisplayOver>
                </Affirmation>
                <Upnext>
                  <DisplayOver>
                    {/* <BigTitle>Really Cool Title!</BigTitle> */}
                    <Hover>
                      <SubTitle>Upnext</SubTitle>
                      <Paragraph className="workText">
                        upnext is a website where users can find out about upcoming show releases, where to buy them, 
                        and how to buy them. upnext users will be able to browse older generations of sneakers and 
                        interact with other users through community pages that allow them to post pictures, comment, 
                        like, and favorite.        
                      </Paragraph>
                      <CTA>
                        <a href="http://upnext-app.herokuapp.com/" rel="noreferrer" target="_blank">Upnext Site</a>
                        <br></br>
                        <a href="https://github.com/thleigh/upnext" rel="noreferrer" target="_blank">Github</a>
                      </CTA>
                    </Hover>
                  </DisplayOver>
                </Upnext>
                <TBMP>
                  <DisplayOver>
                    {/* <BigTitle>Really Cool Title!</BigTitle> */}
                    <Hover>
                      <SubTitle>The Big Mac Project</SubTitle>
                      <Paragraph className="workText">
                        TBMP, otherwise known as "The Big Mac Project", finds the price of every Mcdonald's Big Mac meal across the United States and compares them.
                        The goal behind The Big Mac Project is to find the relationship between the cost of living between each city and 
                        how that effects the price of common goods. <b>The Big Mac Project has not been deployed online, but a demo can be shown!</b>
                      </Paragraph>
                      <CTA>
                        <a href="/" target="_blank">The Big Mac Project Site</a>
                        <br></br>
                        <a href="https://github.com/thleigh/The_Big_Mac_Front_End" rel="noreferrer" target="_blank"> Github</a>
                      </CTA>
                    </Hover>
                  </DisplayOver>
                </TBMP>
                <FoodFuse>
                  <DisplayOver>
                    {/* <BigTitle>Really Cool Title!</BigTitle> */}
                    <Hover>
                      <SubTitle>FoodFuse</SubTitle>
                      <Paragraph className="workText">
                        FoodFuse searches and sorts through the 4 major food delivery apps by the user's location and 
                        returns the restaurant's data. FoodFuse provides the users with a comparison of the delivery 
                        fee's and delivery times between each service so that the user can make an educated choice on which app to use.
                      </Paragraph>
                      <CTA>
                        <a href="https://foodfuse.herokuapp.com/" rel="noreferrer" target="_blank">FoodFuse Site</a>
                        <br></br>
                        <a href="https://github.com/thleigh/FoodFuse" rel="noreferrer" target="_blank"> Github</a>
                      </CTA>
                    </Hover>
                  </DisplayOver>
                </FoodFuse>
            </Carousel>
            </div>
        </>
    )
  }
}

export default Work2