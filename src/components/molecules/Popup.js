import React, { useState } 	from 'react';
import Button 				from '../atoms/Button';
import Paragraph 			from '../atoms/Paragraph';
import Title 				from '../atoms/Title';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close" onClick={onClose}>&times;</span>
				{children}
			</div>
		</div>
	);
};

const Popup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

    return (
        <div>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
				<Title>Modal Title</Title>
                <Paragraph>This is the modal content.</Paragraph>
            </Modal>
        </div>
    );
}

export default Popup;