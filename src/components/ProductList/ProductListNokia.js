import React, { Component } from 'react'
import Nokia from '../Mobiles/Nokia'
import ProductTitle from '../ProductTitle'
import {ProductConsumer} from '../../Context'

export default class ProductListNokia extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                <ProductTitle name='Our' title='Nokia' /> 
                    <div className='container py-5'>
                        <div className='row'>
                            <ProductConsumer>
                                {(context) => {
                                    return context.products.map((product) => {
                                        if (product.type ==='Nokia') {
                                            return <Nokia key={product.id} item={product}/>
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
