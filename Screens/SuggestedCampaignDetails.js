 
import React from 'react'
import { View,Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress';

 function SuggestedCampaignDetails({route, navigation}) {
    const { title, category, goal, location, image, about } = route.params;
   
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, backgroundColor:"#fff"}}>
                {image != null ? (
            <Image source={require('../assets/default-img.jpg')} style={styles.cardImage} />
            ) : (     
                <Image style={styles.image} source={image}/>
            )}

             <Text style={styles.name}>{title}</Text>
             <View>
             <Progress.Bar progress={0.3} width={350} height={12} style={{marginVertical:10,marginLeft:25 }}/>
             <View style={styles.info}>
             {image != null ? (
            <Image source={require('../assets/default-img.jpg')} style={styles.profile} />
            ) : (     
                <Image style={styles.profile} source={image}/>
            )}
            <Text style={styles.author}>GH000</Text>
            <Text>Raised of </Text>
            <Text style={styles.petdetails}>GH{goal}</Text>
            <Text >Goal</Text>
         </View>   
             </View>
             <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:10}}>
                <TouchableOpacity
                  onPress={()=>navigation.navigate('Editcampaign')}
                 style={{paddingHorizontal:40, paddingVertical:10, backgroundColor:"#00716F",alignItems:"center",left:20, borderRadius:50}}>
                <Text style={{color:"#FFF"}}> SHARE</Text>               
                </TouchableOpacity>

                <TouchableOpacity 
                style={{paddingHorizontal:40, paddingVertical:10, backgroundColor:"#00716F",alignItems:"center", right:20,borderRadius:50}}> 
                <Text style={{color:"#FFF"}}>DONATE</Text>     
                
                </TouchableOpacity>
             </View>

                 
            <Text style={styles.post} >{about}</Text>          
        
        </ScrollView>
    )
};

const styles = StyleSheet.create({
      
       image: {
        height: 250,
         width: 350,
         borderRadius: 5,
     
          marginTop: 15,
      alignSelf:"center"
       },
  
      name:{
          fontSize:22,
          fontWeight:"bold",
          marginHorizontal:25,
          marginVertical:13
      },
      cardImage: {
        width: "100%",
        height: 300,
      },
      profile: {
          marginHorizontal: 25,
          width: 25,
          height: 25,
          borderRadius: 50,
        },
  
        post:{
            marginHorizontal:25,
            marginTop:40,
            fontSize:18,
            lineHeight: 27
        },
     
     author:{
         fontWeight:"bold",
         fontSize:30
     },
     
    
      dot:{
          height:15,
          width:5,
          borderRadius:50,
          color: 'white',
          position: 'relative',
    
      },
    
      info:{
          flexDirection: 'row',
          position: 'relative',
          
      }
  });


  export default SuggestedCampaignDetails