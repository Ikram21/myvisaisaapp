import React from 'react';
import { StyleSheet,Button, Text, View,Image,TextInput , PixelRatio,TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import ImagePicker from 'react-native-image-picker';


export default class SelfieScreen extends React.Component {

    state = {
          ImageSource: null,  
    }

    selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
  
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };
  
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
          this.setState({
 
            ImageSource: source
 
          });
        }
      });
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
         <Text  style={styles.takePic} >Take Picture</Text>
         <Progress.Bar  style={styles.progress} progress={0.8}  color= 'white' />
         </View>
      
      
      </View>

  

        <View style={styles.picTextView} >
        <Text style={styles.picText}>Please take a biometrical picture of your face</Text>
        </View>




     <View style={styles.PhotoView}    >


     <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
 
 <View style={styles.ImageContainer}>

 

 { this.state.ImageSource === null ? <Text>Select or Take a Photo</Text> :
   <Image style={styles.ImageContainer} source={this.state.ImageSource} />
 }

 </View>

</TouchableOpacity>

     </View>
     

     <View style={styles.instructionView}>
     
     <Text style={styles.instructionText}>Look directly into the camera while taking photo</Text>  
     
     </View>
     
     <View style={styles.submitButtonView}>
      

      
        
      <TouchableOpacity
            style={[styles.customButton ]}
            
          >

{ this.state.ImageSource === null ? <Text style={styles.submitText}>No Image Selected</Text> :
            <Text style={styles.submitText}  onPress={() =>this.props.navigation.navigate('FinalScreen')}> Scanning... </Text>
}
          </TouchableOpacity>
        
          <TouchableOpacity
           onPress={() =>
            this.props.navigation.navigate('FormScreen')
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
      
      
      
      PhotoView: {

        flex:6, 
        width:'66%',
        borderRadius:20,
        backgroundColor:'white',
        
            },

            ImageContainer: {
              borderRadius: 20,
              width: '100%',
              height:'100%',
              borderWidth: 1 / PixelRatio.get(),
              justifyContent: 'center',
              alignItems: 'center',
              
              
            },
         

            submitButtonView: {

              flex: 2.5,
              flexDirection: 'column',
              width:'100%',
              alignItems:'center',
              justifyContent:'space-around',
                  },

                  instructionView: {
 
                    flex: .5,
                       
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


  picText: {
 
 fontSize: 21,
 fontFamily:'Nunito',
 fontWeight:"normal", 
 marginLeft: 32,
        marginRight:32,
        color:'white',
  },

  


  takePic: {
 
    fontSize: 14,
    fontFamily:'Nunito',
    fontWeight:"normal", 
    color:'white',
     },

  picTextView: {
 
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
