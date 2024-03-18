import { Container, Flex, Heading, Progress, VStack } from '@chakra-ui/react'

import { CryptoConverter } from '@components/CryptoConverter/CryptoConverter'

import { useAppState } from '@store/appStore'

function App() {
	const isLoading = useAppState(state => state.isLoading)

	return (
		<VStack>
			<Container maxW={'1200px'}>
				<Flex
					direction={'column'}
					gap={12}
					textAlign={'center'}
					alignItems={'center'}
					p={8}
				>
					<Heading
						as={'h1'}
						size={{ base: '2xl', xl: '4xl' }}
						width={{ md: '50%' }}
						lineHeight={'130%'}
					>
						Convert your crypto currency in real time
					</Heading>

					<CryptoConverter />
				</Flex>
			</Container>

			{isLoading && (
				<Progress
					size='xs'
					isIndeterminate
					w={'100%'}
					position={'absolute'}
				/>
			)}
		</VStack>
	)
}

export default App
