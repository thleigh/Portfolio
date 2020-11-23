import React, { useState } from 'react';\
import { Button, Modal } from 'react-bootstrap'

const Work = (props) => {
    let [modalState, setModalState] = React.useState(false);

    function StateModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               { state }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p className="aboutParagraph">
                { state } data.
            </p>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-info" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <div>
            <div className="workGrid">   
                <div className="box">
                    <a href="https://affirmations-client.herokuapp.com/" rel="noreferrer" target="_blank">Affirmations</a>
                    <a href="https://github.com/thleigh/Affirmations-App" rel="noreferrer" target="_blank">Github Repository</a>
                </div>
                <div className="box">
                    <a href="http://upnext-app.herokuapp.com/" rel="noreferrer" target="_blank">Upnext</a>
                    <a href="https://github.com/thleigh/upnext" rel="noreferrer" target="_blank">Github Repository</a>
                </div>
                <div className="box">
                    <a href="https://foodfuse.herokuapp.com/" rel="noreferrer" target="_blank">FoodFuse</a>
                    <a href="https://github.com/thleigh/FoodFuse" rel="noreferrer" target="_blank">Github Repository</a>
                </div>
                <div className="box">
                    <a href="" target="_blank">The Mcdonalds Project</a>
                    <a href="https://github.com/thleigh/The_Big_Mac_Front_End" rel="noreferrer" target="_blank">Github Repository</a>
                </div>
            </div>
        </div>
    )
}

export default Work