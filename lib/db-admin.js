import { compareDesc, parseISO } from 'date-fns'
import { db } from './firebaseAdmin'

export const getAllFeedback = async (siteId) => {
  try {
    const snapshot = await db.collection('feedback').where('siteId', "==", siteId).get()

    const feedback = []
    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() })
    })

    feedback.sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)))
    return { feedback };
  } catch (error) {
    return { error }
  }
}

export const getUserFeedback = async (uid) => {
  const snapshot = await db
    .collection('feedback')
    .where('authorId', '==', uid)
    .get();

  const feedback = [];

  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}

export const getAllUserSites = async (uid) => {
  const snapshot = await db
    .collection('sites')
    .where('authorId', '==', uid)
    .get();

  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  sites.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return { sites };
}

export async function getAllSites() {
  const snapshot = await db.collection('sites').get();

  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return { sites };
}


