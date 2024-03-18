import { create } from 'zustand'

import type { CurrencyTypes } from 'types/cryptoConvert.types'

interface IConverterState {
	fromCurrency: CurrencyTypes
	toCurrency: CurrencyTypes
	fromValue: string
	toValue: string

	setFromCurrency: (currency: CurrencyTypes) => void
	setToCurrency: (currency: CurrencyTypes) => void
	setFromValue: (value: string) => void
	setToValue: (value: string) => void
}

export const useConverterState = create<IConverterState>()(set => ({
	fromCurrency: 'BTC',
	toCurrency: 'USDT',
	fromValue: '0',
	toValue: '0',

	setFromCurrency: (currency: CurrencyTypes) => set({ fromCurrency: currency }),
	setToCurrency: (currency: CurrencyTypes) => set({ toCurrency: currency }),
	setFromValue: (value: string) => set({ fromValue: value }),
	setToValue: (value: string) => set({ toValue: value })
}))
