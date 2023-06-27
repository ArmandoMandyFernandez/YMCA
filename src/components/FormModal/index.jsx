// Try moving your other Form Modals to use something like this
export default function FormModal({ show, handleClose, className, handleSubmit, modalTitle, form }) {
    return (
        <Modal show={show} onHide={handleClose} className={className}>
            <Form className={`${className}__form`} onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        // Pass the a form component here
                        form
                        // Note the button below could be removed from this entirely and passed via the form
                    }
                    <div className={`${className}__container-button`}>
                        <button
                            type="submit"
                            className={`${className}__button`}
                        >
                            Add
                        </button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}