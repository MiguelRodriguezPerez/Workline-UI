import { useState } from "react";
import { JobOfferContext } from "./jobOfferContext";

export const JobOfferProvider = ({ children, oferta }) => {

    return (
        <JobOfferContext.Provider value={ oferta }>
            {children}
        </JobOfferContext.Provider>
    )
}