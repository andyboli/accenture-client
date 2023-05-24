import React from "react";
import { useIntl } from "react-intl";
import { Form, Input } from "antd";

import { TYPOGRAPHY } from "../../foudation";
import { TextComponent } from "../../components";
import { SuppliersSelect } from "../components";
import { Company } from "../../../entities/Company";
import { Supplier } from "../../../entities/Supplier";
import HomeController from "../../../controller/HomeController";

interface CompanyFormFieldsProps {
  company?: Company;
}

const CompanyForm: React.FC<CompanyFormFieldsProps> = ({ company }) => {
  return (
    <>
      <NameFormItem name={company?.name} />
      <MailFormItem mail={company?.mail} />
      <CnpjFormItem cnpj={company?.cnpj} />
      <CepFormItem cep={company?.cep} />
      <SuppliersFormItem suppliers={company?.suppliers} />
    </>
  );
};

const NameFormItem: React.FC<{ name?: string }> = ({ name }) => {
  const intl = useIntl();
  return (
    <Form.Item
      name="name"
      label={
        <TextComponent>
          {intl.formatMessage({
            id: "CompanyFormField.Name",
          })}
        </TextComponent>
      }
      rules={[{ required: true }]}
    >
      <Input defaultValue={name} />
    </Form.Item>
  );
};

const MailFormItem: React.FC<{ mail?: string }> = ({ mail }) => {
  const intl = useIntl();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    <Form.Item
      name="mail"
      label={
        <TextComponent>
          {intl.formatMessage({
            id: "CompanyFormField.Mail",
          })}
        </TextComponent>
      }
      rules={[
        { required: true },
        {
          pattern: emailRegex,
          message: intl.formatMessage({
            id: "CompanyFormField.MailError",
          }),
        },
      ]}
    >
      <Input defaultValue={mail} />
    </Form.Item>
  );
};

const CnpjFormItem: React.FC<{ cnpj?: string }> = ({ cnpj }) => {
  const intl = useIntl();
  const numberRegex = /^[0-9]+$/;
  const cnpjLength = 14;
  return (
    <Form.Item
      name="cnpj"
      label={
        <TextComponent transform={TYPOGRAPHY.TEXT_TRANSFORMS.UPPERCASE}>
          {intl.formatMessage({
            id: "CompanyFormField.Cnpj",
          })}
        </TextComponent>
      }
      rules={[
        { required: true },
        { len: cnpjLength },
        {
          pattern: numberRegex,
          message: intl.formatMessage({
            id: "CompanyFormField.CnpjError",
          }),
        },
      ]}
    >
      <Input defaultValue={cnpj} />
    </Form.Item>
  );
};

const CepFormItem: React.FC<{ cep?: string }> = ({ cep }) => {
  const intl = useIntl();
  const cepLength = 8;
  const cepFieldValidator = async (_: any, cep: string) => {
    const isCepValid = await HomeController.validateCep(cep);
    if (isCepValid) return Promise.resolve();
    return Promise.reject(
      new Error(
        intl.formatMessage({
          id: "CompanyFormField.CepErrorMessage",
        })
      )
    );
  };
  return (
    <Form.Item
      name="cep"
      label={
        <TextComponent transform={TYPOGRAPHY.TEXT_TRANSFORMS.UPPERCASE}>
          {intl.formatMessage({
            id: "CompanyFormField.Cep",
          })}
        </TextComponent>
      }
      rules={[
        { required: true },
        { len: cepLength },
        {
          validator: cepFieldValidator,
        },
      ]}
    >
      <Input defaultValue={cep} />
    </Form.Item>
  );
};

const SuppliersFormItem: React.FC<{ suppliers?: Supplier[] }> = ({
  suppliers,
}) => {
  const intl = useIntl();
  return (
    <Form.Item
      name="suppliers"
      label={
        <TextComponent>
          {intl.formatMessage({
            id: "CompanyFormField.Suppliers",
          })}
        </TextComponent>
      }
    >
      <SuppliersSelect suppliers={suppliers} />
    </Form.Item>
  );
};

export default CompanyForm;
