import { createContext } from "react";

const OurContext = createContext(0); // This is a call back value, yani agr kch na chly to ye value atlest chl jay, lkn asal initial value wo ho gi jo ap Provider k zarye assign kren gy, wo value hi browser p render ho gi. 

export default OurContext;