import '@/unistyles'

import { Button } from '@/components/Button'
import { Stack } from 'expo-router'
import React from 'react'
import { useUnistyles } from 'react-native-unistyles'

console.log('LOADED SettingsLayout');

export default function SettingsLayout() {
    const { theme } = useUnistyles()

    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    color: theme.colors.typography
                },
                headerStyle: {
                    backgroundColor: theme.colors.background
                },
                contentStyle: {
                    backgroundColor: theme.colors.background
                },
                headerLeft: () => <Button label="Test" onPress={() => {}} />
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Settings',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="settings-theme"
                options={{
                    title: 'Change theme',
                    presentation: 'modal',
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="settings-accent"
                options={{
                    title: 'Change accent',
                    presentation: 'modal',
                    headerShown: true
                }}
            />
        </Stack>
    )
}