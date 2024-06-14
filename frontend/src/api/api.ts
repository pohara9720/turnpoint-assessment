import { HttpMethod } from "src/types/api.types";

// NOTE This would typically be in an env variable.
const BASE_URL = "http://localhost:3000";



async function request<T>(
  endpoint: string,
  method: HttpMethod = HttpMethod.GET,
   body?: T
): Promise<T> {
  const url = `${BASE_URL}/${endpoint}`;
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export { request };
