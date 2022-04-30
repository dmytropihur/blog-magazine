import { useSelector } from "react-redux";

export const useUserState = () => {
  const { user, status, error } = useSelector((state) => state.user);
  return { user, status, error };
};
