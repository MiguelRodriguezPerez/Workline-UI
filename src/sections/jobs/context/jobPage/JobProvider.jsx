import { useReducer, useState } from "react";
import { JobContext } from "./JobContext";
import { jobsReducer } from "./jobsReducer";


const init = () => {
    return {
        number: 0,
        content: [],
        totalElements: 0,
        totalPages: 0,
        numberOfElements: 0
    };
};

export const JobProvider = ({ children }) => {

    const [jobPageState, dispatch] = useReducer(jobsReducer, [], init);
    const [isLoading, setIsLoading] = useState(true);

    const updatePage = (page = {}) => {
        const action = {
            type: 'update_page',
            payload: {
                number: page.number,
                content: page.content || [],
                totalElements: page.totalElements || 0,
                totalPages: page.totalPages || 0,
                numberOfElements: page.numberOfElements || 0
            }
        };
        dispatch(action);
        setIsLoading(false);
    };


    return (
        <JobContext.Provider value={{
            jobPageState: jobPageState,
            isLoading : isLoading,
            updatePage,
        }}>
            { children }
        </JobContext.Provider>
    );
};
