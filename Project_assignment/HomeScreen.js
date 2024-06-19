import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import FeaturedJobs from './jobs';
import PopularJobs from './PopularJobs';


const HomeScreen = ({route}) => {
const {username,email}= route.params

  return (
    <View style={styles.container}>
   
      <View style={styles.header}>
        <View style={{marginRight:60}}>
      <Text style={{fontWeight:"bold",fontSize:24}}>{username}</Text>
      <Text style={{opacity:0.4}}>{email}</Text></View>
      <Image 
      source={ require("./images/logo.jpg") }
      style={styles.image}
      />

      </View>


      <FeaturedJobs/>
    <PopularJobs/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    header:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // to make it rounded
  },
    
});

export default HomeScreen;
