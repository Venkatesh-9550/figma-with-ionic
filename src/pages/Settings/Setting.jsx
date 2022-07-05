import { IonCardContent, IonContent, IonLabel, IonPage ,IonHeader ,IonToolbar ,IonTitle} from "@ionic/react"

const Setting= () =>{
    return(
        <IonPage>
          
           <IonHeader>
         <IonToolbar color="dark">
           <IonTitle>Settings</IonTitle>
         </IonToolbar>
         </IonHeader>
         <IonCardContent>
            <IonContent>My location
            </IonContent>
            <IonLabel>Hyderabad
            </IonLabel>
         </IonCardContent>
        </IonPage>
        
    )
}
export default Setting;