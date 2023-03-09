import * as React from 'react'

export const SelectedContext = React.createContext()

function selectedReducer(state, action) {
  switch (action.type) {
    case 'select': {
      return action.item
    }
    case 'clear': {
      return {}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function SelectedProvider({children}) {
  const [state, dispatch] = React.useReducer(selectedReducer, {})

  const value = {state, dispatch}

  return <SelectedContext.Provider value={value}>{children}</SelectedContext.Provider>
}

export {SelectedProvider}