export const bodyParts = [
  {
    image: require("../../assets/fitnessmodels/amrsshoulders.png"),
    name: "upper arms",
    text: "Arms",
  },
  {
    image: require("../../assets/fitnessmodels/fullbody.png"),
    name: "chest",
    text: "Chest",
  },

  {
    image: require("../../assets/fitnessmodels/back.png"),
    name: "back",
    text: "Back",
  },

  {
    image: require("../../assets/fitnessmodels/abss.png"),
    name: "waist",
    text: "Waist",
  },

  {
    image: require("../../assets/fitnessmodels/buttock.png"),
    name: "upper legs",
    text: "Legs",
  },

  {
    image: require("../../assets/fitnessmodels/fullbody.png"),
    name: "cardio",
    text: "Cardio",
  },
];

export const databasePrograms = [
  {
    source: require("../../assets/ExerciseGifs/SideStretch.gif"),
    text: "Alternating Side Stretch",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
    },
    modalTitle: "Side Stretch",
    modalVideo: "../../assets/ExerciseGifs/SideStretch.gif",
  },
  {
    source: require("../../assets/ExerciseGifs/Cobra.gif"),
    text: "Cobra Stretch",
    duration: "Time: 20s",
    style: {
      width: 138,
      height: 124,
      marginLeft: 20,
    },
  },

  {
    source: require("../../assets/ExerciseGifs/400x400_Cat_Cow_Pose.gif"),
    text: "Cat Pose Stretch",
    duration: "Time: 20s",
    style: {
      width: 138,
      height: 121,
    },
  },

  {
    source: require("../../assets/ExerciseGifs/OppositeExtensions.gif"),
    text: "Left Leg & Right Arm Extensions",
    duration: "x 15",
    style: {
      width: 138,
      height: 121,
      transform: [{ scaleX: -1 }],
    },
  },
  {
    source: require("../../assets/ExerciseGifs/OppositeExtensions.gif"),
    text: "Right Leg & Left Arm Extensions",
    duration: "x 15",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/RussianTwist.gif"),
    text: "Russian Twist",
    duration: "x 20 each side",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/BicycleCrunch.gif"),
    text: "Bicycle Crunch",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/LegRaises.gif"),
    text: "Leg Raises",
    duration: "x 15",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/PlankTipToe.gif"),
    text: "Plank",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
    },
  },
];
