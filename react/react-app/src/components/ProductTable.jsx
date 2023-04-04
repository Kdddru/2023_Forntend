import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'

import ProductRow from './ProductRow'
//필터링된 값을 테이블로 출력
export class ProductTable extends Component {


  
  render() {
    const {products} =this.props;
    const sportingProducts = products.filter((product)=>
      product.category === 'Sporting Goods'
    )
    const electronicsProducts = products.filter((product)=>
      product.category === 'Electronics'
    )

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <ProductCategoryRow category={'Sporting Goods'}/>
            {sportingProducts.map((product,index)=><ProductRow key={index} name={product.name} price = {product.price}/>)}
            <ProductCategoryRow category={'Electronics'}/>
            {electronicsProducts.map((product,index)=><ProductRow key={index} name={product.name} price = {product.price}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable