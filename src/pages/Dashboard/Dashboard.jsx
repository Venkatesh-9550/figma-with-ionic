import { IonAvatar, IonCardTitle, IonImg, IonLabel, IonPage, IonTabBar, IonTabButton ,IonIcon, IonCardContent ,IonHeader , IonToolbar ,IonTitle} from "@ionic/react";
import { businessOutline, cogOutline, homeOutline, notificationsOutline, qrCodeOutline, searchOutline, ticketOutline } from "ionicons/icons";

const dashboard = ()=>{
    return(
        <IonPage>
        
           <IonHeader>
         
        <IonToolbar color="dark">
          <IonTitle >It All Starts Here</IonTitle>
         <IonIcon icon={searchOutline}></IonIcon>
         <IonIcon icon={notificationsOutline}></IonIcon>
         <IonIcon icon={qrCodeOutline}></IonIcon>
        </IonToolbar>
        </IonHeader>
    
        <IonImg  src="/assets/images/Rectangle 124.png" id="img"></IonImg>

      {/* </div > */}
          <IonCardTitle color="light" className="welcome"> 
            welcome 
          </IonCardTitle>
          {/* <IonTabBar slot="top"  color="dark"><br />

          </IonTabBar>
           <IonAvatar><IonImg src="/assets/images/Ellipse 1.png" className="img1"></IonImg></IonAvatar>
           <IonAvatar><IonImg src="/assets/images/Group 7.png" className="img2"></IonImg></IonAvatar>    

            <IonAvatar><IonImg src="/assets/images/Frame 14.png"></IonImg></IonAvatar>
            <IonAvatar><IonImg src="/assets/images/Rectangle 130.png"></IonImg></IonAvatar>
            <IonAvatar><IonImg src="/assets/images/Rectangle 130.png"></IonImg></IonAvatar>
            <IonCardTitle>Sedang Tayang</IonCardTitle>
            <IonLabel>Lihat Semua</IonLabel>
            <IonAvatar><IonImg  src="/assets/images/Rectangle 17.png"></IonImg></IonAvatar>
            <IonAvatar><IonImg  src="/assets/images/Rectangle 124.png"></IonImg></IonAvatar>
            <IonAvatar><IonImg  src="/assets/images/Rectangle 125.png"></IonImg></IonAvatar><br />
            <IonLabel>Star Wars : The Last</IonLabel>
            <IonLabel>Fast & Furious 9</IonLabel>
            <IonLabel>The Conjuring 3</IonLabel>
            <IonLabel>
            Voucher Details
            <IonAvatar><IonImg  src="/assets/images/Frame 16.png"></IonImg></IonAvatar>
            <IonAvatar><IonImg  src="/assets/images/Frame 17.png"></IonImg></IonAvatar> */}

            <IonTabBar slot="bottom" color="dark">

          <IonTabButton>
            <IonIcon icon={homeOutline} />
          </IonTabButton>

          <IonTabButton >

            <IonIcon icon={ticketOutline} />
          </IonTabButton>

          
          <IonTabButton>
            <IonIcon icon={cogOutline} ></IonIcon>
          </IonTabButton>
        </IonTabBar>
      
        
        </IonPage>
    )
}
export default dashboard;