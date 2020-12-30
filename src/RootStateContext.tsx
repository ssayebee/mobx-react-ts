import React from 'react'
import { TodosStore } from './TodosStore'

type RootStateContextValue = {
  todosStore: TodosStore
}

const RootContext = React.createContext<RootStateContextValue>({} as RootStateContextValue)

const todosStore = new TodosStore()

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <RootContext.Provider value={{todosStore}}>
      {children}
    </RootContext.Provider>
  )
}
export const useRootStore = () => React.useContext(RootContext)