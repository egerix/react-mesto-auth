export const BASE_URL = 'https://auth.nomoreparties.co';

function register(email, password) {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
        .then(handleResponse)

}

function authorize(email, password) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    })
        .then(handleResponse)
}

function checkToken(token) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(handleResponse)
}

function handleResponse(response) {
    if (!response.ok) {
        return response.text().then((text) => {
            throw new Error(text);
        });
    }
    return response.json();
}

export {register, authorize, checkToken}
