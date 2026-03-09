import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FilterType } from '../types';

interface FilterBarProps {
  active: FilterType;
  counts: Record<FilterType, number>;
  onChange: (filter: FilterType) => void;
}

const FILTERS: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function FilterBar({ active, counts, onChange }: FilterBarProps) {
  return (
    <View style={styles.container}>
      {FILTERS.map(({ label, value }) => (
        <TouchableOpacity
          key={value}
          style={[styles.tab, active === value && styles.tabActive]}
          onPress={() => onChange(value)}
          accessibilityRole="tab"
          accessibilityState={{ selected: active === value }}
        >
          <Text style={[styles.label, active === value && styles.labelActive]}>
            {label}
          </Text>
          <View style={[styles.badge, active === value && styles.badgeActive]}>
            <Text style={[styles.badgeText, active === value && styles.badgeTextActive]}>
              {counts[value]}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
    gap: 4,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 9,
    gap: 6,
  },
  tabActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
  },
  labelActive: {
    color: '#111827',
    fontWeight: '600',
  },
  badge: {
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeActive: {
    backgroundColor: '#4F46E5',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },
  badgeTextActive: {
    color: '#fff',
  },
});
