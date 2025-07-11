import { SettingTile } from '@/components/SettingTile';
import { ThemedText } from '@/components/ThemedText';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';


export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* <ThemedView style={styles.container}> */}
        <ThemedText type="title">
          Home Screen
        </ThemedText>
        <ThemedText>
          asd
        </ThemedText>
        <SettingTile settingName="111asd" selectedValue="asd" description="asd" onPress={() => {}} />
      {/* </ThemedView> */}
      </ScrollView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    marginTop: rt.insets.top,
    paddingHorizontal: theme.gap(2),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
}));