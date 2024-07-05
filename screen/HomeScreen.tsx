import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [selectedGame, setSelectedGame] = useState('');

  const games = [
    {
      title: 'Boneka Pinguin',
      src: 'https://image.made-in-china.com/202f0j00BSTcswPzbRkQ/Customized-Wholesale-Stuffed-Unstuffed-Plush-Toys-Penguin.webp',
    },
    {
      title: 'Boneka Panda',
      src: 'https://ae01.alicdn.com/kf/Sb2831b31714742a387e3f2aebf2d171f9.jpg_640x640Q90.jpg_.webp',
    },
    {
      title: 'Boneka BT21',
      src: 'https://down-id.img.susercontent.com/file/7d12803d649e1becb44f63e120c54f53',
    },
    {
      title: 'Boneka Doraemon',
      src: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/6/11/bfd66a65-0f76-493f-9f74-9b82a6415be1.jpg',
    },
    {
      title: 'Boneka Monyet',
      src: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/10/1/ff9bb707-a1bb-4392-b904-7cb2b832438e.jpg',
    },
    {
      title: 'Boneka Singa',
      src: 'https://ae01.alicdn.com/kf/S6353290c59c64677973d341931f06322l.jpg_640x640Q90.jpg_.webp',
    },
    {
      title: 'Boneka Kura-Kura',
      src: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-13608498/oem_boneka-turtle-30cm-boneka-kura-kura-boneka-impor-new_full01.jpg',
    },
    {
      title: 'Boneka Lumba-Lumba',
      src: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/5/11/43401e70-2094-4566-bfd4-a53988d5667c.jpg',
    },
  ];

  const handleGamePress = (title: string) => {
    setSelectedGame(title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 15
        }}>
          <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color : 'black',
          }}>BONEKA</Text>
        </View>
        <View style={styles.gameContainer}>
          {games.map((game) => (
            <TouchableOpacity
              key={game.title}
              style={[styles.gameCard, selectedGame === game.title && styles.selectedCard]}
              onPress={() => handleGamePress(game.title)}>
              <Image source={{ uri: game.src }} style={styles.gameImage} />
              <Text style={styles.gameTitle}>{game.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181818',
  },
  gameContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gameCard: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#6495ed',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  selectedCard: {
    backgroundColor: '#00ffff',
  },
  gameImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  gameProvider: {
    fontSize: 12,
    color: '#FFF',
  },
  button: {
    width: '48%',
    padding: 15,
    backgroundColor: '#00bcd4',
    borderRadius:10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default App;