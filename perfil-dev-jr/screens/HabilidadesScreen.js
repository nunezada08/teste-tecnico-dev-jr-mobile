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
                    <View style={styles.linhaHabilidade}>
                        <Image
                            source={require('../assets/JavaScript-logo.png')}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 15,
                                marginTop: 60,
                            }}></Image>
                        <Image
                            source={require('../assets/react-js.png')}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 15,
                                marginTop: 60,
                            }}></Image>

                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlp_KBiJxmSfZOQTPQwzVgtrRoI4qJChhjQ&s',
                            }}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 15,
                                marginTop: 60,
                            }}></Image>
                    </View>
                    <View style={styles.linhaHabilidade}>
                        <Image
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgl7wpiJVouzQ_6Jgf4zGvIN4uiRsOYOcbQ&s',
                            }}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 15,
                                marginTop: 60,
                            }}></Image>
                        <Image
                            source={require('../assets/react-js.png')}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 15,
                                marginTop: 60,
                            }}></Image>
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
        padding: 20,
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
        backgroundColor: '#1E293B',
        borderRadius: 20,
        width: 380,
        borderRadius: 20,
        height: 370
    },
    linhaHabilidade: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
