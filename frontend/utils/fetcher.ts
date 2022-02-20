import axios from 'axios';

const fetcher = async ({ queryKey }: { queryKey: string }) => {
  const response = await axios.get(`http://localhost:4000${queryKey}`, {
    withCredentials: true,
  });
  return response.data;
};

export default fetcher;