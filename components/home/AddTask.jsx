import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const AddTask = ({ newTask }) => {
  const [taskText, setTaskText] = useState('')

  return (
    <View style={styles.container}>
      <TextInput style={{width: '90%', borderWidth: 2, borderRadius: 8, borderColor: 'rgba(0,0,0,0.4)', padding: 5, fontSize: 17, fontFamily: 'mt-regular'}} placeholder='Добавить задачу' onChangeText={(text) => setTaskText(text)} value={taskText} />
      <TouchableOpacity style={{width: '10%', height: '100%', borderColor: 'rgba(0,0,0,0.4)', borderWidth: 2, borderRadius: 6, padding: 3}} onPress={() => {newTask(taskText); setTaskText('')}} >
        <Image source={{uri: 'https://img.icons8.com/material-two-tone/512/plus-math.png'}} style={{width:26, height: 22, marginHorizontal: 'auto'}} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingRight: 10,
    gap: 5
  }
})

export default AddTask