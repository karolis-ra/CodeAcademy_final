import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MockApi from '../../apis/api';
import { SingleQuestion } from '../../components/SingleQuestion';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const data: any = await MockApi();
  return data;
});

export interface Option {
  label: string;
  value: string;
  custom?: { deselectAll: boolean };
}

interface Question {
  type: 'single' | 'multiple' | 'info';
  options: Option[];
  label: string;
  description?: string;
  key: string;
}

export interface answerObject {
  [key: string]: string;
}

export interface quizStateProps {
  questionNum: number;
  fetching: boolean;
  fetchedData: Question[];
  selected: answerObject;
  finished: boolean;
}

const initialState: quizStateProps = {
  fetching: true,
  questionNum: 0,
  fetchedData: [],
  selected: {},
  finished: false
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    increment: (state) => {
      state.fetchedData.length === state.questionNum + 1
        ? (state.finished = true)
        : state.questionNum++;
    },
    decrement: (state) => {
      state.questionNum--;
    },
    singleSelect: (state, action) => {
      const key = action.payload[0];
      const value = action.payload[1];
      state.selected[key] = value;
    },
    multiSelect: (state, action) => {
      const key = action.payload[0];
      const value = action.payload[1];

      if (state.selected[key]) {
        if (state.selected[key].includes('none')) {
          state.selected[key] = '';
        }
        const optionArr = state.selected[key].split('|');
        const index = optionArr.indexOf(action.payload[1]);

        optionArr.includes(action.payload[1])
          ? optionArr.splice(index, 1)
          : optionArr.push(action.payload[1]);

        state.selected[key] = optionArr.join('|');
      } else {
        state.selected[key] = value;
      }
    },
    removeOptions: (state, action) => {
      state.selected[action.payload[0]] = `${action.payload[1]}|none`;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.fetchedData = action.payload.questions;
      state.fetching = false;
    });
  }
});

export const { increment, decrement, multiSelect, singleSelect, removeOptions } = quizSlice.actions;

export default quizSlice.reducer;
