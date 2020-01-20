import React from 'react';
import { StyleSheet,Button, Text, View,Image,TextInput ,TouchableOpacity, Picker} from 'react-native';
import * as Progress from 'react-native-progress';
import { ScrollView } from 'react-native-gesture-handler';



export default class FormScreen extends React.Component {

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
         <Text  style={styles.review} >Review</Text>
         <Progress.Bar  style={styles.progress} progress={0.5}  color= 'white' />
         </View>
      
      
      </View>

  

        <View style={styles.reviewTextView} >
        <Text style={styles.reviewText}>Review your details</Text>
        </View>




     <View style={styles.listView}    >
      
    <ScrollView>
    <Text style={styles.itemFixedText}>First Name</Text>
     
                <TextInput  style={styles.inputText} 
                    placeholder="Maxi"  
                    onChangeText={(text) => this.setState({text})}  
                />  

    <Text style={styles.itemFixedText}>Last Name</Text>

    <TextInput  style={styles.inputText} 
                    placeholder="Mustermensch"  
                    onChangeText={(text) => this.setState({text})}  
                />  
    <Text style={styles.itemFixedText}>Nationality</Text>

    <TextInput  style={styles.inputText} 
                    placeholder="Vietnamese"  
                    onChangeText={(text) => this.setState({text})}  
                />  
    <Text style={styles.itemFixedText}>Gender</Text>
    
    
    
 <Picker
 selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
 </Picker>

    <Text style={styles.itemFixedText}>Date of Birth</Text>

    <TextInput  style={styles.inputText} 
                    placeholder="02.10.1993"  
                    onChangeText={(text) => this.setState({text})}  
                /> 
    <Text style={styles.itemFixedText}>ID Number</Text>

    <TextInput  style={styles.inputText} 
                    placeholder="FB10001"  
                    onChangeText={(text) => this.setState({text})}  
                />  
     

    <Text style={styles.itemFixedText}>ID issue date</Text>

    <TextInput  style={styles.inputText} 
                    placeholder="02.10.2015"  
                    onChangeText={(text) => this.setState({text})}  
                />  

    <Text style={styles.itemFixedText}>ID expiry date</Text>

    <TextInput  style={styles.inputText} 
                    placeholder="02.10.2021"  
                    onChangeText={(text) => this.setState({text})}  
                />  
   

</ScrollView>
     </View>
     

     
     
     <View style={styles.submitButtonView}>
      

      
        
      <TouchableOpacity
            style={[styles.customButton ]}
            onPress={() =>this.props.navigation.navigate('SelfieScreen')}
            
          >
            <Text style={styles.submitText} > Alright </Text>
          </TouchableOpacity>
        
          <TouchableOpacity
           onPress={() =>
            this.props.navigation.navigate('IdScanScreen')
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
    inputText: {
 
        height: 40,
        backgroundColor: 'white',
        fontSize: 16,
        padding:10,
        fontFamily:'Nunito',
        fontWeight:"normal", 
        marginLeft:30,
        borderRadius:5,
        width:311,
        height:48,
        },

  logoView: {

  flex: 0.7,
        
        flexDirection: 'row',
        alignItems:'flex-end',
        marginTop:16,
  
      },
      
      
      
      listView: {

        flex:6, 
        width:'98%',
        borderRadius:20,
        
            },

            submitButtonView: {

              flex: 2.5,
              flexDirection: 'column',
              width:'100%',
              alignItems:'center',
              justifyContent:'space-around',
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


  reviewText: {
 
 fontSize: 21,
 fontFamily:'Nunito',
 fontWeight:"normal", 
 marginLeft: 32,
        marginRight:32,
        color:'white',
  },

  itemFixedText: {
    marginLeft: 30,
    marginTop:20,
    fontSize: 10,
    fontFamily:'Nunito',
    fontWeight:"normal", 
    color:'#ffffff',
     },


  review: {
 
    fontSize: 14,
    fontFamily:'Nunito',
    fontWeight:"normal", 
    color:'white',
     },

  reviewTextView: {
 
    flex: .5,
       
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