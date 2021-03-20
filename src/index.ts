import schedule from 'node-schedule'
import {checkDomain} from "./commands/CheckDomain";

const SCHEDULE = process.env.SCHEDULE ?? '0 * * * *'

const runJob = () => {
    checkDomain()
        .then(() => {})
        .catch((e) => console.log(`[ERROR] ${e.message}`));
}

runJob();
schedule
    .scheduleJob(SCHEDULE, runJob)
