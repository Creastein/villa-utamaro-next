import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Amenities from '@/components/Amenities'

// Mock next-intl
jest.mock('next-intl', () => ({
    useTranslations: () => (key: string) => key,
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
    useParams: () => ({ locale: 'en' }),
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
    Droplets: () => <div data-testid="icon-droplets" />,
    Car: () => <div data-testid="icon-car" />,
    CigaretteOff: () => <div data-testid="icon-cigarette-off" />,
    Wifi: () => <div data-testid="icon-wifi" />,
    Bath: () => <div data-testid="icon-bath" />,
    Utensils: () => <div data-testid="icon-utensils" />,
    Tv: () => <div data-testid="icon-tv" />,
    Sun: () => <div data-testid="icon-sun" />,
    Heart: () => <div data-testid="icon-heart" />,
    Plane: () => <div data-testid="icon-plane" />,
}))

describe('Amenities Component', () => {
    it('renders amenities section', () => {
        render(<Amenities />)

        // Check for main title (key mocked)
        expect(screen.getByText('title')).toBeInTheDocument()
        // Check for subtitle
        expect(screen.getByText('subtitle')).toBeInTheDocument()
    })

    it('renders amenity categories from data', () => {
        render(<Amenities />)

        // Check for a category from the data (based on en locale data in amenities.ts)
        // "Bath & Bedroom" is one of the categories
        expect(screen.getByText('Bath & Bedroom')).toBeInTheDocument()

        // Check for an item in that category
        expect(screen.getByText('Bathtub')).toBeInTheDocument()
    })
})
