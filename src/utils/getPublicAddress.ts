import axios from 'axios';

export default async function getPublicAddress(){
    try {
        const { data } = await axios.get('https://api.ipify.org?format=json')
        return data?.ip
    } catch(e){
        if(process.env.DEBUG_MODE){
            console.log(e);
        }
        throw new Error('Could not fetch public IP address');
    }


}
