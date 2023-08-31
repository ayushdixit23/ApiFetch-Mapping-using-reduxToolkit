import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAPI = createAsyncThunk("fetchAPI", async () => {
	const api = await fetch(`https://fakestoreapi.com/products`)
	return api.json()
	console.log(api.json())
})

export const fetchs = createSlice({
	name: "fetchData",
	initialState: {
		data: [],
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAPI.fulfilled, (state, action) => {
			state.isLoading = false
			state.data = action.payload
			console.log(state.data)
		}),
			builder.addCase(fetchAPI.pending, (state, action) => {
				state.isLoading = true
				state.data = action.payload

			}),
			builder.addCase(fetchAPI.rejected, (state, action) => {
				console.log('Error', action.error)
				state.isError = true
			})
	}
})

export default fetchs.reducer