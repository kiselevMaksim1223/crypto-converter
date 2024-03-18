import { useQuery } from '@tanstack/react-query'

import { getCryptoRate } from '@api/getCryptoRate'

import type {
	CurrencyTypes,
	ICryptoRateResponse
} from 'types/cryptoConvert.types'

export const useFetchRate = (from: CurrencyTypes, to: CurrencyTypes) => {
	const { data, isPending } = useQuery<ICryptoRateResponse>({
		queryKey: ['exchangeRate', from, to],
		queryFn: () => getCryptoRate(from, to),
		staleTime: 1000 * 60 * 5
	})

	return { rate: data?.rate, isPending }
}
