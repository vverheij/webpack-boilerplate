import { styleBody, addTitle, } from './dom'
import people, { getPremUsers } from './data'

styleBody()

addTitle("hello world!!!!")

console.log(getPremUsers(people))
people.forEach(e => addTitle(e.name))

