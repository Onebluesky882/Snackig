import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
type Post = {
  posts: string;
  id: string;
};
const activity = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const { data } = await supabase.from("posts").select();
    console.log(data);
    if (data) {
      setPosts(data);
    }
  };
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <Text style={{ marginVertical: 10 }}>
            {item.posts || "No content"}
          </Text>
        )}
      />
    </View>
  );
};
export default activity;
