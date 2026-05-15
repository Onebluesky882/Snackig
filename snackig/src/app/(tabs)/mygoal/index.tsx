import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import {
  Camera,
  ChevronRight,
  Globe,
  Lock,
  Share2,
  TrendingDown,
  Trophy,
} from "lucide-react-native";
import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const MyGoal = () => {
  const [isPrivate, setIsPrivate] = useState(true);

  // Mock Data: ความคืบหน้าของน้ำหนัก
  const weightData = {
    start: 85,
    current: 78.5,
    target: 72,
    unit: "kg",
  };

  // คำนวณเปอร์เซ็นต์ความสำเร็จ
  const progress =
    ((weightData.start - weightData.current) /
      (weightData.start - weightData.target)) *
    100;

  return (
    <ThemedView className="flex-1 bg-background">
      {/* --- Header: Goal Settings & Privacy --- */}
      <View className="px-6 pt-14 pb-8 bg-card border-b border-border rounded-b-[45px] shadow-sm">
        <View className="flex-row justify-between items-center mb-6">
          <ThemedText className="text-3xl font-black italic uppercase tracking-tighter">
            My <ThemedText className="text-primary italic">Journey</ThemedText>
          </ThemedText>
          <TouchableOpacity className="p-3 bg-secondary rounded-full border border-border">
            <Share2 size={20} color="#2A7FFF" />
          </TouchableOpacity>
        </View>

        {/* Privacy Toggle Card */}
        <View className="bg-secondary/50 p-4 rounded-3xl flex-row items-center justify-between border border-border">
          <View className="flex-row items-center">
            <View
              className={`p-2 rounded-full ${isPrivate ? "bg-slate-500" : "bg-primary"}`}
            >
              {isPrivate ? (
                <Lock size={16} color="white" />
              ) : (
                <Globe size={16} color="white" />
              )}
            </View>
            <View className="ml-3">
              <ThemedText className="text-xs font-black uppercase tracking-widest leading-none mb-1">
                {isPrivate ? "Private Mode" : "Public Mode"}
              </ThemedText>
              <ThemedText className="text-[10px] text-muted-foreground font-bold italic">
                {isPrivate
                  ? "Only you can see this"
                  : "Visible to your buddies"}
              </ThemedText>
            </View>
          </View>
          <Switch
            value={!isPrivate}
            onValueChange={(val) => setIsPrivate(!val)}
            trackColor={{ false: "#64748b", true: "#2A7FFF" }}
          />
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* --- Section 1: Weight Progress --- */}
        <View className="px-6 mt-8">
          <View className="bg-card border border-border rounded-[40px] p-6 shadow-sm overflow-hidden relative">
            <View className="flex-row justify-between items-center mb-6">
              <View>
                <ThemedText className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">
                  Weight Goal
                </ThemedText>
                <ThemedText className="text-2xl font-black italic uppercase tracking-tighter leading-none">
                  Lose {weightData.start - weightData.target} {weightData.unit}
                </ThemedText>
              </View>
              <TrendingDown size={32} color="#2A7FFF" opacity={0.2} />
            </View>

            {/* Progress Bar */}
            <View className="h-4 bg-secondary rounded-full overflow-hidden mb-4 border border-border">
              <View
                className="h-full bg-primary rounded-full shadow-lg shadow-primary/40"
                style={{ width: `${progress}%` }}
              />
            </View>

            <View className="flex-row justify-between">
              <WeightStat label="Start" value={weightData.start} />
              <WeightStat
                label="Current"
                value={weightData.current}
                highlight
              />
              <WeightStat label="Target" value={weightData.target} />
            </View>
          </View>
        </View>

        {/* --- Section 2: Transformation Gallery (Photos) --- */}
        <View className="mt-10 px-6">
          <View className="flex-row justify-between items-end mb-6">
            <View>
              <ThemedText className="text-2xl font-black italic uppercase tracking-tighter italic">
                Transformation
              </ThemedText>
              <View className="h-1.5 w-12 bg-primary rounded-full mt-1" />
            </View>
            <TouchableOpacity className="flex-row items-center bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Camera size={16} color="#2A7FFF" />
              <ThemedText className="ml-2 text-[10px] font-black uppercase text-primary tracking-widest italic">
                Add Photo
              </ThemedText>
            </TouchableOpacity>
          </View>

          {/* Photo Comparison / Gallery */}
          <View className="flex-row justify-between mb-10">
            <PhotoCard
              label="Day 1"
              date="12 Jan 2024"
              uri="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
            />
            <View className="justify-center items-center">
              <ChevronRight size={24} color="#2A7FFF" opacity={0.3} />
            </View>
            <PhotoCard
              label="Today"
              date="Now"
              uri="https://images.unsplash.com/photo-1594882645126-14020914d58d?w=400"
              isCurrent
            />
          </View>
        </View>

        {/* --- Section 3: Daily Habits / Tasks --- */}
        <View className="px-6 mb-10">
          <ThemedText className="text-2xl font-black italic uppercase tracking-tighter mb-4">
            Daily Check-in
          </ThemedText>
          <HabitItem title="Morning Run" sub="5km around the block" done />
          <HabitItem
            title="Intermittent Fasting"
            sub="16:8 Window"
            done={false}
          />
          <HabitItem
            title="Snap Progress Photo"
            sub="Consistency is key"
            done={false}
          />
        </View>

        <View className="h-20" />
      </ScrollView>
    </ThemedView>
  );
};

// Sub-components
const WeightStat = ({ label, value, highlight = false }: any) => (
  <View className="items-center">
    <ThemedText className="text-[9px] font-black uppercase text-muted-foreground tracking-widest mb-1">
      {label}
    </ThemedText>
    <ThemedText
      className={`text-lg font-black italic ${highlight ? "text-primary" : "text-foreground"}`}
    >
      {value}
    </ThemedText>
  </View>
);

const PhotoCard = ({ label, date, uri, isCurrent = false }: any) => (
  <View className="items-center">
    <View
      className={`w-[width*0.4] aspect-[3/4] bg-card border-2 rounded-[35px] overflow-hidden ${isCurrent ? "border-primary" : "border-border"}`}
    >
      <Image source={{ uri }} className="w-full h-full object-cover" />
      <View className="absolute bottom-3 left-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full items-center">
        <ThemedText className="text-white text-[8px] font-black uppercase italic tracking-widest">
          {label}
        </ThemedText>
      </View>
    </View>
    <ThemedText className="text-[10px] font-bold text-muted-foreground mt-2 italic">
      {date}
    </ThemedText>
  </View>
);

const HabitItem = ({ title, sub, done }: any) => (
  <TouchableOpacity className="flex-row items-center bg-card border border-border p-5 rounded-[25px] mb-3 shadow-sm">
    <View
      className={`w-8 h-8 rounded-xl items-center justify-center border ${done ? "bg-primary border-primary shadow-lg shadow-primary/30" : "bg-secondary border-border"}`}
    >
      {done && <Trophy size={14} color="white" />}
    </View>
    <View className="ml-4 flex-1">
      <ThemedText
        className={`text-sm font-black uppercase italic tracking-tight ${done ? "text-primary" : "text-foreground"}`}
      >
        {title}
      </ThemedText>
      <ThemedText className="text-[10px] font-bold text-muted-foreground italic">
        {sub}
      </ThemedText>
    </View>
  </TouchableOpacity>
);

export default MyGoal;
