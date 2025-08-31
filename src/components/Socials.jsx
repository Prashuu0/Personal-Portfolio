import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const socials = [
  { name: 'GitHub', href: 'https://github.com/yourusername', Icon: FaGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', Icon: FaLinkedin },
  { name: 'X', href: 'https://x.com/yourusername', Icon: FaXTwitter },
  { name: 'Instagram', href: 'https://instagram.com/yourusername', Icon: FaInstagram },
]

export default function Socials({ className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 transition hover:border-neutral-600 hover:text-white"
        >
          <Icon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        </a>
      ))}
    </div>
  )
}


