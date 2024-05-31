import axios, { AxiosInstance, AxiosResponse } from "axios";
import { BaseResponse, INetworkClient, INetworkConfig } from "./interface";

export class NetworkClient implements INetworkClient {
    config: INetworkConfig;
    client: AxiosInstance;

    private constructor(config: INetworkConfig) {
        this.config = config;
        this.client = axios.create({
            baseURL: config.baseUrl,
        });

        this.client.interceptors.request.use((req) => {
            return req
        })

        this.client.interceptors.response.use((res: AxiosResponse<BaseResponse<any, any>, any>): any => {
            return res.data;
        }, (err) => { err })
    }

    static create(config: INetworkConfig): NetworkClient {
        return new NetworkClient(config);
    }

}
