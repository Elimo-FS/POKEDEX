import prodlogger from "./prodLogger";
import devlogger from "./devLogger";
import { Logger } from "winston";

let logger: Logger;
if (process.env.LOGGER_MODE === 'DEV') {
    logger = devlogger;
} else {
    logger = prodlogger;
}

export default logger
