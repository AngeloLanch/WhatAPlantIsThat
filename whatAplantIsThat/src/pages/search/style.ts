import { StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components/native';

export const Title = styled.Text`
    max-width: 200px;
    font-size:  32px;
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
    color: #F6841B;
`

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    mainPage: {
        justifyContent: 'center'
    },

    page: {
        width: width,
        height: height,
        flex: 1
    },

    bg: {
        resizeMode: 'stretch'
    }
})