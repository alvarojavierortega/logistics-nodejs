function request<TResponse>(
  url: string,
  config: RequestInit
): Promise<TResponse> {
  return fetch(url, config)
    .then(response => response.json())
    .then(data => data);
}


const api = {
  get: <TResponse>(url: string) =>
    request<TResponse>(url, { method: "GET" }),

  patch: <TBody, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "PATCH", headers: { "Content-type": "application/json" }, body: JSON.stringify(body) }),
};

export {api};