import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MainScreen = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Welcome To <Text style={styles.brand}>atract.in</Text>
      </Text>
      <Text style={styles.subtitle}>Choose your portal to get started</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>For Administrators</Text>
        <TouchableOpacity
          style={[styles.button, styles.adminBtn]}
          onPress={() => navigation.navigate('AdminLogin')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonOutline, styles.adminOutlineBtn]}
          onPress={() => navigation.navigate('AdminRegister')}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>For Employers</Text>
        <TouchableOpacity
          style={[styles.button, styles.employerBtn]}
          onPress={() => navigation.navigate('EmployerLogin')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonOutline, styles.employerOutlineBtn]}
          onPress={() => navigation.navigate('EmployerRegister')}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>For Job Seekers</Text>
        <TouchableOpacity
          style={[styles.button, styles.jobBtn]}
          onPress={() => navigation.navigate('JobSeekerLogin')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonOutline, styles.jobOutlineBtn]}
          onPress={() => navigation.navigate('JobSeekerRegister')}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
    color: 'black',
  },
  brand: {
    color: 'blue',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: 'black',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonOutlineText: {
    fontSize: 16,
    fontWeight: '700',
  },

  adminBtn: {
    backgroundColor: '#e53935',
  },
  adminOutlineBtn: {
    borderColor: '#e53935',
  },
  employerBtn: {
    backgroundColor: '#1e88e5',
  },
  employerOutlineBtn: {
    borderColor: '#1e88e5',
  },
  jobBtn: {
    backgroundColor: '#43a047',
  },
  jobOutlineBtn: {
    borderColor: '#43a047',
  },
});

export default MainScreen;
