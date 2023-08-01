func checkAndChange(image [][]int, ex int, ey int, prevNeigbourColor int, targetColor int) {
	// if indexing out of range, just do nothing
	if ex >= 0 && ex < len(image) && ey >= 0 && ey < len(image[ex]) {
		currentColor := image[ex][ey]

		if currentColor == prevNeigbourColor && currentColor != targetColor {
			// change color
			image[ex][ey] = targetColor

			// top
			checkAndChange(image, ex-1, ey, currentColor, targetColor)
			// left
			checkAndChange(image, ex, ey-1, currentColor, targetColor)
			// right
			checkAndChange(image, ex, ey+1, currentColor, targetColor)
			// bottom
			checkAndChange(image, ex+1, ey, currentColor, targetColor)
		}
	}
}

func floodFill(image [][]int, sr int, sc int, color int) [][]int {
	checkAndChange(image, sr, sc, image[sr][sc], color)

	return image
}