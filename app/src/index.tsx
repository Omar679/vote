import { Link, Redirect, Stack } from "expo-router";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { useAuth } from "@/Providers/AuthContext";

const { user, session } = useAuth();

export default function App() {
  const [votes, setVotes] = useState<any>([]);
  if (!user) {
    <Redirect href={"/(auth)/login"} />;
  }
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
          headerLeft: () => (
            <Link href={"/login"}>
              <SimpleLineIcons name="user" size={20} color="black" />
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
      <Button title="SignOut" onPress={() => console.log("Logged")} />
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
