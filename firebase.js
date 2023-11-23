import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updatePassword, updateEmail } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { Alert } from 'react-native';


const firebaseConfig = {
  apiKey: "AIzaSyDd3DNrN9xUga6qSlPMJL254VatUeNV2WQ",
  authDomain: "bme70atd.firebaseapp.com",
  databaseURL: "https://bme70atd-default-rtdb.firebaseio.com",
  projectId: "bme70atd",
  storageBucket: "bme70atd.appspot.com",
  messagingSenderId: "246839797015",
  appId: "1:246839797015:web:32b4a27347380a95e80352",
  measurementId: "G-VTT6TG59TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

var userDetails = null

export async function getVib() {
  const dbRef = ref(getDatabase())
  return (await get(child(dbRef, `Vibration/level/`)).then((snapshot) => {
    return (snapshot.val())
  }))
}

export async function pullVibHist() {
  const dbRef = ref(getDatabase())
  return (await get(child(dbRef, `log/heat`)).then((snapshot) => {
    let raw = snapshot.val();
    //let output
    let keys = Object.keys(raw);
    //let newKeys = Object.newKeys(keys);

    let vals = []
    for (let i = 0; i < keys.length; i++) {
      //for (let k = 0; k < newKeys.length; k++) {
        const currentkey = keys[i]
        const temp = raw[currentkey]
        const datetime = new Date(currentkey.replace('*', '.'))

        vals.push({
          val: temp,
          time: datetime
        })
      }
    //}
    //console.log(keys)
    return (vals)
  }))

}


export async function pullVHist() {
  const dbRef = ref(getDatabase())
  return (await get(child(dbRef, `log/Vib`)).then((snapshot) => {
    let raw = snapshot.val();
    //let output
    let keys = Object.keys(raw);

    let Vvals = []
    for (let i = 0; i < keys.length; i++) {
        const Vcurrentkey = keys[i]
        const temp = raw[Vcurrentkey]
        const datetime = new Date(Vcurrentkey.replace('*', '.'))
        Vvals.push({
          Vval: temp,
          Vtime: datetime
        })
      }
    return (Vvals)
  }))

}

export async function getHeat() {
  const dbRef = ref(getDatabase())
  return (await get(child(dbRef, `Heat/level/`)).then((snapshot) => {
    //console.log(snapshot.val())
    return (snapshot.val())
  }))
}

export async function getTemp() {
  const dbRef = ref(getDatabase())
  return (await get(child(dbRef, `Heat/temp/`)).then((snapshot) => {
    //console.log(snapshot.val())
    return (snapshot.val())
  }))
}


export async function getB() {
  const dbRef = ref(getDatabase())
  return (await get(child(dbRef, `Battery/Level`)).then((snapshot) => {
    return (snapshot.val())
  }))
}


export async function getBState() {
  const dbRef = ref(getDatabase())
  return (await get(child(dbRef, `Battery/State`)).then((snapshot) => {
    return (snapshot.val())
  }))
}

export function getUserDetails() {
  return userDetails
}


export async function firebaseRegister(email, password) {

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 

      const user = userCredential.user;
      console.log(userCredential);
      userDetails = user;
      Alert.alert('User created successfully!, Proceed to Login with New Details')

      //return userDetails
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert('Incorrect Registeration', 'Please Try Again with a Google Registered Account and ATLEAST 8 characters');
      // ..
    });
}


export async function firebaseLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      //console.log(userCredential)
      userDetails = user;
      Alert.alert("Login Successful")
      return userDetails

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log(errorMessage)
      Alert.alert("Invalid Login Details", "Please check login details and try again.")
      return null
    });
}

export async function firebaseResetPassword(email) {

  return sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('password reset email sent!');
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error);
      // ..
    });

}

export async function firebaseUpdatePassword(password) {

  const user = auth.currentUser;

  return updatePassword(user, newPassword).then(() => {
    alert('Password Updated!');
  }).catch((error) => {
    alert(error);
  });

}

export async function firebaseUpdateEmail(email) {

  const user = auth.currentUser;

  return updateEmail(user, email).then(() => {
    alert('Email Updated!');
  }).catch((error) => {
    alert(error);
  });

}
