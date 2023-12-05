import { useGetPoke } from "../hooks/useGetPoke"
import { ContainerFight } from "../container/ContainerFight"
import { Loading } from "../components/Loading"

export const Fight = () => {
    const { team } = useGetPoke()
    return(
        team && team != 'loading' ?
        <ContainerFight team={team} />
        :
        <Loading />
    )
}