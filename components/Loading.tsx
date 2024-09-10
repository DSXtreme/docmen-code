"use client";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { FC } from "react";
import RiveComponent from '@rive-app/react-canvas';

const Loading: FC = () => {
        return <div><RiveComponent style={{width: 100, height: 100}} src="/ladoing.riv"/></div>
};

export default Loading;


