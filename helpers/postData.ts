export default  async function postData<T>(url: string, data: T, customHeaders?: HeadersInit): Promise<Response> {
  const headers = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  return response;
}
