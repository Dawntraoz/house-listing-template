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
        60: '#e58b1e',
        '50-darken-1': '#ff910a',
        '50-darken-2': '#f58700',
      },
      secondary: {
        10: '#e5f6ff',
        40: '#4dbeff',
        70: '#0071b3',
        90: '#004166',
        '10-darken-1': '#d1efff',
        '10-darken-2': '#bde8ff',
        '40-darken-1': '#38b6ff',
        '40-darken-2': '#24afff',
        '70-darken-1': '#00649e',
        '70-darken-2': '#00578a',
      }
    }
  },
  presets: [
    presetWind3(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})