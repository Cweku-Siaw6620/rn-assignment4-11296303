import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PopularJobs from './PopularJobs';
import FeaturedJobs from './jobs';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <FeaturedJobs/>
    <PopularJobs/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
});

export default HomeScreen;
