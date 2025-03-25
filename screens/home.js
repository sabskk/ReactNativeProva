import {View, Text, Image, Button, StyleSheet, ImageBackground} from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Text style={styles.title}> Colégio Farmington </Text>
                <Button title='Login' color={'red'}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.bodytext}>Com uma biblioteca de grande acervo;</Text>
                <Image style={styles.bodyimg} source={{uri:"https://magicgramas.com.br/blog/wp-content/uploads/2018/11/2.jpg"}}/>
            </View>
            <View style={styles.content}>
                <Image style={styles.bodyimg} source={{uri:"https://blog-leiturinha-novo.s3.us-east-1.amazonaws.com/production/uploads/2019/01/biblioteca.jpg"}}/>
                <Text style={styles.bodytext}>Brincadeiras intuitivas para os menores;</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.bodytext}>E salas de aula aconchegantes para os estudantes.</Text>
                <Image style={styles.bodyimg} source={{uri:"https://conceito.de/wp-content/uploads/2019/04/sala-de-aula.jpg"}}/>
            </View>
            <View style={styles.contentbutton}>
                <Button title='Faça Sua Matrícula' color={'red'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#2887c1',
    },
    title:{
        fontSize: '20px',
    },
    logo:{
        width: 100,
        height: 100,
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px'
    },
    bodytext:{
        marginRight: '10px',
        marginLeft: '10px',
    },
    bodyimg:{
        width: 190,
        height: 150,
    },
    contentbutton:{
        alignItems: 'center',
        justifyContent: 'center',
    },
})