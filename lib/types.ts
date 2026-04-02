// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
}

// Base node type
export interface DrupalNode {
  __typename?: string
  id: string
  title: string
  path: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Member Business
export interface DrupalMemberBusiness extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  businessCategory?: string
  address?: string
  phone?: string
  websiteUrl?: string
  memberSince?: string
  image?: DrupalImage
}

export interface MemberBusinessesData {
  nodeMemberBusinesses: {
    nodes: DrupalMemberBusiness[]
  }
}

// Chamber Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  ticketPrice?: string
  registrationUrl?: string
  image?: DrupalImage
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Business Resource
export interface DrupalResource extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  resourceCategory?: string
  audience?: string
  image?: DrupalImage
}

export interface ResourcesData {
  nodeResources: {
    nodes: DrupalResource[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  newsCategory?: string
  publishDate?: {
    timestamp: number
  }
  featured?: boolean
  image?: DrupalImage
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
