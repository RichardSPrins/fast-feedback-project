import { getAllSites } from "@/lib/db-admin"
import db from "@/lib/firebaseAdmin"

export default async (req, res) => {
  const sites = await getAllSites()
  res.status(200).json({ sites })
}