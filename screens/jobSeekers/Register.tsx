import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const JobSeekerRegister = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [qualification, setQualification] = useState('');
  const [passoutYear, setPassoutYear] = useState('');
  const [dob, setDob] = useState('');
  const [experience, setExperience] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [skills, setSkills] = useState(['', '', '', '', '']);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Complete Registration</Text>
        <Text style={styles.subtitle}>
          Upload your profile picture and resume!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile No"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Highest Qualification"
          value={qualification}
          onChangeText={setQualification}
        />
        <TextInput
          style={styles.input}
          placeholder="Passout Year"
          value={passoutYear}
          onChangeText={setPassoutYear}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (YYYY-MM-DD)"
          value={dob}
          onChangeText={setDob}
        />
        <TextInput
          style={styles.input}
          placeholder="Experience (Years)"
          value={experience}
          onChangeText={setExperience}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="LinkedIn URL"
          value={linkedin}
          onChangeText={setLinkedin}
        />
        <TextInput
          style={styles.input}
          placeholder="GitHub URL"
          value={github}
          onChangeText={setGithub}
        />

        <Text style={styles.sectionTitle}>Skills (max 5)</Text>
        {skills.map((skill, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`Skill ${index + 1}`}
            value={skill}
            onChangeText={text => {
              const newSkills = [...skills];
              newSkills[index] = text;
              setSkills(newSkills);
            }}
          />
        ))}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('JobSeekerLogin')}
        >
          Already have an account? Login here
        </Text>
        <Text style={styles.backLink} onPress={() => navigation.goBack()}>
          ← Back to Home
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    color: '#43a047',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#43a047',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  linkText: {
    color: '#43a047',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  backLink: {
    marginTop: 16,
    textAlign: 'center',
    color: '#444',
  },
});

export default JobSeekerRegister;
