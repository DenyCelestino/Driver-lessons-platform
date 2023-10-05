import './globals.css'

export const metadata = {
  title: 'Growskills Driver Lessons',
  description: 'Click to Learn Driver Lessons',
  manifest: '/manifest.json',
  icons: {
    apple: '/icon-192x192.png'
  },
  themeColor: '#DC4266'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
