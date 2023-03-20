import { Alert, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/home/Header'
import AddTask from '../components/home/AddTask'
import TaskList from '../components/home/TaskList'

const HomeScreen = () => {
  const [tasks, setTasks] = useState([
    {text: 'Купить молоко', date: '15.3.2023', id: '1'},
    {text: 'Помыть машину', date: '16.3.2023', id: '2'},
    {text: 'Построить дом', date: '17.3.2023', id: '3'},
    {text: 'Посадить дерево', date: '18.3.2023', id: '4'},
    {text: 'Так будет выглядеть ваш список дел или задач', date: '19.3.2023', id: '5'},
  ])

  const newTask = (taskText) => {
    if (taskText === ''  || taskText === ' '){
      return Alert.alert('Ошибка', 'Текст задачи не может быть пустым!');
    } if (taskText.length >= 110) {
      return Alert.alert('Ошибка', `Текст задачи не может превышать 110 символов! (у вас их ${taskText.length})`);
    } else {
      const dateObj = new Date();
      setTasks([...tasks, {text: taskText, date: `${dateObj.getUTCDate()}.${dateObj.getUTCMonth() + 1}.${dateObj.getUTCFullYear()}`, id: tasks.length + 1}])
    }
  } 
  
  const finishTask = (taskId) => {
    tasks.map((task) => {
      if (task !== undefined) {
        if (task.id === taskId) {
          delete tasks[task.id-1]
          newArr = tasks
          setTasks([...newArr])
        }
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddTask newTask={newTask} />
      <TaskList tasks={tasks} finishTask={finishTask} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    gap: 20,
  }
})

export default HomeScreen