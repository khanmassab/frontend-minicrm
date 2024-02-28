import { apiCall } from "../apiConfig"; 

const Companies = {
    async getCompnaies(method, endpoint){
        const response = await apiCall(method, endpoint);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response}`);
        }
    
        const data = await response.json();
        return data;
    }
}

export default Companies;