import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shopdata'
import './shoppage.style.scss'

class ShopPage extends React.Component{

    constructor(){
        super()
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        const {collections}=this.state
        return(
            <>
            {
                    collections.map(collection=>
                                                <CollectionPreview 
                                                collection={collection}
                                                />
                                    )
            }
               
            </>
        
            )
    }
        

}

export default ShopPage