import { IonButton, IonImg, IonLabel ,IonInput,IonContent,IonPage, IonAvatar, IonIcon, IonItem ,useIonRouter, IonRow} from "@ionic/react"
import './Signup.css';

// import { mailOutline } from 'ionicons/icons'
import { eyeOffOutline, logoFacebook, logoInstagram, mailOutline , } from "ionicons/icons";
import { UserAuth } from "../../context/AuthContext";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { toastController, alertController } from "@ionic/core";
import { auth } from "../../firebase";
import { useState } from "react";

const Signup = () =>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser, logout, addData } = UserAuth();

  let router = useIonRouter();

  const handleToast = async (msg) => {
    const toast = await toastController.create({
      color: "danger",
      position: "top",
      duration: 2000,
      message: msg,
      translucent: false,
      showCloseButton: true,
    });
    await toast.present();
  };

  const handleAlert = async (msg) => {
    const alert = await alertController.create({
      message: msg,
      buttons: ["Ok"],
    });

    await alert.present();
  };

  const handleSignup = async () => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    try {
      if (name == null || name === "") {
        const msg = "Please enter your name";
        handleToast(msg);
      } else if (email == null || email === "") {
        const msg = "Please enter your email";
        handleToast(msg);
      } else if (password == null || password === "") {
        const msg = "please enter the password";
        handleToast(msg);
      } else if (password.length < 6) {
        const msg = "Password must be at least 6 characters long";
        handleToast(msg);
      } else if (
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= email.length
      ) {
        const msg = "Please enter a valid email address";
        handleToast(msg);
      } else {
        try {
          await createUser(email, password);
          await updateProfile(auth.currentUser, {
            displayName: name
          }).then(()=>{
            console.log(auth.currentUser.displayName)
          })
          logout();
          setName("")
          setEmail("")
          setPassword("")
          router.push("/login");
        } catch (e) {
          const msg = e.message;
          handleAlert(msg);
        }
        
      }
    } catch (e) {
      const msg = e.message;
      handleAlert(msg);
    }
  };
    return(
        <IonPage>
          <IonContent fullscreen className='login-page'>
  
          <IonLabel className="logo-text" color="light">Signup</IonLabel><br /><br /><br /><br /><br />

          <IonInput className="login" type="name" placeholder='Enter your name' onIonChange={(e) => setName(e.detail.value)}  value={name}></IonInput><br /><br />
          <IonInput className="login" type="email" placeholder='Email Address' value={email}  onIonChange={(e) => setEmail(e.detail.value)}></IonInput><br /><br />
        
          <IonInput className='login' type ="password" placeholder='Password' value={password} onIonChange={(e) => setPassword(e.detail.value)}></IonInput><br /><br />
    
          <IonButton shape="round"  onClick={(e) => handleSignup()}>Register</IonButton><br /><br />
            <IonLabel className="account-text" color="light">
              Already have an account ?
            </IonLabel>
        
          <IonButton  color="light" shape="round" routerLink="/Login" fill="clear" className="signup-login">Login</IonButton><br />
          <IonLabel id="or" color="light">or connect with</IonLabel> <br /><br /> <br />
          <IonIcon icon={logoFacebook} color="light" size="large"  className="fb"/>
          <IonIcon icon={logoInstagram} color="light" size="large"  className="insta"/>
          </IonContent>
        </IonPage>
    )
}
export default Signup;