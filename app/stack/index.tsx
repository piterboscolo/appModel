import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function TelaInicial() {
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Text>Tela Inicial</Text>
            <Botao>
                <Link href="/stack/nova" style={{ color: '#fff' }}>
                    Nova Tela
                </Link>
            </Botao>
            <Botao>
                <Link href="/" style={{ color: '#fff' }}>
                    Home
                </Link>
            </Botao>
        </View>
    )
}