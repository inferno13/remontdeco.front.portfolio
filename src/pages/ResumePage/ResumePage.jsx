import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import "./ResumePage.css";

import {useFetchPost} from "../../hooks/useFetchPost";
import {API_WORK_2} from "../../constants/api.js";

import ResumeModal from "../../general-components/ResumeModal/ResumeModal.jsx";
import {checkCity} from "../../hooks/checkCity";
import {useLocation} from "../../hooks/useLocation";

const ResumePage = () => {

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
	const { data, error, load } = useFetchPost(API_WORK_2);

	const [showModal, setShowModal] = useState(false);
	const image = "https://remontdeco.ru/back/upload/";

	return (
		<div className={`ResumePage ${animate}`}>
			<Container>

				<h1>Резюме</h1>

				<div className={"ResumePage-Add"}>

					<button className={"yellow-but small"} onClick={() => setShowModal(true)}>
						Добавить резюме
					</button>

				</div>

				{
					(data && !error && !load) &&

					Object.values(data) && Object.values(data).map(elem => (

						<div className="ResumePage-Tr">

							<div className="ResumePageTd-Logo">
								<img className="ResumePageTd-Image" src={image+elem.photo}/>
							</div>

							<div className="ResumePageTd-N">
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
							</div>

						</div>

					))
				}

			</Container>

			<ResumeModal show={showModal} onHide={() => setShowModal(false)} />

		</div>
	);
};

export default ResumePage;
