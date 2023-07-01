import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    lineHeight: 1.5,
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to your personal PhoneBook <PhoneIphoneIcon fontSize="large" />
      </h1>
    </div>
  );
}
