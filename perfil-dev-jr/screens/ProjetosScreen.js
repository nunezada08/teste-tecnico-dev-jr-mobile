import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

export default function ProjetosScreen() {
    // Funções para abrir os links do GitHub
    const abrirGithubGameVault = () => {
        Linking.openURL('https://github.com/nunezada08/gameVault-projetoFinal-frontend.git');
    };

    const abrirGithubClubyx = () => {
        Linking.openURL('https://github.com/JhonatanFavoreto/projeto-clubyx-frontend.git');
    };
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.titulo}>Meus Projetos</Text>
                <View style={styles.cardProjeto}>
                    <Text style={styles.nomeProjetoGame}>Projeto Game Vault</Text>
                    <TouchableOpacity onPress={abrirGithubGameVault} activeOpacity={0.7}>
                        <FontAwesome name="github" size={28} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={styles.descProjeto}>
                        Game Vault foi um projeto desenvolvido em grupo como trabalho final do
                        semestre no curso do SENAI. O sistema tem como finalidade armazenar, ordenar
                        e avaliar jogos, tanto atuais quanto retros, para os usuários.
                    </Text>
                    <View style={styles.imagem}>
                        <Image
                            style={styles.imageExemplo}
                            source={{
                                uri: 'https://store-images.s-microsoft.com/image/apps.34631.14293400522343232.ff4bf536-ec75-44c3-889f-731ca1db2127.d22625f3-a1bf-4c21-8d06-62085c900806',
                            }}
                        />
                        <Image
                            style={styles.imageExemplo}
                            source={{
                                uri: 'https://i.etsystatic.com/10064703/r/il/55e1fd/4164589516/il_570xN.4164589516_t0eu.jpg',
                            }}
                        />
                        <Image
                            style={styles.imageExemplo}
                            source={{
                                uri: 'https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg',
                            }}
                        />
                    </View>
                </View>

                {/* --- SEGUNDO CARD: CLUBYX --- */}
                <View style={styles.cardProjeto}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.nomeProjetoGame}>Projeto Clubyx</Text>
                        <TouchableOpacity onPress={abrirGithubClubyx} activeOpacity={0.7}>
                            <FontAwesome name="github" size={28} color="#ffffff" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.descProjeto}>
                        Projeto Clubyx desenvolvido para um projeto em conjunto com SENAI e SESI, o
                        sistema oferce uma descrição focada na obra de Machado de Assís 'Memórias
                        Póstumas de Brás Cubas'. Além de uma bibliotca, simulados e tradução para o
                        inglês.
                    </Text>

                    <View style={styles.imagem}>
                        <Image
                            style={styles.imageExemplo}
                            source={{
                                uri: 'https://altabooks.com.br/wp-content/uploads/2025/12/CAPA_3000px_MEMORIAS-POSTUMAS-DE-BRAS-CUBAS_-scaled.jpg',
                            }}
                        />
                        <Image
                            style={styles.imageExemplo}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVC6yKz5NYM34e0G-BQB4kPinhzY59FO5NlAmBNU3-mQ&s=10',
                            }}
                        />
                        <Image
                            style={styles.imageExemplo}
                            source={{
                                uri: 'https://storage-aws-production.publica.la/grupo-planeta/issues/2024/02/zpRIfcJovWH8yCsp/93810f22-3eb5-46cf-aabc-b939bdcc5845_cover.jpg',
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
    },
    scrollContent: {
        paddingTop: 60,
        paddingBottom: 40,
        alignItems: 'center',
    },
    titulo: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardProjeto: {
        width: 340,
        backgroundColor: '#000000',
        padding: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#00000033',
        marginBottom: 20
    },
    nomeProjetoGame: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    descProjeto: {
        color: '#ffffff',
        marginTop: 10,
        fontSize: 18,
    },
    imagem: {
        flexDirection: 'row', // Coloca as imagens lado a lado
        justifyContent: 'space-between', // Espalha as imagens no card
        marginTop: 20, // Afasta do texto da descrição
    },
    imageExemplo: {
        width: 90, // Tamanho fixo para as 3 caberem
        height: 130, // Altura maior que largura (estilo capa de jogo)
        borderRadius: 8, // Cantos arredondados
        borderWidth: 1,
        borderColor: '#2a004d33',
        resizeMode: 'cover',
    },
});
