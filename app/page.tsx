import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'

export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  const title = 'Lakewood Chamber of Commerce - Strengthening Business, Building Community'
  const description = 'Connecting, advocating, and empowering local businesses through networking, resources, and civic leadership. 650+ member businesses and 75+ annual events.'
  return { title, description, keywords: ['chamber of commerce', 'business networking', 'member directory', 'business advocacy', 'local business', 'business events'] }
}

export default async function Home() {
  const configStatus = checkConfiguration()
  if (!configStatus.isConfigured) return <SetupGuide missingVars={configStatus.missingVars} />

  const client = getClient()
  const data = await client.raw(GET_HOMEPAGE_DATA) as any
  const homepageContent = data?.nodeHomepages?.nodes?.[0] || null

  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} />
}
