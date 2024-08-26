import { Link, Stack } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const votes = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <>
      <Stack.Screen options={{ title: "Vote", headerTitleAlign: "center" }} />
      <FlatList
        data={votes}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Link href={`/polls/${item.id}`} style={styles.pollQuestion}>
            <Text> {item.id}: Poll Question</Text>
          </Link>
        )}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 5,
    backgroundColor: "gainsboro",
    padding: 10,
    flex: 1,
  },
  pollQuestion: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  votesWrapper: {
    backgroundColor: "gainsboro",
  },
});
