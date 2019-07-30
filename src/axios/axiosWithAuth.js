import axios from 'axios';

export default function () {
    const instance = axios.create({
      withCredentials: true
    });
    return instance;
}