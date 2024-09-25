import { axiosPost } from "@/util/axios";
import { AxiosResponse, AxiosError } from "axios";

type Parameters = {
    markdownInput: string;
};

type Response = {
    data: string;
};

const getDocumentAPI = async ({
    markdownInput,
}: Parameters): Promise<Response > => {
    console.log("generating");

    const res = await axiosPost({
        url: `${process.env.NEXT_PUBLIC_API_URL}/document/generate`,
        data: markdownInput,
    });

    // Check if the result is an AxiosError


    // If it's a successful response, return the data
    const axiosResponse = res as AxiosResponse<Response>;
    return axiosResponse.data;
};

export default getDocumentAPI;
