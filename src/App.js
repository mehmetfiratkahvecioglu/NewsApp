import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import newsBannerData from './news_banner_data.json';
import newsdata from './news_data.json';
import Card from './Card/Card';

const App = () => {
  const renderNews = ({item}) => <Card news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>

      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal>
            {newsBannerData.map(newsbannerimage => (
              <Image
                style={styles.bannerImage}
                source={{uri: newsbannerimage.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={newsdata}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
