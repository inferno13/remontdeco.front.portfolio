import React, {useState} from 'react';
import "./ProfessionModal.css";
import {Button, Form, FormControl, Modal, Spinner} from "react-bootstrap";
import {dataMain} from "../../data/dataMain.js";
import {getDate} from "../../functions/getDate.js";
import MessageAlert from "../MessageAlert/MessageAlert.jsx";
import axios from "axios";



import {API_LINK, API_PROFESSION} from "../../constants/api.js";
import {API_PROFESSION_ADD} from "../../constants/api.js";
import {checkCity} from "../../hooks/checkCity";
import {useLocation} from "../../hooks/useLocation";

const ProfessionModal = ({ show, onHide }) => {

	const locations = checkCity(useLocation());

	const [title, setTitle] = useState('');

	const [error, setError] = useState(false);
	const [load, setLoad] = useState(false);
	const [success, setSuccess] = useState(false);

	const [answer, setAnswer] = useState(false);

	const handleSend = e => {

		e.preventDefault();

		setLoad(true)

		const date = Date.now()

		const options = {
			headers: {
				"Content-type": `multipart/form-data`
			},
		};

		axios.post(API_LINK + API_PROFESSION_ADD, {
			title
		}, options,
			)
			.then(res => {
				if(res.data.result == 'error') {
					setAnswer(res.data.data.error);
					setError(true)
					setLoad(false)
				} else {
					setAnswer("Профессия добавлена!");
					setSuccess(true);
					setError(null)
					document.getElementById('ModalForm').style.display = "none";
					location.reload()
				}
			})
			.catch(function (error) {
				console.log(error)
			})
			.finally(() => {
					//setLoad(false)
					//setFile(null)
			});
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className={"ProfessionModal"}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Добавить новый баннер
				</Modal.Title>
			</Modal.Header>

			<Modal.Body>

				<Form id="ModalForm" onSubmit={handleSend}>

					<FormControl
						required={true}
						placeholder={"*Название Профессии"}
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>


					<div className={"d-flex justify-content-between"}>


						<Button className={"yellow-but"} type={"submit"}>
							{load ? <Spinner size={"sm"} variant={"warning"} /> : "Отправить"}
						</Button>

					</div>

				</Form>

				{error && <MessageAlert variant={"danger"} text={answer} /> }
				{success && <MessageAlert variant={"success"} text={answer} />}

			</Modal.Body>

		</Modal>

	);
};

export default ProfessionModal;
