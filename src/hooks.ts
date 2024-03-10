import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "./redux/store";

// Создаём два кастомных хука, которые по сути нужны для типизации useDispatch и useSelector
// В принципе можно и не создавать их, но тогда эту типизацию нужно будет каждый раз прописывать при вызове
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
