import { Tabs } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
                <Entypo name="eye" size={24} color="black" />
            ) : (
                <Entypo name="eye" size={24} color="gray" />
            ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="black"
              />
            ) : (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="gray"
              />
            ),
        }}
      />

      <Tabs.Screen
        name="bio"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="guy-fawkes-mask"
                size={24}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                name="guy-fawkes-mask"
                size={24}
                color="gray"
              />
            ),
        }}
      />
    </Tabs>
  );
}