"use client"
import { configureStore } from '@reduxjs/toolkit'
import fetchs from './slice/fetch'

export const store = configureStore({
	reducer: {
		fetchData: fetchs,
	}
})