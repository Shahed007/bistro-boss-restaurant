import useAuth from "./useAuth";
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
