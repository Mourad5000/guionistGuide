import axios from 'axios';
import APIconstants from '../../constants/APIconstants';

const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer xvi06TocPJvBmrQC4yZv'
}

export function getMovies(){
    return async()=>{
        try {
            const endPoint = `${APIconstants.API_URL}${APIconstants.REQUEST_CHARACTERS}`
            const {data} = await axios.get(endPoint, headers)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}