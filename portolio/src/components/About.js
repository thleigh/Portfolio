import React from 'react';
import { Link } from 'react-router-dom';
import me from '../assets/tanner2.png';
import { Modal } from 'react-bootstrap'
import Resume from '../assets/Resume.pdf'

const About = ({fullpageApi}) => {
    let [modalResume, setModalResume] = React.useState(false);

    function ResumeModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-90w"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Resume
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <embed className="resume" src={ Resume } width="700px" height="700px"/>
            </Modal.Body>
            <Modal.Footer>
                <button className="nav-link text-dark myBtn" >Download</button>
                <button className="nav-link text-dark myBtn" onClick={ props.onHide }>Close</button>
            </Modal.Footer>
          </Modal>
        );
      }
    return (
        <div>
            <div className="aboutMain">
                <div className="about">
                    <div>
                        <img className="profilePic" src={me} alt="Me"></img>
                    </div>
                    <div className="aboutContainer">

                        <p> I am a software engineer with an immeasurable passion for cultivating 
                            relationships and seeing the best in every moment. 
                            Having a background in film and graphic design, 
                            I know how to structure code and create content that is not only 
                            functional but beautiful. 
                            You can always count on me to bring people together to go above and beyond.
                        </p>
                        
                        <div className="aboutLinksContainer">
                            <button className="nav-link aboutLinks" onClick={() => fullpageApi.moveSectionDown()}>Work</button>
                            <button className="nav-link aboutLinks" onClick={() => setModalResume(true)}> Resume </button>

                            <ResumeModal
                                show={modalResume}
                                onHide={() => setModalResume(false)}
                            />

                            <button className="nav-link aboutLinks">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About