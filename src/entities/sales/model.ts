import { SalesData } from '../../shared/types';

export const mockSales: SalesData[] = [
  {
    id: '1',
    product: 'Premium Plan',
    revenue: 29999,
    units: 45,
    date: new Date('2024-01-15'),
    category: 'Subscription'
  },
  {
    id: '2',
    product: 'Basic Plan',
    revenue: 14999,
    units: 128,
    date: new Date('2024-01-15'),
    category: 'Subscription'
  },
  {
    id: '3',
    product: 'Enterprise',
    revenue: 89999,
    units: 12,
    date: new Date('2024-01-14'),
    category: 'Enterprise'
  },
  {
    id: '4',
    product: 'Add-ons',
    revenue: 4999,
    units: 67,
    date: new Date('2024-01-14'),
    category: 'Additional'
  }
];

export const getSalesData = (): SalesData[] => mockSales;

export const getTotalRevenue = (): number => 
  mockSales.reduce((total, sale) => total + sale.revenue, 0);

export const getSalesByCategory = () => {
  const categoryData = mockSales.reduce((acc, sale) => {
    acc[sale.category] = (acc[sale.category] || 0) + sale.revenue;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(categoryData).map(([name, value]) => ({ name, value }));
};