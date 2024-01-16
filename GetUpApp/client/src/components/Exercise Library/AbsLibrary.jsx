import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Modal,
  Video,
  TouchableOpacity,
} from "react-native";

const renderItem = ({ item }) => {
  // const [modalVisible, setModalVisible] = useState(false);

  // const handlePress = () => {
  //   setModalVisible(true);
  // };

  // const closeModal = () => {
  //   setModalVisible(false);
  // };

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.card}>
        <View style={{ marginLeft: 10 }}>
          <View style={{ width: 150 }}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <Text style={styles.duration}>{item.duration}</Text>
        </View>
        <View
          style={[
            styles.imagebox,
            { backgroundColor: item.style.backgroundColor },
          ]}
        >
          <Pressable>
            <Image
              source={item.source}
              style={[styles.image, item.style]}
              cache={"force-cache"}
            />
          </Pressable>
        </View>
      </View>

      {/* Modal to display exercise details/instructions and video */}
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              {item.modalTitle}
            </Text>
            <Image
              source={item.modalImage}
              style={{
                width: 200,
                height: 150,
                borderRadius: 10,
                marginBottom: 10,
              }}
            />
            <Video
              source={item.modalVideo}
              style={{ width: 200, height: 150, borderRadius: 10 }}
            />
            <TouchableOpacity onPress={closeModal}>
              <Text style={{ color: "blue", marginTop: 10 }}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

const AbsLibrary = () => {
  const DATA = [
    {
      source: require("../../../assets/ExerciseGifs/SideStretch.gif"),
      text: "Alternating Side Stretch",
      duration: "Time: 30s",
      style: {
        width: 138,
        height: 124,
      },
      modalTitle: "Side Stretch",
      modalVideo: "../../../assets/ExerciseGifs/SideStretch.gif",
      modalDescription: "lorum....",
    },
    {
      source: require("../../../assets/ExerciseGifs/Cobra.gif"),
      text: "Cobra Stretch",
      duration: "Time: 20s",
      style: {
        width: 138,
        height: 124,
        marginLeft: 20,
      },
    },

    {
      source: require("../../../assets/ExerciseGifs/400x400_Cat_Cow_Pose.gif"),
      text: "Cat Pose Stretch",
      duration: "Time: 20s",
      style: {
        width: 138,
        height: 121,
      },
    },

    {
      source: require("../../../assets/ExerciseGifs/OppositeExtensions.gif"),
      text: "Left Leg & Right Arm Extensions",
      duration: "x 15",
      style: {
        width: 138,
        height: 121,
        transform: [{ scaleX: -1 }],
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/OppositeExtensions.gif"),
      text: "Right Leg & Left Arm Extensions",
      duration: "x 15",
      style: {
        width: 138,
        height: 124,
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/RussianTwist.gif"),
      text: "Russian Twist",
      duration: "x 20 each side",
      style: {
        width: 138,
        height: 124,
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/BicycleCrunch.gif"),
      text: "Bicycle Crunch",
      duration: "Time: 30s",
      style: {
        width: 138,
        height: 124,
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/LegRaises.gif"),
      text: "Leg Raises",
      duration: "x 15",
      style: {
        width: 138,
        height: 124,
      },
    },
    {
      source: require("../../../assets/ExerciseGifs/PlankTipToe.gif"),
      text: "Plank",
      duration: "Time: 30s",
      style: {
        width: 138,
        height: 124,
      },
    },
  ];
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      vertical={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default AbsLibrary;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 128,
    backgroundColor: "#F9E7D2",
    marginVertical: 10,
    borderRadius: 10,
  },

  image: {
    borderRadius: 10,
    marginRight: 10,
  },

  text: {
    textAlign: "left",
    fontSize: 18,
  },

  duration: {
    fontSize: 13,
    marginTop: 10,
    color: "#226FE3",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});
