"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Metadata } from "next";

import Image from "next/image";

type LayoutProps = {
    children: React.ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <div css={layout_container}>
            <nav>
                <Image
                    src={"/logo_d_code.png"}
                    width={120}
                    height={38}
                    alt="DCode"
                />
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;

const layout_container = css`
    min-width: 600px;
    nav {
        width: 100%;
        height: 50px;
        background: var(--color-surface-200);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 500;
        display: flex;
        align-items: center;
        padding: 0 1rem;
    }
    main {
        width: 100%;
        margin-top: 45px;
    }
`;
