export const bodyParts = [
  {
    image: require("../../assets/fitnessmodels/amrsshoulders.png"),
    name: "upper arms",
    text: "Arms",
  },
  {
    image: require("../../assets/fitnessmodels/chest.png"),
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
    image: require("../../assets/fitnessmodels/dance.png"),
    name: "cardio",
    text: "Cardio",
  },
];

//Hardcoding for a database that will be used in the Today Page, the Explore section (recommended exercises)
export const AbsDB = [
  {
    source: require("../../assets/ExerciseGifs/SideStretch.gif"),
    text: "Alternating Side Stretch",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
    },
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

export const ArmsDB = [
  {
    source: require("../../assets/ExerciseGifs/NeckRoll.gif"),
    text: "Neck Stretch",
    duration: "Time: 10s",
    style: {
      width: 148.29,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/ArmSwing.gif"),
    text: "Arm Stretch",
    duration: "Time: 20s",
    style: {
      width: 138.73,
      height: 124,
      marginLeft: 20,
    },
  },

  {
    source: require("../../assets/ExerciseGifs/static-tricep-stretch.gif"),
    text: "Left Tricep Stretch",
    duration: "Time: 10s",
    style: {
      width: 101,
      height: 121,
    },
  },

  {
    source: require("../../assets/ExerciseGifs/static-tricep-stretch.gif"),
    text: "Right Tricep Stretch",
    duration: "Time: 10s",
    style: {
      width: 101,
      height: 121,
      transform: [{ scaleX: -1 }],
    },
  },
  {
    source: require("../../assets/ExerciseGifs/rss-challenge-warmup-seal-jack.gif"),
    text: "Arm Swing Jumping Jack",
    duration: "x 20",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/air-box.gif"),
    text: "Shadow Boxing",
    duration: "Time: 1 min",
    style: {
      width: 138,
      height: 124,
    },
  },

  {
    source: require("../../assets/ExerciseGifs/fastFeet.gif"),
    text: "Fast Feet",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/lita-lewis-jumping-jack.gif"),
    text: "Jumping Jack",
    duration: "x 20",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/air-box.gif"),
    text: "Shadow Boxing",
    duration: "Time: 1 min",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/ArmSwing.gif"),
    text: "Arm Stretch",
    duration: "Time: 20s",
    style: {
      width: 138.73,
      height: 124,
      marginLeft: 20,
    },
  },
];

export const YogaDB = [
  {
    source: require("../../assets/ExerciseGifs/LotusYoga.gif"),
    text: "Lotus Pose",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 121,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/SitForwardStretch.gif"),
    text: "Forward Stretch",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/warrior-pose.gif"),
    text: "Warrior Pose",
    duration: "Time: 30s",
    style: {
      width: 148.29,
      height: 124,
    },
  },

  {
    source: require("../../assets/ExerciseGifs/DownwardDog.gif"),
    text: "Downward Dog",
    duration: "Time: 30s",
    style: {
      width: 138.73,
      height: 124,
      marginLeft: 20,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/Quad-StretchYoga.gif"),
    text: "Quad Stretch",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
      marginLeft: 20,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/PS_butt_bridge.gif"),
    text: "Glute Bridge",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
      marginLeft: 20,
    },
  },
];

export const LegsExploreDB = [
  {
    source: require("../../assets/ExerciseGifs/SideStretch.gif"),
    text: "Alternating Side Stretch",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/HamstringStretch.gif"),
    text: "Left Leg Hamstring Stretch",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/HamstringStretch.gif"),
    text: "Right Leg Hamstring Stretch",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
      transform: [{ scaleX: -1 }],
    },
  },
  {
    source: require("../../assets/ExerciseGifs/AdductoreStretch.gif"),
    text: "Alternating Adductor Stretch",
    duration: "Time: 1 min",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/jumpsquat.gif"),
    text: "Jump Squat",
    duration: "x 15",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/backward-lunge.gif"),
    text: "Alternating Backward Lunge",
    duration: "x 30",
    style: {
      width: 138,
      height: 124,
    },
  },

  {
    source: require("../../assets/ExerciseGifs/SingleLegCalfRaise.gif"),
    text: "Right Leg Calf Raise",
    duration: "x 20",
    style: {
      width: 138,
      height: 124,
    },
  },
  {
    source: require("../../assets/ExerciseGifs/SingleLegCalfRaise.gif"),
    text: "Left Leg Calf Raise",
    duration: "x 20",
    style: {
      width: 138,
      height: 124,
      transform: [{ scaleX: -1 }],
    },
  },
  {
    source: require("../../assets/ExerciseGifs/QuadCoolDown.gif"),
    text: "Quad Stretch",
    duration: "Time: 30s",
    style: {
      width: 138,
      height: 124,
    },
  },
];
