import React from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { GlobalStyles } from './global/GlobalStyles'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

// в консоли в режиме разработки может выводиться ошибка на клик по кнопке вызова поповера, в продакшен режиме такой проблемы нет, но это внутренняя ошибка не 
// только в antd design, но также встречалась и material ui. Для того чтобы ошибки не было, нужно убрать стрикт мод, но делать я этого не стал, поскольку в 
// прод версии её нет. Если говорить коротко, то я не решился убрать стрикт мод ради оного тригера, поскольку это смешно

//TODO: remove warning and check https://github.com/ant-design/ant-design/issues/22493
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <GlobalStyles />
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
