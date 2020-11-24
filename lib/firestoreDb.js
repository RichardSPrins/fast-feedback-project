import firebase from './firebase'
import 'firebase/firestore'

const firestore = firebase.firestore()


export const createUser = (uid, data) => {
  return firestore.collection('users').doc(uid).set({ uid, ...data }, { merge: true })
}

export const createSite = (data) => {
  console.log(data)
  return firestore.collection('sites').add(data)
}

export const createFeedback = (data) => {
  console.log(data)
  return firestore.collection('feedback').add(data)
}

export const deleteFeedback = (id) => {
  console.log(id)
  return firestore.collection('feedback').doc(id).delete()
}