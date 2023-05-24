import React, { JSXElementConstructor, ReactElement } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { message } from "antd";
import {
  InfoCircleFilled,
  WarningFilled,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import { ArgsProps } from "antd/lib/message";

import { COLORS_TYPES, BORDER_TYPES } from "../foudation";
import { FlexBetween, TextComponent, FlexCenter } from "../components";

export enum MESSAGE_TYPES {
  DANGER = "error",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
}

type MessageProps = {
  className?: string;
  closable?: boolean;
  duration?: number;
  key: string;
  onClick?: () => void;
  onClose?: () => void;
  text: string;
  type?: MESSAGE_TYPES;
};

const MessageComponent: React.FC<MessageCompoentProps> = ({
  text,
  color,
  icon,
  messagekey,
}) => (
  <>
    <MessageGlobalStyle />
    <FlexBetween border={BORDER_TYPES.MEDIUM} borderColor={color}>
      <FlexCenter>
        {icon}
        <TextComponent color={color}>{text}</TextComponent>
      </FlexCenter>
      <StyledCloseIcon onClick={() => message.destroy(messagekey)} />
    </FlexBetween>
  </>
);

export const configMessageComponent = ({
  text,
  duration = 2000,
  closable = false,
  type = MESSAGE_TYPES.SUCCESS,
  onClose,
  onClick,
  key,
  className,
}: MessageProps): ArgsProps => {
  const mapMessageTypeProps: Record<
    MESSAGE_TYPES,
    {
      color: COLORS_TYPES;
      icon: ReactElement<any, string | JSXElementConstructor<any>>;
    }
  > = {
    [MESSAGE_TYPES.DANGER]: {
      color: COLORS_TYPES.RED_MAIN,
      icon: <StyledDangerIcon />,
    },
    [MESSAGE_TYPES.INFO]: {
      color: COLORS_TYPES.BLUE_MAIN,
      icon: <StyledInfoIcon />,
    },
    [MESSAGE_TYPES.SUCCESS]: {
      color: COLORS_TYPES.GREEN_MAIN,
      icon: <StyledSuccessIcon />,
    },
    [MESSAGE_TYPES.WARNING]: {
      color: COLORS_TYPES.ORANGE_MAIN,
      icon: <StyledWarningIcon />,
    },
  };

  return {
    content: (
      <MessageComponent
        color={mapMessageTypeProps[type].color}
        icon={mapMessageTypeProps[type].icon}
        text={text}
        messagekey={key}
      />
    ),
    duration: closable ? 0 : duration,
    icon: <></>,
    type,
    key,
    onClick,
    onClose,
    className,
  };
};

interface MessageCompoentProps {
  color: COLORS_TYPES;
  icon: ReactElement;
  messagekey: string;
  text: string;
}

const MessageGlobalStyle = createGlobalStyle`
  .ant-message-notice-content{
    box-shadow: none !important;
    padding: 0 !important;
    background: transparent !important;
    border-radius: 0 !important;
  }
`;

const StyledCloseIcon = styled(CloseCircleFilled)`
  color: ${COLORS_TYPES.BLACK};
  :hover {
    color: ${COLORS_TYPES.WHITE};
  }
`;

const StyledSuccessIcon = styled(CheckCircleFilled)`
  color: ${COLORS_TYPES.GREEN_DARK};
`;

const StyledWarningIcon = styled(WarningFilled)`
  color: ${COLORS_TYPES.ORANGE_DARK};
`;

const StyledDangerIcon = styled(CloseCircleFilled)`
  color: ${COLORS_TYPES.RED_DARK};
`;

const StyledInfoIcon = styled(InfoCircleFilled)`
  color: ${COLORS_TYPES.BLUE_DARK};
`;

export default message;
