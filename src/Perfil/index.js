import { useState } from 'react';
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../services/api';

export default function Perfil() {
  
  const [git, setGit] = useState('')
  const [gitUser, setGitUser] = useState(null)

  const limpar = () => {
    setGit('')
    setGitUser(null)
  }

  async function buscar(){
    if(git === ''){
      alert('Digite um usuário válido')
      setGit('')
      return
    }
    try {
      const resp = await api.get(`/${git}`)
      setGitUser(resp.data)
      Keyboard.dismiss()
      console.log(resp.data)
      
    } catch (error) {
      alert(`Usuário não encontrado`)
    }

  }
  
  
  return (
    <View style={styles.container}>
      <View style={styles.areaInfo} >
        <Text style={styles.titulo} >Buscar Perfil GitHub</Text>
        <TextInput
          style={styles.input}
          placeholder='Pesquisar usuário'
          value={git}
          onChangeText={(usuario) => setGit(usuario)}
          />
        <View style={styles.areaBotao} >
          <TouchableOpacity 
            style={styles.areaBtn} 
            onPress={buscar}
            >
          <Text style={styles.buscar} >Buscar</Text> 
          </TouchableOpacity>
        
          <TouchableOpacity 
            style={styles.areaBtn} 
            onPress={limpar}
            >
          <Text style={styles.buscar} >Limpar</Text> 
          </TouchableOpacity>
        </View>
      </View>


      { gitUser && 
        <View style={styles.resultado} >
            <Image 
              style={styles.imgPerfil}
              source={{ uri: gitUser.avatar_url }}
            />
            <View style={styles.areaResultado} >
              <Text style={styles.itemText} >Nome: {gitUser.name}  </Text>
              <Text style={styles.itemText} >Seguidores:  {gitUser.followers}</Text>
              <Text style={styles.itemText} >Empresa:  {gitUser.company}</Text>
              <Text style={styles.itemText} >Cidade:  {gitUser.location}</Text>
              <Text style={styles.itemText} >Data Criação:  {new Date(gitUser.created_at).toLocaleDateString("pt-BR")}</Text>

            </View>
        </View>

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  areaInfo: {
    padding: 10,
  },
  titulo: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 8,
    marginTop: 8,
    padding: 8,
    fontSize: 20
  },
  areaBotao: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  areaBtn: {
    height: 40,
    backgroundColor: '#dddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '49%',
  },
  buscar: {
    fontSize: 20,
    color: '#000',
  },
  itemText: {
    fontSize: 20,
    color: "#000",
    fontWeight: 'bold',
    marginBottom: 5
  },
  areaResultado: {
    marginTop: 8,
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 10
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPerfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff'
  }
});
