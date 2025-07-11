import { ThemedText } from '@/components/ThemedText';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function PlayerScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ThemedText type="title">
                Player
            </ThemedText>
        </ScrollView>
    );
}

const styles = StyleSheet.create((theme, rt) => ({
    container: {
        flex: 1,
        marginTop: rt.insets.top,
        paddingHorizontal: theme.gap(2)
    },
}));