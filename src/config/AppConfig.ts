import dotenv from "dotenv"

dotenv.config()

const env = (key: any, defaultValue=null)=>{
    return process.env[key] || defaultValue;
}

const config = {
    API_PREFIX: process.env.API_PREFIX,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    SECRET_KEY: process.env.SECRET_KEY,
    JWT_EXPIRES: process.env.JWT_EXPIRES,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD || null,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    SQL_DIALECT: process.env.SQL_DIALECT,
    SQL_POOL_LIMIT: process.env.SQL_POOL_LIMIT,
}

export default Object.freeze(config)
