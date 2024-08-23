import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

export default function TelaInicial() {
    const nav = useNavigation()
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Ionicons name="logo-react" size={100} />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>Modelo de App</Text>
                <Text style={{ fontSize: 16 }}>modelo básico de DrawerActions</Text>
            </View>
            <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
                <Text style={{ color: '#fff' }}>Entrar</Text>
            </Botao>
        </View>
    )
}