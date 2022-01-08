# webpack-boilerplate

### package.json scripts

npm run build to build bundle.js
npm run serve in development.

### exmaple import .js files

import { functionoOne, functionTow } from './file.js'
import people, { functionThree } from './file2.js'

### example export (file1.js)

export const functionOne = () => {}
export const functionTwo = () => {}

// or
// export { functionOne, functionTwo }

### example export (file2.js)

const people = [{name: 'Victor', premium: true}, {name: 'Anna', premium: true}]
const functionThree = () => {}

export { functionTwo, people as default }
