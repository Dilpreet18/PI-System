import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../services/firebase/firebase";

export const signup = ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = {
          createdAt: new Date(),
          name,
          email,
          uid: userCredential.user.uid,
        };
        addDoc(collection(db, "user"), user)
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
};

export default signup;
