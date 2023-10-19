import React, {useState} from 'react';
import {Button, ButtonGroup, Container, Spinner} from "react-bootstrap";
import "./WorkPage.css";

import {useFetch} from "../../hooks/useFetch";
import {API_WORK_3} from "../../constants/api.js";

import {getAdmin} from "../../functions/getAdmin.js";

import {fncSetView} from "./fncSetView.js";
import {fncSetDelete} from "./fncSetDelete.js";
import {checkCity} from "../../hooks/checkCity";
import {useLocation} from "../../hooks/useLocation";

const WorkPage = () => {

	const locations = checkCity(useLocation());

	const getCity = (city) => {

		switch(city) {

			case 'msk': return "Москва";
			case 'nn': return "Н.Новгород";

			case 'spb': return "Санкт-Петербург";
			case 'smr': return "Самара";
			case 'oms': return "Омск";
			case 'kzn': return "Казань";
			case 'rst': return "Ростов на Дону";
			case 'vgd': return "Волгоград";
			case 'kry': return "Красноярск";
			case 'ufa': return "Уфа";
			case 'vrn': return "Воронеж";
			case 'prm': return "Пермь";

			default: return "Все";
		}
	}

	const animate = "animate__animated animate__fadeIn";
	const { data, error, load } = useFetch(API_WORK_3);

	const [showModal, setShowModal] = useState(false);
	const image = "https://remontdeco.ru/back/upload/";

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
		<div className={`WorkPage ${animate}`}>
			<Container>

				<h1>Администрирование резюме и вакансий</h1>

				{
					!admin &&

					<b>У Вас нет доступа к данному разделу!</b>

				}

				{
					(admin && data && !error && !load) &&

					Object.values(data) && Object.values(data).map(elem => (

						<div className="WorkPage-Tr">

							<div className="WorkPageTd-Logo">
								<img className="WorkPageTd-Image" src={image+elem.photo}/>
							</div>

							<div className="WorkPageTd-N">
								ФИО: {elem.name}
								<br />
								Специальность: {elem.spec}
								<br />
								<b>{elem.text}</b>
								<br />
								Количество: {elem.col} человек в бригаде
								<br />
								<br />
								Город: {getCity(elem.city)}
								{
									elem.phone_on == 1 &&
									<>
										<br />
										Телефон: {elem.phone}
									</>
								}
								<br />
								E-mail: {elem.email}
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

		</div>
	);
};

export default WorkPage;
