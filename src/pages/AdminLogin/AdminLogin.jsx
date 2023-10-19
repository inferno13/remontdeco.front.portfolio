import React, {useState} from 'react';
import "./AdminLogin.css";
import {Alert, Button, Form, FormControl, Spinner} from "react-bootstrap";
import {useGetAdmin} from "../../hooks/useGetAdmin.js";
import {useNavigate} from "react-router-dom";

const AdminLogin = () => {

	const navigate = useNavigate();
	const data = useGetAdmin();
	const [formData, setFormData] = useState({
		login: '',
		password: '',
	});
	const [error, setError] = useState('');

	const handleSend = e => {
		e.preventDefault();
		if (formData.login !== data.login  || formData.password !== data.password) {
			setError('Неверные данные!')
			return false;
		}
		window.sessionStorage.setItem('admin', 'true');
		navigate("/banner");
	}

	if (!data) return (
		<div className={"AdminLogin"}>
			<Spinner />
		</div>
	);

 	return (
		<div className={"AdminLogin"}>
			<Form onSubmit={handleSend}>
				<FormControl
					required
					placeholder={"Логин"}
					value={formData.login}
					onChange={e => setFormData({...formData, login: e.target.value})}
				/>

				<FormControl
					required
					type={"password"}
					placeholder={"Пароль"}
					onChange={e => setFormData({...formData, password: e.target.value})}
				/>

				{error && <Alert variant={"danger"} className={"my-2 p-2 text-center"}>{error}</Alert>}

				<Button size={"sm"} type={"submit"} className={"w-100"}>
					Войти
				</Button>
			</Form>
		</div>
	);
};

export default AdminLogin;
