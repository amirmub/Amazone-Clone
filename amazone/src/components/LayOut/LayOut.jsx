import React from 'react'
import Header from '../Header/Header'
import UpperFooter from '../UpperFooter/UpperFooter'
import Footer from '../Footer/Footer'
import { footerLists } from '../Footer/FotterLists'
import LowerFooter from '../LowerFooter/LowerFooter'

function LayOut({children}) {
    return (
        <div>
            <Header />
            {children}
            <UpperFooter />
            {
            footerLists.map((singleList,i) =>{
                return (
                    <Footer 
                        key={i}
                        col1={singleList.col1}
                        col2={singleList.col2}
                        col3={singleList.col3}
                        col4={singleList.col4}
                        col5={singleList.col5}
                        col6={singleList.col6}
                    />
                ) 
                }         
            )
            }
            <LowerFooter />
        </div>
    )
}

export default LayOut
