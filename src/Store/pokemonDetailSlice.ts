import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "."
import {
	fetchPokemonDetailAPI,
	PokemonDetailType,
} from "../Service/pokemonService"

// First, create the thunk
export const fetchPokemonDetail = createAsyncThunk(
	"pokemon/fetchPokemonDetail",
	async (name: string) => {
		const response = await fetchPokemonDetailAPI(name)
		return response
	},
	{
		condition: (name, { getState }) => {
			const { pokemonDetail } = getState() as RootState
			const pokemon = pokemonDetail.pokemonDetails[name]

			return !pokemon
		},
	}
)

interface PokemonDetailState {
	// pokemosDetails: {
	//  "key" : PokemonDetailType,
	//  "피카츄" : PokemonDetailType
	// }

	pokemonDetails: Record<string, PokemonDetailType>
}

const initialState = {
	pokemonDetails: {},
} as PokemonDetailState

// Then, handle actions in your reducers:
const pokemonDetailSlice = createSlice({
	name: "pokemonDetail",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(
			fetchPokemonDetail.fulfilled,
			(state, action: PayloadAction<PokemonDetailType>) => {
				state.pokemonDetails = {
					...state.pokemonDetails,
					[action.payload.name]: action.payload,
				}
			}
		)
	},
})

export const pokemonDetailReducer = pokemonDetailSlice.reducer
