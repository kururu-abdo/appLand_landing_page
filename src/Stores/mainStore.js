import { configureStore } from '@reduxjs/toolkit'
import counterreducer from  '../components/Services/serviceslice';

export default configureStore({
  reducer: {counterreducer}
})