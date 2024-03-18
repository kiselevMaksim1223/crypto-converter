import { Container, Flex, Heading, VStack } from '@chakra-ui/react'

import { CryptoConverter } from '@components/CryptoConverter/CryptoConverter'

function App() {
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
						size={'4xl'}
						width={'50%'}
						lineHeight={'130%'}
					>
						Convert your crypto currency in real time
					</Heading>

					<CryptoConverter />
				</Flex>
			</Container>
		</VStack>
	)
}

export default App
