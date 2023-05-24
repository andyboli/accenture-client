import { SelectOption } from "../view/containers/components/SuppliersSelect";
import { mockCompany } from "../entities/Company";
import { Supplier } from "../entities/Supplier";
import { AxiosService } from "../service";

/**
 * The Supplier reading must contain filters by name and cpf/cnpj attributes.
 */
const filterSupplierOption =
  (suppliers: Supplier[]) =>
  (inputValue: string, option: SelectOption | undefined) => {
    const pattern = `/${inputValue}/`;
    const supplier = suppliers.find(({ code }) => code === option?.value);

    if (!supplier) return false;

    const hasName = !!pattern.match(supplier.name);
    const hasId = !!pattern.match(supplier.id);
    const hasCode = !!pattern.match(supplier.code);

    return hasName || hasId || hasCode;
  };

const getRandomCompanyFromBeloHorizonte = async () => {
  try {
    const { data } = await AxiosService.getCEP("/MG/BeloHorizonte");
    const cep = data[Math.floor(Math.random() * data.length)].cep;
    return mockCompany({ cep });
    // Map Applications Erros
  } catch (err) {
    console.log(err);
    return mockCompany();
  }
};

/**
 * The accenture-client system must validate the cep attribute using the api.
 */
const validateCep = async (cep: string) => {
  try {
    const { data } = await AxiosService.getCEP(cep);
    const isCepValid = !!data && data.length !== 0;
    return isCepValid;
    // Map Applications Erros
  } catch (err) {
    return false;
  }
};

const HomeController = {
  filterSupplierOption,
  getRandomCompanyFromBeloHorizonte,
  validateCep,
};

export default HomeController;
