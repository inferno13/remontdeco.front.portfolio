import React, {useState} from 'react';
import {Button, ButtonGroup, Container, Spinner} from "react-bootstrap";
import "./BannerPage.css";

import {useFetch} from "../../hooks/useFetch";
import {API_BANNER} from "../../constants/api.js";

import BannerModal from "../../general-components/BannerModal/BannerModal.jsx";
import {getAdmin} from "../../functions/getAdmin.js";

import {fncSetView} from "./fncSetView.js";
import {fncSetDelete} from "./fncSetDelete.js";
import {checkCity} from "../../hooks/checkCity";
import {useLocation} from "../../hooks/useLocation";

const BannerPage = () => {

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

	const { data, error, load } = useFetch(API_BANNER);

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
		<div className={`BannerPage ${animate}`}>
			<Container>

				<h1>Администрирование баннеров</h1>

				<div className={"BannerPage-Add"}>

					<button className={"yellow-but small"} onClick={() => setShowModal(true)}>
						Добавить баннер
					</button>

				</div>

				{
					!admin &&

					<b>У Вас нет доступа к данному разделу!</b>

				}

				{
					(admin && data && !error && !load) &&

					Object.values(data) && Object.values(data).map(elem => (

						<div className="BannerPage-Tr">

							<div className="BannerPageTd-N">

								<img className="BannerPageTd-Image" src={image+elem.photo}/>

								<br />

								<b>{elem.title}</b>

								<br />

								{elem.text}

								<br />

								{elem.href}

								<br />

								Город: {getCity(elem.city)}

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

			<BannerModal show={showModal} onHide={() => setShowModal(false)} />

		</div>
	);
};

export default BannerPage;
