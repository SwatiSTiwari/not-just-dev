import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from "react-native";

const ChatScreen = () => {
  // Sample chat messages
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello, how are you?", sender: "John", timestamp: new Date().toLocaleTimeString() },
    { id: "2", text: "I'm doing great, thanks!", sender: "Jane", timestamp: new Date().toLocaleTimeString() },
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Handle sending a new message
  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: (messages.length + 1).toString(),
        text: newMessage,
        sender: "You", // You can dynamically change the sender
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, message]);
      setNewMessage(""); // Clear input after sending
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === "You" ? styles.sentMessage : styles.receivedMessage,
            ]}
          >
            <Text style={styles.sender}>{item.sender}</Text>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />

      {/* Message Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          multiline
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#0084FF",
    marginRight: 10,
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f1f1f1",
    marginLeft: 10,
  },
  sender: {
    fontWeight: "bold",
    color: "#333",
  },
  messageText: {
    color: "#333",
  },
  timestamp: {
    fontSize: 10,
    color: "#777",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    backgroundColor: "#f1f1f1",
  },
});

export default ChatScreen;
