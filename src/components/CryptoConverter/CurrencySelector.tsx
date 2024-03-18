import { Box } from '@chakra-ui/react'
import { FC } from 'react'

import { NumberInputWithStepper } from '@components/ui/NumberInputWithStepper/NumberInputWithStepper'
import { SelectWithLogo } from '@components/ui/SelectWithLogo/SelectWithLogo'

import { useConverterState } from '@store/converterStore'

import type { CurrencyTypes } from 'types/cryptoConvert.types'

interface ICurrencySelectorProps {
	isFrom?: boolean
	handleSetCurrency: (currency: CurrencyTypes, isFrom: boolean) => void
	handleChangeValue: (value: string, isFrom: boolean) => void
}

export const CurrencySelector: FC<ICurrencySelectorProps> = ({
	isFrom = false,
	handleSetCurrency,
	handleChangeValue
}) => {
	const fromValue = useConverterState(state => state.fromValue)
	const toValue = useConverterState(state => state.toValue)
	const fromCurrency = useConverterState(state => state.fromCurrency)
	const toCurrency = useConverterState(state => state.toCurrency)

	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			gap={6}
		>
			<SelectWithLogo
				isFrom={isFrom}
				value={isFrom ? fromCurrency : toCurrency}
				setValue={handleSetCurrency}
			/>
			<NumberInputWithStepper
				isForm={isFrom}
				value={isFrom ? fromValue : toValue}
				onChangeValue={handleChangeValue}
			/>
		</Box>
	)
}
