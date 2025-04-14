import React from 'react'
import Header from '../Header/Header'
import UpperFooter from '../UpperFooter/UpperFooter'
import Footer from '../Footer/Footer'
import { footerLists } from '../Footer/FotterLists'

function LayOut({children}) {
    return (
        <div>
            <Header />
            {children}
            <UpperFooter />
            {
            footerLists.map((singleList) =>{
                return (
                    <Footer 
                        col1={singleList.col1}
                        col2={singleList.col2}
                        col3={singleList.col3}
                        col4={singleList.col4}
                    />
                ) 
                }         
            )
            }
        </div>
    )
}

export default LayOut
