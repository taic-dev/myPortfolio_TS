import './globals.css'
import { Sidebar } from '@/components/templates/Sidebar';

export const metadata = {
  title: 'Taic-dev | Portfolio',
  description: 'Taic-devのポートフォリオサイトです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Secular+One&display=swap" rel="stylesheet" />
      </head>
      <body>
      <div className="max-w-[1200px] m-auto flex pt-[100px] lg:pt-[50px]">
      <Sidebar />
      <div className='max-w-[calc(95%_-_250px)] w-[100%] m-0 ml-auto lg:max-w-[100%] lg:w-[100%]'>
        {children}
          </div>
      </div>
      </body>
    </html>
  )
}
