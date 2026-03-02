/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: faq
 * Interface for FrequentlyAskedQuestions
 */
export interface FrequentlyAskedQuestions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  question?: string;
  /** @wixFieldType text */
  answer?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isActive?: boolean;
}


/**
 * Collection ID: partners
 * Interface for Partners
 */
export interface Partners {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  partnerName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  logoImage?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType url */
  websiteUrl?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  fullDescription?: string;
  /** @wixFieldType text */
  idealFor?: string;
  /** @wixFieldType text */
  sessionDetails?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType number */
  duration?: number;
  /** @wixFieldType boolean */
  isCustomizable?: boolean;
  /** @wixFieldType boolean */
  aceitaDomiciliar?: boolean;
}


/**
 * Collection ID: studiovalues
 * Interface for StudioValues
 */
export interface StudioValues {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  valueTitle?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  shortMotto?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  illustration?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: team
 * Interface for Equipe
 */
export interface Equipe {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  role?: string;
  /** @wixFieldType text */
  biography?: string;
  /** @wixFieldType text */
  approach?: string;
  /** @wixFieldType text */
  specialties?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  photo?: string;
}


/**
 * Collection ID: testimonials
 * Interface for Testimonials
 */
export interface Testimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  clientName?: string;
  /** @wixFieldType text */
  testimonialText?: string;
  /** @wixFieldType number */
  rating?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  clientPhoto?: string;
  /** @wixFieldType date */
  datePosted?: Date | string;
  /** @wixFieldType text */
  sourcePlatform?: string;
  /** @wixFieldType boolean */
  approved?: boolean;
}
