import { View, type ViewProps } from 'react-native';

import { StyleSheet } from 'react-native-unistyles';

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  // styles.useVariants({ type })

  // return <View style={[styles.backgroundColor, style]} {...otherProps} />;
  return <View style={[styles.container, style]} {...otherProps} />;

}


// const styles = StyleSheet.create((theme, rt) => {
//   return {
//     backgroundColor: {
//       variants: {
//         type: {
//           default: {
//             backgroundColor: theme.colors.background
//           },
//           inverse: {
//             backgroundColor: theme.colors.foreground
//           }
//         }
//       }
//     }
//   }
// });

const styles = StyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.background,
  }
}));