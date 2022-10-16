import { View, Text, StyleSheet, Pressable, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../Styles'


export default function TicTacToe() {

    //const [winner, setWinner] = useState('')
    const [turns, setTurns] = useState(0)                                               // turns variable keeps track of who's turn it is. 
    const [gameBoard, setGameBoard] = useState(                                         // gameboard is an array initialized to 9 elements of null.
        Array(9).fill('').map((_,i) => (null))
    )
    
    useEffect(() => {                                                                   
        let isWon = hasWinner(gameBoard)                                                // After each turn, in useEffect, hasWinner function is called to see if the 
        console.log(isWon)                                                              // game has a winner. If so, the player is shown an alert and the gameboard and turn counter are reset.
        if(!isWon && turns % 2 !== 0 && turns < 9){
            setTimeout(() => machinesTurn(gameBoard), 1000)                             // Here, if no winner is declared and turns is an odd number, machinesTurn function is called.
        } 
        if(isWon){                                                                      // If a winner is declared, an if clause checks if turns variable holds an even value or an odd value
            if(turns % 2 !== 0){                                                        // and an alert is shown to user.
                alert("You won the game!")
            } else {
                alert("The robotic uprising of 2022 has begun! The machine is the victor!")
            }
            setTimeout(() => resetGameBoard(), 1000)                                    // setTimeout used here, so the board doesn't clear too quickly.
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
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <Text>{(turns % 2 !== 1) ? 'Your turn' : 'Machine\'s turn'}</Text>
            <View style={gameStyles.gameboardContainer}>
                {
                    gameBoard.map((box, i) => (
                        <Pressable style={gameStyles.box} key={i}  onPress={() => markBox(i)}>
                        <View ><Text style={gameStyles.boxText}>{box}</Text></View>
                        </Pressable>
                    ))
                }
            </View>
            <Button title="reset" onPress={resetGameBoard} />
            {/*<Text>{(turns %2 !== 1 && winner) && 'You won!'}{(turns %2 === 1 && winner) && 'Machine won!'}</Text>*/}
    </View>
  )
}

const gameStyles = StyleSheet.create({
    gameboardContainer: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 362,
        height: 362,
        borderWidth: 1,
        borderColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.35
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    boxText: {
        fontSize: 48,
        fontWeight: 'bold',
    }
})