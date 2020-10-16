import db from "@/lib/firebaseAdmin"

export default async (req, res) => {
  const siteRef = await db.collection('sites').get()
  let sites = []
  siteRef.forEach(doc => [
    sites.push({ id: doc.id, ...doc.data() })
  ])

  res.status(200).json({sites})
}