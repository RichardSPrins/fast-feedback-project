import { auth } from "@/lib/firebaseAdmin"
import { getAllUserSites } from "@/lib/db-admin"

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token)
    console.log(uid)
    const { sites, error } = await getAllUserSites(uid)
    res.status(200).json({ sites })
  } catch (error) {
    res.status(500).json({ error })
  }
}