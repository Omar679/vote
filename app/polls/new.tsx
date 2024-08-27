import { Stack } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(["", ""]);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Create Poll" }} />
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your question here"
        value={question}
        onChangeText={(text) => setQuestion(text)}
      />
      <View style={{ gap: 4, marginTop: 10 }}>
        <Text>Options</Text>
        {options.map((option, i) => (
          <View
            key={i}
            style={[
              styles.input,
              {
                flexDirection: "row",
                alignItems: "center",
                padding: 5,
              },
            ]}
          >
            <TextInput
              onChangeText={(text) => {
                const updated = [...options];
                updated[i] = text;
                setOptions(updated);
              }}
              value={option}
              style={[{ width: "100%" }]}
              placeholder={`Option ${i + 1}`}
            />
            <FontAwesome6
              onPress={(i) => {
                let update = [...options];
                update.splice(i, 1);
                setOptions(update);
              }}
              name="xmark"
              size={20}
              color="gray"
              style={{ }}
            />
          </View>
        ))}

        <Button
          title="Add Option"
          onPress={(i) => {
            setOptions([...options, ""]);
          }}
        />

        <Button
          title="Submit"
          onPress={() => console.warn("Submit Button is Pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, gap: 5, flex: 1 },
  title: { fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
