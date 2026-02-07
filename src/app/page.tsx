import ProfileHeader from '@/components/ProfileHeader';
import SocialLink from '@/components/SocialLink';
import { FaGithub, FaInstagram, FaTiktok, FaPinterest, FaYoutube } from 'react-icons/fa';

export default function Home() {
  const links = [
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@chile360tours',
      icon: <FaYoutube />,
      delay: 0.05
    },
    {
      label: 'GitHub',
      href: 'https://github.com/marcmuni1975',
      icon: <FaGithub />,
      delay: 0.1
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/markdronecl',
      icon: <FaInstagram />,
      delay: 0.2
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@aerialchile360',
      icon: <FaTiktok />,
      delay: 0.3
    },
    {
      label: 'Pinterest',
      href: 'https://cl.pinterest.com/aerialchile',
      icon: <FaPinterest />,
      delay: 0.4
    }
  ];

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 1rem',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <ProfileHeader
        name="Aerial Chile"
        username="@chile360tours"
        url="https://www.youtube.com/@chile360tours"
        description="Experiencias reales en Chile 🇨🇱 | Drones y Tecnología"
        imageUrl="/avatar.jpg"  // <--- Agrega esto
      />

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {links.map((link, index) => (
          <SocialLink
            key={index}
            {...link}
          />
        ))}
      </div>

      <footer style={{
        marginTop: '3rem',
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.4)',
        textAlign: 'center'
      }}>
        © {new Date().getFullYear()} Aerial Chile. Todos los derechos reservados.
      </footer>
    </main>
  );
}
