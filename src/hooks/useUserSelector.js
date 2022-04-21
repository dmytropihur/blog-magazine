import { useSelector } from "react-redux";

export const useGetUser = () => {
  const { currentUser } = useSelector((state) => state.userReducer);

  return currentUser;
};
