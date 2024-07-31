import { defineReleaseItConfig } from '@gabortorma/mwm'
import { name } from './package.json'

export default defineReleaseItConfig('workspace', name.split('/').pop())
