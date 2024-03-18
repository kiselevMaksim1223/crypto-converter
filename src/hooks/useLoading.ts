import { useEffect } from 'react'

import { useAppState } from '@store/appStore'

export const useLoading = (isPending: boolean) => {
	const setIsLoading = useAppState(state => state.setIsLoading)

	useEffect(() => {
		if (isPending) {
			setIsLoading(true)
		} else {
			setIsLoading(false)
		}
	}, [isPending, setIsLoading])
}
