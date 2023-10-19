import React from 'react';
import {Container} from "react-bootstrap";
import "./ServicesPage.css";

const ServicesPage = () => {

	const animate = "animate__animated animate__fadeIn";

	return (
		<div className={`ServicesPage ${animate}`}>
			<Container>

				<h1>Услуги</h1>

				<div class="ServicesPageTr">
					<div className="ServicesPageTdN"><b>№</b></div>
					<div class="ServicesPageTdNaimen"><b>Наименование работ</b></div>
					<div class="ServicesPageTdEdIzm"><b>ед.изм.</b></div>
					<div className="ServicesPageTdRub"><b>руб.</b></div>
				</div>

				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">1</div>
					<div className="ServicesPageTdNaimen">Штукатурка</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">200</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">2</div>
					<div className="ServicesPageTdNaimen">Стяжка</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">200</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">3</div>
					<div className="ServicesPageTdNaimen">Устройство откосов из щтукаьурки</div>
					<div className="ServicesPageTdEdIzm">мп</div>
					<div className="ServicesPageTdRub">150</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">4</div>
					<div className="ServicesPageTdNaimen">Откосы- Шпатлевка, покраска</div>
					<div className="ServicesPageTdEdIzm">мп</div>
					<div className="ServicesPageTdRub">120</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">5</div>
					<div className="ServicesPageTdNaimen">Выравнивание потолка</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">100</div>
				</div>

				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">6</div>
					<div className="ServicesPageTdNaimen">Шпатлевка за 2 раза гал</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">130</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">7</div>
					<div className="ServicesPageTdNaimen">Шпатлевка за 2 раза потолков с грунтовкой</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">130</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">8</div>
					<div className="ServicesPageTdNaimen">Шпатлевка за 2 раза стен с грунтовкой</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">130</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">9</div>
					<div className="ServicesPageTdNaimen">Покраска потолков за 2 раза с грунтовкой</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">120</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">10</div>
					<div className="ServicesPageTdNaimen">Покраска стен за 2 раза с грунтовкой</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">120</div>
				</div>

				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">11</div>
					<div className="ServicesPageTdNaimen">Оклейка обоями</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">130</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">12</div>
					<div className="ServicesPageTdNaimen">Укладка плитки на пол</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">550</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">13</div>
					<div className="ServicesPageTdNaimen">Укдадка плитки на ступени</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">850</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">14</div>
					<div className="ServicesPageTdNaimen">Калошница из плитки</div>
					<div className="ServicesPageTdEdIzm">мп</div>
					<div className="ServicesPageTdRub">100</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">15</div>
					<div className="ServicesPageTdNaimen">Укладка плитки на стены</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">550</div>
				</div>

				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">16</div>
					<div className="ServicesPageTdNaimen">Пластиковый кголок в в/x</div>
					<div className="ServicesPageTdEdIzm">мп</div>
					<div className="ServicesPageTdRub">50</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">17</div>
					<div className="ServicesPageTdNaimen">Примыкание ванной к стенам из гвл по каркасу+ плитка</div>
					<div className="ServicesPageTdEdIzm">шт</div>
					<div className="ServicesPageTdRub">800</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">18</div>
					<div className="ServicesPageTdNaimen">Гидроизоляция в с/у</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">80</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">19</div>
					<div className="ServicesPageTdNaimen">Пороги на балконных дверях</div>
					<div className="ServicesPageTdEdIzm">шт</div>
					<div className="ServicesPageTdRub">100</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">20</div>
					<div className="ServicesPageTdNaimen">Линолеум с плинтусом</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">180</div>
				</div>

				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">21</div>
					<div className="ServicesPageTdNaimen">Ламинат с подложкой, с плинтусом</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">280</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">22</div>
					<div className="ServicesPageTdNaimen">ГВЛ моп</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">350</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">23</div>
					<div className="ServicesPageTdNaimen">Короб ГВЛ квартиры (мп)</div>
					<div className="ServicesPageTdEdIzm">мп</div>
					<div className="ServicesPageTdRub">250</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">24</div>
					<div className="ServicesPageTdNaimen">Короб ГВЛ квартиры (м2)</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">350</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">25</div>
					<div className="ServicesPageTdNaimen">Мондаж дверей меж/комнатных с обналичкой, ручной, добором, магнитной защелкой</div>
					<div className="ServicesPageTdEdIzm">шт</div>
					<div className="ServicesPageTdRub">1500</div>
				</div>

				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">26</div>
					<div className="ServicesPageTdNaimen">Мондаж дверей в моп</div>
					<div className="ServicesPageTdEdIzm">шт</div>
					<div className="ServicesPageTdRub">1100</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">27</div>
					<div className="ServicesPageTdNaimen">Мондаж дверей металлических</div>
					<div className="ServicesPageTdEdIzm">шт</div>
					<div className="ServicesPageTdRub">1800</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">28</div>
					<div className="ServicesPageTdNaimen">Установка пластиковых лючков</div>
					<div className="ServicesPageTdEdIzm">шт</div>
					<div className="ServicesPageTdRub">100</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">29</div>
					<div className="ServicesPageTdNaimen">Брусчатка на входах</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">550</div>
				</div>
				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">30</div>
					<div className="ServicesPageTdNaimen">Астратек за 2 раза</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">50</div>
				</div>

				<div className="ServicesPageTr">
					<div className="ServicesPageTdN">31</div>
					<div className="ServicesPageTdNaimen">Утепление + сетка + адгезив</div>
					<div className="ServicesPageTdEdIzm">м2</div>
					<div className="ServicesPageTdRub">250</div>
				</div>

			</Container>

		</div>
	);
};

export default ServicesPage;
