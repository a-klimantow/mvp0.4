import { useContext } from "react"
import { ContextTasksPage } from "./context"

export const useTasksPageContext = () => {
  const context = useContext(ContextTasksPage)
  return context
}
