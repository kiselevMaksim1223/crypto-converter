import axios, { CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: 'https://rest.coinapi.io/v1/exchangerate/',
	headers: {
		'Content-Type': 'application/json',
		'X-CoinAPI-Key': import.meta.env.VITE_COIN_API_KEY
	}
}

export const axiosClassic = axios.create(options)
