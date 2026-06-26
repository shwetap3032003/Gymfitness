useEffect(() => {
  getServices();
}, []);

const getServices = async () => {
  try {
    const response = await fetch(
      'https://gym-fitness-backend-lnmr.onrender.com/api/services',
    );

    const json = await response.json();

    if (json.success) {
      setServices(json.data);
    }
  } catch (e) {
    console.log(e);
  }
};

const renderItem = ({item}) => (
  <View style={styles.card}>
    <Image
      source={{uri: item.image}}
      style={styles.image}
      resizeMode="cover"
    />

    <View style={styles.content}>
      <Text style={styles.title}>{item.title}</Text>

      <Text numberOfLines={2} style={styles.description}>
        {item.shortDescription}
      </Text>

      {item.isFeatured && (
        <View style={styles.featured}>
          <Text style={styles.featuredText}>Featured</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('ServiceDetails', {
            serviceId: item._id,
          })
        }>
        <Text style={styles.buttonText}>View Service</Text>
      </TouchableOpacity>
    </View>
  </View>
);