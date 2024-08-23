import { Stack } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const votes = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Stack.Screen options={{ title: "Vote", headerTitleAlign:'center'  }} />
      <FlatList
        data={votes}
        contentContainerStyle={{
          flex: 1,
          gap: 5,
        }}
        renderItem={() => (
          <View style={styles.votesWrapper}>
            <Text style={styles.pollQuestion}>Poll Question</Text>
          </View>
        )}
      />
    </>
  );
}
const styles = StyleSheet.create({
  pollQuestion: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  votesWrapper: {
    backgroundColor: "gainsboro",
  },
});
