import React, { Component } from 'react'
import Sony from '../Mobiles/Sony'
import ProductTitle from '../ProductTitle'
import {ProductConsumer} from '../../Context'

export default class ProductListSony extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                <ProductTitle name='Our' title='Sony' /> 
                    <div className='container py-5'>
                        <div className='row'>
                            <ProductConsumer>
                                {(context) => {
                                    return context.products.map((product) => {
                                        if (product.type ==='Sony') {
                                            return <Sony key={product.id} item={product}/>
                                        }
                                    })
                                }}
                            </ProductConsumer>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        ) 
    }
}
