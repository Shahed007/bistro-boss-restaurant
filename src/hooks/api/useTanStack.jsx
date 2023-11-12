import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PropTypes from "prop-types";

const useTanStack = ({ key, route, response }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [key, response],
    queryFn: async () => {
      const res = await axios.get(`${route}`);
      return res.data;
    },
  });

  return { isLoading, error, data };
};

export default useTanStack;

useTanStack.propTypes = {
  key: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  response: PropTypes.any,
};
