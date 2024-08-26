import { Stack, useLocalSearchParams } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
const poll = {
  question: "React Native or Flutter?",
  options: ["React Native", "Flutter", "Others"],
};

export default function PollDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [selected, setSelected] = useState("React Native");

  const vote = () => {
    console.warn("Vote", selected);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Poll" }} />
      <View style={styles.container}>
        <Text style={styles.question}>{poll.question}</Text>

        {poll.options.map((option, i) => (
          <Pressable
            key={i}
            onPress={() => setSelected(option)}
            style={styles.answerContainer}
          >
            <Feather
              name={selected == option ? "check-circle" : "circle"}
              size={24}
              color={option === selected ? "green" : "black"}
            />
            <Text style={styles.answer}>{option}</Text>
          </Pressable>
        ))}
      </View>
      <View style={{ width: 100, alignSelf: "center", borderRadius: 20 }}>
        <Button title="Vote" onPress={vote} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 3 },
  question: { fontWeight: "bold", fontSize: 25 },
  answerContainer: {
    backgroundColor: "white",
    margin: 5,
    padding: 5,
    flexDirection: "row",
    gap: 5,
    borderRadius: 10,
  },
  answer: { padding: 5, borderRadius: 5 },
});
