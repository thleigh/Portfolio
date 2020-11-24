import React from 'react';
import me from '../assets/tanner2.png';
import { Modal } from 'react-bootstrap'
import Resume from '../assets/Resume.pdf'

const About = ({fullpageApi}) => {
    let [modalResume, setModalResume] = React.useState(false);
    let [modalContact, setModalContact] = React.useState(false);


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
                <embed className="resume" src={ Resume } width="765px" height="600px"/>
            </Modal.Body>
            <Modal.Footer>
                <a href={ Resume } download="Tanner_Leigh_Resume">
                    <button className="nav-link text-dark myBtn">Download</button>
                </a>
                <button className="nav-link text-dark myBtn" onClick={ props.onHide }>Close</button>
            </Modal.Footer>
          </Modal>
        );
    }

    function ContactModal(props) {
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
               Contact
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="contactContainer">
                    <p>
                        <a className="contactLinks" href="https://www.linkedin.com/in/tannerhleigh/" target="_blank">Linkedin</a>
                    </p>
                    <p>
                        <a className="contactLinks" href="https://github.com/thleigh" target="_blank">Github</a>
                    </p>
                    <p>Tannerhleigh@gmail.com</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
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
                        
                        <div className="aboutLinksContainerContainer">
                            <div className="aboutLinksContainer">
                                <button className="nav-link aboutLinks" onClick={() => fullpageApi.moveSectionDown()}>Work</button>
                                <button className="nav-link aboutLinks" onClick={() => setModalResume(true)}> Resume </button>

                                <ResumeModal
                                    show={modalResume}
                                    onHide={() => setModalResume(false)}
                                />

                                <button className="nav-link aboutLinks" onClick={() => setModalContact(true)}>Contact</button>

                                <ContactModal
                                    show={modalContact}
                                    onHide={() => setModalContact(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About