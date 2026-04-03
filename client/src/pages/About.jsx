import PageWrapper from './PageWrapper';

export default function About() {
  return (
    <PageWrapper>
        {
            <div style={styles.page}>
            <h1>About BeFit</h1>
            <p>
                BeFit is your go-to solution for accessing gyms at airports and other locations
                using your membership or partnered cards. We aim to provide seamless, convenient,
                and flexible fitness options for our members wherever they are.
            </p>
            <p>
                <br />Our mission is to promote health and wellness while making it easy for travelers
                and cardholders to stay active. Partnering with banks and card providers, we allow
                their clients to enjoy our services without hassle, just like redeeming loyalty
                points or using special benefits with their cards.
            </p>
            <p>
                <br />With BeFit, you can track your gym usage, manage your profile, and even link
                multiple membership or partner cards for a personalized experience. Whether
                you are a frequent traveler, a casual gym-goer, or someone looking for flexible
                fitness options, BeFit makes staying active simple and rewarding.
            </p>
            <p>
                <br />We are committed to delivering a safe, hygienic, and enjoyable fitness environment,
                equipped with high-quality gym equipment and easy-to-use access for all members.
            </p>
            </div>
        }
    </PageWrapper>
  );
}

const styles = {
  page: {
    padding: '120px 20px', // space for fixed header
    fontFamily: 'system-ui, sans-serif',
    color: '#1a1a1a',
    textAlign: 'left',
    lineHeight: 1.7,
    maxWidth: '900px', // optional, keeps text from stretching too wide on large screens
    margin: '0 auto',
  },
};