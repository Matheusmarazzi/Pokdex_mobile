import { useEffect, useState } from "react";
import api from "../../services/List";
import { View, Text, Image, ScrollView, SafeAreaView  } from "react-native";
import Style from "./Style";




export default function home(){
    const [pokemons, setPokemons] = useState([]);
    
    
    useEffect(()=>{
        async function loadPokemons(){
            const response = await api.get("pokemon/?",{
                params:{
                    limit: 20,
                    offset:0,
                }
            })
            //  
            setPokemons(response.data.results)
             
        }
        loadPokemons();
        
    
        
        
     
        
    }, [])
    console.log(pokemons)
    

    return(
        <SafeAreaView style={Style.container}>
            <ScrollView >
                {
                    pokemons.map((pokemon, index)=>{
                        return(
                            <View style={Style.div} key={parseInt(index+1)}>
                                <Image
                                    source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(index+1)}.png`  }}
                                    style={Style.sprites}
                                />
                                <Text style={Style.texto}>{pokemon.name}</Text>
                            </View>
                        )
                    })
                }
                
            </ScrollView>
        </SafeAreaView>
        
    );
}