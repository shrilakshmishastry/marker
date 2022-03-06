import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import SignUp from './Signup';
import Login from './Login';

const ModalBase = ({ showModal, handleModalClose }) => {
	const [ layout, setlayout ] = useState('Login');
	const [ errorTextShow, seterrorTextShow ] = useState(false);
	useEffect(
		() => {
			setlayout('Login');
		},
		[ showModal ]
	);
	return (
		<Modal show={showModal} onHide={handleModalClose}>
			<Modal.Header closeButton>
				{layout}
				{errorTextShow ? <p>error</p> : null}
			</Modal.Header>
			<Modal.Body>
				{layout === 'Login' ? (
					<Login setlayout={setlayout} seterrorTextShow={seterrorTextShow} />
				) : (
					<SignUp setlayout={setlayout} seterrorTextShow={seterrorTextShow} />
				)}
			</Modal.Body>
		</Modal>
	);
};
export default ModalBase;
