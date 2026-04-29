import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Let\'s Talk with Bossbaby CBO. Find our contact information, office hours, and send us a message.',
};

export default function ContactPage() {
  return <ContactForm />;
}
