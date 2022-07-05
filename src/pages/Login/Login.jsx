import { IonButton, IonLabel, IonInput, IonContent, IonPage, IonIcon, useIonRouter } from "@ionic/react"
import { useState } from "react";
import { toastController, alertController } from "@ionic/core";

 import { UserAuth } from "../../context/AuthContext";
 import { auth } from "../../firebase";
import './Login.css';
import { logoFacebook, logoInstagram } from "ionicons/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, logout ,facebookSignIn} = UserAuth();

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
      color: "danger",
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
        
            router.push("/home");
         
         
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
  const handleInstaSignIn = async () => {
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
        <IonLabel className="logo-text" color="light" >Login</IonLabel><br /><br /><br /><br /><br /><br />

        <IonLabel color="light" className="welcome-text">By signing in you are agreeing <br></br><span className="span">our terms and conditions</span></IonLabel><br /><br /><br /><br />



        <IonInput className='login' type="email" placeholder='Email Address' onIonChange={(e) => setEmail(e.detail.value)}></IonInput><br /><br />
        <IonInput className='login' type="password" placeholder='Password' onIonChange={(e) => setPassword(e.detail.value)}></IonInput><br /><br />

        <IonButton id="login-main" shape="round"  onClick={(e) => handleLogin()} >Login</IonButton><br /><br /><br />
        <IonLabel className="account-text" color="light">
              Don't have an account ?
            </IonLabel>
        <IonButton id="login-register" color="light" shape="round" routerLink="/Signup" fill="clear">Register</IonButton><hr />
        <br /><br />

        <IonLabel id="or" color="light">or connect with</IonLabel><br /><br />
        <IonIcon icon={logoFacebook} color="light" size="large" className="fb" onClick={(e)=>{handleFacebookSignIn()}}/>
        <IonIcon icon={logoInstagram} color="light" size="large" className="insta" onClick={(e)=>{handleInstaSignIn()}}/>
      </IonContent>
    </IonPage>
  )
}
export default Login;