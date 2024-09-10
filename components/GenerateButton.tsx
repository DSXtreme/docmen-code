"use client";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import GenerateIcon from "./Icons/GenerateIcon";
import { FC } from "react";


type Prop = {
  onClick?: () => void
} 

const GenerateButton:FC<Prop> = ({onClick=()=>{}}) => {
  return (
    <div css={container} onClick={() => onClick()}>
      <GenerateIcon width={22} style={{fill: "#565555fff"}} /> 
    </div>
  )
}

export default GenerateButton

const container = css`
    width: 100px;
    height:40px;
    background: var(--color-primary-100);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .2rem;
    margin: 1rem 0;
`
