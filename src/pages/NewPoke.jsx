import { Loading } from "../components/Loading"
import { ContainerNewPoke } from "../container/ContainerNewPoke"
import { useGetPoke } from "../hooks/useGetPoke"

export const NewPoke = () => {
  const { team } = useGetPoke()

  const RenderLoading = () => {
    if(team === 'loading') return <Loading />
    if(team && team.length < 3) return <ContainerNewPoke />
  }

  return(
    <RenderLoading />
  )
}