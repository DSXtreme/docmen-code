"use client"
/** @jsxImportSource @emotion/react */

import { useEffect, useLayoutEffect } from "react"
import Markdown from "react-markdown"
import hljs from "highlight.js"
import "highlight.js/styles/github.css" // You can choose any theme you like

type CodeProp = {
    children: string
}

const markdown =
    '## User Model with Mongoose\n\nThis code defines a Mongoose model for a "User" document in a MongoDB database.\n\n**1. Import necessary modules:**\n\n```javascript\nimport mongoose, { Schema, Types } from "mongoose";\n```\n\n**2. Define the raw document interface:**\n\n```javascript\ninterface UserType {\n    name: string;\n    email: string;\n    password: string;\n    projects: Types.ObjectId;\n}\n```\n\nThis interface defines the data types of the fields in the "User" document. It uses primitive types like `string` and `Types.ObjectId` for fields that will be directly stored in MongoDB. \n\n**3. Define the Mongoose schema:**\n\n```javascript\nconst userSchema = new Schema<UserType>({\n    name: { type: String, required: true },\n    email: { type: String, required: true },\n    password: {\n        type: String,\n        required: true,\n    },\n    projects: [\n        {\n            type: Schema.Types.ObjectId,\n            ref: "projects",\n        },\n    ],\n});\n```\n\nThis schema defines the structure of the "User" document. It specifies the type of each field, any validation rules (like `required`), and relationships to other models. In this case, the `projects` field is an array of `Types.ObjectId` references to documents in the "projects" collection.\n\n**4. Create the Mongoose model:**\n\n```javascript\nconst User = mongoose.model("users", userSchema);\n```\n\nThis line creates a Mongoose model called "User" based on the `userSchema`. This model provides methods for interacting with the database, such as creating, reading, updating, and deleting documents.\n\n **5. Export the model:**\n\n```javascript\nexport default User;\n```\n\nThis line makes the "User" model available for use in other parts of the application.\n\n**Key points:**\n\n- The model defines the structure and validation rules for "User" documents.\n- It uses `Types.ObjectId` to establish relationships with other models, like "projects".\n- The model provides methods for interacting with the database.\n\n**Further improvements:**\n\n- Add validation rules for email and password fields.\n- Consider using a password hashing library to secure passwords.\n- Implement additional features like user authentication and authorization.\n'

export default function Home() {
    
  useEffect(() => {
        hljs.highlightAll()
    }, [])


    return (
        <div>
            <textarea />
            <Markdown
                children={markdown}
                components={{
                    code({ children, className }) {
                        console.log(className)
                        return (
                            <code className={"language-javascript"}>
                                {children}
                            </code>
                        )
                    },
                }}
            />
        </div>
    )
}
