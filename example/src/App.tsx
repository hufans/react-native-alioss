import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { AliyunOSS } from 'rn-alioss';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    // AliyunOSS.initWithSecurityToken();
    // AliyunOSS.asyncUpload();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
