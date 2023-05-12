import React, { useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap';

export default function BootstrapExamples() {
    return (
        <div className='m-5'>
            <AlertExample />
            <ButtonExample />
            <ModalExample/>
        </div>
    )
}

function AlertExample() {
    return (
        <>
            <Alert variant="primary"> This is a primary alert—check it out!</Alert><hr />

            {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ].map((variant) => (
                <Alert key={variant} variant={variant} dismissible closeVariant="white">
                    This is a {variant} alert—check it out!
                </Alert>
            ))}
        </>
    );
}


function ButtonExample() {
    const handleClick =()=>{
        console.log("Clicked....")
    }

    return (
        <>
            <Button variant="outline-primary" onClick={handleClick} size="lg">Primary</Button>{' '}
            <Button variant="secondary" size="md">Secondary</Button>{' '}
            <Button variant="success" size="sm">Success</Button>{' '}
            <Button variant="warning" size="xl">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button href='#' variant="link">Link</Button>
            <div>
                <Button variant="primary" size="sm">  Small button </Button>{' '}
                <Button variant="secondary" size="sm">  Small button </Button>
            </div>
            <hr/>
            <div className="d-grid gap-2">
                <Button variant="primary" size="md">
                    Block level button
                </Button>
                <Button variant="secondary" size="md">
                    Block level button
                </Button>
            </div>
        </>
    );
}


function ModalExample() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <button className='btn btn-primary'>Primary Button</button>
        
      </>
    );
  }