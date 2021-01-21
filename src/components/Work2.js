import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Affirmations from '../assets/affirmationsss.png';
import TBMP from '../assets/affirmationsss.png';
import Upnext from '../assets/upnextss.png';
import Foodfuse from '../assets/foodfusess.png';

class Work2 extends Component {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
    ]
  }
  render () {
    const { items } = this.state;
    return (
        <>
            <div>
                <h3 className="workTitle">Work</h3>
            </div>
            <div>
            <Carousel itemsToShow={1}>
                <div key={items.id}>
                    <img className="screenshot" src={Affirmations} alt="Affirmations"></img>
                </div>
                <div key={items.id}>
                    <img className="screenshot" src={Upnext} alt="Upnext"></img>
                </div>
                <div key={items.id}>
                    <img className="screenshot" src={TBMP} alt="TBMP"></img>
                </div>
                <div key={items.id}>
                    <img className="screenshot" src={Foodfuse} alt="Foodfuse"></img>
                </div>
            </Carousel>
            </div>
        </>
    )
  }
}

export default Work2