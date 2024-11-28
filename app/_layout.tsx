import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f7f7f7',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#4A90E2', // Active tab color
        tabBarInactiveTintColor: '#333', // Inactive tab color
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: () => null, // No icon for simplicity
        }}
      />
    </Tabs>
  );
}
