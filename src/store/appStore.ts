import { create } from 'zustand'

interface IAppState {
	isLoading: boolean
	setIsLoading: (isLoading: boolean) => void
}

export const useAppState = create<IAppState>()(set => ({
	isLoading: false,
	setIsLoading: (isLoading: boolean) => set({ isLoading })
}))
