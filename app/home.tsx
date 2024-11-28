import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const featuredHomes = [
  {
    id: '1',
    title: 'City View Apt',
    description: 'Spacious apartment with modern amenities, located downtown.',
    image: require('../assets/images/city_view.jpg'),
  },
  {
    id: '2',
    title: 'Garden Cottage',
    description: 'Charming cottage in a quiet neighborhood, perfect for singles.',
    image: require('../assets/images/garden_cottage.jpg'),
  },
  {
    id: '3',
    title: 'Luxury Villa',
    description: 'Experience luxury living in this elegant villa with a pool.',
    image: require('../assets/images/luxury_villa.jpg'),
  },
  {
    id: '4',
    title: 'Studio Apartment',
    description: 'Affordable studio apartment, ideal for students or young professionals.',
    image: require('../assets/images/studio_apartment.jpg'),
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.companyName}>Ambu Rentals</Text>
        <View style={styles.navLinks}>
          <TouchableOpacity>
            <Text style={styles.navLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navLink}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navLink}>Features</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navLink}>Help Center</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Find Your Next Home</Text>
        <Text style={styles.subtitle}>
          Enter a location to explore amazing rental options tailored for you.
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Homes Section */}
      <View style={styles.featuredSection}>
        <Text style={styles.featuredTitle}>Our Featured Homes</Text>
        <FlatList
          data={featuredHomes}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          )}
        />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        {/* Newsletter Section */}
        <Text style={styles.footerTitle}>Subscribe to our newsletter</Text>
        <View style={styles.newsletter}>
          <TextInput
            style={styles.newsletterInput}
            placeholder="Enter your email"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.newsletterButton}>
            <Text style={styles.newsletterButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Links */}
        <View style={styles.footerLinks}>
          {['Pricing', 'About Us', 'Features', 'Help Center', 'Contact Us', 'FAQs', 'Careers'].map((link, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.footerLink}>{link}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Social Media Icons */}
        <View style={styles.socialIcons}>
          <Text style={styles.socialText}>Follow Us:</Text>
          <Image source={require('../assets/images/facebook_icon.png')} style={styles.socialIcon} />
          <Image source={require('../assets/images/instagram_icon.png')} style={styles.socialIcon} />
          <Image source={require('../assets/images/linkedin_icon.png')} style={styles.socialIcon} />
          <Image source={require('../assets/images/youtube_icon.png')} style={styles.socialIcon} />
          <Image source={require('../assets/images/twitter_icon.png')} style={styles.socialIcon} />
        </View>

        {/* Copyright */}
        <Text style={styles.footerText}>
          © 2024 Ambu Rentals, Inc. • Privacy • Terms • Sitemap
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#333',
  },
  loginButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#4A90E2',
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  featuredSection: {
    padding: 20,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '#333',
  },
  cardDescription: {
    fontSize: 12,
    color: '#666',
    marginHorizontal: 10,
  },
  footer: {
    padding: 20,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  newsletter: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  newsletterInput: {
    flex: 1,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  newsletterButton: {
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    borderRadius: 8,
  },
  newsletterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  footerLink: {
    marginHorizontal: 5,
    marginBottom: 5,
    color: '#ccc',
    fontSize: 12,
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialText: {
    fontSize: 14,
    color: '#fff',
    marginRight: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  footerText: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 10,
  },
});
