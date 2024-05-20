import JcaNavBar from '@/components/JcaNavBar/JcaNavBar';
export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <JcaNavBar />
      {children}
    </>
  );
}
