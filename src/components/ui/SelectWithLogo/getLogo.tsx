import { Text } from '@chakra-ui/react'

import BtcLogo from '@assets/bitcoin-btc-logo.svg?react'
import EthLogo from '@assets/ethereum-eth-logo.svg?react'
import UsdtLogo from '@assets/tether-usdt-logo.svg?react'

import type { CurrencyTypes } from 'types/cryptoConvert.types'

export const getLogo = (currency: CurrencyTypes) => {
	switch (currency) {
		case 'BTC':
			return (
				<>
					<BtcLogo
						width={'20px'}
						height={'20px'}
					/>
					<Text fontSize={'lg'}>Bitcoin</Text>
				</>
			)
		case 'ETH':
			return (
				<>
					<EthLogo
						width={'20px'}
						height={'20px'}
					/>
					<Text fontSize={'lg'}>Ethereum</Text>
				</>
			)
		case 'USDT':
			return (
				<>
					<UsdtLogo
						width={'20px'}
						height={'20px'}
					/>
					<Text fontSize={'lg'}>USDT</Text>
				</>
			)
		default:
			return null
	}
}
