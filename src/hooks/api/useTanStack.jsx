import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import useAxios from "./useAxios";

const useTanStack = (key, route, response) => {
  const axios = useAxios();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [key, response],
    queryFn: async () => {
      const res = await axios.get(route);
      return res.data;
    },
  });

  return { isLoading, error, data, refetch };
};

export default useTanStack;

useTanStack.propTypes = {
  key: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  response: PropTypes.any,
};
