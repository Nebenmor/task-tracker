import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { useTasks } from '../hooks/useTasks';
import TaskInput from '../components/TaskInput';
import FilterBar from '../components/FilterBar';
import TaskList from '../components/TaskList';

export default function HomeScreen() {
  const { tasks, filter, setFilter, addTask, toggleTask, deleteTask, isLoading, counts } =
    useTasks();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Task Tracker</Text>
          <Text style={styles.subtitle}>
            {counts.active} task{counts.active !== 1 ? 's' : ''} remaining
          </Text>
        </View>

        <TaskInput onAdd={addTask} />

        <FilterBar active={filter} counts={counts} onChange={setFilter} />

        <TaskList
          tasks={tasks}
          filter={filter}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});
