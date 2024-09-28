"use client";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

import { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";

// Components
import Markdown from "react-markdown";
import { TextArea } from "../components/Inputs";
import Loading from "@/components/Loading";
import GenerateButton from "@/components/GenerateButton";
import axios from "axios";
import { data } from "framer-motion/client";
import getDocumentAPI from "@/apis/get/getDocumentAPI";

const markdown =
    '## User Model with Mongoose\n\nThis code defines a Mongoose model for a "User" document in a MongoDB database.\n\n**1. Import necessary modules:**\n\n```javascript\nimport mongoose, { Schema, Types } from "mongoose";\n```\n\n**2. Define the raw document interface:**\n\n```javascript\ninterface UserType {\n    name: string;\n    email: string;\n    password: string;\n    projects: Types.ObjectId;\n}\n```\n\nThis interface defines the data types of the fields in the "User" document. It uses primitive types like `string` and `Types.ObjectId` for fields that will be directly stored in MongoDB. \n\n**3. Define the Mongoose schema:**\n\n```javascript\nconst userSchema = new Schema<UserType>({\n    name: { type: String, required: true },\n    email: { type: String, required: true },\n    password: {\n        type: String,\n        required: true,\n    },\n    projects: [\n        {\n            type: Schema.Types.ObjectId,\n            ref: "projects",\n        },\n    ],\n});\n```\n\nThis schema defines the structure of the "User" document. It specifies the type of each field, any validation rules (like `required`), and relationships to other models. In this case, the `projects` field is an array of `Types.ObjectId` references to documents in the "projects" collection.\n\n**4. Create the Mongoose model:**\n\n```javascript\nconst User = mongoose.model("users", userSchema);\n```\n\nThis line creates a Mongoose model called "User" based on the `userSchema`. This model provides methods for interacting with the database, such as creating, reading, updating, and deleting documents.\n\n **5. Export the model:**\n\n```javascript\nexport default User;\n```\n\nThis line makes the "User" model available for use in other parts of the application.\n\n**Key points:**\n\n- The model defines the structure and validation rules for "User" documents.\n- It uses `Types.ObjectId` to establish relationships with other models, like "projects".\n- The model provides methods for interacting with the database.\n\n**Further improvements:**\n\n- Add validation rules for email and password fields.\n- Consider using a password hashing library to secure passwords.\n- Implement additional features like user authentication and authorization.\n';

export default function Home() {
    // local state
    const [input, setInput] = useState<string>("");
    const [markdown, setMarkdown] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Initializeing code heighlighter
    useEffect(() => {
        hljs.highlightAll();
    }, [markdown]);

    // Converting to markdown and downlaod .md
    const downloadMarkdown = () => {
        const blob = new Blob([markdown], { type: "text/markdown" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "file.md";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url); // Clean up
    };

    const hadelGenerate = async () => {
        if (input) {
            console.log("generating...");
            // const res = await axios.post(
            //     "http://localhost:3001/document/generate",
            //     {
            //         code: input,
            //     }
            // );
            // console.log("res: ", res);
            // setMarkdown(res.data.markdown_data);

            setIsLoading(true);

            const res = await getDocumentAPI({ markdownInput: input });

            const data = res.data;

            setMarkdown(data.markdown_data);

            setIsLoading(false);
        }
    };

    return (
        console.log(input),
        (
            <div css={conatiner}>
                <div css={left_pannel}>
                    <div css={input_container}>
                        <div css={button_container}>
                            <GenerateButton onClick={() => hadelGenerate()} />
                        </div>
                        <TextArea
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            style={{ height: "calc(100vh - 45px - 2rem)" }}
                        />
                    </div>
                </div>
                <div css={rght_pannel}>
                    {/* Hint */}
                    {isLoading ? (
                        <div css={right_panel}>
                            <Loading />
                        </div>
                    ) : !markdown ? (
                        <div css={right_panel}>
                            Paste your code to generate.
                        </div>
                    ) : (
                        <Markdown
                            components={{
                                code({ children }) {
                                    return (
                                        <code css={code_block}>{children}</code>
                                    );
                                },
                            }}
                        >
                            {markdown}
                        </Markdown>
                    )}
                </div>
            </div>
        )
    );
}

const conatiner = css`
    width: 100%;
    display: flex;
    gap: 1rem 2rem;
    padding: 1rem;
`;
const left_pannel = css`
    width: 90%;
    height: fit-content;
    position: sticky;
    top: calc(45px + 1rem);
    /* background: red; */
`;
const rght_pannel = css`
    font-size: 1rem;
    width: 100%;
    p {
        margin: 2rem 0;
        letter-spacing: 2px;
        line-height: 2rem;
    }
    li {
        margin-top: 0.5rem;
        margin-left: 2rem;
    }
`;
const right_panel = css`
    width: 100%;
    height: calc(100vh - 45px - 2rem);
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--color-surface-300);
`;
const code_block = css`
    background: #222222ff;
    font-size: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
`;
const input_container = css`
    position: relative;
    height: calc(100vh - 45px - 2rem);
`;
const button_container = css`
    position: absolute;
    top: 0;
    right: 1rem;
`;
