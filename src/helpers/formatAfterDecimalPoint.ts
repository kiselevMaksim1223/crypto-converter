export const formatAfterDecimalPoint = (number: number) => {
	const numberStr = String(number)
	const parts = numberStr.split('.')
	if (!parts[1] || parts[1] === '0') {
		return parts[0]
	} else {
		return number.toFixed(6)
	}
}
