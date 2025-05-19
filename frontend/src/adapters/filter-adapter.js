import { fetchHandler } from "../utils/fetchingUtils";

export const borough = async () =>{
    try {
        const [bro, error] = await fetchHandler('api/banks/');
        if (error){
            console.error('Error fetching points:', error.message)
            return [];
        }
        console.log(bro);
        return bro;
    } catch (bro) {
        console.error('Unexpected error fetching posts:', error.message);
        return [];
    }
};

