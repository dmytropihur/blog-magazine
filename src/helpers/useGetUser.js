import { useSelector } from "react-redux";

export const useGetUser = () => {
  const user = useSelector((state) => state.userReducer);
  return user;
};
