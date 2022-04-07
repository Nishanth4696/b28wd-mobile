import React, { Component } from 'react'
import ProductTitle from './ProductTitle'
import {Link} from 'react-router-dom'
import './ProductList.css'

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <ProductTitle name='Our' title='Products'/>
                        <div className='row py-5'>                           
                                
                                
                                <Link to='/apple' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VoNi09V39WQ3sKXk1OVdRs1o5M3Py8_9rg&usqp=CAU' 
                                        alt='Apple'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Apple</div>
                                        </div>
                                   </div>
                                </Link>

                                <Link to='/asus' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95mr7HjVOJHpy0Xb5SUpPYXvPiguYG-BaQw&usqp=CAU' 
                                        alt='Asus'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Asus</div>
                                        </div>
                                   </div>
                                </Link>

                                <Link to='/hauwei' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BqlkeBrqXAAOu0qrkWDCYQSSAYyWnNl7Qg&usqp=CAU' 
                                        alt='Hauwei'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Huawei</div>
                                        </div>
                                   </div>
                                </Link>

                                <Link to='/lenova' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBW4GqBC3W3UFwT9r4pCw1TOuzxSU_g3XzA&usqp=CAU' 
                                        alt='Lenova'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Lenova</div>
                                        </div>
                                   </div>
                                </Link>


                                <Link to='/nokia' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXX2xAyI6RAM1lOXg53TnlZyxNRwITXpNwAg&usqp=CAU' 
                                        alt='Nokia'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Nokia</div>
                                        </div>
                                   </div>
                                </Link>

                                <Link to='/oppo' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDRUxgSzPLBpQk_4tCyd6F34wTSqSOx26rwA&usqp=CAU' 
                                        alt='Oppo'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Oppo</div>
                                        </div>
                                   </div>
                                </Link>

                                <Link to='/realme' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFLUlMgNSurLnCcrG8faqwq7AgjEwEQwlew&usqp=CAU' 
                                        alt='Realme'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Realme</div>
                                        </div>
                                   </div>
                                </Link>


                                <Link to='/samsung' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQny-oF1XTQ8Bm8heMTVZz1ksuwI9JM1Gb5Jw&usqp=CAU' 
                                        alt='Samsung'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Samsung</div>
                                        </div>
                                   </div>
                                </Link>

                                <Link to='/sony' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7lzevuNcXa7uMmPQOUO9_HKhmF4GWfOy1g&usqp=CAU' 
                                        alt='Sony'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Sony</div>
                                        </div>
                                   </div>
                                </Link>

                                <Link to='/vivo' className=' mb-sm-2 col-md-6'>
                                    <div className='imgContainer'>
                                        <img 
                                        className='img-thumbnail'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYhVCYnn9tt8Or-uK5PSgkvcb8DicJojZTg&usqp=CAU' 
                                        alt='Vivo'
                                        />
                                        <div className='imgTextPosition'>
                                            <div className='Text'>Vivo</div>
                                        </div>
                                   </div>
                                </Link>
                                

                                             
                                
                              
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        ) 
    }
}


