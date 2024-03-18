export type CurrencyTypes = 'BTC' | 'USDT' | 'ETH'

export interface ICryptoRateResponse {
	asset_id_base: CurrencyTypes
	asset_id_quote: CurrencyTypes
	rate: number
	time: string
}
