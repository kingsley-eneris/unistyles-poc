// import { StyleSheet, Text, type TextProps } from 'react-native';

// import { useThemeColor } from '@/hooks/useThemeColor';
import { Text, type TextProps } from 'react-native';
import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';

export type ThemedTextProps = TextProps & UnistylesVariants<typeof styles> & {
  // lightColor?: string;
  // darkColor?: string;
  // type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  // type?: "title" | "defaultSemiBold" | "subtitle" | "link" | "custom" | undefined;

};

export function ThemedText({
  style,
  // lightColor,
  // darkColor,
  type,
  bold,
  dimmed,
  ...rest
}: ThemedTextProps) {
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  styles.useVariants({ type, bold, dimmed })

  return (
    <Text
      style={[
        // { color },
        styles.textColor,
        styles.textType,
        // type === 'default' ? styles.default : undefined,
        // type === 'title' ? styles.title : undefined,
        // type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        // type === 'subtitle' ? styles.subtitle : undefined,
        // type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  textType: {
    variants: {
        type: {
            default: {
                fontSize: 16,
                lineHeight: 24,
            },
            defaultSemiBold: {
                fontSize: 16,
                lineHeight: 24,
                fontWeight: '600',
            },
            title: {
                fontSize: 32,
                fontWeight: 'bold',
                lineHeight: 32,
            },
            subtitle: {
                fontSize: 20,
                fontWeight: 'bold',
            },
            link: {
                lineHeight: 30,
                fontSize: 16,
                color: theme.colors.link
            },
            custom: {
              lineHeight: 30,
              fontSize: 16,
              color: '#0a7ea4',
            },
            custom1: {
              lineHeight: 30,
              fontSize: 16,
              color: '#0a7ea4',
            },
        },
        bold: {
          true: {
            fontWeight: 'bold',
          },
          default: {
            fontWeight: 'normal',
          }
        },
        dimmed: {
          true: {
            color: theme.colors.tint
          }
        }
    },

  },
  // default: {
  //   fontSize: 16,
  //   lineHeight: 24,
  // },
  textColor: {
    color: theme.colors.typography
  },
  // defaultSemiBold: {
  //   fontSize: 16,
  //   lineHeight: 24,
  //   fontWeight: '600',
  // },
  // title: {
  //   fontSize: 32,
  //   fontWeight: 'bold',
  //   lineHeight: 32,
  // },
  // subtitle: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // link: {
  //   lineHeight: 30,
  //   fontSize: 16,
  //   color: '#0a7ea4',
  // },
}));