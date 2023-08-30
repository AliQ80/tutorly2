import { createAutoAnimatePlugin, createFloatingLabelsPlugin } from '@formkit/addons'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './assets/styles/formkit-theme.js'
import '@formkit/addons/css/floatingLabels'

export default {
  plugins: [
    createAutoAnimatePlugin(),
    createFloatingLabelsPlugin({
      useAsDefault: true,
    }),
  ],
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
}
