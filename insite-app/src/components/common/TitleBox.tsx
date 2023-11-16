import { ReactNode } from "react";
import styled from "styled-components";
import { IconInfo } from "@assets/icons";

interface TitleBoxProps {
  children: ReactNode;
  text: string;
}

const TitleBoxStyle = styled.div`
  width: fit-content;
  max-width: 300px;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: white;
  background-color: transparent;
  font-weight: bold;
  cursor: default;
  position: relative;
`;

const InfoIconWrapper = styled.div`
  margin-left: 10px;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .Tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const InfoIcon = styled.img`
  width: 20px; // 아이콘 크기 조절
  height: 20px;
`;

function TitleBox({ children, text }: TitleBoxProps) {
  return (
    <TitleBoxStyle>
      {children}
      <InfoIconWrapper>
        <InfoIcon src={IconInfo} alt="Info" />
        <Tooltip className="Tooltip">{text}</Tooltip>
      </InfoIconWrapper>
    </TitleBoxStyle>
  );
}

export default TitleBox;