import axios, { AxiosError, AxiosResponse } from "axios";

type Params = {
    url: string;
    token?: string;
    headers?: Record<string, string>;
    params?: Record<string, any>;
    data?: Object
};


export const axiosPost = async <T>({ url, token, data, headers }: Params): Promise<T> => {
    try {
        return await axios.post(url, data, {
            headers: !token
                ? {
                      ...headers,
                  }
                : {
                      ...headers,
                      Authorization: `Bearer ${token}`,
                  },
        });
        
    } catch (e) {
        console.log("error at url: ", url);
        console.log("error at axiosPost: ", e);
        // Properly cast the error to AxiosError if possible
        if (axios.isAxiosError(e)) {
            throw e;
        }
        throw new Error("Unknown error occurred");
    }
};

export const axiosPut = async ({ url, token, data, headers }: Params) => {
    console.log({ url, token, data, headers });

    try {
        return await axios.put(url, data, {
            headers: !token
                ? {
                      ...headers,
                  }
                : {
                      ...headers,
                      Authorization: `Bearer ${token}`,
                  },
        });
    } catch (e) {
        console.log("error at url: ", url);
        console.log("error at axiosPut: ", e);
        return {
            status: 400,
        };
    }
};
export const axiosPatch = async ({ url, token, data, headers, params }: Params) => {
    console.log({ url, token, data, headers });

    try {
        return await axios.patch(url, data, {
            params,
            headers: !token
                ? {
                      ...headers,
                  }
                : {
                      ...headers,
                      Authorization: `Bearer ${token}`,
                  },
        });
    } catch (e) {
        console.log("error at url: ", url);
        console.log("error at axiosPost: ", e);
        return {
            status: 400,
        };
    }
};
export const axiosDelete = async ({ url, token, data, headers, params }: Params) => {
    console.log("delete data: ", { url, token, data, headers, params });

    try {
        return await axios.delete(url, {
            params,
            headers: !token
                ? {
                      ...headers,
                  }
                : {
                      ...headers,
                      Authorization: `Bearer ${token}`,
                  },
        });
    } catch (e) {
        console.log("error at url: ", url);
        console.log("error at axiosPost: ", e);
        return {
            status: 400,
        };
    }
};
