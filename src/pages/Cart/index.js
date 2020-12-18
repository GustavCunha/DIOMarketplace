import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Feather} from '@expo/vector-icons';
import * as CartActions from '../../store/modules/cart/actions';
import { View } from 'react-native';
import EmptyCart from '../../components/EmptyCart';

import {
    ActionButton,
    ActionContainer,
    Container,
    Product,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductPriceContainer,
    ProductQuantity,
    ProductSinglePrice,
    ProductTitle,
    ProductTitleContainer,
    SubTotalValue,
    TotalContainer,
    TotalProductsContainer,
    TotalProductsText,
} from './styles';

export default function Cart(){

    const dispatch = useDispatch();

    const products = useSelector(({cart}) => cart);

    const cartSize = useMemo(()=> {
        return products.length || 0;
    }, [products]);

    const cartTotal = useMemo(()=> {
        const cartAmount = products.reduce((acc, product) => {
            const totalPrice = acc + (product.price * product.amount);
            return totalPrice;
        }, 0);

        return cartAmount;
    }, [products]);

    function increment(product) {
        dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
    }

    function decrement(product) {
        dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
    }

    function removeFromCart(id) {
        dispatch(CartActions.removeFromCart(id));
    }

    return(
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    key={(item) => item.id}
                    ListEmptyComponent={<EmptyCart/>}
                    ListFooterComponent={<View/>}
                    ListFooterComponentStyle={{
                        height: 80
                    }}
                    renderItem={({item}) => (
                        <Product>
                            <ProductImage source={{uri: item.image_url}} />
                            <ProductTitleContainer>
                                <ProductTitle>{item.title}</ProductTitle>

                                <ProductPriceContainer>
                                    <ProductSinglePrice>R$ {item.price}</ProductSinglePrice>

                                    <TotalContainer>
                                        <ProductQuantity>{item.amount}x</ProductQuantity>

                                        <ProductPrice>R$ {item.price * item.amount}</ProductPrice>
                                    </TotalContainer>
                                </ProductPriceContainer>
                            </ProductTitleContainer>

                            <ActionContainer>
                                <ActionButton onPress={() => increment(item)}>
                                    <Feather name="plus" size={16} color='#e83f5b' />
                                </ActionButton>

                                <ActionButton onPress={() => item.amount > 1 ? decrement(item) : removeFromCart(item.id)}>
                                    <Feather name="minus" size={16} color='#e83f5b' />
                                </ActionButton>
                            </ActionContainer>
                        </Product>
                    )}
                />
            </ProductContainer>

            <TotalProductsContainer>
                <Feather name="shopping-cart" size={24} color='#fff' />
                <TotalProductsText>{cartSize} {cartSize == 1 ? 'item' : 'itens'}</TotalProductsText>
                <SubTotalValue>R$ {cartTotal}</SubTotalValue>
            </TotalProductsContainer>
        </Container>
    );
}
