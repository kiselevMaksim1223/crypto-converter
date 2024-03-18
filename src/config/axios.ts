import axios, { CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: 'https://rest.coinapi.io/v1/exchangerate/',
	headers: {
		'Content-Type': 'application/json',
		// 'X-CoinAPI-Key': 'C90C4D9C-8A2A-443B-BD2B-FB40FB145D11'
		// 'X-CoinAPI-Key': 'A8610631-D19E-4205-ACAC-C425C62312EA'
		'X-CoinAPI-Key': '1C15EC26-C755-4BF3-AF43-812D05040A9D'
	}
}

export const axiosClassic = axios.create(options)
