import { Link, Stack } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function App() {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    let { data: polls, error } = await supabase.from("polls").select("*");
    setVotes(polls);
    console.log(polls);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Vote",
          headerTitleAlign: "center",
          headerRight: () => (
            <Link href={"/polls/new"}>
              <SimpleLineIcons name="plus" size={20} color="black" />
            </Link>
          ),
        }}
      />
      <FlatList
        data={votes}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Link href={`/polls/${item.id}`} style={styles.pollQuestion}>
            <Text>
              {item.id} {item.question}
            </Text>
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
