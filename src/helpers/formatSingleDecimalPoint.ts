export const formatSingleDecimalPoint = (str: string) => {
	let formattedStr = ''
	let dotCount = 0

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '.') {
			if (dotCount === 0) {
				formattedStr += str[i]
				dotCount++
			}
		} else {
			formattedStr += str[i]
		}
	}

	return formattedStr
}
