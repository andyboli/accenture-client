import React, { useState, useEffect, PropsWithChildren } from "react";
import { Form, FormInstance } from "antd";

import styled from "styled-components";
import { BORDERS, SPACES, GAPS, RADIUS, SHADOWS } from "../foudation";

interface FormComponentProps {
  form: FormInstance;
  formRef: React.RefObject<FormInstance<any>>;
  onFinish?: () => void;
}

const FormComponent: React.FC<PropsWithChildren<FormComponentProps>> = ({
  children,
  form,
  formRef,
  onFinish,
}) => {
  const [, forceUpdate] = useState({});
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <StyledForm
      {...layout}
      ref={formRef}
      name="control-ref"
      onFinish={onFinish}
      form={form}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, { form });
      })}
    </StyledForm>
  );
};

const StyledForm = styled(Form)`
  width: 100%;

  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;

  gap: ${GAPS.MEDIUM};
  margin: ${SPACES.NONE};
  padding: ${SPACES.NONE};

  border-radius: ${RADIUS.BIG};
  border: ${BORDERS.NONE};
  box-shadow: ${SHADOWS.MEDIUM()};

  .ant-form-item {
    width: 100%;

    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;

    margin: ${SPACES.NONE};
    padding: ${SPACES.NONE};
  }

  .ant-form-item-row {
    width: 100%;

    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    gap: ${GAPS.SMALL};
    margin: ${SPACES.NONE};
    padding: ${SPACES.NONE};
  }

  .ant-form-item-label {
    width: 10%;

    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
  }
`;

export default FormComponent;
