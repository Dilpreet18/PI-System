import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";

export const signIn = ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userLoginCredential) => resolve(userLoginCredential))
      .catch((error) => reject(error));
  });
};
