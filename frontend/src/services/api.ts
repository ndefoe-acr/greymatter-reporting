import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export interface KPIData {
    mttr: number;
    mtta: number;
    openCases: number;
}

export const fetchKPIs = async (): Promise<KPIData> => {
    const response = await axios.get(`${API_BASE_URL}/stats/kpi`);
    return response.data;
};

export const fetchIncidents = async () => {
    const response = await axios.get(`${API_BASE_URL}/incidents`);
    return response.data;
};
