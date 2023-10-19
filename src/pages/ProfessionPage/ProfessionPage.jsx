import React, {useState} from 'react';
import {Button, ButtonGroup, Container, Spinner} from "react-bootstrap";
import "./ProfessionPage.css";

import {useFetch} from "../../hooks/useFetch";
import {API_PROFESSION} from "../../constants/api.js";

import ProfessionModal from "../../general-components/ProfessionModal/ProfessionModal.jsx";
import {getAdmin} from "../../functions/getAdmin.js";

import {fncSetView} from "./fncSetView.js";
import {fncSetDelete} from "./fncSetDelete.js";
import {checkCity} from "../../hooks/checkCity";
import {useLocation} from "../../hooks/useLocation";

const ProfessionPage = () => {

	const locations = checkCity(useLocation());

	const animate = "animate__animated animate__fadeIn";

	const { data, error, load } = useFetch(API_PROFESSION);

	const [showModal, setShowModal] = useState(false);


	const admin = getAdmin();

	const setView = view => {
		fncSetView({view: view})
	}

	const setDelete = del => {
		let confirm = window.confirm('Вы уверены, что хотите удалить?');
		if(confirm)
		fncSetDelete({del: del})
	}

	return (
		<div className={`ProfessionPage ${animate}`}>
			<Container>

				<h1>Администрирование профессии</h1>

				<div className={"ProfessionPage-Add"}>

					<button className={"yellow-but small"} onClick={() => setShowModal(true)}>
						Добавить Профессию
					</button>

				</div>

				{
					!admin &&

					<b>У Вас нет доступа к данному разделу!</b>

				}

				{
					(admin && data && !error && !load) &&

					Object.values(data) && Object.values(data).map(elem => (

						<div className="ProfessionPage-Tr">

							<div className="ProfessionPageTd-N">

								<br />

								<b>{elem.title}</b>

								<br />

								<ButtonGroup hidden={!admin} size={"sm"} className={"mt-2"}>

									<Button variant={"secondary"} onClick={() => setView({elem})}>
										{(elem.view == 1) ?  "Скрыть" : "Показать"}
									</Button>

									<Button variant={"danger"} onClick={() => setDelete({elem})}>
										Удалить
									</Button>

								</ButtonGroup>

							</div>

						</div>



					))
				}

			</Container>

			<ProfessionModal show={showModal} onHide={() => setShowModal(false)} />

		</div>
	);
};

export default ProfessionPage;
