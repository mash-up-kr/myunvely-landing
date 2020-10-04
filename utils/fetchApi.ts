const fetchApi = async (url: string, method: string = 'GET', body?: BodyInit) => {
	const DEFAULT_URL = 'http://13.209.222.10:8080/';
	const headers = new Headers({
		'TICH-TOKEN':
			'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjAxNjYwMzkyLCJleHAiOjE2MzMxOTYzOTJ9.0wvR3LmEqzxGQceeaLFmnDKrxhChRJdYJl9qrrL-wX8',
	});

	const res = await fetch(`${DEFAULT_URL}${url}`, {
		headers,
		method,
		body,
	});

	return await res.json();
};

export default fetchApi;
