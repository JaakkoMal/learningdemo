import { View, Text, StyleSheet, Pressable, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../Styles'


export default function TicTacToe() {

    const [winner, setWinner] = useState(false)
    const [turns, setTurns] = useState(0)
    const [gameBoard, setGameBoard] = useState(
        Array(9).fill('').map((_,i) => (null))
    )
    
    useEffect(() => {
        setTurns(turns + 1)
        console.log(turns)
    }, [gameBoard])
    
    const markBox = (index) => {
        let newGameBoard = [...gameBoard]
        if(gameBoard[index] === null){
            newGameBoard[index] = 'X'
            setGameBoard(newGameBoard)
            let gameOver = hasWinner(newGameBoard)
            if (gameOver) setWinner(gameOver)
            turns < 9 && !gameOver ? setTimeout(() => machinesTurn(newGameBoard), 1500) : null
        } else {
            return
        }
        console.log(gameBoard)
        console.log("turn" + turns)
    }

    const machinesTurn = (gameBoard) => {
        let randomIndex = randomGenerator()
        let newGameBoard = [...gameBoard]
        let gameOver = false;
        if(gameBoard[randomIndex] === null){
            newGameBoard[randomIndex] = 'O'
            setGameBoard(newGameBoard)
            gameOver = hasWinner(newGameBoard)
            if(gameOver) setWinner(gameOver)
        } else {
            machinesTurn(newGameBoard)
            return
        }
    }

    const randomGenerator = () => {
        return Math.floor(Math.random() * 8)
    }

    const hasWinner = (game) => {
        //check 3 in a row scenarios
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
        return false
    }

    const resetGameBoard = () => {
        setGameBoard(Array(9).fill('').map((_,i) => (null)))
        setTurns(0)
        setWinner(false)
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <Text>{(turns % 2 !== 1) ? 'machines turn' : 'your turn'}</Text>
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
            <Text>{(turns %2 !== 1 && winner) && 'You won!'}{(turns %2 === 1 && winner) && 'Machine won!'}</Text>
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
        borderColor: '#000'
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