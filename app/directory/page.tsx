import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_MEMBER_BUSINESSES } from '@/lib/queries'
import { MemberBusinessesData } from '@/lib/types'
import Header from '../components/Header'
import MemberBusinessCard from '../components/MemberBusinessCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Member Businesses | Lakewood Chamber of Commerce',
  description: 'Browse our member businesses.',
}

async function getMemberBusinesses() {
  try {
    const client = getClient()
    const data = await client.raw(GET_MEMBER_BUSINESSES, { first: 50 })
    return data?.nodeMemberBusinesses?.nodes || []
  } catch (error) {
    console.error('Error fetching member businesses:', error)
    return []
  }
}

export default async function MemberBusinessesPage() {
  const items = await getMemberBusinesses()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display">
              Member Businesses
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Explore our member businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Member Businesses Yet</h2>
              <p className="text-gray-500">
                Member Businesses will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <MemberBusinessCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
