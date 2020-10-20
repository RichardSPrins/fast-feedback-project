import db from "@/lib/firebaseAdmin"
import { getAllFeedback } from "@/lib/db-admin"

export default async (req, res) => {
  const siteId = req.query.siteId
  try {
    const feedback = getAllFeedback(siteId)
    res.status(200).json({ feedback })
  } catch (error) {
    console.log(err)
  }
}