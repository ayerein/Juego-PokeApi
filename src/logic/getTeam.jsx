
export function getTeam() {
    const storageTeam = window.localStorage.getItem('team')
    const team =  JSON.parse(storageTeam)
    return(team)
}