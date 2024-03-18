import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper
} from '@chakra-ui/react'
import { FC, memo } from 'react'

interface INumberInputWithStepperProps {
	isForm: boolean
	value: string
	onChangeValue: (value: string, isForm: boolean) => void
}

export const NumberInputWithStepper: FC<INumberInputWithStepperProps> = memo(
	({ value, onChangeValue, isForm }) => {
		const handleChangeValue = (value: string) => {
			onChangeValue(value, isForm)
		}

		return (
			<NumberInput
				value={value}
				onChange={handleChangeValue}
			>
				<NumberInputField color={'brand.white'} />
				<NumberInputStepper>
					<NumberIncrementStepper color={'brand.white'} />
					<NumberDecrementStepper color={'brand.white'} />
				</NumberInputStepper>
			</NumberInput>
		)
	}
)
