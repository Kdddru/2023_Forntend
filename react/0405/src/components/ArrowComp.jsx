const ArrowComp =(props) =>{
    const {name, check ,children}= props;
    
    return(

        <div>
            <h2>함수형 컴포넌트</h2>
            <p>하나의 부모태그로 전달</p>
            <p>text속성으로 가져온 props값 : {props.text}</p>
            {check && <h3>{name}</h3>}
            <p>{children}</p>
            
            
        </div>  

    ) ;
}


export default ArrowComp;