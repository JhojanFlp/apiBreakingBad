import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Character = ({char}) => {
  const { img, name, nickname, birthday, occupation, status, portrayed } = char;

  // Format Occupation
  var occupationFormat = occupation[0]
  console.log(occupation)
  if(occupation.length > 1){
    for(var i = 1; i < occupation.length; i++){
      occupationFormat = occupationFormat + ' - ' + occupation[i]
    }
  }
  
  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <img src={img} alt={name} className="card-img-top imgcd"/>
        <div className="card-body text-center">
          <p className="card-text font-weight-bold">{name} ({nickname})</p>

          {/* Modal Button */}
          <Button variant="primary" onClick={handleShow}>
            More info!
          </Button>

          {/* Modal */}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col">
                <img src={img} alt={name} className="w-100"/>
                </div>
                <div className="col">
                  <p><span className="font-weight-bold">Nickname:</span> {nickname}</p>
                  <p><span className="font-weight-bold">Birthday:</span> {birthday}</p>
                  <p><span className="font-weight-bold">Occupation:</span> {occupationFormat}</p>
                  <p><span className="font-weight-bold">Status:</span> {status}</p>
                  <p><span className="font-weight-bold">Portrayed:</span> {portrayed}</p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>
    </div>
  );
}
 
export default Character;