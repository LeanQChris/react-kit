import axios, { AxiosInstance } from "axios";
import { INetworkClient, INetworkConfig } from "./interface";

export class NetworkClient implements INetworkClient {
    config: INetworkConfig;
    client: AxiosInstance;

    private constructor(config: INetworkConfig) {
        this.config = config;
        this.client = axios.create({
           baseURL: config.baseUrl,
        });
    }

    static create(config: INetworkConfig): NetworkClient {
        return new NetworkClient(config);
    }
}
