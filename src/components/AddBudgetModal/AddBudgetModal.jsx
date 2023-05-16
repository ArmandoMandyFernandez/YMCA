import "./AddBudgetModal.scss";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";
import { useBudgets } from "../../Functions/FunctionsContext";

function AddBudgetModal({ show, handleClose }) {
    const nameRef = useRef();
    const maxRef = useRef();
    const { addBudget } = useBudgets()

    function handleSubmit(e){
        e.preventDefault();
        addBudget(
            {
                name: nameRef.current.value,
                max: parseFloat(maxRef.current.value)
    
            })
            handleClose()

    }

    return (
        
            <Modal 
            show={show} 
            onHide={handleClose} 
            className="addBudgetModal">
                <Form className="addBudgetModal__form"onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Budget</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3"controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef}type="text" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="max">
                            <Form.Label>Maximum Spending</Form.Label>
                            <Form.Control ref={maxRef} type="number" min={0} step={0.01} required/>
                        </Form.Group>
                        <div className="addBudgetModal__container-button">
                            <button type="submit"
                            className="addBudgetModal__button">Add</button>
                        </div>
                    </Modal.Body>
                </Form>
            </Modal>
        
    );
}
export default AddBudgetModal;
