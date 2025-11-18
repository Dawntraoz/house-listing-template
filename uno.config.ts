import {
  defineConfig,
  presetWind3,
  presetTypography,
  presetWebFonts,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {
      primary: {
        50: '#ff9b21',
        51: '#ff910a',
        52: '#f58700',
        60: '#e58b1e',
      },
      secondary: {
        10: '#e5f6ff',
        11: '#d1efff',
        12: '#bde8ff',
        40: '#4dbeff',
        40: '#38b6ff',
        41: '#24afff',
        70: '#0071b3',
        70: '#00649e',
        71: '#00578a',
        90: '#004166',
      }
    }
  },
  presets: [
    presetWind3(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Nunito Sans',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})