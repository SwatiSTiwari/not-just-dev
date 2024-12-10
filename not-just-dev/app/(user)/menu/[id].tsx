import React from "react";
import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products"; // Replace with your user data
import { router } from "expo-router";
import CardItem from "@/components/ui/CartItem";
import { CardItemT } from "@/types";
import Button from "@/components/ui/Button";
 // Assuming the correct path to CardItem

const UserDetailScreen = () => {
  const { id } = useLocalSearchParams(); // Gets the ID from the route params
  const user = products.find((item) => item.id.toString() === id);

  if (!user) {
    return <View style={styles.notFoundContainer}><Text style={styles.notFoundText}>User not found</Text></View>;
  }

  return (
    <View style={styles.container}>
      <CardItem
        image={{ uri: user.image }}
        name={user.name}
        description={user.description}
        isOnline={user.isOnline}
        hasActions={true} // Shows action buttons like Heart, Close, etc.
      />


<Button
        title="Start Chat"
        onPress={() => {
          // Navigate to the chat screen
          // Replace '/chat-screen' with the actual path to the chat screen
          router.push('/chat');
        }}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFoundText: {
    fontSize: 18,
    color: "red",
  },
});

export default UserDetailScreen;
