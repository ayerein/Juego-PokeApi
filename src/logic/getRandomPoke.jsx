import { ENDPOINT } from "../constants"

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1)
}

export const getRandomPoke = async () => {
    const res = await fetch(ENDPOINT + getRandomInt(1015))
    const data = await res.json()
    const fact = data
    return fact
  }