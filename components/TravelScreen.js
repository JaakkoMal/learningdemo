import { View, Text, TextInput, Modal, ScrollView, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../Styles'
import CustomButton from './CustomButton'
import InfoButton from './InfoButton'

export default function TravelScreen({navigation}) {

  const [airport, setAirport] = useState('')
  const [showInfo, setShowInfo] = useState(false)
  const [favoriteChosen, setFavoriteChosen] = useState(null)
  const [favoriteRoutes, setFavoriteRoutes] = useState([])

  const markNewFave = (fave) => {
    setFavoriteChosen(fave)
  }
  
  useEffect(() => {
    if(favoriteChosen){
      const newKey = favoriteRoutes.length + 1
      const newFavoriteRoutes = [...favoriteRoutes, {key : newKey, dep : favoriteChosen.h_apt, dest : favoriteChosen.route_1}]
      setFavoriteRoutes(newFavoriteRoutes)
    }
    setFavoriteChosen(null)
    
  }, [favoriteChosen])

  const deleteFavorite = (fave) => {
    let reducedFavorites = []
    favoriteRoutes.forEach(favorite => {
      if(favorite.key !== fave.key){
        reducedFavorites.push(favorite)
      }
    })
    setFavoriteRoutes(reducedFavorites)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Departing flights</Text>
        <Text style={styles.formTitle}>Type in airport IATA code</Text>
        <TextInput style={styles.inputField} placeholder="eg. HEL, OUL, KUO, TMP, TKU" onChangeText={text => setAirport(text)}/>
        {/*<Button title="Submit" onPress={() => navigation.navigate('TravelList', {airport : airport})}/>*/}
        <Pressable onPress={() => navigation.navigate('TravelList', {airport : airport, setFavorite : markNewFave})}>
            {(state) => <CustomButton pressed={state.pressed} buttonText="Show flights"/>}
        </Pressable>
        <Pressable onPress={() => setShowInfo(true)}>
          {(state) => <InfoButton pressed={state.pressed} />}
        </Pressable>
        <View style={styles.container}>
          <Text style={styles.formTitle}>Favorite routes</Text>
          <ScrollView>
            {
              favoriteRoutes.map(fav => (
                <View style={styles.favoriteBox} key={fav.key}>
                  <Text style={styles.formTitle}>{fav.dep} - {fav.dest}</Text>
                  <Pressable onPress={() => deleteFavorite(fav)}>
                    {(state) => <CustomButton pressed={state.pressed} buttonText="Delete"/>}
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
              <Text style={styles.flightInfoText}>
                Type in the IATA code of a Finavia airport to see scheduled departing flights for the day or leave the field empty to see all departing flights from all Finavia airports for the day.
              </Text>
              <Pressable style={styles.modalCloseButton} onPress={() => setShowInfo(!showInfo)}>
                <Text style={styles.modalCloseButtonText}>close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    </View>
  )
}