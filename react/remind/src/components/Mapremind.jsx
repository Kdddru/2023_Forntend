import React, { Component } from 'react'


class Mapremind extends Component {
    

    componentDidMount(){
        console.log('마운트되었습니다');        
    }
    componentDidUpdate(){
        console.log('업데이트 되었습니다')
    }
    componentWillUnmount(){
        console.log('삭제되었습니다')
    }

    render(){
        const {product} = this.props;
        
        const sportingProducts = product.filter((product)=>(
            product.category === "Sporting Goods"
        ));

        const electronicsProducts = product.filter((product)=>
        ( product.category === 'Electronics')
        );


        return(
            <div>
                <ul>
                    {product.map((product,index)=>
                        (<li key={index}>{product.name} : {product.price}</li>)
                    )}
                </ul>
                    <h1>sportingProducts</h1>
                <ul>
                    {sportingProducts.map((product, index)=>
                        (<li key={index}>{product.name} : {product.price}</li>)
                    )}
                </ul>
                    <h1>electronicsProducts</h1>
                <ul>
                    {electronicsProducts.map((product, index)=>
                        (<li key={index}>{product.name} : {product.price}</li>)
                    )}
                </ul>
            </div>
        )
    }
}
export default Mapremind

