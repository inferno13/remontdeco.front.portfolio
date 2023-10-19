export const getAdmin = () => {
	const data = window.sessionStorage.getItem('admin');
	return data === 'true';
}
