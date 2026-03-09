import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

interface TaskInputProps {
  onAdd: (title: string) => boolean;
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    const success = onAdd(value);
    if (success) {
      setValue('');
    } else {
      Alert.alert('Validation', 'Task title cannot be empty.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={setValue}
        onSubmitEditing={handleAdd}
        returnKeyType="done"
      />
      <TouchableOpacity
        style={[styles.button, !value.trim() && styles.buttonDisabled]}
        onPress={handleAdd}
        disabled={!value.trim()}
        accessibilityLabel="Add task"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#111827',
  },
  button: {
    height: 48,
    paddingHorizontal: 20,
    backgroundColor: '#4F46E5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#C7D2FE',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
