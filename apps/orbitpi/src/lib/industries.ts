// Industry pages. Each entry generates /industries/<slug>/ and feeds the
// home page industry explorer, footer and sitemap.
import type { Block, Faq } from './products';

export interface Industry {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  products: string[]; // product slugs, most relevant first
  wins: string[];
  challenges: Block[];
  faqs: Faq[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    short: 'Raw material, plant assets, supplier bills',
    metaTitle: 'Inventory, Asset & Accounting Software for Manufacturing | OrbitPi',
    metaDescription: 'OrbitPi helps manufacturers track raw material lots, plant machinery and supplier invoices with AI OCR, inventory, asset management and accounting.',
    h1: 'AI back-office software for manufacturers',
    intro: 'Keep raw material stock, plant machinery and supplier invoices in one connected system.',
    products: ['ai-document-ocr', 'warehouse-inventory-management', 'asset-management-software', 'accounting-software'],
    wins: ['Supplier bills read and posted automatically', 'Raw material tracked by lot and bin', 'Machine maintenance and warranties on schedule'],
    challenges: [
      { title: 'Supplier invoices pile up', body: 'DocAI reads each invoice and Ledger posts it, so accounts payable keeps pace with purchasing.' },
      { title: 'Raw material goes missing', body: 'Stock tracks every lot by bin, so you know what is on hand before planning a run.' },
      { title: 'Machines fail without warning', body: 'Assets records service history, warranties and complaints for every machine.' },
    ],
    faqs: [
      { q: 'Which OrbitPi products suit a manufacturer?', a: 'Most manufacturers start with Stock for raw material and finished goods, Assets for plant machinery, DocAI for supplier invoices and Ledger for the books.' },
      { q: 'Can OrbitPi track raw material by batch?', a: 'Yes. OrbitPi Stock tracks lots with expiry and bin location from receipt to consumption.' },
    ],
  },
  {
    slug: 'distribution',
    name: 'Distribution',
    short: 'Multi-warehouse stock, dealer leads, GST',
    metaTitle: 'Distribution Software: Inventory, Leads & GST Accounting | OrbitPi',
    metaDescription: 'OrbitPi gives distributors and wholesalers live multi-warehouse stock, AI calling for dealer enquiries and GST-ready multi-branch accounting.',
    h1: 'Software for distributors and wholesalers',
    intro: 'Run stock across warehouses and follow up every dealer enquiry, with books that stay GST-ready.',
    products: ['warehouse-inventory-management', 'lead-management-ai-voice-agent', 'accounting-software'],
    wins: ['Live stock across every warehouse', 'AI calls new dealer enquiries', 'GST billing and multi-branch books'],
    challenges: [
      { title: 'Stock is spread across sites', body: 'Stock shows quantities by warehouse and bin in one view.' },
      { title: 'Enquiries go cold', body: 'The Leads voice agent calls new dealer enquiries and routes qualified ones to sales.' },
      { title: 'Branches keep separate books', body: 'Ledger runs multi-branch accounting with inter-branch clearing.' },
    ],
    faqs: [
      { q: 'Can OrbitPi handle several warehouses and branches?', a: 'Yes. Stock supports multiple warehouses and Ledger supports multiple companies and branches.' },
      { q: 'Does OrbitPi support GST for distributors?', a: 'Yes. OrbitPi Ledger includes an India statutory pack for GST and TDS/TCS.' },
    ],
  },
  {
    slug: 'logistics-3pl',
    name: 'Logistics & 3PL',
    short: 'Client-owned stock, pallets, PODs',
    metaTitle: '3PL Warehouse & Logistics Document Software | OrbitPi',
    metaDescription: 'OrbitPi helps 3PL and logistics companies manage client-owned stock, pallet tracking and AI OCR for lorry receipts and proof-of-delivery documents.',
    h1: 'Warehouse and document software for 3PL and logistics',
    intro: 'Hold stock for many clients and process delivery paperwork in minutes.',
    products: ['warehouse-inventory-management', 'ai-document-ocr', 'asset-management-software'],
    wins: ['Separate stock per client owner', 'Pallet (LPN) tracking and scanning', 'Lorry receipts and PODs read by AI'],
    challenges: [
      { title: 'Many clients, one warehouse', body: 'Stock keeps inventory separate by owner, with reporting per client.' },
      { title: 'Paperwork slows billing', body: 'DocAI reads lorry receipts and PODs so billing can start sooner.' },
      { title: 'Equipment is hard to track', body: 'Assets tags forklifts, scanners and racks with QR codes.' },
    ],
    faqs: [
      { q: 'Can OrbitPi Stock manage inventory for multiple 3PL clients?', a: 'Yes. Stock supports multiple stock owners in the same warehouse, each reported separately.' },
      { q: 'Can DocAI read lorry receipts?', a: 'Yes. You can define lorry receipts and proof-of-delivery documents as document types in DocAI.' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & e-commerce',
    short: 'Store and warehouse stock, returns',
    metaTitle: 'Retail & E-commerce Inventory and Accounting Software | OrbitPi',
    metaDescription: 'OrbitPi helps retail and e-commerce businesses sync store and warehouse stock, reserve stock for orders and keep GST accounting current.',
    h1: 'Inventory and accounting software for retail and e-commerce',
    intro: 'Sync stock between stores and warehouses and keep the books current.',
    products: ['warehouse-inventory-management', 'lead-management-ai-voice-agent', 'accounting-software'],
    wins: ['Stock by store, bin and serial', 'Reserved stock for open orders', 'Daily sales posted to the ledger'],
    challenges: [
      { title: 'Overselling', body: 'Stock reserves quantities for open orders so available stock stays accurate.' },
      { title: 'Returns and serials', body: 'Track serial numbers through sale and return.' },
      { title: 'Month-end rush', body: 'Ledger keeps vouchers current so closing is routine.' },
    ],
    faqs: [
      { q: 'Can OrbitPi reserve stock for orders?', a: 'Yes. OrbitPi Stock supports reservations and allocation strategies.' },
      { q: 'Does OrbitPi track serial numbers?', a: 'Yes. Stock tracks individual serial numbers through every movement.' },
    ],
  },
  {
    slug: 'healthcare-pharma',
    name: 'Healthcare & pharma',
    short: 'Batch and expiry, medical equipment',
    metaTitle: 'Pharma Inventory & Medical Equipment Asset Software | OrbitPi',
    metaDescription: 'OrbitPi helps healthcare and pharma businesses track batches and expiry, manage medical equipment with QR codes and capture purchase documents with AI.',
    h1: 'Batch tracking and asset software for healthcare and pharma',
    intro: 'Track batches, expiry dates and costly medical equipment in one place.',
    products: ['warehouse-inventory-management', 'asset-management-software', 'ai-document-ocr'],
    wins: ['Batch and expiry tracking', 'Equipment register with QR tags', 'Purchase documents captured by AI'],
    challenges: [
      { title: 'Expired stock', body: 'Stock tracks expiry by lot so older batches are used first.' },
      { title: 'Equipment servicing', body: 'Assets records warranties, service and complaints for each device.' },
      { title: 'Manual purchase entry', body: 'DocAI extracts supplier invoices and delivery notes.' },
    ],
    faqs: [
      { q: 'Can OrbitPi track medicine batches and expiry?', a: 'Yes. OrbitPi Stock tracks lots with expiry dates by bin location.' },
      { q: 'Can I manage medical equipment in OrbitPi?', a: 'Yes. OrbitPi Assets keeps a register with QR tags, warranties and service history.' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real estate',
    short: 'High-volume enquiries, property papers',
    metaTitle: 'Real Estate Lead Management with AI Calling | OrbitPi',
    metaDescription: 'OrbitPi helps real estate teams call and qualify every property enquiry with an AI voice agent, route leads by project and digitise property documents.',
    h1: 'Real estate lead management with AI voice calling',
    intro: 'Answer every property enquiry and digitise the paperwork.',
    products: ['lead-management-ai-voice-agent', 'ai-document-ocr', 'accounting-software'],
    wins: ['AI voice agent calls every enquiry', 'Leads routed by project and location', 'Property documents read into records'],
    challenges: [
      { title: 'Enquiry spikes', body: 'The voice agent calls every new enquiry, even during campaign peaks.' },
      { title: 'Wrong rep, lost lead', body: 'Routing rules send leads to the team for that project and city.' },
      { title: 'Paper-heavy deals', body: 'DocAI reads application and booking forms into records.' },
    ],
    faqs: [
      { q: 'Can the AI voice agent qualify property buyers?', a: 'Yes. You set the qualifying questions, such as budget, location and timeline, and the agent records the answers.' },
      { q: 'Can leads be routed by project?', a: 'Yes. Routing rules can assign leads by project, city, source or any field.' },
    ],
  },
];

export const getIndustry = (slug: string): Industry | undefined => INDUSTRIES.find((i) => i.slug === slug);
export const industryHref = (slug: string): string => `/industries/${slug}/`;
