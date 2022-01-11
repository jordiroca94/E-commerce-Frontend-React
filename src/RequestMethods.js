import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDJkYmIwNTVkMzQzNWM3NDQyOTQ3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTg5NDE2MCwiZXhwIjoxNjQyMTUzMzYwfQ.WQIUtkHFJ3-zye4KpnWh8n5Z32U_kJdvM_A-uUSQR-Q"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});