import { IonButton, IonLabel, IonInput, IonContent, IonPage, IonIcon, useIonRouter } from "@ionic/react"
import { useState } from "react";
import { toastController, alertController } from "@ionic/core";

 import { UserAuth } from "../../context/AuthContext";
 import { auth } from "../../firebase";
import './Login.css';
import { logoFacebook, logoInstagram } from "ionicons/icons";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, logout } = UserAuth();

  let router = useIonRouter();
  const handleAlert = async (msg) => {
    const alert = await alertController.create({
      header: "Oh no!",
      message: msg,
      buttons: ["Ok"],
    });

    await alert.present();
  };

  const handleToast = async (msg) => {
    const toast = await toastController.create({
      color: "dark3",
      position: "top",
      duration: 2000,
      message: msg,
      translucent: false,
      showCloseButton: true,
    });
    await toast.present();
  };

  const handleLogin = async (e) => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    try {
      if (email == null || email === "") {
        const msg = "Please enter your email";
        handleToast(msg);
      } else if (password == null || password === "") {
        const msg = "Please enter your password";
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
          await login(email, password);
          if (auth.currentUser.emailVerified) {
            router.push("/home");
          }
          else {
            const msg = "Please complete the verification and try to login."
            handleAlert(msg)
            logout()
          }
        } catch (e) {
          const msg = JSON.stringify(e.message);
          console.log(msg);
          try {
            if (msg.includes("user-not-found")) {
              handleAlert(
                "User not found with the entered email address, Please enter correct email address."
              );
            } else if (msg.includes("wrong-password")) {
              handleAlert(
                "Wrong password entered, Please enter the correct password"
              );
            } else {
              handleAlert(msg);
            }
          } catch (e) {
            console.log(e.message);
          }
        }
      }
    } catch (e) {
      const msg = e.message;
      handleAlert(msg); 
    }
  };
  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
      router.push("/home");
    } catch (error) {
      handleAlert(error.message);
    }
  };


  return (
    <IonPage className="header">
      <IonContent fullscreen className='login-page'>
        {/* <IonImg className="logo" src="assets/images/logo.png" /> */}
        <IonLabel className="logo-text" color="light" >Login</IonLabel><br /><br /><br /><br /><br /><br />

        <IonLabel color="light" className="welcome-text">By signing in you are agreeing <br></br><span className="span">our terms and conditions</span></IonLabel><br /><br /><br />



        <IonInput className='login' name="email" placeholder='Email Address' onIonChange={(e) => setEmail(e.detail.value)}></IonInput><br />
        <IonInput className='login' name="password" placeholder='Password' onIonChange={(e) => setPassword(e.detail.value)}></IonInput><br />

        {/* <IonCheckbox slot="start" checked="checked"/><IonLabel className="forget-pass">Remember password?  </IonLabel> */}
        <IonLabel className="forgot-text" color="light">Forgot Password</IonLabel><br /><br />

        <IonButton id="login-main" shape="round" routerLink="/Dashboard" onClick={(e) => handleLogin()}>Login</IonButton>
        <IonButton id="login-register" color="light" shape="round" routerLink="/Signup">Register</IonButton>
        <br /><br />

        <IonLabel id="or" color="light">or connect with</IonLabel><br /><br />
        <IonIcon icon={logoFacebook} color="light" size="large" className="fb" onClick={(e)=>{handleFacebookSignIn()}}/>
        <IonIcon icon={logoInstagram} color="light" size="large" className="insta" />









        {/* <IonInput className='lp-email-input' placeholder='Email ID'></IonInput>
          <IonInput className='lp-password-input' placeholder='Password'></IonInput>
          <IonLabel className="forgot-text">Forgot Password?</IonLabel>
          <IonButton className='lp-login-btn' shape="round" color="light" routerLink="/home"><IonLabel className='lp-login-btn-text ion-text-capitalize'>Login</IonLabel></IonButton>
          <IonLabel className="account-text">Dont have an account?</IonLabel>
          <IonButton className="lp-signup-btn" fill='clear' color="dark" routerLink="/signup" >
          <IonLabel className='lp-signup-btn-text ion-text-capitalize'>Signup</IonLabel>
          </IonButton> */}
      </IonContent>
    </IonPage>
  )
}
export default login;