import { Component } from "react";
import {PropTypes} from 'prop-types';

/** 오류 
 * 1.존재하지 않는 컴포넌트 출력
 * (컴포넌트를 만든 이후에 이름은 가능하면 바꾸지말것)
 * >이름을 바꾼 후에는 바꾼 그이름으로 모든 컴포넌트 
 * 
 * 2.{}를 닫지않았을경우
 * >>오류코드를 보면서 각 line에 있는 코드들을
 *          주석/삭제 처리하면서 확인
 */

class OtherComp extends Component{
    render(){
        const {name} = this.props;
        return(
            /** name에 기본값이 없으면 삼항연산자 사용 */
            <div>{name ? name : '이름'}</div>
        );
    }
}

//props이 전달되지않았을때  undefined대신 기본으로 들어갈값
OtherComp.defaultProps = {
    name : "기본이름"
};
OtherComp.propTypes = {
    name: PropTypes.string //string으로 고정한다 but 다른것을 쓸 수 있지만 경고창뜸! 
};

export default OtherComp;