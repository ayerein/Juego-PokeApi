import { ENDPOINT } from "../constants"

function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1)
}

export const getRandomPoke = async () => {
    const res = await fetch(ENDPOINT + getRandomInt(493))
    const data = await res.json()
    let name = data.name
    name = name.charAt(0).toUpperCase() + name.slice(1)
    const fact = {
        name: name,
        number: data.id,
        id: crypto.randomUUID(),
        img: data.sprites.other.home.front_default,
        cup: 0,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat
    }
    return fact
  }