import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import productData from '../data/products.json' //props

export class FilterableProductTable extends Component {
  constructor(props){
    super(props)
    this.state={
      searchText : '',
      isOnlyStock : false
    }
  }
  

  //toggle 메소드를 실행할때마다 this.state.isOnlystock T/F로 바꿈

  toggleStock = () =>{
    this.setState({isOnlyStock: !this.state.isOnlyStock});
    console.log(this.state.isOnlyStock);
  }
  
  
  //1하향식 데이터 작성(부모로 부터 )
  //2. 정적데이터를 이용해서 작성
  //3. state와 props구분해서 작성
  render() {
    console.log(productData);
    //isOnlyStock이 true일때
    //porductData가 stock이 ture인것만 배열로 만들기
    const checkedProducts =
    productData.filter((product)=>product.stocked);

    return (
      <div>
      {/** 검색어,체크박스에 관한 값 */}
      <SearchBar 
        isOnlyStock={this.state.isOnlyStock}
        toggleStock = {this.toggleStock}
      />
      {/** 가져온 데이터 값을 보여줄 공간 */}
      <ProductTable products={this.state.isOnlyStock ? checkedProducts : productData}/> {/** porps 보내기 */}
      </div>
    )
  }
}

export default FilterableProductTable