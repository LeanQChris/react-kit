import "./src/styles/tailwind.css";

// ui
export {
    IButton, Button,
    Timer,
    ImageUpload
} from './src/ui/index'
// ui

// network
export {
    INetworkConfig,
    INetworkClient,
    NetworkClient
} from './src/network/index'
// network


export { useDebounce } from "./src/hooks/index";