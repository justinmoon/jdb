// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../db";

export default async (req, res) => {
  const { statement } = req.body;
  const result = await query(statement, []);

  res.status(200).json(result);
};
