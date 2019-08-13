import timestamp from "./utils/timestamp";
import "./index.scss";

const datenow = timestamp();
const blastFromPast = timestamp("2018-12-24");

console.log(datenow, blastFromPast, process.env.NODE_ENV);
