import { IonAvatar, IonCardTitle, IonImg, IonLabel, IonPage, IonTabButton } from "@ionic/react";
import { businessOutline, homeOutline, ticketOutline } from "ionicons/icons";

const dashboard = ()=>{
    return(
        <IonPage>
           <IonAvatar><IonImg src="/assets/images/Ellipse 1.png"></IonImg></IonAvatar>
           <IonAvatar><IonImg src="/assets/images/Group 7.png"></IonImg></IonAvatar>    

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
            Voucher Det
            <IonAvatar><IonImg  src="/assets/images/Frame 16.png"></IonImg></IonAvatar>
            <IonAvatar><IonImg  src="/assets/images/Frame 17.png"></IonImg></IonAvatar>

            <IonTabBar slot="bottom">

          <IonTabButton>
            <IonIcon icon={homeOutline} />
          </IonTabButton>

          <IonTabButton >

            <IonIcon icon={ticketOutline} />
          </IonTabButton>

          <IonTabButton>
            <IonIcon icon={businessOutline} />
          </IonTabButton>
          <IonTabButton></IonTabButton>
        </IonTabBar>
        </IonLabel>
        
        </IonPage>
    )
}
export default dashboard;