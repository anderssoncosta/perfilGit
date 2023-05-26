import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../services/api';

export default function Perfil() {
  
  const [repos, setRepos] = useState('')
  const [reposUser, setReposUser] = useState(null)

  const limpar = () => {
    setRepos('')
    setReposUser(null)
  }

  async function buscar(){
    if(repos === ''){
      alert('Digite um usuário válido')
      setRepos('')
      return
    }
    try {
      const resp = await api.get(`/${repos}/repos`)
      setReposUser(resp.data)
      Keyboard.dismiss()
      setRepos('')
      console.log(resp.data)
      
    } catch (error) {
      alert(`Usuário não encontrado`)
    }

  }


  return (
    <View style={styles.container}>
      <View style={styles.areaInfo} >
        <Text style={styles.titulo} >Buscar repositórios GitHub</Text>
        <TextInput
          style={styles.input}
          placeholder='Listar repositórios'
          value={repos}
          onChangeText={(item) => setRepos(item)}
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


      { reposUser && 
        <View style={styles.resultado} >
            <View style={styles.areaResultado}>
              <Text style={styles.itemText} >Repositórios:</Text>
              <ScrollView showsVerticalScrollIndicator={false} >
                {reposUser.map(listar => <Text style={styles.lista} key={listar.id} > {`Nome: ${listar.name}`}</Text>)}

              </ScrollView>

              {/* <FlatList
                showsHorizontalScrollIndicator={false}
                data={gitUser}
                keyExtractor={ item => item.id }
                renderItem={({item}) => <Text data={item.name}/> }
              /> */}

            </View>
        </View>

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
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
    color: "#fff",
    fontWeight: 'bold',
    marginBottom: 5
  },
  areaResultado: {
    width: '95%',
    height: '90%',
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
  lista: {
    fontSize: 20
  }
});
