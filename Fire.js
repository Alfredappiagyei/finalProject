// import firebase from "firebase";
// import firebaseKeys from "./firebase/firebase";

// class fire {
//     constructor () {
//         firebase.initializeApp(firebaseKeys)
//     }
//         addPost = async({title, category, goal, location, about, localuri}) =>{
//             const remoteuri = await this.uploadphotoAsync(localuri)
//             return new Promise((res, rej )=> {
//                     this.firestore
//                     .collection("campaigns")
//                     .add({
//                         title,
//                         category,
//                         goal,
//                         location,
//                         about,
//                         uid: this.uid,
//                         timestamp:this.timestamp,
//                         image: remoteuri
//                     }).
//                     then(ref =>{
//                         res(ref);
//                     }).catch(error => rej(error));
//             })

//         }




//     uploadphotoAsync = async uri =>{
//         const path = `photos/${this.uid}/${Date.now()}.jpg`
//         return new Promise(async (res, rej) => {
//                 const response = await fetch(uri)
//                 const file = await response.blob()
//                 let upload = firebase.storage().ref(path).put(file)
//                 upload.on("state_changed", snapshot =>{}, err =>{
//                     rej(err)
//                 },
//                     async () => {
//                         const uri = await upload.snapshot.ref.getDownloadURL();
//                         res(url);
//                     }
//                 )
//         })
//     }

//     get firestore() {
//         return firebase.firestore()
//     }

//     get uid() {
//         return( firebase.auth().currentUser || {}).uid
//     }
//     get timestamp() {
//         return Date.now()
//     }
// }

// fire.shared = new fire()

// export default fire