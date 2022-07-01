import { IonButton, IonImg, IonLabel ,IonInput,IonContent,IonPage, IonAvatar, IonIcon, IonItem} from "@ionic/react"
import './Signup.css';

import { mailOutline } from 'ionicons/icons'

const Signup = () =>{
    return(
        <IonPage>
          <IonContent fullscreen className='login-page'>
          {/* <IonImg className="logo" src="assets/images/logo.png" /> */}
          <IonLabel className="logo-text" color="dark">Signup</IonLabel><br /><br />

          {/* <IonLabel className="welcome-text">By signing in you are agreeing our <span>terms and conditions</span></IonLabel><br /> */}

        <IonButton className="login" shape="round" color="light">Login</IonButton>

          <IonButton shape="round" className="register">Register</IonButton>


          <IonInput className='login-email' placeholder='Enter your name'></IonInput>
          <IonInput className='login-email' placeholder='Email Address'>   
          <IonIcon name="mailOutline"></IonIcon> 
          
          </IonInput>
        
          <IonInput className='login-password' placeholder='Password'></IonInput>
          {/* <IonLabel className="forgot-text">Forgot Password?</IonLabel> */}
          <IonLabel className="forget-pass">Remember password</IonLabel>
          <IonButton color="dark" shape="round" id="login-main">Sign up</IonButton>
          <IonLabel id="or">or connect with</IonLabel>
          <IonAvatar ><IonImg src="assets/images/facebook 1.png"></IonImg></IonAvatar>

            <IonAvatar><IonImg src="assets/images/instagram 1.png"></IonImg></IonAvatar>
            {/* <IonIcon src="mailOutline"></IonIcon> */}
            
        <IonAvatar>
        <IonImg src="assets/images/Group 19.png"></IonImg>
        </IonAvatar>
         


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
export default Signup;