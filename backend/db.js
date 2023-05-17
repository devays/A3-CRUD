import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",  
    user:"USER_DO_BANCO", 
    password: "SENHA_DO_BANCO",
    database: "crud2"
});

