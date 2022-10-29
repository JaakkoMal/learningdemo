import { View, Text, Pressable, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import styles from '../Styles'
import CustomButton from './CustomButton'

export default function TicTacToe() {
    const [loadedFont] = useFonts({
        BungeeSpice: require('../assets/fonts/BungeeSpice-Regular.ttf')
    })
    const [winner, setWinner] = useState(false)
    const [turns, setTurns] = useState(0)                                               
    const [gameBoard, setGameBoard] = useState(                                         
        Array(9).fill('').map((_,i) => (null))
    )
    const [userWins, setUserWins] = useState(0)
    const [machineWins, setMachineWins] = useState(0)
    const [winPercentage, setWinPercentage] = useState(0)
    
    useEffect(() => {                                                                   
        let isWon = hasWinner(gameBoard)                                                
        console.log(isWon)                                                              
        if(!isWon && turns % 2 !== 0 && turns < 9){
            setTimeout(() => machinesTurn(gameBoard), 1000)                             
        } 
        if(isWon){                                                                      
            if(turns % 2 !== 0){                                                        
                setWinner(true)
                setUserWins(userWins + 1)
            } else {
                setWinner(true)
                setMachineWins(machineWins + 1)
            }                                  
        }

        if(userWins > 0 || machineWins > 0){
            let currentPercentage = userWins / (userWins + machineWins) * 100
            setWinPercentage(currentPercentage)
        } else {
            setWinPercentage(0)
        }
        
    }, [gameBoard])                                                                     
    

    const markBox = (index) => {                                                        
        let newGameBoard = [...gameBoard]                                               

        if(gameBoard[index] === null){                                                  
            setTurns(turns + 1)                                                               
            newGameBoard[index] = 'X'                                                      
            setGameBoard(newGameBoard)                                                  
        } else {
            return                                                                      
        }                                                                                 
    }

    const machinesTurn = (gameBoard) => {                                               
        let randomIndex = randomGenerator()                                             
        let newGameBoard = [...gameBoard]                                               
                                                                                        
        if(gameBoard[randomIndex] === null){
            setTurns(turns +1)
            newGameBoard[randomIndex] = 'O'
            setGameBoard(newGameBoard)
        } else {
            machinesTurn(newGameBoard)
            return
        }
    }

    const randomGenerator = () => {
        return Math.floor(Math.random() * 8)
    }

    const hasWinner = (game) => {                                                       
                                                                                        
        if(game[0] !== null){                                                           
            if(game[0] === game[1] && game[1] === game[2]) return true
            if(game[0] === game[3] && game[3] === game[6]) return true
            if(game[0] === game[4] && game[4] === game[8]) return true
        }
        if(game[1] !== null){
            if(game[1] === game[4] && game[4] === game[7]) return true
        }
        if(game[2] !== null){
            if(game[2] === game[5] && game[5] === game[8]) return true
            if(game[2] === game[4] && game[4] === game[6]) return true
        }
        if(game[3] !== null){
            if(game[3] === game[4] && game[4] === game[5]) return true
        }
        if(game[6] !== null){
            if(game[6] === game[7] && game[7] === game[8]) return true
        }
        if(game.every(item => item !== null)){
            alert("It's a tie!")
            setTimeout(() => resetGameBoard(), 1000)
        }
        return false
    }

    const resetGameBoard = () => {
        setTurns(0)
        setGameBoard(Array(9).fill('').map((_,i) => (null)))
        setWinner(false)
    }

if(!loadedFont){
    return null
} else {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <Text>{(turns % 2 !== 1) ? 'Your turn' : 'Machine\'s turn'}</Text>
            <View style={styles.gameboardContainer}>
                {
                    gameBoard.map((box, i) => (
                        <Pressable style={styles.box} key={i}  onPress={() => markBox(i)}>
                        <View ><Text style={styles.boxText}>{box}</Text></View>
                        </Pressable>
                    ))
                }
            </View>
            <Pressable onPress={resetGameBoard}>
                {(state) => <CustomButton pressed={state.pressed} buttonText="Clear gameboard"/>}
            </Pressable>
            <Text style={styles.flightInfoTitle}>Win percentage</Text>
            <Text style={styles.formTitle}>{winPercentage.toFixed(2)}%</Text>
            <Modal
            animationType='slide'
            transparent={true}
            visible={winner}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <Text style={[styles.flightInfoTitle, {fontFamily: 'BungeeSpice'}]}>
                    {(turns % 2 === 1) ? "YOU WON!" : "MACHINE WON!"}
                </Text>
                <Pressable style={styles.modalCloseButton} onPress={resetGameBoard}>
                    <Text style={styles.modalCloseButtonText}>close</Text>
                </Pressable>
                </View>
            </View>
            </Modal>
    </View>
  )
}
}