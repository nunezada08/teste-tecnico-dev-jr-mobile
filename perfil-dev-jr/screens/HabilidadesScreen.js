import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.nome}>Minhas habilidades</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.secaoHabilidade}>
                    <Image
                        source={require('../assets/JavaScript-logo.png')}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 15,
                            marginTop: 60,
                        }}></Image>
                    <Image
                        source={require('../assets/react-js.png')}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 15,
                            marginTop: 60,
                        }}></Image>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
    },
    header: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nome: {
        fontSize: 30,
        color: '#ffff',
        fontWeight: 'bold',
        marginTop: 20,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secaoHabilidade: {
        flexDirection: 'row',
        gap: 30
    }
});
