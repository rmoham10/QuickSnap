import PageWrapper from './PageWrapper';

export default function Contact() {
  return (
    <PageWrapper>
        {
            <div style={styles.container}>
            <h1>Contact Us</h1>
            <p style={styles.info}>If you have any questions or need support, feel free to reach out:</p>
            <div style={styles.info}>
                <p><strong>Email:</strong> support@befit.com</p>
                <p><strong>Phone:</strong> +1 123 456 7890</p>
            </div>
            </div>
        }
    </PageWrapper>
  );
}

const styles = {
  container: {
    marginTop: 80,
    padding: '120px 20px', 
    textAlign: 'center',
    fontFamily: 'system-ui, sans-serif',
    color: '#1a1a1a',
  },
  info: {
    marginTop: 20,
    fontSize: 18,
    lineHeight: 1.6,
  },
};