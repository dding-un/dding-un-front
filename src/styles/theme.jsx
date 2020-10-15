// src/styles/theme.jsx
import baseStyled, { css } from 'styled-components'

const sizes = {
	mobile: 320,
	tablet: 768,
	desktop: 1024
}

const media = {
	mobile: (...args) => undefined,
	tablet: (...args) => undefined,
	desktop: (...args) => undefined
}

Object.keys(sizes).reduce((acc, label) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args) => css`
        @media only screen and (min-width: ${sizes.desktop}px) {
          ${args}
        }
      `
      break
    case 'tablet':
      acc.tablet = (...args) => css`
        @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
          ${args}
        }
      `
      break
    case 'mobile':
      acc.mobile = (...args) => css`
        @media only screen and (max-width: ${sizes.tablet}px) {
          ${args}
        }
      `
      break
    default:
      break
  }
  return acc
}, media)

const colors = {
  white: '#ffffff',
  black: '#000000',
}

const theme = {
  colors,
}

export const styled = baseStyled
export default theme