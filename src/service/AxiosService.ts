import axios from "axios";

const getCEP = async (cep: string): Promise<{ data: { cep: string }[] }> =>
  axios.get(`http://cep.la/${cep}`, {
    headers: {
      Accept: "application/json",
    },
  });

const AxiosService = {
  getCEP,
};

export default AxiosService;
