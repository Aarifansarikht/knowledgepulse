import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from '../../types';

interface CourseState {
  items: Course[];
  wishlist: string[];
  enrolled: string[];
  loading: boolean;
}

const initialState: CourseState = {
  items: [],
  wishlist: [],
  enrolled: [],
  loading: false,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.items = action.payload;
    },
    toggleWishlist: (state, action: PayloadAction<string>) => {
      const index = state.wishlist.indexOf(action.payload);
      if (index === -1) {
        state.wishlist.push(action.payload);
      } else {
        state.wishlist.splice(index, 1);
      }
    },
    enrollCourse: (state, action: PayloadAction<string>) => {
      if (!state.enrolled.includes(action.payload)) {
        state.enrolled.push(action.payload);
      }
    },
  },
});

export const { setCourses, toggleWishlist, enrollCourse } = courseSlice.actions;
export default courseSlice.reducer;
