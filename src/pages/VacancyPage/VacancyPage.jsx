import React, {useState} from 'react';
import {Container, NavDropdown} from "react-bootstrap";
import "./VacancyPage.css";

import {useFetchPost} from "../../hooks/useFetchPost";
import {API_WORK_1} from "../../constants/api.js";

import VacancyModal from "../../general-components/VacancyModal/VacancyModal.jsx";
import {checkCity} from "../../hooks/checkCity";
import {useLocation} from "../../hooks/useLocation";

const VacancyPage = () => {

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
	const { data, error, load } = useFetchPost(API_WORK_1);

	const [showModal, setShowModal] = useState(false);
	const image = "https://remontdeco.ru/back/upload/";

	return (
		<div className={`VacancyPage ${animate}`}>
			<Container>

				<h1>Вакансии</h1>

				<div className={"VacancyPage-Add"}>

					<button className={"yellow-but small"} onClick={() => setShowModal(true)}>
						Добавить вакансию
					</button>

				</div>

				{
					(data && !error && !load) &&

					Object.values(data) && Object.values(data).map(elem => (

						<div className="VacancyPage-Tr">

							<div className="VacancyPageTd-Logo">
								<img className="VacancyPageTd-Image" src={image+elem.photo}/>
							</div>

							<div className="VacancyPageTd-N">
								Компания: {elem.name}
								<br />
								Специализация: {elem.spec}
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
							</div>

						</div>

					))
				}

			</Container>

			<VacancyModal show={showModal} onHide={() => setShowModal(false)} />

		</div>
	);
};

export default VacancyPage;
