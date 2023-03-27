import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import PokemonCard from "../Components/PokemonCard";
import Carregamento from "../Components/Skeletons";


export default function Home(){
    const[pokemons,setPokemons]=useState([])

    useEffect(()=>{
        getPokemons()
    },[])

    const getPokemons=()=>{
        var endpoints=[]
        for(var i=1 ; i<200; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        console.log(endpoints)
        
        axios.all(endpoints.map((endpoint)=>axios.get(endpoint))).then((res)=>setPokemons(res))
        axios.get(`https://pokeapi.co/api/v2/pokemon/1/`).then((res)=>console.log(res))
    }


    const pokemonFilter=(name)=>{
        var filteredPokemon=[]
        
        if (name==='') {
            getPokemons()
        }
        else{
            for(var i in pokemons)
            if (pokemons[i].data.name.includes(name)) {/*se o array de pokemons tiver o nome igual ao pesquisado adicione ao novo array o pokemon pesquisado */
                filteredPokemon.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemon)
    }


    const pokemonColor=(types)=>{
        if (types[0].type.name==='water') {
            return '#bedee6'
        }
        if (types[0].type.name==='fire') {
            return '#e67e28'
        }
        if (types[0].type.name==='grass') {
            return '#93c43b'
        }
        if (types[0].type.name==='poison') {
            return '#c075bd'
        }
        if (types[0].type.name==='electric') {
            return '#edde4f'
        }
        if (types[0].type.name==='rock') {
            return '#63614e'
        }
        if (types[0].type.name==='normal') {
            return '#563317'
        }
        if (types[0].type.name==='ground') {
            return '#7e7747'
        }
        if (types[0].type.name==='fighting') {
            return '#c6ac01'
        }
        if (types[0].type.name==='ghost') {
            return '#372837'
        }
        if (types[0].type.name==='psychic') {
            return '#044318'
        }
        if (types[0].type.name==='bug') {
            return '#f6aecd'
        }
        if (types[0].type.name==='dragon') {
            return '#e76138'
        }
        if (types[0].type.name==='fairy') {
            return '#fc4e8b'
        }
        if (types[0].type.name==='dark') {
            return '#222642'
        }
    }


    return(
        <div>
            <Navbar pokemonFilter={pokemonFilter}/>
            <Container maxWidth='false'>
                <Grid container spacing={3}>
                    {pokemons.length===0? <Carregamento/>:
                    pokemons.map((pokemon, key)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} key={key} >
                            <PokemonCard  name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} pokemonColor={pokemonColor} />
                        </Grid>
                    ))
                    }
                </Grid>
            </Container>
        </div>
    )
}