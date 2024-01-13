import { Description } from 'app/components/home/Description'
import { Hero } from 'app/components/home/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Description />
      <Hero /> 
    </main>
  )
}
