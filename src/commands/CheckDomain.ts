import getPublicAddress from "../utils/getPublicAddress";
import {providerFactory} from "../providers/ProviderFactory";

let lastIp;

export async function checkDomain(){
    const ip = await getPublicAddress();

    if(lastIp === ip){
        console.log(`[SKIPPING] Ip was the same.`)
    }
    console.log(`[UPDATE] Changing ip from ${lastIp ?? 'none'} => ${ip}`)

    lastIp = ip;
    await providerFactory(ip);
}

