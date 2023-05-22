import React, { useState } 	from 'react';
import Button 				from '../atoms/Button';
import Paragraph 			from '../atoms/Paragraph';
import Selection 			from '../atoms/Selection';
import TextInput 			from './TextInput'
import Title 				from '../atoms/Title';
import					 		 '../../App.css';

const Modal = ({ isOpen, onClose, onYes, onNo, children }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close" onClick={onClose}>&times;</span>
				{children}
				<div className="modal-buttons">
					<Button onClick={onYes} disabled={false}>Yes</Button>
					<Button onClick={onNo} disabled={false}>No</Button>
				</div>
			</div>
		</div>
	);
};

const Popup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');
	const [name, setName] = useState('');

	const options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
	];

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleSelectOption = (option) => {
		setSelectedOption(option);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleYes = () => {
		console.log("Yes clicked");
	};

	const handleNo = () => {
		console.log("No clicked");
	};

    return (
        <div>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal} onYes={handleYes} onNo={handleNo}>
				<Title>Modal Title</Title>
                <Paragraph>This is the modal content.</Paragraph>
				<Selection
					options={options}
					selectedOption={selectedOption}
					onSelectOption={handleSelectOption}
				/>
				<TextInput
					id="name"
					label="Name:"
					value={name}
					onChange={handleNameChange}
				/>
				<TextInput
					id="name"
					label="Name:"
					value={name}
					onChange={handleNameChange}
				/>
            </Modal>
        </div>
    );
}

export default Popup;