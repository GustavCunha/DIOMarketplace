import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {addToCartSuccess} from './actions';

function* addToCart({id}){
    const productExists = yield select((state) =>
        state.cart.find((product) => product.id == id)
    );

    if(productExists){
        // disparar action para atualizar a quantidade no carrinho
    }else{
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
        }

        yield put(addToCartSuccess(data));
    }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
