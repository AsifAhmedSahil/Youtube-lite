import React, { createContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'

 

export const Context = createContext()


export const AppContext = (props) =>{
    const [loading,setLoading] = useState(false)
    const [searchResult,setSearchResult] = useState(false)
    const [selectCategories,setSelectCategories] = useState("New")
    const [mobileMenu,setMobileMenu] = useState(false)


    useEffect(()=>{
        fetchSelectedSearchData(selectCategories)

    },[selectCategories])

    const fetchSelectedSearchData = (query) =>{
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchResult(contents)
            setLoading(false);
        })

    }

    return(
        <Context.Provider value={{loading,setLoading,searchResult,setSearchResult,mobileMenu,setMobileMenu,selectCategories,setSelectCategories}}>
                {props.children}
        </Context.Provider>
    )

}