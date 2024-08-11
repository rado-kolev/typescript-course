import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// ? export const useAppDispatch: () => AppDispatch = useDispatch;

// ? This line is creating a custom hook called useAppDispatch that wraps around the useDispatch hook from Redux. The useDispatch hook returns the dispatch function from the Redux store. By creating a custom hook useAppDispatch, you can ensure that the dispatch function is correctly typed with your application's specific dispatch type (AppDispatch).


// ? export const useAppSelector: TypedUseSelectorHook = useSelector;

// ? This line is creating a custom hook called useAppSelector that wraps around the useSelector hook from Redux. The useSelector hook allows you to extract data from the Redux store state. By creating a custom hook useAppSelector, you can ensure that the selector functions passed to this hook are correctly typed with your application's specific state type (RootState).