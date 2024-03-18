import { axiosClassic } from '@config/axios'

import type {
	CurrencyTypes,
	ICryptoRateResponse
} from 'types/cryptoConvert.types'

export const getCryptoRate = async (from: CurrencyTypes, to: CurrencyTypes) => {
	const response = await axiosClassic.get<ICryptoRateResponse>(`/${from}/${to}`)

	return response.data
}
