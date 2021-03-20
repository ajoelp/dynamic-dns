import {ProviderInterface} from "./ProviderInterface";
import {Config} from "../models/config";
import axios from 'axios';

export default class GoogleDomains implements ProviderInterface {

    static BAD_AUTH = 'badauth';

    validateConfig(config: Config) {
        return config.username && config.password && config.hostname;
    }

    async update(domain: string, config: Config) {
        try {
            console.log(config)
            const { data }  = await axios.post(`https://${config.username}:${config.password}@domains.google.com/nic/update?hostname=${config.hostname}&myip=${domain}`)
            if(data === GoogleDomains.BAD_AUTH){
                throw new Error('Bad auth');
            }
            console.log(data);
        } catch (e) {
            throw e;
        }
    }

}
