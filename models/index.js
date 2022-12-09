import { pool } from '../db/index.js';

export async function getYoga() {
  const subjectArray = await pool.query('SELECT * FROM yoga');
  return subjectArray.rows;
}

export async function searchYogaById(id) {
  const result = await pool.query('SELECT * FROM yoga WHERE id = $1', [id]);
  console.log('searchYogaById function is working!');
  return result.rows[0];
}
