import { StyleSheet,  ScrollView } from 'react-native'
import React from 'react'
import TaskItem from '../ui/TaskItem'

const TaskList = ({ tasks, finishTask }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {tasks.map((task, key) => {
        if (task !== undefined) {
          return <TaskItem key={key} task={task} finishTask={finishTask} />
        }
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    paddingBottom: 150
  }
})

export default TaskList