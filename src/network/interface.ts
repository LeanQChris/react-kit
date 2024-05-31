export interface INetworkConfig {
    baseUrl: string,
    headers?: object,
    timeout?: number,
    withCredentials?: boolean,
    maxRedirects?: number,
    maxContentLength?: number,
    maxBodyLength?: number
}

export interface INetworkClient{
    config: INetworkConfig
}