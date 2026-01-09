// Determine if the color is RGB or RGBA
export function isRgbOrRgba(color: string) {
    return color.includes('rgb') || color.includes('rgba')
}

// Determine if it is in Hex format
export function isHex(color: string) {
    return color.includes('#')
}

// Convert Hex color to RGB numeric type
export function hexToRgba(hex: string) {
    const r = Number.parseInt(hex.slice(1, 3), 16)
    const g = Number.parseInt(hex.slice(3, 5), 16)
    const b = Number.parseInt(hex.slice(5, 7), 16)

    return { r, g, b }
}
// Convert RGB string to r, g, b numeric values
export function rgbToRgba(rgb: string) {
    const rgbArr = rgb.split('(')[1].split(')')[0].split(',')

    return { r: rgbArr[0], g: rgbArr[1], b: rgbArr[2] }
}

// Compose RGB color and add opacity
export function rgba(color: string, opacity: number) {
    opacity = opacity || 1
    let rgbaStr = ''
    // Determine if it is Hex color
    if (isHex(color)) {
        const { r, g, b } = hexToRgba(color)
        rgbaStr = `rgba(${r},${g},${b},${opacity})`
    }
    else {
        const { r, g, b } = rgbToRgba(color)
        rgbaStr = `rgba(${r},${g},${b},${opacity})`
    }

    return rgbaStr
}

export function rgbToHex(color: string) {
    // Remove spaces from the string
    color = color.replace(/\s+/g, '')
    if (isHex(color)) {
        return color
    }
    // Match RGBA or RGB format string
    const rgbaMatch = color.match(/^rgba?\((\d+),(\d+),(\d+),?(\d+(?:\.\d+)?|\.\d+)?\)$/i)
    if (!rgbaMatch) {
        throw new Error('Invalid color format')
    }

    const r = Number.parseInt(rgbaMatch[1], 10)
    const g = Number.parseInt(rgbaMatch[2], 10)
    const b = Number.parseInt(rgbaMatch[3], 10)
    const a = rgbaMatch[4] !== undefined ? Number.parseFloat(rgbaMatch[4]) : undefined

    // Convert RGB values to hexadecimal
    let hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`

    // If alpha value is provided, convert it to hexadecimal and append it to the result
    if (a !== undefined) {
        let alphaHex = Math.round(a * 255).toString(16).toUpperCase()
        if (alphaHex.length === 1) {
            alphaHex = `0${alphaHex}` // Ensure alpha value is two digits
        }
        hex += alphaHex
    }

    return hex
}
