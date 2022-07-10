import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
 
    const [pages, setPages] = useState([])
    const [informationAbout, setInformationAbout] = useState()

    const pageNames = ['Products', 'Solutions', 'About']

    async function getInfo() {
        try {
            const response = await axios.get('https://adchitects-cms.herokuapp.com/pages',
          {
            auth: {
              username: 'adchitects',
              password: 'jsrulezzz',
            },
          }
        )
        setPages(response.data)
        } catch (err) {
            console.error(err)
        }   
    }  

    async function getInfoAbout() {
      try {
          const response = await axios.get(`https://adchitects-cms.herokuapp.com/page/MPz3uDxgKR`,
        {
          auth: {
            username: 'adchitects',
            password: 'jsrulezzz',
          },
        }
      )
      setInformationAbout(response.data.sections)
      } catch (err) {
          console.error(err)
      }   
    }

  useEffect(() => {
      (async () => {  
          await getInfo();
          await getInfoAbout();
      })();
  },[]) 

  return (
    <AppContext.Provider
      value={{
          pages,
          setPages,
          pageNames,
          informationAbout,
          setInformationAbout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
