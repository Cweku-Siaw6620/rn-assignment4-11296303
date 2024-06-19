import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function PopularJobs() {

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30 }}>  

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Popular Jobs</Text>
          <Text style={{ marginRight: 20, fontSize: 15, paddingTop: 3 }}>See all</Text>
        </View>

      </View>

      <FlatList 
            vertical
            data={Popularjobs}
            renderItem={({ item }) => (

                  <View style={styles.contain}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.image} source={item.image}/>

                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.postion}>{item.postion}</Text>
                        <Text style={styles.company}>{item.company}</Text>
                    </View>
                    </View>

                    

                    <View style={{flexDirection: 'column'}}>
                    <Text style={styles.salary}>{item.salary}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                    </View>
                  </View>
                    
            )}
        />
    </View>
  );
}

const Popularjobs = [
    {id: 1, image: require('./images/amazon.jpg'), postion: 'Jnr Executive', company: 'Amazon', 
      salary: '$96,000/y', location: 'Los Angels, US'},

    {id: 2, image: require('./images/beats.png'), postion: 'Product Manager', company: 'Beats', 
        salary: '$86,000/y', location: 'Florida, US'},

    {id: 3, image: require('./images/bolt.png'), postion: 'Product Manager', company: 'Bolt', 
        salary: '$86,000/y', location: 'Ohio, US'},

    {id: 4, image: require('./images/burgerking.png'), postion: 'Snr Executive', company: 'BurgerKing', 
        salary: '$99,000/y', location: 'Liverpool, UK'},

    {id: 5, image: require('./images/microsoft.jpg'), postion: 'DevOps Engineer', company: 'Microsoft', 
        salary: '$96,000/y', location: 'Alaska, US'},
  
    {id: 6, image: require('./images/facebook.png'), postion: 'Product Manager', company: 'Facebook ', 
        salary: '$78,000/y', location: 'Illinois, US'},
  
    {id: 7, image: require('./images/podcast.jpg'), postion: 'Electrical Engineer', company: 'Posdcast Air', 
        salary: '$126,000/y', location: 'Nebraska, US'},
      
    {id: 8, image: require('./images/design.png'), postion: 'Graphic Designer', company: 'KA. Graphics', 
        salary: '$102,500/y', location: 'Nevada, US'},

    {id: 9, image: require('./images/twitter.png'), postion: 'Comus Manager', company: 'Twitter', 
        salary: '$208,550/y', location: 'Kansas, US'},
      
    {id: 10, image: require('./images/spotify.png'), postion: 'Engineer', company: 'Spotify', 
        salary: '$102,500/y', location: 'Connecticut, US'},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 50
  },
  
  image: {
    height: 45,
    width: 45,
    marginRight: 15
  },

  contain: {
    padding: 20,
    backgroundColor: 'FAFAFA',
    flexDirection: 'row', 
    alignItems: 'center',
    borderWidth: 0.1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 20, 
    justifyContent: 'space-between',
  },

  postion: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  salary: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  salary: {
    fontWeight: 'bold',
  }
});
