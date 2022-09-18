namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        DB_CONNECTION_STRING: string;
        LOCAL_DB_CONNECTION_STRING: string;
        AWS_ACCESS_KEY_ID: string;
        AWS_SECRET_ACCESS_KEY: string;
        AWS_BUCKET_NAME: string;
        AWS_PERMISSIONS: string;
        AWS_REGION: string;
    }
}