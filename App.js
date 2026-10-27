import { FlatList, Pressable, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import { useState } from 'react';
import ProductosCard from './components/ProductosCard'

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false)

  const [productoNombre, setProductoNombre] = useState("")
  const [productoDescripcion, setProductoDescripcion] = useState("")
  const [productoStock, setProductoStock] = useState(0)
  const [productoCategoria, setProductoCategoria] = useState("")
  const [productoPrecio, setProductoPrecio] = useState(0)

  const [listProducts, setListProducts] = useState([
    {
      id: 1,
      nombre: "prueba",
      descripcion: "prueba",
      stock: 10,
      categoria: "prueba",
      precio: 1000
    },
    {
      id: 2,
      nombre: "prueba",
      descripcion: "prueba",
      stock: 10,
      categoria: "prueba",
      precio: 1000
    },
    {
      id: 3,
      nombre: "prueba",
      descripcion: "prueba",
      stock: 10,
      categoria: "prueba",
      precio: 1000
    },
    {
      id: 4,
      nombre: "prueba",
      descripcion: "prueba",
      stock: 10,
      categoria: "prueba",
      precio: 1000
    },
  ])

  const saveDataProducts = () => {
    setListProducts([
      ...listProducts,
      {
        id: 1,
        nombre: productoNombre,
        descripcion: productoDescripcion,
        stock: productoStock,
        categoria: productoCategoria,
        precio: productoPrecio,
      },

    ])
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Listado de Productos</Text>
      </View>

      <View style={styles.buscador}>
        <Text style={styles.buscadorText}>Buscar</Text>
        <TextInput
          style={styles.buscadorInput}
        />
      </View>

      <View style={styles.productosContenedor}
      >
        <FlatList
          data={listProducts}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <Text>No hay productos</Text>
          )}
          numColumns={2}
          renderItem={({ item }) => (
            <ProductosCard nombre={item.nombre} descripcion={item.descripcion} stock={item.stock} categoria={item.categoria} precio={item.precio} />
          )}
        >
        </FlatList>
      </View>

      <Pressable
        style={styles.botonAgregar}
        onPress={(() => setVisibleModal(!visibleModal))}
      >
        <Text style={styles.botonAgregarText}>+</Text>
      </Pressable>

      <Modal
        visible={visibleModal}
        animationType='slide'
      >
        <View style={styles.modalContenedor}>
          <View>
            <Text>Nombre</Text>
            <TextInput style={styles.inputText}
              value={productoNombre}
              onChangeText={setProductoNombre}
            />
          </View>
          <View>
            <Text>Descripcion</Text>
            <TextInput style={styles.inputText}
              value={productoDescripcion}
              onChangeText={setProductoDescripcion}
            />
          </View>
          <View>
            <Text>Stock</Text>
            <TextInput style={styles.inputText}
              value={productoStock}
              onChangeText={setProductoStock}
            />
          </View>
          <View>
            <Text>Categoria</Text>
            <TextInput style={styles.inputText}
              value={productoCategoria}
              onChangeText={setProductoCategoria}
            />
          </View>

          <Pressable style={styles.botonEnviar} onPress={saveDataProducts}>Enviar</Pressable>
  

          <Pressable
            style={styles.botonAgregar}
            onPress={(() => setVisibleModal(!visibleModal))}
          >
            <Text style={styles.botonAgregarText}>+</Text>
          </Pressable>
        </View>
      </Modal >

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10
  },

  headerText: {
    fontWeight: 'bold',
  },

  buscador: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center'
  },

  buscadorText: {
    marginRight: 280
  },

  buscadorInput: {
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
    width: 320
  },

  productosContenedor: {
    flex: 1
  },

  botonAgregar: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },

  botonAgregarText: {
    fontSize: 50,
    bottom: 5
  },

  modalContenedor: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  inputText: {
    padding: 5,
  },

  botonEnviar: {
    marginTop: 20,
    padding: 5,
    backgroundColor: 'red',
    width: 300,
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 10  
  }

});
