const fetchApi = async (url: string, method: string = 'GET', body?: BodyInit) => {
	const res = await fetch(url, {
		method,
		body,
	});
	const jsonData = await res.json();

	return jsonData;
};

export default fetchApi;
