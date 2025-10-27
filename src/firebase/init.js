import { initializeApp, getApps } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjFi-wNkEiEFtjNuqfum2wz_Yc5_GBYEo",
  authDomain: "nomash-lib.firebaseapp.com",
  projectId: "nomash-lib",
  storageBucket: "nomash-lib.firebasestorage.app",
  messagingSenderId: "449484454483",
  appId: "1:449484454483:web:abbc93f19ce248e60464a6",
  measurementId: "G-DNHF03VXY5"
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  try {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099')
    connectFirestoreEmulator(db, '127.0.0.1', 8080)
  } catch {}
}
