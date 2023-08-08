export const saveGameToStorage = ({ enemy, enemyHp, poke, pokeHp }) => {
    window.localStorage.setItem('enemy', JSON.stringify(enemy))
    window.localStorage.setItem('enemyHp', JSON.stringify(enemyHp))
    window.localStorage.setItem('poke', JSON.stringify(poke))
    window.localStorage.setItem('pokeHp', JSON.stringify(pokeHp))
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('enemy')
    window.localStorage.removeItem('enemyHp')
    window.localStorage.removeItem('poke')
    window.localStorage.removeItem('pokeHp')
}