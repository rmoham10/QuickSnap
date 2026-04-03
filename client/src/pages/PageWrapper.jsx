import Header from './Header';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <main style={styles.main}>
        {children}
      </main>
    </>
  );
};

const styles = {
  main: {
    paddingTop: '15vh',
    width: '100%',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
};

export default PageWrapper;