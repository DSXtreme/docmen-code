"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <div css={layout_container}>
            <nav></nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;

const layout_container = css`
    min-width: 600px;
    nav {
        width: 100%;
        height: 45px;
        background: var(--color-surface-200);
        position: fixed;
        top: 0;
        left: 0;
    }
    main {
        width: 100%;
        margin-top: 45px;
    }
`;
