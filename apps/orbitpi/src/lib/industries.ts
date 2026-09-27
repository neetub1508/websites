// Industry pages. Each entry generates /industries/<slug>/ and feeds the
// home page industry explorer, footer and sitemap.
// Only reference shipped product capabilities (see the note in products.ts).
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
  workflow: Block[];
  faqs: Faq[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    short: 'Raw material, plant assets, supplier bills',
    metaTitle: 'Inventory, Asset & Invoice OCR Software for Manufacturers',
    metaDescription: 'OrbitPi helps Indian manufacturers track raw material by batch and bin, maintain plant machinery with AMC tracking and read supplier invoices with AI OCR.',
    h1: 'Inventory, asset and document software for manufacturers',
    intro: 'Track raw material by batch and bin, keep plant machinery serviced, and turn supplier invoices into clean data without retyping.',
    products: ['warehouse-inventory-management', 'asset-management-software', 'ai-document-ocr'],
    wins: ['Raw material tracked by batch and bin', 'Machines serviced on schedule, AMCs tracked', 'Supplier invoices read into clean data'],
    challenges: [
      { title: 'Raw material goes missing', body: 'Stock tracks every lot by bin, including material sent out for job work, so you know what is on hand before planning a run.' },
      { title: 'Machines fail without warning', body: 'Assets schedules preventive maintenance, tracks AMC contracts and records downtime, MTTR and MTBF for every machine.' },
      { title: 'Supplier invoices pile up', body: 'DocAI reads each supplier invoice, checks the line items against the total and exports clean data for your accounts team.' },
    ],
    workflow: [
      { title: 'Goods in', body: 'Raw material is received against a purchase order, inspected and put away to a bin with its batch number.' },
      { title: 'Paperwork', body: 'The supplier invoice is read by DocAI, checked and exported for your accounts team.' },
      { title: 'Plant upkeep', body: 'Machines carry QR tags. Operators report faults by scanning, and service is scheduled before it is due.' },
      { title: 'Month end', body: 'Stock is valued by FIFO or weighted average, and the asset register shows depreciation and net block.' },
    ],
    faqs: [
      { q: 'Which OrbitPi products suit a manufacturer?', a: 'Most manufacturers use Stock for raw material and finished goods, Assets for plant machinery and DocAI for supplier invoices. Each product can be used on its own.' },
      { q: 'Can OrbitPi track raw material by batch?', a: 'Yes. OrbitPi Stock tracks lots with expiry and bin location from receipt onwards, with forward and backward traceability.' },
      { q: 'Does OrbitPi Stock support job work and ITC-04?', a: 'Yes. Stock tracks material sent to and received from job workers and supports ITC-04 reporting.' },
      { q: 'Can OrbitPi schedule machine maintenance?', a: 'Yes. OrbitPi Assets runs preventive maintenance schedules and work orders, tracks AMC contracts and records downtime for each machine.' },
    ],
  },
  {
    slug: 'distribution',
    name: 'Distribution',
    short: 'Multi-warehouse stock, e-way bills, dealer leads',
    metaTitle: 'Inventory & Lead Management Software for Distributors',
    metaDescription: 'OrbitPi gives Indian distributors and wholesalers live stock across warehouses, e-way bills and delivery challans, and routed follow-up of every dealer enquiry.',
    h1: 'Software for distributors and wholesalers',
    intro: 'Run stock across warehouses and branches, ship with the right GST paperwork, and follow up every dealer enquiry on time.',
    products: ['warehouse-inventory-management', 'lead-management-ai-voice-agent', 'ai-document-ocr'],
    wins: ['Live stock across warehouses and branches', 'E-way bills and delivery challans built in', 'Every dealer enquiry routed and followed up'],
    challenges: [
      { title: 'Stock is spread across sites', body: 'Stock shows quantities by warehouse, bin and batch in one view, with transfers tracked from send to receive.' },
      { title: 'Dispatch waits on paperwork', body: 'Delivery challans and e-way bills are created from the shipment, and dispatch is blocked until the e-way bill is active.' },
      { title: 'Dealer enquiries go cold', body: 'Leads routes each new enquiry to the right branch and rep, reminds them to follow up and warns before a response target is missed.' },
    ],
    workflow: [
      { title: 'Replenish', body: 'Reorder points suggest purchase orders before fast-moving items run out.' },
      { title: 'Receive and store', body: 'Goods are received on a GRN and put away to bins by rule.' },
      { title: 'Ship', body: 'Orders are reserved, picked, packed by scan and dispatched with their e-way bill.' },
      { title: 'Sell', body: 'New dealer enquiries are captured with their source and followed up in Leads.' },
    ],
    faqs: [
      { q: 'Can OrbitPi handle several warehouses and branches?', a: 'Yes. Stock supports multiple warehouses with their own bins, branch-level access, and transfers tracked as send, in transit and receive.' },
      { q: 'Does OrbitPi generate e-way bills for distributors?', a: 'Yes. OrbitPi Stock manages the e-way bill lifecycle through a GST compliance provider, including consolidated e-way bills and vehicle updates.' },
      { q: 'Can I see stock ageing and a godown statement?', a: 'Yes. Stock reports stock on hand, the movement register, the godown statement, valuation as at any date and ageing.' },
      { q: 'How does OrbitPi help with dealer enquiries?', a: 'OrbitPi Leads captures each enquiry with its source, assigns it by branch and channel, and reminds reps to follow up within your response-time target.' },
    ],
  },
  {
    slug: 'logistics-3pl',
    name: 'Logistics & 3PL',
    short: 'Client-owned stock, pallets, delivery documents',
    metaTitle: '3PL Warehouse & Logistics Document Software | OrbitPi',
    metaDescription: 'OrbitPi helps 3PL and logistics companies keep client-owned stock separate, track pallets by LPN and read delivery documents with AI OCR.',
    h1: 'Warehouse and document software for 3PL and logistics',
    intro: 'Hold stock for many clients in one warehouse, move whole pallets by scan, and turn delivery paperwork into data.',
    products: ['warehouse-inventory-management', 'ai-document-ocr', 'asset-management-software'],
    wins: ['Separate stock per client owner', 'Pallet (LPN) tracking and scanning', 'Delivery documents read by AI'],
    challenges: [
      { title: 'Many clients, one warehouse', body: 'Every stock line in Stock carries an owner, so each client’s inventory and reports stay separate.' },
      { title: 'Paperwork slows billing', body: 'DocAI reads the delivery documents you define, such as lorry receipts and proof of delivery, into structured data.' },
      { title: 'Equipment is hard to track', body: 'Assets tags forklifts, scanners and racks with QR codes and tracks their service and AMC cover.' },
    ],
    workflow: [
      { title: 'Onboard a client', body: 'Set up the client as a stock owner with its own items and rate card.' },
      { title: 'Receive by pallet', body: 'Pallets arrive with license plate numbers and are received and put away by scan.' },
      { title: 'Dispatch', body: 'Orders are picked, packed and handed over with manifests, gate passes and LR consignments.' },
      { title: 'Close the loop', body: 'Returned delivery documents are read by DocAI and exported to your billing process.' },
    ],
    faqs: [
      { q: 'Can OrbitPi Stock manage inventory for multiple 3PL clients?', a: 'Yes. Stock supports multiple stock owners in the same warehouse, each with separate stock and reporting.' },
      { q: 'Does OrbitPi track pallets?', a: 'Yes. Pallets and cartons carry license plate numbers (LPNs) that can be moved, split and merged by scan.' },
      { q: 'Can DocAI read lorry receipts and PODs?', a: 'Yes. You define lorry receipts and proof-of-delivery documents as custom document types in DocAI, with the fields you need.' },
      { q: 'Does OrbitPi include 3PL billing?', a: 'Not yet. Client rate cards and SLA tracking are available today, and billing runs and a client portal are planned.' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & e-commerce',
    short: 'Store and warehouse stock, returns and RTO',
    metaTitle: 'Retail & E-commerce Inventory Management Software | OrbitPi',
    metaDescription: 'OrbitPi helps retail and e-commerce businesses track stock by store and warehouse, reserve stock for orders and handle returns, RMAs and RTO with serials.',
    h1: 'Inventory software for retail and e-commerce',
    intro: 'Keep store and warehouse stock accurate, reserve stock for every open order, and process returns without losing track.',
    products: ['warehouse-inventory-management', 'lead-management-ai-voice-agent', 'ai-document-ocr'],
    wins: ['Stock by store, warehouse and bin', 'Stock reserved for open orders', 'Returns and RTO handled with serials'],
    challenges: [
      { title: 'Overselling', body: 'Stock reserves quantities for open orders, so available stock stays accurate across locations.' },
      { title: 'Returns and RTO', body: 'Customer returns, RMAs and return-to-origin shipments are recorded, and serial numbers are tracked through sale and return.' },
      { title: 'Supplier bills', body: 'DocAI reads supplier invoices and credit notes into data your accounts team can use.' },
    ],
    workflow: [
      { title: 'Stock up', body: 'Goods are received on a GRN and put away to store or warehouse bins.' },
      { title: 'Sell', body: 'Each order reserves stock, so the same unit is never promised twice.' },
      { title: 'Ship', body: 'Orders are picked in waves and packed with scan verification.' },
      { title: 'Take back', body: 'Returns and RTO shipments are inspected and restocked or quarantined.' },
    ],
    faqs: [
      { q: 'Can OrbitPi reserve stock for orders?', a: 'Yes. OrbitPi Stock supports soft and hard reservations with FIFO, earliest-expiry or named-lot allocation.' },
      { q: 'Does OrbitPi track serial numbers?', a: 'Yes. Stock tracks individual serial numbers through every movement, including sale and return.' },
      { q: 'Can OrbitPi handle RTO and customer returns?', a: 'Yes. Stock records customer returns, RMAs and return-to-origin shipments, so returned stock is inspected before it is available again.' },
      { q: 'Does OrbitPi connect to Amazon, Flipkart or other marketplaces?', a: 'Not yet. Marketplace order import is planned. Today, orders can be brought in through the Stock API or Excel.' },
    ],
  },
  {
    slug: 'healthcare-pharma',
    name: 'Healthcare & pharma',
    short: 'Batch, expiry and recall, medical equipment',
    metaTitle: 'Pharma Inventory & Medical Equipment Software | OrbitPi',
    metaDescription: 'OrbitPi helps healthcare and pharma businesses track batches, expiry and recalls, and manage medical equipment with QR tags, AMCs and calibration records.',
    h1: 'Batch tracking and asset software for healthcare and pharma',
    intro: 'Track batches, expiry dates and recalls, and keep costly medical equipment serviced and calibrated.',
    products: ['warehouse-inventory-management', 'asset-management-software', 'ai-document-ocr'],
    wins: ['Batch, expiry and recall control', 'Equipment register with QR tags', 'Purchase documents captured by AI'],
    challenges: [
      { title: 'Expired stock', body: 'Stock filters near-expiry batches, allocates earliest expiry first and enforces minimum shelf life at receipt.' },
      { title: 'Recalls', body: 'A recalled batch is quarantined where it sits, the affected consignees are listed and WhatsApp alerts can be sent.' },
      { title: 'Equipment servicing', body: 'Assets records warranties, AMC contracts, calibration certificates and service history for each device.' },
    ],
    workflow: [
      { title: 'Receive', body: 'Batches are received with expiry dates and checked against minimum shelf life.' },
      { title: 'Store', body: 'Put-away rules respect temperature zones and capacity.' },
      { title: 'Dispatch', body: 'Orders are filled earliest expiry first, with full batch traceability.' },
      { title: 'Maintain', body: 'Medical equipment is QR tagged, serviced on schedule and kept calibrated.' },
    ],
    faqs: [
      { q: 'Can OrbitPi track medicine batches and expiry?', a: 'Yes. OrbitPi Stock tracks lots with expiry dates by bin, filters near-expiry stock at 30, 60, 90 or 180 days and can allocate earliest expiry first.' },
      { q: 'How does OrbitPi handle a product recall?', a: 'Stock quarantines the recalled batch in place, lists the consignees who received it and can send WhatsApp alerts.' },
      { q: 'Can I manage medical equipment in OrbitPi?', a: 'Yes. OrbitPi Assets keeps a register with QR tags, warranties, AMC contracts, service history and statutory certificates such as NABL calibration.' },
      { q: 'Can OrbitPi read supplier invoices for pharmacies and hospitals?', a: 'Yes. OrbitPi DocAI reads supplier invoices, credit notes and delivery documents into data your team can review and export.' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real estate',
    short: 'High-volume enquiries, KYC paperwork',
    metaTitle: 'Real Estate Lead Management & KYC Document Software',
    metaDescription: 'OrbitPi helps real estate teams capture every property enquiry with its campaign source, route it to the right rep, follow up on time and read KYC documents.',
    h1: 'Real estate lead management and document software',
    intro: 'Capture every property enquiry with its campaign source, get it to the right rep fast, and turn KYC paperwork into records.',
    products: ['lead-management-ai-voice-agent', 'ai-document-ocr'],
    wins: ['Every enquiry captured with its campaign', 'Leads routed to the right branch and rep', 'KYC documents read into records'],
    challenges: [
      { title: 'Enquiry spikes', body: 'Leads captures every enquiry, removes duplicates and routes it by rule, with SLA warnings if nobody responds in time.' },
      { title: 'Which campaign works?', body: 'Every lead from your web form carries its UTM tags, ad click ID and landing page, so you can see which campaigns bring buyers.' },
      { title: 'Paper-heavy deals', body: 'DocAI reads PAN cards and your own application and booking forms into records, with a consent prompt for identity documents.' },
    ],
    workflow: [
      { title: 'Capture', body: 'Enquiries arrive from your website form and site-visit walk-ins, with their source.' },
      { title: 'Route', body: 'Rules and round-robin send each lead to an available rep at the right branch.' },
      { title: 'Follow up', body: 'Reps log calls, send WhatsApp templates and get reminders for every next step.' },
      { title: 'Book', body: 'Booking and KYC documents are read by DocAI and reviewed before export.' },
    ],
    faqs: [
      { q: 'How does OrbitPi help real estate sales teams?', a: 'OrbitPi Leads captures property enquiries with their campaign source, assigns them by rule, reminds reps to follow up and reports on response times and the sales funnel.' },
      { q: 'Can leads be routed to different branches?', a: 'Yes. Routing rules assign leads by branch, channel and purpose, and round-robin balances them across available reps.' },
      { q: 'Can OrbitPi send WhatsApp messages to property buyers?', a: 'Yes. Reps send approved WhatsApp templates from the lead, and the do-not-contact list is checked before every message.' },
      { q: 'Does OrbitPi have an AI voice agent for property enquiries?', a: 'Not yet. An AI voice agent that calls and qualifies leads in Hindi and English is in development.' },
    ],
  },
];

export const getIndustry = (slug: string): Industry | undefined => INDUSTRIES.find((i) => i.slug === slug);
export const industryHref = (slug: string): string => `/industries/${slug}/`;
