import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Html } from "@react-email/html";

interface MagicLinkEmailProps {
  url: string;
  verificationCode: string;
}

export default function MagicLinkEmail({
  url = "https://localhost:3000/login/magic-link",
  verificationCode = "123456",
}: MagicLinkEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>Authenticate with Magic Link</Preview>
      <Body style={styles.container}>
        <Container>
          <Section style={styles.section}>
            <Heading style={styles.heading}>
              Click the link below to access your account
            </Heading>

            <Link href={`${url}?code=${verificationCode}`} style={styles.link}>
              link
            </Link>
          </Section>
          <Section style={styles.section}>
            <Text style={styles.text}>
              Or copy and paste the following link into your browser:
            </Text>
            <Text style={styles.link}>{`${url}?code=${verificationCode}`}</Text>
          </Section>

          <Hr />

          <Section style={styles.section}>
            <Text style={styles.text}>
              If you did not request this, please ignore this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
  },
  heading: {
    fontSize: "24px",
    color: "#343a40",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  text: {
    fontSize: "16px",
    color: "#6c757d",
    marginBottom: "20px",
  },
};
