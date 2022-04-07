import React, { Component } from 'react'
import Realme from '../Mobiles/Realme'
import ProductTitle from '../ProductTitle'
import {ProductConsumer} from '../../Context'

export default class ProductListRealme extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                <ProductTitle name='Our' title='Realme' /> 
                    <div className='container py-5'>
                        <div className='row'>
                            <ProductConsumer>
                                {(context) => {
                                    return context.products.map((product) => {
                                        if (product.type ==='Realme') {
                                            return <Realme key={product.id} item={product}/>
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
