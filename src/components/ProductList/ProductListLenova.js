import React, { Component } from 'react'
import Lenova from '../Mobiles/Lenova'
import ProductTitle from '../ProductTitle'
import {ProductConsumer} from '../../Context'

export default class ProductListLenova extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                <ProductTitle name='Our' title='Lenova' /> 
                    <div className='container py-5'>
                        <div className='row'>
                            <ProductConsumer>
                                {(context) => {
                                    return context.products.map((product) => {
                                        if (product.type ==='Lenova') {
                                            return <Lenova key={product.id} item={product}/>
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
