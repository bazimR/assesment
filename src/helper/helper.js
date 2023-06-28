import axios from 'axios';
axios.defaults.baseURL = 'http://5.189.180.8:8010'

export async function saveDetails(data) {
    console.log(data);
    try {
        await axios.post('/header/multiple', data)
    } catch (error) {
        console.error(error)
        return Promise.reject({ error: 'failed to submit' })
    }
}
