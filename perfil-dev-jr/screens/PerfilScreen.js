import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/202629276?v=4',
                    }}
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        marginTop: 60,
                    }}
                />
                <Text style={styles.nome}>Vitor Francisco Nunes</Text>
                <Text style={styles.cargo}>Estudante de DS - SENAI</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.sobreMim}>
                    <View style={styles.tituloSobreMim}>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 25,
                                fontWeight: 'bold',
                                marginLeft: 20,
                            }}>
                            Sobre mim
                        </Text>
                    </View>
                    <View style={styles.textoSobreMim}>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                marginLeft: 20,
                            }}>
                            Estudante de desenvolvimento de sistemas no Senai Valinhos e 3ºano do
                            Ensino Médio no Sesi. Sempre busco a aprender mais, não somente na área
                            de programação, mas em todos os ambitos profissionais e pessoais.
                        </Text>
                    </View>
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
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    nome: {
        fontSize: 30,
        color: '#ffff',
        width: 300,
        fontWeight: 'bold',
    },
    cargo: {
        color: '#3B82F6',
        fontSize: 20,
        width: 220,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sobreMim: {
        backgroundColor: '#1E293B',
        width: 368,
        height: 270,
        borderRadius: 15,
    },
    tituloSobreMim: {
        width: 368,
        height: 60,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    textoSobreMim: {
        flex: 1,
        borderRadius: 15,
    },
});
