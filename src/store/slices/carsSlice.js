import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    searchTerm: '',
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },

    // Assumption:
    // action.payload === { name: 'ab', cost: '140' }
    addCar(state, action) {
      state.carsList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload
      })
      state.cars = updated
    }
  }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;