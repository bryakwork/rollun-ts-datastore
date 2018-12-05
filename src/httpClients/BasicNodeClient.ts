import {HttpClientInterface} from "../interfaces";
import fetch from 'node-fetch';

export default class BasicNodeClient implements HttpClientInterface {
    protected url: string;
    protected headers: { [headerName: string]: string };

    constructor(url: string, options?: {}) {
        this.url = url;
    }

    get(query?: string, options?: {}) {
        const fullRequestUrl = `${this.url}${query}`;
        const request = new Request(fullRequestUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        return fetch(request)
    }

    post(data?: {}, options?: {}) {
        const request = new Request(this.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return fetch(request);
    }

    put(data?: {}, options?: {},) {
        const request = new Request(this.url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return fetch(request);
    }

    delete(query?: string, options?: {}) {
        const request = new Request(`${this.url}/${query}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
        return fetch(request);
    }
}
