import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // <-----Regular Sign Up----->
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // <-----Regular SignIn----->
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // <-----Google SignIn----->
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // <-----Regular SignOut----->
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // <-----Observe auth state change----->
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    // stop observing while unmounting
    return () => {
      return unsubscribe();
    };
  }, []);

  // <-----Add photo and name----->
  const userProfileUpdating = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
  };

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signInWithGoogle,
    signIn,
    logOut,
    userProfileUpdating
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;