import { StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import  Button  from '@/components/ui/Button';
import  {View}  from 'react-native';
import ProductListItem from '@/components/ui/ProductListItem';
import products from '@/assets/data/products';

export default function MenuScreen() {
  const router = useRouter();

  const handleProductPress = (id) => {
    router.push(`/product/${id}`); // Navigate to product details screen with the product ID
  };

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductListItem
          product={item}
          onPress={() => handleProductPress(item.id)}
        />
      )}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}

const styles = StyleSheet.create({});



