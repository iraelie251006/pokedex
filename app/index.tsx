import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

interface Pokemon {
  name: string,
  image: string,
  imageBack: string,
}
export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  useEffect(() => {
    fetchPokemons()
  }, [])

  async function fetchPokemons() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")

      const data = await response.json()

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();

          return {
            name: pokemon.name,
            image: details.sprites.front_default,
            imageBack: details.sprites.back_default,
          }
        }
      ))

      setPokemons(detailedPokemons)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <ScrollView>
      {pokemons.map(({name, image, imageBack}) => (
        <View key={name}>
          <Text>{name}</Text>
          <Image
             source={{uri: image}}
             style={{width: 150, height: 150}}
          />
          <Image
             source={{uri: imageBack}}
             style={{width: 150, height: 150}}
          />
        </View>
      ))}
    </ScrollView>
  );
}
