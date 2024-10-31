import React from 'react';
import ReactDOM from 'react-dom/client';

const movie = "듄 파트2";
const header = "100만 관객 동원"
// const content = movie;
const url = "https://i.namu.wiki/i/EBnXxQjDFnQRItujvTQ61BBkgCb5-rqskUO9uhVXncxZU_I_gkzd3FBN2VDwCYo637zDjzJtdmdAHj_g7l9mow.webp"
function reservation(){
    alert("영화 예매 확인되었습니다~!!")
}
function Movie(){

    return (
        <div className='outer'>
            <div className='content'>
                <h2 className='h2-1'>{movie}</h2>
                <h2 className='h2-2'>{header}</h2>
                <div className='iamgeDiv'>
                    <img src={url} width={300} height={300} alt='button'/>
                </div>
                <div className='buttonDiv'>
                    <button onClick={reservation}>영화 예매하기</button>
                </div>


            </div>
        </div>
    )
}
;
export default Movie;