import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {addToCartSuccess, updateAmountSuccess} from './actions';

function* addToCart({id}){
    const productExists = yield select((state) =>
        state.cart.find((product) => product.id == id)
    );

    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if(productExists){
        // disparar action para atualizar a quantidade no carrinho
        yield put(updateAmountSuccess(id, amount));
    }else{
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
        }

        yield put(addToCartSuccess(data));
    }
}

function* updateAmount({id, amount}){
    if(amount <= 0) return;

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
