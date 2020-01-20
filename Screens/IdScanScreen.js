import React from 'react';
import { StyleSheet,PixelRatio, Text, View,Image ,TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import ImagePicker from 'react-native-image-picker';

export default class MainScreen extends React.Component {

  
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
         <Text  style={styles.scanID} >Scan ID</Text>
         <Progress.Bar  style={styles.progress} progress={0.3}  color= 'white' />
         </View>
      
      
      </View>

  

        <View style={styles.idScanTextView} >
        <Text style={styles.idScanText}>Please scan your ID</Text>
        </View>




     <View style={styles.scanedImageView}    >
    
  
     <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
 
 <View style={styles.ImageContainer}>

 { this.state.ImageSource === null ? <Text>Select or Take a Photo</Text> :
   <Image style={styles.ImageContainer} source={this.state.ImageSource} />
 }

 </View>

</TouchableOpacity>
     
     </View>
      <View style={styles.instructionView}>
     
     <Text style={styles.instructionText}>Make sure there are no reflections on your ID and all text is readable</Text>  
     
     </View>


     
     <View style={styles.scaningView}>
      

      
        
      <TouchableOpacity
            style={[styles.customButton ]}
            //onPress={() =>this.props.navigation.navigate('SelfieScreen')}
            
          >
            { this.state.ImageSource === null ? <Text style={styles.scanningText}>No Image Selected</Text> :
            <Text style={styles.scanningText} onPress={() =>this.props.navigation.navigate('FormScreen')}> Scanning... </Text>
}
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
 
    borderColor: 'white',
    borderWidth:3,
    height: 50,
    width: 250,  //The Width must be the same as the height
    borderRadius:15, //Then Make the Border Radius twice the size of width or Height  
  
   
    },

  logoView: {

  flex: 0.7,
        
        flexDirection: 'row',
        alignItems:'flex-end',
        marginTop:16,
  
      },
      
      
      
      scanedImageView: {

        flex: 3.5,
        backgroundColor: 'white',
        width:'98%',
        borderRadius:20,
        
            },


            ImageContainer: {
              borderRadius: 20,
              height:'100%',
              width:'100%',
              borderWidth: 1 / PixelRatio.get(),
              justifyContent: 'center',
              alignItems: 'center',
              
              
            },

            scaningView: {

              flex: 3.5,
              flexDirection: 'row',
              width:'100%',
              alignItems:'center',
              justifyContent:'center',
                  },


                  scanningText: {
 
                    fontSize: 18,
                    fontFamily:'Nunito',
                    fontWeight:"bold", 
                    marginLeft: 32,
                    alignSelf:'center',
                    marginRight:32,
                    color:'white',
                  marginTop:5,
                  
                  },



  idScanText: {
 
 fontSize: 21,
 fontFamily:'Nunito',
 fontWeight:"normal", 
 marginLeft: 32,
        marginRight:32,
        color:'white',
  },



  scanID: {
 
    fontSize: 14,
    fontFamily:'Nunito',
    fontWeight:"normal", 
    color:'white',
     },

  idScanTextView: {
 
    flex: 1,
       
        flexDirection: 'row',
        borderColor:'white',
        width:'100%',
        alignContent:'flex-start',
        marginTop: 48,
        
     },
     instructionView: {
 
      flex: 1,
         
          flexDirection: 'column',
          borderColor:'white',
          width:'100%',
          alignContent:'flex-start',
          justifyContent:'center',
          
       },

       instructionText: {
 
        fontSize: 14,
        fontFamily:'Nunito',
        fontWeight:"normal", 
        marginTop:32,
        marginLeft: 32,
        marginRight:32,
        color:'white',
        textAlign: 'justify',

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