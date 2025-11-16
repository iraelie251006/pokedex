import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, View } from "react-native";


export default function Index() {
  const params = useLocalSearchParams()


  return (
    <>
    <Stack.Screen options={{
        title: params.name as string
    }}/>
    <ScrollView
      contentContainerStyle={{
        padding: 16
      }}
    >
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <Image 
            // @ts-ignore
                source={{uri: params.image}}
                style={{width: 150, height: 150}}
            />
        </View>
        
    </ScrollView>
    </>
    
  );
}
