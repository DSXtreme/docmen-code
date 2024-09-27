"use client"
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react"

// font
import {  Montserrat  } from "next/font/google"

import { ChangeEvent, FC } from "react"

// montsarrat font
const montsarrat = Montserrat({ subsets: ["latin"] })

type InputProps = {
    type?: "text" | "number" | "email" | "password"
    label?: string 
    value?: string | number
    name?: string | undefined
    placeholder?: string 
    error?: boolean 
    disabled?: boolean
    onChange?:(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
    css?: SerializedStyles,
    style?: React.CSSProperties
}

type FileInputProps = {
    label: string
    value: string | number
    name: string
    placeholder: string
    error: boolean
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    css?: SerializedStyles
}

/**
 * Input Compontn
 * types: "text" | "number" | "email" | "password"
 */
export const Input: FC<InputProps> = ({
    type,
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    onChange,
    css
}) => {
    return (
        <div >
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                css={css}
            />
            {error}
        </div>
    )
}


/**
 * Input Compontn
 * types: "text" | "number" | "email" | "password"
 */
export const TextArea: FC<InputProps> = ({
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    onChange,
    style
}) => {
    return (
        <div style={{ width: style?.width ? style?.width :"100%",}}>
            {label && <label htmlFor={label}>{label}</label>}
            <textarea
                className={montsarrat.className}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                style={{width: "100%", ...style}}
                css={input}
            />
            {error}
        </div>
    )
}

/**
 * File Input Compontn
 * type deifned to be file type
 */
export const FileInput: FC<FileInputProps> = ({
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    onChange,
}) => {
    return (
        <div >
            <label htmlFor={label}>{label}</label>
            <input
                type="file"
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
            {error}
        </div>
    )
}

const input: SerializedStyles = css`
    background-color: var(--color-surface-200);
    color: #ffffff;
    font-size: 1rem;
    padding: 1rem;
    border-radius: .5rem;
    resize: none;
`
