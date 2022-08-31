import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from '../store'

import AuthContainer from '../modules/auth/containers/AuthContainer'

const AppRouter = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AuthContainer />} />
            </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default AppRouter