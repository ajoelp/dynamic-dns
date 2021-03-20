import {ProvidersType} from "../utils/ProvidersType";

export class Config {
    public provider: ProvidersType;
    public username?: string;
    public password?: string;
    public hostname?: string;

    constructor() {
        this.provider = process.env.PROVIDER as ProvidersType ?? 'google_domains';
        this.username = process.env.PROVIDER_USERNAME
        this.password = process.env.PROVIDER_PASSWORD
        this.hostname = process.env.PROVIDER_HOSTNAME
    }
}
