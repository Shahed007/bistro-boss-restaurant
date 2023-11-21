import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useTanStack from "./useTanStack";
import { useEffect } from "react";
import useAxios from "./useAxios";

export const useCart = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    isLoading,
    error,
    data: cart,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axios.get(`cart?email=${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  return { isLoading, error, cart, refetch };
};

export const useMenus = () => {
  const { isLoading, error, data: menus } = useTanStack("menus", "menus");
  return { isLoading, error, menus };
};

export const useAdmin = () => {
  const { user } = useAuth();

  const {
    isLoading,
    error,
    data: admin,
    refetch,
  } = useTanStack("admin", `admin/${user?.email}`);
  useEffect(() => {
    if (user?.email) {
      refetch();
    }
  }, [user, refetch]);
  return { isLoading, error, admin };
};
