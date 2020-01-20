import React from 'react';
import { StyleSheet,Button, Text, View,Image,TextInput ,TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import { ScrollView } from 'react-native-gesture-handler';



export default class FinalScreen extends React.Component {

    state = {
        gender: 'male',
        maleButtonColor: '#841584',
        femaleButtonColor: '#C0C0C0'
    }
  render() {
    return(
    
    
    //main contain view
  <View style={styles.container}>
  
     
     <View style={styles.logoView}>
    
     
        <View>
         <Image style={styles.logo}
          source={require('../resources/logo.png')}  />
        </View>



         <View style={styles.progressView} >
         <Text  style={styles.download} >Download</Text>
         <Progress.Bar  style={styles.progress} progress={1}  color= 'white' />
         </View>
      
      
      </View>

  

        <View style={styles.downloadTextView} >
        <Text style={styles.downloadText}>Your Visa Application PDF:</Text>
        </View>




     <View style={styles.downloadView}    >
     <Image style={styles.formView}
          source={require('../resources/visaform.jpg')}  />
   
     </View>
     

     <View style={styles.instructionView}>
     
     <Text style={styles.instructionText}>Please download and print.</Text>  
     
     </View>
     
     <View style={styles.submitButtonView}>
      

      
        
      <TouchableOpacity
            style={[styles.customButton ]}
            
          >
            <Text style={styles.submitText}> Download </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
           onPress={() =>
            this.props.navigation.navigate('SelfieScreen')
          } >
            <Text style={styles.backButtonText}> Back </Text>
          </TouchableOpacity>
        
        



     </View>





     
     </View>
      );

    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0976BB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  customButton: {
 
    backgroundColor: 'white',
    height: 48,
    width: 240,  //The Width must be the same as the height
    borderRadius:15, //Then Make the Border Radius twice the size of width or Height  
  
   
    },


  logoView: {

  flex: 0.7,
        
        flexDirection: 'row',
        alignItems:'flex-end',
        marginTop:16,
  
      },
      
      
      
      downloadView: {

        flex:5, 
        width:'60%',
        backgroundColor:'white',
        
            },


            formView: {

               
              width:'100%',
              height:'100%',
              backgroundColor:'white',
              
                  },
            submitButtonView: {

              flex: 2.5,
              flexDirection: 'column',
              width:'100%',
              alignItems:'center',
              justifyContent:'space-around',
                  },

                  instructionView: {
 
                    flex: 1.5,
                       
                        flexDirection: 'column',
                        borderColor:'white',
                        width:'100%',
                        alignContent:'center',
                        justifyContent:'center',
                        
                     },

                     instructionText: {
 
                      fontSize: 14,
                      fontFamily:'Nunito',
                      fontWeight:"normal", 
                      color:'white',
                      alignSelf:'center',
              
                       },
                  submitText: {
 
                    fontSize: 18,
                    fontFamily:'Nunito',
                    fontWeight:"bold", 
                    alignSelf:'center',
                    color:'#10527A',
                    padding:10,
                  
                  },
                  backButtonText: {
 
                    fontSize: 18,
                    fontFamily:'Nunito',
                    fontWeight:"bold", 
                    alignSelf:'center',
                    color:'white',
                  marginTop:5,
                  
                  },


  downloadText: {
 
 fontSize: 21,
 fontFamily:'Nunito',
 fontWeight:"normal", 
 marginLeft: 32,
        marginRight:32,
        color:'white',
  },

  


  download: {
 
    fontSize: 14,
    fontFamily:'Nunito',
    fontWeight:"normal", 
    color:'white',
     },

  downloadTextView: {
 
    flex: 1,
       
        flexDirection: 'row',
        borderColor:'white',
        width:'100%',
        alignContent:'flex-start',
        marginTop: 48,
        
     },
   

      
     logo: {
 
      width:125,
      height: 32,
      marginRight:50,
       },
       
     progress: {
 
      width:128,
      height: 8,
    backgroundColor: '#F9FAFF55',
    
  
    
       },
       progressView: {
        alignItems:'center',
        marginLeft:50,
         },
});