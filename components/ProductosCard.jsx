
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function ProductosCard({
  nombre,
  descripcion,
  stock,
  categoria,
  precio
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://placehold.co/300x200/png' }}
        style={styles.imagen}
      />

      <Text style={styles.nombre}>{nombre}</Text>
      <Text>Descripción: {descripcion}</Text>
      <Text>Stock: {stock}</Text>
      <Text>Categoría: {categoria}</Text>
      <Text style={styles.precio}>Precio: ${precio}</Text>

      <Pressable style={styles.boton}>
        <Text style={styles.textoBoton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ddd',
  },

  imagen: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },

  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  precio: {
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 8,
  },

  boton: {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
});
