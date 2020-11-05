export const {
    APP_PORT = 4000,
    NODE_ENV = "development",

    DB_USERNAME = "admin",
    DB_PASSWORD = "passord",
    DB_HOST = "it2810-70.idi.ntnu.no",
    DB_PORT = 27017,
    DB_NAME = "prosjekt3db",

    //SESS_NAME = "sid",
    //SESS_SECRET = "ssh!secret!",
    //SESS_LIFETIME = 1000 * 60 * 60 * 2

} = process.env;

export const IN_PROD = NODE_ENV === "production";