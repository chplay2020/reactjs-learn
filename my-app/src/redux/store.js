import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/rootReducer';

const store = configureStore({
    reducer: rootReducer,
    // Middleware thunk đã được thêm sẵn trong RTK, bạn có thể thêm middleware khác ở đây nếu cần
});

export default store;


// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// export default store;