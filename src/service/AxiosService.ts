import axios from "axios";

const getCEP = async (cep: string): Promise<{ data: { cep: string }[] }> =>
  axios.get(`/api/?cep=${cep}`, {
    headers: {
      Accept: "application/json",
    },
  });

const AxiosService = {
  getCEP,
};

export default AxiosService;
