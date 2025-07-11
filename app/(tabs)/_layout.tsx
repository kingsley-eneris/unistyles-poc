import { Tabs } from 'expo-router';
import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
import { useUnistyles } from 'react-native-unistyles';


export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const { theme } = useUnistyles();


  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: theme.colors.tint,
        tabBarActiveTintColor: theme.colors.activeTint,
        sceneStyle: {
          backgroundColor: theme.colors.background
        },
        tabBarStyle: {
          backgroundColor: theme.colors.foreground
        },
        headerShown: false,
        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        // tabBarStyle: Platform.select({
        //   ios: {
        //     // Use a transparent background on iOS to show the blur effect
        //     position: 'absolute',
        //   },
        //   default: {},
        // }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
            <Tabs.Screen
        name="player/[songId]"
        options={{
          title: 'Player',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="play.circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="gear.circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
