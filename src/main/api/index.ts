import "../config/module-alias"
import { PersonController } from "@/application/controller/person"

const person = new PersonController()

console.log(person.speak("Igor"))
console.log(person.speak())