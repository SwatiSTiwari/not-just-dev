import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "./Icon";

import  { CardItemT } from "@/types";
// Make sure the types are correctly defined

const CardItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  name,
}: CardItemT) => {
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = {
    borderRadius: 8,
    width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
    height: hasVariant ? 170 : 350,
    margin: hasVariant ? 0 : 20,
  };

  const nameStyle = {
    paddingTop: hasVariant ? 10 : 15,
    paddingBottom: hasVariant ? 5 : 7,
    color: "#363636",
    fontSize: hasVariant ? 15 : 30,
  };

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="heart" color="#fff" size={13} /> {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* STATUS */}
      {!description && (
        <View style={styles.status}>
          <View
            style={isOnline ? styles.online : styles.offline}
          />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      )}

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity
            style={styles.miniButton}
            onPress={() => console.log("Star button clicked")}
          >
            <Icon name="star" color="#ffd700" size={25} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Heart button clicked")}
          >
            <Icon name="heart" color="#ff0000" size={25} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Close button clicked")}
          >
            <Icon name="close" color="#000" size={25} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.miniButton}
            onPress={() => console.log("Flash button clicked")}
          >
            <Icon name="flash" color="#ff8c00" size={25} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerCardItem: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  matchesCardItem: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#ff8c00",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  matchesTextCardItem: {
    color: "#fff",
    fontSize: 12,
  },
  descriptionCardItem: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 14,
    color: "#757575",
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  online: {
    width: 10,
    height: 10,
    backgroundColor: "green",
    borderRadius: 5,
    marginRight: 5,
  },
  offline: {
    width: 10,
    height: 10,
    backgroundColor: "gray",
    borderRadius: 5,
    marginRight: 5,
  },
  statusText: {
    fontSize: 12,
    color: "#757575",
  },
  actionsCardItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    elevation: 3,
    margin: 5, // Added margin for spacing
  },
  miniButton: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 25,
    elevation: 3,
    margin: 5, // Added margin for spacing
  },
});

export default CardItem;
