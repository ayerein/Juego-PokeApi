import { FirstPoke } from "../components/FirstPoke"
import { Loading } from "../components/Loading"
import { useGetPoke } from "../hooks/useGetPoke"
import { ContainerHome } from "./ContainerHome"

export const TeamHome = () => {
    const { team } = useGetPoke()

    const RenderLoading = () => {
        if(team === 'loading') return <Loading />
        if(team && team.length > 0) return <ContainerHome team={team}/>
        if(team) return <FirstPoke />
    }
    return(
        <RenderLoading />
    )
}