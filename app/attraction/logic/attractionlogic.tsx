'use client';

import { useEffect } from "react";
import { useStore } from "../../state/useStore";


const AttractionLogic = (params) => {

    const {attraction, fetchSingleAttraction} = useStore();

    useEffect(() => {
        fetchSingleAttraction(params.id);
    }, [params.id, fetchSingleAttraction]);

    return {attraction};
}

export default AttractionLogic;