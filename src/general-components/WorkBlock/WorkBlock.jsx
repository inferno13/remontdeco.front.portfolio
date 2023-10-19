import React, {useState} from 'react';
import {useGetImage} from "../../hooks/useGetImage.js";
import "./WorkBlock.css";
import {getAdmin} from "../../functions/getAdmin.js";
import {Button, ButtonGroup, Spinner} from "react-bootstrap";
import {handleRedactProduct} from "../../functions/handleRedactProduct.js";
import {handleDeleteRealtime} from "../../functions/handleDeleteRealtime.js";

const WorkBlock = ({data}) => {

	const image = useGetImage(data.idAdv);
	const admin = getAdmin();
	const [checkLoad, setCheckLoad] = useState(false);
	const [redactLoad, setRedactLoad] = useState(false);
	const [deleteLoad, setDeleteLoad] = useState(false);

	const handleCheck = () => {
		setCheckLoad(true)
		handleRedactProduct({...data, new: false,})
			.finally(() => setCheckLoad(false))
	};

	const handleRedact = show => {
		setRedactLoad(true)
		handleRedactProduct({...data, show: show,})
			.finally(() => setRedactLoad(false))
	}

	const handleDelete = () => {
		setDeleteLoad(true)
		handleDeleteRealtime(`/${data.idGroup}/${data.idAdv}`)
			.finally(() => setDeleteLoad(false))
	}

	if (!admin && !data.show) return;

	return (
		<div className={"WorkBlock"}>
			{
				image && <img width={150} src={image} alt={data.title} />
			}
			<div className={"content"}>
				<h4>{data?.title}</h4>
				<p>{data?.description}</p>
				<h5>{data?.phone}</h5>
				<small>{data?.date}</small>

				<ButtonGroup hidden={!admin} size={"sm"} className={"mt-2"}>
					{
						data?.show ?
							<Button disabled={redactLoad} variant={"secondary"} onClick={() => handleRedact(false)}>
								{redactLoad ? <Spinner size={"sm"} /> : "Скрыть"}
							</Button>:
							<Button disabled={redactLoad} variant={"secondary"} onClick={() => handleRedact(true)}>
								{redactLoad ? <Spinner size={"sm"} /> : "Показывать"}
							</Button>
					}
					<Button variant={"danger"} onClick={handleDelete} disabled={deleteLoad}>
						{deleteLoad ? <Spinner size={"sm"} /> : "Удалить"}
					</Button>
				</ButtonGroup>

				{
					(data?.new && admin) &&
					<ButtonGroup size={"sm"} className={"mt-1"}>
						<Button disabled variant={"success"}>Новый пост</Button>
						<Button disabled={checkLoad} variant={"warning"} onClick={handleCheck}>
							{checkLoad ? <Spinner size={"sm"} /> : "Отметить просмотренным"}
						</Button>
					</ButtonGroup>
				}
			</div>
		</div>
	);
};

export default WorkBlock;
