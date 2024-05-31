import { NetworkClient, INetworkConfig } from "@techyatraa/react-kit/";

const httpConfig: INetworkConfig = {
    // baseUrl: "https://jsonplaceholder.typicode.com",
    baseUrl: "https://ce.leanq.digital/api/"
};

const httpClient = NetworkClient.create(httpConfig).client;

export default httpClient;