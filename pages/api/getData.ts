// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db'; // Update the import path

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [rows] = await (db as Pool).query('SELECT * FROM products');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

