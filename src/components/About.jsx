
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";




const About = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="items-center bg-black p-2 text-white font-mono w-full h-20  ml-32 border-white border-2 rounded-md" onClick={showModal}>samizdat</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Samizdat </Modal.Title>
        </Modal.Header>
        <Modal.Body>  
Comprising six songs, samizdat conjures a world of dystopian futures, where the only way to survive is to create your own reality. The EP is a an exploration of the human condition, and the ways in which we can find meaning in a world that seems to be falling apart. The title, samizdat, is a Russian word that means “self-published literature.” It was used to describe the underground publishing of banned literature in the Soviet Union. The word is a combination of the Russian words sam (self) and izdat (publishing house). The word samizdat is a metaphor for the way in which we can create our own reality, and find meaning in a world that seems to be falling apart.

</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>close</button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default About;