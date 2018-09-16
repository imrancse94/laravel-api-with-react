import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid,Row,Col,Dropdown,MenuItem,DropdownButton,ButtonToolbar,Modal } from 'react-bootstrap';

function getModal() {

    return(
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>One fine body...</Modal.Body>

                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
    
}

export default Modal;