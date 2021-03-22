import { config } from 'dotenv';

const { parsed } = config();

export const {
    PORT,
    MODE,
    BASE_URL,
    DB = 'mongodb://localhost:27017/post-gql-app',
    IN_PROD = MODE !== 'prod',
    URL = `${BASE_URL}${PORT}`

} = parsed