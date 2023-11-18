import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import useTanStack from "./useTanStack";
import { useEffect } from "react";

export const useCart = () => {
  const { user } = useAuth();
  const {
    isLoading,
    error,
    data: cart,
    refetch,
  } = useTanStack("cart", `cart?email=${user?.email}`);

  useEffect(() => {
    if (user?.email) {
      refetch();
    }
  }, [user, refetch]);
  return { isLoading, error, cart };
};
