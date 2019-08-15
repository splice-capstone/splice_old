import firebase from "react-native-firebase";

function initDB() {
  const db = firebase.firestore()
  return db
}

const db = initDB()

export default db

export async function userInit() {
  try {
    const { user } = await firebase.auth().signInAnonymously();
    console.log('User -> ', user.toJSON());

    await firebase.analytics().logEvent('foo', { bar: '123'});
    return 'worked'
  } catch(err) {
    return 'stuff'
  }
}

