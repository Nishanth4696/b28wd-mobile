import React, { Component } from 'react'
import Asus from '../Mobiles/Asus'
import ProductTitle from '../ProductTitle'
import {ProductConsumer} from '../../Context'

export default class ProductListAsus extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                <ProductTitle name='Our' title='Asus' /> 
                    <div className='container py-5'>
                        <div className='row'>
                            <ProductConsumer>
                                {(context) => {
                                    return context.products.map((product) => {
                                        if (product.type ==='Asus') {
                                            return <Asus key={product.id} item={product}/>
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
