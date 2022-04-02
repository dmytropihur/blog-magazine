import { useSelector } from "react-redux"

export const useUserSelector= () => {
  const {currentUser} = useSelector(state => state.userReducer)

  return currentUser
}