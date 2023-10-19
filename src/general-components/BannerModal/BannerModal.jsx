import React, {useState} from 'react';
import "./BannerModal.css";
import {Button, Form, FormControl, Modal, Spinner} from "react-bootstrap";
import {dataMain} from "../../data/dataMain.js";
import {getDate} from "../../functions/getDate.js";
import MessageAlert from "../MessageAlert/MessageAlert.jsx";
import axios from "axios";

import FileInput from "./FileInput.jsx";

import {API_LINK} from "../../constants/api.js";
import {API_BANNER_ADD} from "../../constants/api.js";
import {checkCity} from "../../hooks/checkCity";
import {useLocation} from "../../hooks/useLocation";

const BannerModal = ({ show, onHide }) => {

	const locations = checkCity(useLocation());

	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [href, setHref] = useState('');

	const [city, setCity] = useState(locations);
	const [file, setFile] = useState(null);

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

		axios.post(API_LINK + API_BANNER_ADD, {
			title,
			text,
			href,
			city,
			photo: file,
		}, options,
			)
			.then(res => {
				if(res.data.result == 'error') {
					setAnswer(res.data.data.error);
					setError(true)
					setLoad(false)
				} else {
					setAnswer("Баннер добавлен!");
					setSuccess(true);
					setError(null)
					document.getElementById('ModalForm').style.display = "none";
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
			className={"BannerModal"}
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
						placeholder={"*Заголовок"}
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>

					<FormControl
						required={true}
						placeholder={"*Текст"}
						value={text}
						onChange={e => setText(e.target.value)}
					/>

					<FormControl
						required={true}
						placeholder={"*Ссылка"}
						value={href}
						onChange={e => setHref(e.target.value)}
					/>

					<Form.Select value={city} onChange={e => setCity(e.target.value)}>
						<option value="all">- во всех -</option>
						<option value="msk">Москва</option>
						<option value="nn">Н.Новгород</option>
						<option value="spb">Санкт-Петербург</option>
						<option value="smr">Самара</option>
						<option value="oms">Омск</option>
						<option value="kzn">Казань</option>
						<option value="rst">Ростов на Дону</option>
						<option value="vgd">Волгоград</option>
						<option value="kry">Красноярск</option>
						<option value="ufa">Уфа</option>
						<option value="vrn">Воронеж</option>
						<option value="prm">Пермь</option>
					</Form.Select>

					<div className={"d-flex justify-content-between"}>

						<FileInput value={file} onChange={value => setFile(value[0])} />

						<Button className={"yellow-but"} disabled={!file} type={"submit"}>
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

export default BannerModal;
