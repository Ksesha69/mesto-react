import { url, token } from "./constans";

class Api {
    constructor(setting) {
        this.url = setting.baseUrl;
        this.headers = setting.headers;
    }

    _handleResponse = (res) => {
        if(res.ok) {
            return res.json();
        }
        return res.json().then((err) => {
            err.code = res.status;
            return Promise.reject(err);
        });
    }

    getInitialCard() {
        return fetch(`${this.url}/cards`, {
            method: "GET",
            headers: this.headers,
        })
        .then(this._handleResponse);
    }

    getUserInfo() { 
        return fetch(`${this.url}/users/me`, { 
            method: "GET", 
            headers: this.headers, 
        })
        .then(this._handleResponse);
    }

    setUserInfo(data) {
        return fetch(`${this.url}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(this._handleResponse);
    }

    addNewCard(data) {
        return fetch(`${this.url}/cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link})
        })
        .then(this._handleResponse);
    }

    addNewAvatar(avatar) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(avatar)
        })
        .then(this._handleResponse);
    }

    deleteCard(id) {
        return fetch(`${this.url}/cards/${id}`, {
            method: "DELETE",
            headers: this.headers,
        })
    .then(this._handleResponse);
    }

    toggleLike(id, isLiked) {
        return fetch(`${this.url}/cards/${id}/likes`, {
            method: isLiked ? 'DELETE' : 'PUT',
            headers: this.headers,
        })
    .then(this._handleResponse)
    };
}

const api = new Api({
    baseUrl: url,
    headers: {
        authorization: token, 
        "Content-Type": "application/json", 
    }
})

export default api;