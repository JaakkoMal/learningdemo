import { View, Text, TextInput, Modal, ScrollView, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../../Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import CustomButton from '../customs/CustomButton'
import InfoButton from '../customs/InfoButton'
import InfoText from '../customs/InfoText'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@favorites_key'

export default function TravelScreen({navigation}) {

  const [airport, setAirport] = useState('')
  const [showInfo, setShowInfo] = useState(false)
  const [favoriteChosen, setFavoriteChosen] = useState(null)
  const [favoriteRoutes, setFavoriteRoutes] = useState([])

  const storeFavorites = async(value) => {
    try{
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
    } catch (e){
      console.log(e)
    }
  }

  const getFavorites = async() => {
    try{
      return AsyncStorage.getItem(STORAGE_KEY)
      .then(res => JSON.parse(res))
      .then(json => {
        if(json === null){
          json = []
        }
        setFavoriteRoutes(json)
      })
    } catch (e){
      console.log(e)
    }
  }

  const markNewFave = (fave) => {
    setFavoriteChosen(fave)
  }
  
  useEffect(() => {
    if(favoriteChosen){
      const newKey = favoriteRoutes.length + 1
      const newFavoriteRoutes = [...favoriteRoutes, {key : newKey, dep : favoriteChosen.h_apt, dest : favoriteChosen.route_1, location : favoriteChosen.route_n_1}]
      storeFavorites(newFavoriteRoutes)
      setFavoriteChosen(null)
    }
    getFavorites()
    
  }, [favoriteChosen])

  const deleteFavorite = (fave) => {
    AsyncStorage.clear()
    let reducedFavorites = []
    favoriteRoutes.forEach(favorite => {
      if(favorite.key !== fave.key){
        reducedFavorites.push(favorite)
      }
    })
    storeFavorites(reducedFavorites)
    getFavorites()
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Departing flights</Text>
        <Text style={styles.formTitle}>Type in airport IATA code</Text>
        <TextInput style={styles.inputField} placeholder="eg. HEL, OUL, KUO, TMP, TKU" onChangeText={text => setAirport(text)}/>
        <Pressable onPress={() => navigation.navigate('TravelList', {airport : airport, setFavorite : markNewFave})}>
            {(state) => <CustomButton pressed={state.pressed} buttonText="Show flights"/>}
        </Pressable>
        <Pressable onPress={() => setShowInfo(true)}>
          {(state) => <InfoButton pressed={state.pressed} />}
        </Pressable>
        <View style={styles.container}>
          <Text style={styles.favoriteHeading}>Favorite routes</Text>
          <ScrollView style={styles.scrollView}>
            {
              favoriteRoutes.map(fav => (
                <View style={styles.favoriteBox} key={fav.key}>
                  <MaterialCommunityIcons name='airplane' size={24} color='#031073' />
                  <Pressable onPress={() => navigation.navigate('TravelMap', {destination : fav.location})}>
                  <Text style={styles.favoriteText}>{fav.dep} - {fav.dest}</Text>
                  </Pressable>
                  <Pressable onPress={() => deleteFavorite(fav)}>
                    <Text style={styles.favoriteRemove}>Remove</Text>
                  </Pressable>
                </View>
              ))
            }
           </ScrollView> 
        </View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={showInfo}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <InfoText />
              <Pressable style={styles.modalCloseButton} onPress={() => setShowInfo(!showInfo)}>
                <Text style={styles.modalCloseButtonText}>close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>
  )
}