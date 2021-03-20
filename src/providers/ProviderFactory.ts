import { ProvidersType } from "src/utils/ProvidersType";
import GoogleDomains from "./GoogleDomains";
import { ProviderInterface} from "./ProviderInterface";
import {Config} from "../models/config";

const Providers: { [name in ProvidersType]: { new(): ProviderInterface } } = {
    'google_domains': GoogleDomains
}

export function providerFactory(address: string){
    const config = new Config();
    const factory = new Providers[config.provider];
    if(!factory.validateConfig(config)){
        throw new Error('Invalid config.')
    }
    return factory.update(address, config);
}

