import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init";
import { useHistory } from "react-router-dom";
import { getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
   } from "firebase/auth";



initializeFirebase()

const useFirebase= ()=>{
    const [user, setUser]= useState({});
    const [error, setError]= useState('');
    const[isloading, setIsLoading]= useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    let history = useHistory();

    const signInUsingGoogle= ()=>{

        signInWithPopup(auth, googleProvider)
        .then((result) => {
          setUser(result.user);

          history.push("/myOrder");
          // console.log(result.user);
          setError("");
        })
        .finally(() => setIsLoading(false));
    }

    // observe
    useEffect(() => {
        const unsubcribed= onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser({})
          }
          setIsLoading(false)
        });
        return ()=>unsubcribed;
      }, []);

      const logOut = ()=>{
        setIsLoading(true)
          signOut(auth)
          .then(() => {
            setUser({});
          })
          .finally(() => setIsLoading(false));
      };


    

      return{
          user,
          signInUsingGoogle,
          isloading,
          logOut,
      }


}


export default useFirebase;
