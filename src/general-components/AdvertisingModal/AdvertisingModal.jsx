import React, {useState} from 'react';
import "./AdvertisingModal.css";
import {Button, Form, FormControl, Modal, Spinner} from "react-bootstrap";
import FileInput from "./FileInput.jsx";
import {dataMain} from "../../data/dataMain.js";
import {handleAddAdvertising} from "../../functions/handleAddAdvertising.js";
import {handleAddImage} from "../../functions/handleAddImage.js";
import {getDate} from "../../functions/getDate.js";
import MessageAlert from "../MessageAlert/MessageAlert.jsx";

const AdvertisingModal = ({ show, onHide }) => {

	const [file, setFile] = useState(null);
	const [title, setTitle] = useState('');
	const [descr, setDescr] = useState('');
	const [phone, setPhone] = useState('');
	const [select, setSelect] = useState(null);

	const [error, setError] = useState(false);
	const [load, setLoad] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleSend = e => {
		e.preventDefault();

		if (!select){
			setError(true)
			return;
		}

		setLoad(true)
		const date = Date.now();
		handleAddAdvertising({
			title,
			description: descr,
			phone,
			idGroup: select,
			date: getDate(date),
			idAdv: date,
		})
			.then(() => {
				handleAddImage(file, date)
					.then(() => setSuccess(true))
					.catch(() => setError(true))
			})
			.catch(() => setError(true))
			.finally(() => {
				setLoad(false)
				setFile(null)
				setTitle("")
				setDescr("")
			})

		setTimeout(() => {
			setSuccess(false)
			setError(false)
		},10000)
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className={"AdvertisingModal"}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Опубликуйте ваш рекламный пост
				</Modal.Title>
			</Modal.Header>

			<Modal.Body>

				<Form onSubmit={handleSend}>

					<Form.Select onChange={e => setSelect(e.target.value)}>
						<option hidden>*Направление компании</option>
						{
							dataMain.map(elem => (
								<option value={elem.id} key={elem.id}>
									{elem.title}
								</option>
							))
						}
					</Form.Select>

					<FormControl
						required={true}
						placeholder={"*Название компании"}
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>

					<FormControl
						required={true}
						placeholder={"*Телефон для связи"}
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>

					<FormControl
						required={true}
						as={"textarea"}
						placeholder={"*Описание"}
						value={descr}
						onChange={e => setDescr(e.target.value)}

					/>

					{error && <MessageAlert variant={"danger"} text={"Ошибка добавления поста!"} /> }
					{success && <MessageAlert variant={"success"} text={"Пост успешно добавлен!"} />}

					<div className={"d-flex justify-content-between"}>
						<FileInput value={file} onChange={value => setFile(value[0])} />

						<Button className={"yellow-but"} disabled={!file} type={"submit"}>
							{load ? <Spinner size={"sm"} variant={"warning"} /> : "Отправить"}
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>

	);
};

export default AdvertisingModal;
