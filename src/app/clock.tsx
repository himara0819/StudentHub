
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useEffect, useState } from "react";

export default function ClockScreen() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Background Task Simulation
      </Text>

      <Text style={styles.clock}>
        {time.toLocaleTimeString()}
      </Text>

      <Text style={styles.description}>
        The clock updates automatically every second.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  clock: {
    fontSize: 36,
    fontWeight: "bold",
    color: "blue",
  },

  description: {
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },

});
