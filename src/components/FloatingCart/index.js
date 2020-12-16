import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {
    CartButton,
    CartPricing,
    CartTotalPrice,
    Container,
    CartButtonText
} from './styles';

export default function FloatingCart(){
    const navigation = useNavigation();

    return(
        <Container>
            <CartButton onPress={() => navigation.navigate('Cart')}>
                <Feather name="shopping-cart" size={24} color="#f3f9ff" />
                <CartButtonText>2 items</CartButtonText>

                <CartPricing>
                    <CartTotalPrice>R$ 200,00</CartTotalPrice>
                </CartPricing>

                <Feather name="chevron-right" size={24} color="#f3f9ff" />
            </CartButton>
        </Container>
    );
}
