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
    const [turns, setTurns] = useState(0)                                               // turns variable keeps track of who's turn it is. 
    const [gameBoard, setGameBoard] = useState(                                         // gameboard is an array initialized to 9 elements of null.
        Array(9).fill('').map((_,i) => (null))
    )
    const [userWins, setUserWins] = useState(0)
    const [machineWins, setMachineWins] = useState(0)
    const [winPercentage, setWinPercentage] = useState(0)
    
    useEffect(() => {                                                                   
        let isWon = hasWinner(gameBoard)                                                // After each turn, in useEffect, hasWinner function is called to see if the 
        console.log(isWon)                                                              // game has a winner. If so, the player is shown an alert and the gameboard and turn counter are reset.
        if(!isWon && turns % 2 !== 0 && turns < 9){
            setTimeout(() => machinesTurn(gameBoard), 1000)                             // Here, if no winner is declared and turns is an odd number, machinesTurn function is called.
        } 
        if(isWon){                                                                      // If a winner is declared, an if clause checks if turns variable holds an even value or an odd value
            if(turns % 2 !== 0){                                                        // and an alert is shown to user.
                setWinner(true)
                setUserWins(userWins + 1)
            } else {
                setWinner(true)
                setMachineWins(machineWins + 1)
            }
            //setTimeout(() => resetGameBoard(), 1000)                                    // setTimeout used here, so the board doesn't clear too quickly.
        }

        if(userWins > 0 || machineWins > 0){
            let currentPercentage = userWins / (userWins + machineWins) * 100
            setWinPercentage(currentPercentage)
        } else {
            setWinPercentage(0)
        }
        
    }, [gameBoard])                                                                     // useEffect is run every time the gameboard changes
    

    const markBox = (index) => {                                                        // When the player taps a box to mark it,
        let newGameBoard = [...gameBoard]                                               // a copy of the current gameboard is assigned to newGameBoard

        if(gameBoard[index] === null){                                                  // If the marked box was empty prior to clicking (array element null)
            setTurns(turns + 1)                                                         // the turns variable is set to current value + 1,        
            newGameBoard[index] = 'X'                                                   // the newGameboard array's corresponding element is set to 'X',    
            setGameBoard(newGameBoard)                                                  // and the gameBoard variable is set to have the value of newGameBoard
        } else {
            return                                                                      // If the user taps a box with an 'X' or an 'O' in it
        }                                                                               // the function returns (nothing happens).    
    }

    const machinesTurn = (gameBoard) => {                                               // machinesTurn function does basically the same thing as the markBox function,    
        let randomIndex = randomGenerator()                                             // the only big difference being that the machines decision is made by calling
        let newGameBoard = [...gameBoard]                                               // the randomGenerator function, which holds an amazing algorithm that
                                                                                        // is designed to simulate the decision making of a three year old.
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

    const hasWinner = (game) => {                                                       // This function is called after each turn to see if any of
                                                                                        // the eight possible winning combinations are found on the gameboard.
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
                {(state) => <CustomButton pressed={state.pressed} buttonText="Reset game"/>}
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