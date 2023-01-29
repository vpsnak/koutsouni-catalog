import React from 'react'

export const PageContext = React.createContext({})

const PageContextProvider = ({children, value}) => {
  if (!value.i18n_lang) {
    value.i18n_lang = 'en_GB'
  }
  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  )
}

export default PageContext
export {PageContextProvider}