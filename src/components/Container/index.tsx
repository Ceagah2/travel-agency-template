import { IContainer } from "../../types"
import { MainContainer } from "./styles"

export const Container = ({children}: IContainer) => {
  return(
    <MainContainer>{children}</MainContainer>
  )
}
