import { Box, Card, CardBody } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { CgArrowsExchangeAlt } from 'react-icons/cg'

import { formatAfterDecimalPoint } from '@helpers/formatAfterDecimalPoint'
import { formatSingleDecimalPoint } from '@helpers/formatSingleDecimalPoint'

import { useFetchRate } from '@hooks/useFetchRate'
import { useLoading } from '@hooks/useLoading'

import { useConverterState } from '@store/converterStore'

import type { CurrencyTypes } from 'types/cryptoConvert.types'

import { CurrencySelector } from './CurrencySelector'

export const CryptoConverter = () => {
	const fromCurrency = useConverterState(state => state.fromCurrency)
	const toCurrency = useConverterState(state => state.toCurrency)
	const setFromCurrency = useConverterState(state => state.setFromCurrency)
	const setToCurrency = useConverterState(state => state.setToCurrency)
	const setFromValue = useConverterState(state => state.setFromValue)
	const setToValue = useConverterState(state => state.setToValue)

	const { rate, isPending } = useFetchRate(fromCurrency, toCurrency)

	useLoading(isPending)

	const handleSetCurrency = useCallback(
		(currency: CurrencyTypes, isFrom: boolean) => {
			if (isFrom) {
				setFromCurrency(currency)
			} else {
				setToCurrency(currency)
			}

			setFromValue('0')
			setToValue('0')
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)

	const handleChangeValue = useCallback(
		(value: string, isFrom: boolean) => {
			if (!rate) return
			const formattedValue = formatSingleDecimalPoint(value)
			if (isFrom) {
				setFromValue(formattedValue)
				const toValue = formatAfterDecimalPoint(Number(formattedValue) * rate)
				setToValue(toValue)
			} else {
				setToValue(formattedValue)
				const fromValue = formatAfterDecimalPoint(Number(formattedValue) / rate)
				setFromValue(fromValue)
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[rate]
	)

	return (
		<Card
			bg={'brand.card'}
			opacity={0.95}
			p={6}
			boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
		>
			<CardBody
				display={'flex'}
				gap={4}
				alignItems={'center'}
			>
				<CurrencySelector
					isFrom
					handleSetCurrency={handleSetCurrency}
					handleChangeValue={handleChangeValue}
				/>
				<Box>
					<CgArrowsExchangeAlt
						size={40}
						color='#fffffe'
					/>
				</Box>
				<CurrencySelector
					handleSetCurrency={handleSetCurrency}
					handleChangeValue={handleChangeValue}
				/>
			</CardBody>

			<Text
				fontSize={'sm'}
				opacity={0.6}
				alignSelf={'flex-start'}
				pl={'20px'}
			>{`1 ${fromCurrency} = ${rate ? formatAfterDecimalPoint(rate) : '0'} ${toCurrency}`}</Text>
		</Card>
	)
}
