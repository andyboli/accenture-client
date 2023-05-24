import axios from "axios";

/* import {
  PostProductsRequestParams,
  PostProductsRequestResponse,
} from "../entities"; */

/* const postProducts = async (
  requestParams: PostProductsRequestParams
): Promise<{ data: PostProductsRequestResponse }> => {
  const endpoint = process.env.REACT_APP_POST_PRODUCTS_ENDPOINT as string;
The accenture-client system must validate the cep attribute using the api.
If the Company entity is from Paraná, do not allow registering an underage (birthdate attribute less than 18) Person Supplier.
  return axios.post(
    endpoint,
    {
      data: requestParams,
    },
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
}; */

const getCEP = async (cep: string): Promise<{ data: { cep: string }[] }> =>
  axios.get(`http://cep.la/${cep}`, {
    headers: { Accept: "application/json" },
  });

const AxiosService = {
  getCEP,
};

export default AxiosService;
