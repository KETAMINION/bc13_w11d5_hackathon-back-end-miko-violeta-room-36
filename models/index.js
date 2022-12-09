import {pool} from "../db/index.js"

export async function getYoga (){
    const subjectArray = await pool.query ("SELECT * FROM yoga")
    return subjectArray.rows
}

export async function updateDataModels (data){
    const subjectArray = await pool.query (`INSERT INTO progressCheck (user_id, day, subject) VALUES (1, $1, $2)`, [data.day, data.subject])
    return subjectArray
}



