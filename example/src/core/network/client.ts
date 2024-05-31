import { INetworkConfig, NetworkClient } from "@techyatraa/react-kit";

const httpConfig: INetworkConfig = {
    baseUrl: "https://jsonplaceholder.typicode.com"
};

const httpClient = NetworkClient.create(httpConfig).client;

export default httpClient;