import { axiosPost } from "@/util/axios";
import { AxiosResponse, AxiosError } from "axios";

type Parameters = {
    markdownInput: string;
};

const getDocumentAPI = async ({
    markdownInput,
}: Parameters) => {
    console.log("generating");

    const res = await axiosPost<AxiosResponse>({
        url: `${process.env.NEXT_PUBLIC_API_URL}/document/generate`,
        data: {code: markdownInput},
    });

    // Check if the result is an AxiosError
    console.log("data from getDocumentAPI", res)

    // If it's a successful response, return the data
   return res
};

export default getDocumentAPI;
