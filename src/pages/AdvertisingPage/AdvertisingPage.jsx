import React from 'react';
import {useGetAllAdvert} from "../../hooks/useGetAllAdvert.js";
import {dataMain} from "../../data/dataMain.js";
import AdvertisingBlock from "../../general-components/AdvertisingBlock/AdvertisingBlock.jsx";
import {Container, Spinner} from "react-bootstrap";
import "./AdvertisingPage.css";

const AdvertisingPage = () => {

	const data = useGetAllAdvert();

	if (!data || !Object.values(data)?.length) {
		return (
			<div className={"AdvertisingLoad"}>
				<Spinner variant={"dark"} />
			</div>
		)
	}

	if (data && Object.values(data)?.length)
	return (
		<Container className={'AdvertisingPage'}>
			{
				Object.keys(data)?.map(category => (
					<div key={category} className={"category"}>
						<h2>{dataMain.find(elem => elem.id === category)?.title}</h2>

						{
							(data[category] && Object.values(data[category]).length) &&
							<div className={"advertis-container"}>
								{
									Object.values(data[category]).map(block => (
										<AdvertisingBlock key={block.idAdv} data={block} />
									))
								}
							</div>
						}
					</div>
				))
			}
		</Container>
	);
};

export default AdvertisingPage;
