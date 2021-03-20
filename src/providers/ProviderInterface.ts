import {Config} from "../models/config";

export interface ProviderInterface {
    update(domain: string, config: Config): Promise<void>;

    validateConfig(config: Config): string;
}
