"use client";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import GenerateIcon from "./Icons/GenerateIcon";
import { FC } from "react";
import {motion} from "framer-motion"


type Prop = {
  onClick?: () => void,
  children: JSX.Element
} 

const GenerateButton:FC<Prop> = ({onClick=()=>{}, children}) => {
  return (
    <motion.div 
      css={container} 
      onClick={() => onClick()}
      whileHover={{
        boxShadow: "-2px 5px 16px -5px #5DC4CA",
        scale: 1.01,
        cursor:"pointer"
      }}
    >
      {/* <GenerateIcon width={22} style={{fill: "#565555fff"}} />  */}
      {children}
    </motion.div>
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
