import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const TaskItem = ({ task, finishTask }) => {
  return (
    <View style={styles.taskItem} >
      <TouchableOpacity onPress={() => finishTask(task.id)}>
        <Image style={{width: 50, height: 50}} source={{uri: 'https://img.icons8.com/color/512/checked-checkbox.png'}} />
      </TouchableOpacity>
      <View style={styles.itemDetails}>
        <Text style={{fontSize: 16, maxWidth: 280, fontFamily: 'mt-medium'}} >{task.text}</Text>
        <Text style={{fontSize: 13, fontFamily: 'mt-regular'}} >{task.date}</Text>
      </View>
      <TouchableOpacity onPress={() => finishTask(task.id)}>
        <Image style={{width: 25, height: 25}} source={{uri: 'https://img.icons8.com/material-outlined/512/delete-trash.png'}} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  taskItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
    order: 1
  },
  completedItem: {
    order: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
    backgroundColor:'red'
  },
  itemDetails: {
    display: 'flex',
    marginRight: 'auto',
    gap: 2,
    marginLeft: 10
  }
})

export default TaskItem