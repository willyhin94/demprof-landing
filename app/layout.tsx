import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DemProf — ремонт квартир под ключ в Москве',
  description:
    'Полный ремонт квартир. Бесплатный замер, фиксированная смета, гарантия 2 года. Более 15 лет опыта.',
  keywords:
    'ремонт квартир, капитальный ремонт, дизайн квартиры, ремонт в новостройке',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://demprof.ru',
    title: 'DemProf — ремонт квартир под ключ',
    description:
      'Полный ремонт квартир с гарантией. Бесплатный замер и смета за 1 день.',
    siteName: 'DemProf',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DemProf',
    description: 'Ремонт квартир под ключ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'DemProf',
              description:
                'Компания по ремонту квартир с полным спектром услуг',
              url: 'https://demprof.ru',
              telephone: '+7-XXX-XXX-XXXX',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'RU',
                addressLocality: 'Москва',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
