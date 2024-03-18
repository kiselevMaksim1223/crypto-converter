import { Box, Select, VStack } from '@chakra-ui/react'
import { ChangeEvent, FC, memo } from 'react'

import type { CurrencyTypes } from 'types/cryptoConvert.types'

import { getLogo } from './getLogo'
import { selectOptionsData } from './selectOptionsData'

interface SelectWithLogoProps {
	isFrom: boolean
	value: CurrencyTypes
	setValue: (value: CurrencyTypes, isFrom: boolean) => void
}
export const SelectWithLogo: FC<SelectWithLogoProps> = memo(
	({ isFrom, value, setValue }) => {
		const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
			setValue(e.target.value as CurrencyTypes, isFrom)
		}

		return (
			<VStack>
				<Box width={'100%'}>
					<Select
						value={value}
						onChange={handleSelect}
						color={'brand.white'}
					>
						{selectOptionsData.map(option => (
							<option
								key={option.value}
								value={option.value}
								style={{ color: 'black' }}
							>
								{option.label}
							</option>
						))}
					</Select>
				</Box>

				<Box
					display={'flex'}
					gap={2}
					alignItems={'center'}
				>
					{getLogo(value)}
				</Box>
			</VStack>
		)
	}
)
