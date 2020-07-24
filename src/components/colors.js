export const normalizeColor = (color, theme, required) => {
  const colorSpec = theme.global.colors[color] || color
  // If the color has a light or dark object, use that
  let result = colorSpec
  if (colorSpec) {
    if (theme.dark && colorSpec.dark) {
      result = colorSpec.dark
    } else if (!theme.dark && colorSpec.light) {
      result = colorSpec.light
    }
  }
  // allow one level of indirection in color names
  if (result && theme.global.colors[result]) {
    result = normalizeColor(result, theme)
  }
  return required && result === color ? 'inherit' : result
}


const parseHexToRGB = color =>
  color.length === 4
    ? color.match(/[A-Za-z0-9]{1}/g).map(v => parseInt(`${v}${v}`, 16))
    : // https://stackoverflow.com/a/42429333
      color.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16))

// From: https://stackoverflow.com/a/9493060/8513067
// Converts an HSL color value to RGB. Conversion formula
// adapted from http://en.wikipedia.org/wiki/HSL_color_space.
// Assumes h, s, and l are contained in the set [0, 1] and
// returns r, g, and b in the set [0, 255].
const hslToRGB = (h, s, l) => {
  let r
  let g
  let b

  if (s === 0 || s === '0') {
    // achromatic
    r = l
    g = l
    b = l
  } else {
    const hue2rgb = (p, q, inT) => {
      let t = inT
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 0.16666667) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 0.66666667) return p + (q - p) * (0.66666667 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 0.33333333)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 0.33333333)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

const hexExp = /^#[A-Za-z0-9]{3}$|^#[A-Za-z0-9]{6}$/
const rgbExp = /rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?.*?\)/
// e.g. hsl(240, 60%, 50%)
const hslExp = /hsla?\(\s?([0-9]*)\s?,\s?([0-9]*)%?\s?,\s?([0-9]*)%?\s?.*?\)/

const canExtractRGBArray = color =>
  hexExp.test(color) || rgbExp.test(color) || hslExp.test(color)

export function getRGBArray(color) {
  if (hexExp.test(color)) {
    return parseHexToRGB(color)
  }
  let match = color.match(rgbExp)
  if (match) {
    return match.splice(1)
  }
  match = color.match(hslExp)
  if (match) {
    const [h, s, l] = match.splice(1).map(v => parseInt(v, 10))
    return hslToRGB(h / 360.0, s / 100.0, l / 100.0)
  }
  return color
}

export function colorIsDark(color) {
  const [red, green, blue] = getRGBArray(color)
  // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html
  const brightness = (299 * red + 587 * green + 114 * blue) / 1000
  return brightness < 125
}


export const getRGBA = (color, opacity) => {
  if (color && canExtractRGBArray(color)) {
    const [red, green, blue] = getRGBArray(color)
    return `rgba(${red}, ${green}, ${blue}, ${opacity || 1})`
  }
  return undefined
}