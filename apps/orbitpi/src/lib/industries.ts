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
  imageAlt: string; // shared alt for /images/industries/<slug>*.webp (hero, card and home explorer)
  products: string[]; // product slugs, most relevant first
  wins: string[];
  overview: string[]; // short paragraphs for the home page industry explorer
  challenges: Block[];
  workflow: Block[];
  faqs: Faq[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    short: 'Raw material, plant assets, supplier bills',
    metaTitle: 'Manufacturing Inventory & Asset Software | OrbitPi',
    metaDescription: 'OrbitPi helps manufacturers track raw material by batch and bin, maintain plant machinery with AMC tracking and read supplier invoices with AI OCR.',
    h1: 'Inventory, asset and document software for manufacturers',
    intro: 'Track raw material by batch and bin, keep plant machinery serviced, and turn supplier invoices into clean data without retyping.',
    imageAlt: 'A CNC machine, raw metal stock and tagged motor illustrate manufacturing inventory and maintenance.',
    products: ['warehouse-inventory-management', 'asset-management-software', 'ai-document-ocr'],
    wins: ['Raw material tracked by batch and bin', 'Machines serviced on schedule, AMCs tracked', 'Supplier invoices read into clean data'],
    overview: [
      'OrbitPi Inventory tracks raw material by batch and bin from receipt against a purchase order. For businesses in India, job-work dispatches are recorded and an ITC-04 return can be generated from those lines. A cycle count freezes the book quantity first. While the count is blind, that figure stays hidden. A difference outside tolerance waits for approval, and a recount keeps the original line.',
      'OrbitPi Assets keeps plant machinery running with preventive maintenance schedules, QR-tagged fault reporting and AMC tracking, and records downtime, MTTR and MTBF for every machine.',
      'OrbitPi DocAI reads each supplier invoice, checks the line items against the total and exports clean data for your accounts team, so bills no longer need retyping.',
    ],
    challenges: [
      { title: 'Raw material goes missing', body: 'OrbitPi Inventory tracks every lot by bin, including material sent out for job work, so you know what is on hand before planning a run.' },
      { title: 'Machines fail without warning', body: 'Assets schedules preventive maintenance, tracks AMC contracts and records downtime, MTTR and MTBF for every machine.' },
      { title: 'Supplier invoices pile up', body: 'DocAI reads each supplier invoice, checks the line items against the total and exports clean data for your accounts team.' },
    ],
    workflow: [
      { title: 'Goods in', body: 'Raw material is received against a purchase order, inspected and put away to a bin with its batch number.' },
      { title: 'Paperwork', body: 'The supplier invoice is read by DocAI, checked and exported for your accounts team.' },
      { title: 'Plant upkeep', body: 'Machines carry QR tags. Operators report faults by scanning, and service is scheduled before it is due.' },
      { title: 'Month end', body: 'Stock is valued by FIFO, moving average (AVCO) or standard cost for the item’s category and site. LIFO is not available. Depreciation stays on the asset register, which is a separate product.' },
    ],
    faqs: [
      { q: 'Which OrbitPi products suit a manufacturer?', a: 'Manufacturing teams can use OrbitPi Inventory for raw material and finished goods, Assets for plant machinery and DocAI for supplier invoices. Each product can be used on its own.' },
      { q: 'Can OrbitPi track raw material by batch?', a: 'Yes. OrbitPi Inventory tracks lots with expiry and bin location from receipt onwards, with forward and backward traceability.' },
      { q: 'Does OrbitPi Inventory support job work?', a: 'Yes. OrbitPi Inventory tracks material sent to and received from job workers. For businesses in India it also supports ITC-04 reporting.' },
      { q: 'Can OrbitPi schedule machine maintenance?', a: 'Yes. OrbitPi Assets runs preventive maintenance schedules and work orders, tracks AMC contracts and records downtime for each machine.' },
    ],
  },
  {
    slug: 'distribution',
    name: 'Distribution',
    short: 'Multi-warehouse stock, dispatch paperwork, dealer leads',
    metaTitle: 'Distributor Inventory & Lead Management Software | OrbitPi',
    metaDescription: 'OrbitPi gives distributors and wholesalers live stock across warehouses, challans and e-way bills (India), and routed follow-up of every dealer enquiry.',
    h1: 'Inventory and lead management software for distributors',
    intro: 'Run stock across warehouses and branches, ship with the right paperwork, and follow up every dealer enquiry on time.',
    imageAlt: 'Warehouse racks, pallets, delivery records and a van illustrate wholesale receiving and dispatch.',
    products: ['warehouse-inventory-management', 'lead-management-software', 'ai-document-ocr'],
    wins: ['Live stock across warehouses and branches', 'Delivery challans and e-way bills (India) built in', 'Every dealer enquiry routed and followed up'],
    overview: [
      'OrbitPi Inventory gives distributors and wholesalers one live view of inventory by warehouse, bin and batch. Transfers are tracked from send to receive. Replenishment suggestions propose a purchase or a transfer; a person accepts or rejects them. Inventory does not raise the purchase order by itself.',
      'For distributors in India, delivery challans and e-way bills are created from each shipment through a GST compliance provider, and dispatch is held until the e-way bill is active.',
      'OrbitPi Leads captures every dealer enquiry with its source, routes it to the right branch and rep, and warns before a response-time target is missed.',
    ],
    challenges: [
      { title: 'Stock is spread across sites', body: 'OrbitPi Inventory shows quantities by warehouse, bin and batch in one view, with transfers tracked from send to receive.' },
      { title: 'Dispatch waits on paperwork', body: 'Delivery challans are created from the shipment and, in India, dispatch is blocked until the e-way bill is active.' },
      { title: 'Dealer enquiries go cold', body: 'Leads routes each new enquiry to the right branch and rep, reminds them to follow up and warns before a response target is missed.' },
    ],
    workflow: [
      { title: 'Replenish', body: 'A replenishment run proposes a purchase or a transfer from reorder settings. A buyer accepts or rejects the suggestion.' },
      { title: 'Receive and store', body: 'Goods are received on a GRN and put away to bins by rule.' },
      { title: 'Ship', body: 'Orders are reserved, picked, packed by scan and dispatched with their paperwork.' },
      { title: 'Sell', body: 'New dealer enquiries are captured with their source and followed up in Leads.' },
    ],
    faqs: [
      { q: 'Can OrbitPi handle several warehouses and branches?', a: 'Yes. OrbitPi Inventory supports multiple warehouses with their own bins, branch-level access, and transfers tracked as send, in transit and receive.' },
      { q: 'Does OrbitPi generate e-way bills for distributors in India?', a: 'Yes. OrbitPi Inventory manages the e-way bill lifecycle through a GST compliance provider, including consolidated e-way bills and vehicle updates.' },
      { q: 'Can I see stock ageing and a warehouse stock statement?', a: 'Yes. OrbitPi Inventory reports stock on hand, the movement register, the warehouse (godown) statement, valuation as at any date and ageing.' },
      { q: 'How does OrbitPi help with dealer enquiries?', a: 'OrbitPi Leads captures each enquiry with its source, assigns it by branch and channel, and reminds reps to follow up within your response-time target.' },
    ],
  },
  {
    slug: 'logistics-3pl',
    name: 'Logistics & 3PL',
    short: 'Client-owned stock, pallets, delivery documents',
    metaTitle: '3PL Warehouse & Logistics Document Software | OrbitPi',
    metaDescription: 'OrbitPi keeps each 3PL client’s stock under its own owner, with versioned rate cards and billing runs that do not issue the tax invoice.',
    h1: 'Warehouse and document software for 3PL and logistics',
    intro: 'Hold stock for many clients in one warehouse, move whole pallets by scan, and turn delivery paperwork into data.',
    imageAlt: 'Separate client pallets, a loading dock and delivery record illustrate third-party logistics.',
    products: ['warehouse-inventory-management', 'ai-document-ocr', 'asset-management-software'],
    wins: ['Separate stock per client owner', 'Versioned rate cards and billing runs', 'The run does not issue the tax invoice'],
    overview: [
      'Every stock line carries an owner, so each client’s inventory stays separate. When the 3PL module is enabled, a client also has versioned rate cards and SLA records. A billing run prices metered storage and handling events and stops if an event has no matching rate. Approving the run freezes it. The module prepares an accounts-receivable handover for accounting; it does not issue the tax invoice. Client portal access is a permission, so one client does not see another client’s stock.',
      'Pallets and cartons carry license plate numbers (LPNs) that are received, moved, split and merged by scan, and orders ship with manifests, gate passes and LR consignments.',
      'OrbitPi DocAI reads lorry receipts and proof-of-delivery documents into structured data for billing, while OrbitPi Assets tracks forklifts, scanners and racks with QR tags and AMC cover.',
    ],
    challenges: [
      { title: 'Many clients, one warehouse', body: 'Every stock line in OrbitPi Inventory carries an owner, so each client’s inventory and reports stay separate.' },
      { title: 'Paperwork slows billing', body: 'DocAI reads the delivery documents you define, such as lorry receipts and proof of delivery, into structured data.' },
      { title: 'Equipment is hard to track', body: 'Assets tags forklifts, scanners and racks with QR codes and tracks their service and AMC cover.' },
    ],
    workflow: [
      { title: 'Onboard a client', body: 'Create the client as a stock owner. With the 3PL module on, add a rate card before the first billing run.' },
      { title: 'Receive by pallet', body: 'Pallets arrive with license plate numbers and are received and put away by scan.' },
      { title: 'Dispatch', body: 'Orders are picked, packed and handed over with manifests, gate passes and LR consignments.' },
      { title: 'Close the loop', body: 'Returned delivery documents are read by DocAI and exported to your billing process.' },
    ],
    faqs: [
      { q: 'Can OrbitPi Inventory manage inventory for multiple 3PL clients?', a: 'Yes. OrbitPi Inventory supports multiple stock owners in the same warehouse, each with separate stock and reporting.' },
      { q: 'Does OrbitPi track pallets?', a: 'Yes. Pallets and cartons carry license plate numbers (LPNs) that can be moved, split and merged by scan.' },
      { q: 'Can DocAI read lorry receipts and PODs?', a: 'Yes. You define lorry receipts and proof-of-delivery documents as custom document types in DocAI, with the fields you need.' },
      { q: 'Does OrbitPi include 3PL billing?', a: 'When the 3PL module is enabled, versioned rate cards, SLA records and billing runs are available. A run rates metered events and is blocked by an event that has no rate. It does not issue the tax invoice. It prepares an accounts-receivable handover. Client portal access is a permission scoped to that client.' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & e-commerce',
    short: 'Store and warehouse stock, reservations and returns',
    metaTitle: 'Retail & E-commerce Inventory Management Software | OrbitPi',
    metaDescription: 'OrbitPi tracks retail stock by store and warehouse, reserves it for orders, and records customer returns and RMAs. Marketplace import and return-to-origin are not Inventory features.',
    h1: 'Inventory software for retail and e-commerce',
    intro: 'Keep store and warehouse stock accurate, reserve stock for every open order, and process returns without losing track.',
    imageAlt: 'Online product listings connect to packing, barcode scanning and organized stock.',
    products: ['warehouse-inventory-management', 'lead-management-software', 'ai-document-ocr'],
    wins: ['Stock by store, warehouse and bin', 'Stock reserved for open orders', 'Returns and RMAs recorded with serials'],
    overview: [
      'OrbitPi Inventory tracks retail and e-commerce inventory by store, warehouse and bin, and reserves stock for every open order so the same unit is never promised twice.',
      'Orders are picked in waves and packed with scan verification. Customer returns and RMAs are stock documents, including a return that arrives before it is matched to an authorisation. Return-to-origin consignments and marketplace order import are not Inventory features. Serial-controlled items keep their own cost layer.',
      'OrbitPi DocAI reads supplier invoices and credit notes into data your accounts team can review and export.',
    ],
    challenges: [
      { title: 'Overselling', body: 'OrbitPi Inventory reserves quantities for open orders, so available stock stays accurate across locations.' },
      { title: 'Returns', body: 'Customer returns and RMAs are recorded, including a receipt that is matched to an authorisation later. Return-to-origin consignments are not an Inventory feature.' },
      { title: 'Supplier bills', body: 'DocAI reads supplier invoices and credit notes into data your accounts team can use.' },
    ],
    workflow: [
      { title: 'Stock up', body: 'Goods are received on a GRN and put away to store or warehouse bins.' },
      { title: 'Sell', body: 'Each order reserves stock, so the same unit is never promised twice.' },
      { title: 'Ship', body: 'Orders are picked in waves and packed with scan verification.' },
      { title: 'Take back', body: 'Returns are inspected and then restocked or held. A return can be recorded before its RMA is matched.' },
    ],
    faqs: [
      { q: 'Can OrbitPi reserve stock for orders?', a: 'Yes. OrbitPi Inventory supports soft and hard reservations with FIFO, earliest-expiry or named-lot allocation.' },
      { q: 'Does OrbitPi track serial numbers?', a: 'Yes. OrbitPi Inventory tracks individual serial numbers through every movement, including sale and return.' },
      { q: 'Can OrbitPi handle customer returns?', a: 'Yes. OrbitPi Inventory records customer returns and RMAs, including a return received before it is matched to an authorisation. Return-to-origin consignments are not an Inventory feature.' },
      { q: 'Does OrbitPi connect to Amazon, Flipkart or other marketplaces?', a: 'Not yet. Marketplace order import is planned. Today, orders can be brought in through the OrbitPi Inventory API or Excel.' },
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
    imageAlt: 'Medicine batches, an expiry calendar and tagged equipment illustrate pharmacy stock and maintenance.',
    products: ['warehouse-inventory-management', 'asset-management-software', 'ai-document-ocr'],
    wins: ['Batch, expiry and recall control', 'Equipment register with QR tags', 'Purchase documents captured by AI'],
    overview: [
      'OrbitPi Inventory receives medicine batches with their expiry dates, enforces minimum shelf life and allocates earliest expiry first, with near-expiry filters at 30, 60, 90 or 180 days.',
      'If a batch is recalled, it can be quarantined where it sits and the consignees who received it are listed. Notification uses WhatsApp only when the shipment has a phone number. Otherwise the notice is recorded manually.',
      'OrbitPi Assets keeps a QR-tagged register of medical equipment with warranties, AMC contracts, service history and calibration certificates, and DocAI reads supplier invoices and delivery documents for review.',
    ],
    challenges: [
      { title: 'Expired stock', body: 'OrbitPi Inventory filters near-expiry batches, allocates earliest expiry first and enforces minimum shelf life at receipt.' },
      { title: 'Recalls', body: 'A recalled batch can be quarantined in place and consignees listed. WhatsApp is used only when the shipment has a phone number. Otherwise the notice is manual.' },
      { title: 'Equipment servicing', body: 'Assets records warranties, AMC contracts, calibration certificates and service history for each device.' },
    ],
    workflow: [
      { title: 'Receive', body: 'Batches are received with expiry dates and checked against minimum shelf life.' },
      { title: 'Store', body: 'Put-away rules respect temperature zones and capacity.' },
      { title: 'Dispatch', body: 'Orders are filled earliest expiry first, with full batch traceability.' },
      { title: 'Maintain', body: 'Medical equipment is QR tagged, serviced on schedule and kept calibrated.' },
    ],
    faqs: [
      { q: 'Can OrbitPi track medicine batches and expiry?', a: 'Yes. OrbitPi Inventory tracks lots with expiry dates by bin, filters near-expiry stock at 30, 60, 90 or 180 days and can allocate earliest expiry first.' },
      { q: 'How does OrbitPi handle a product recall?', a: 'OrbitPi Inventory can quarantine the recalled batch in place and list the consignees who received it. WhatsApp is used only when the shipment has a phone number. Otherwise the notice is recorded manually.' },
      { q: 'Can I manage medical equipment in OrbitPi?', a: 'Yes. OrbitPi Assets keeps a register with QR tags, warranties, AMC contracts, service history and statutory certificates such as NABL calibration.' },
      { q: 'Can OrbitPi read supplier invoices for pharmacies and hospitals?', a: 'Yes. OrbitPi DocAI reads supplier invoices, credit notes and delivery documents into data your team can review and export.' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real estate',
    short: 'High-volume enquiries, KYC paperwork',
    metaTitle: 'Real Estate Lead Management & Document Software | OrbitPi',
    metaDescription: 'OrbitPi helps real estate teams capture every property enquiry with its campaign source, route it to the right rep, follow up on time and read KYC documents.',
    h1: 'Real estate lead management and document software',
    intro: 'Capture every property enquiry with its campaign source, get it to the right rep fast, and turn KYC paperwork into records.',
    imageAlt: 'Property enquiries connect to a contact pipeline, appointment calendar and residential buildings.',
    products: ['lead-management-software', 'ai-document-ocr'],
    wins: ['Every enquiry captured with its campaign', 'Leads routed to the right branch and rep', 'KYC documents read into records'],
    overview: [
      'OrbitPi Leads captures every property enquiry from your website form and site-visit walk-ins with its UTM tags, ad click ID and landing page, so you can see which campaigns bring buyers.',
      'Routing rules and round-robin send each lead to an available rep at the right branch. Reps log calls, send approved WhatsApp templates and get follow-up reminders, with SLA warnings if nobody responds in time.',
      'OrbitPi DocAI reads identity documents, such as PAN cards in India, and your own application and booking forms into records, with a consent prompt for identity documents and a review step before export. An AI voice agent is not available, and this site does not describe its languages.',
    ],
    challenges: [
      { title: 'Enquiry spikes', body: 'Leads captures every enquiry, removes duplicates and routes it by rule, with SLA warnings if nobody responds in time.' },
      { title: 'Which campaign works?', body: 'Every lead from your web form carries its UTM tags, ad click ID and landing page, so you can see which campaigns bring buyers.' },
      { title: 'Paper-heavy deals', body: 'DocAI reads identity documents, such as PAN cards in India, and your own application and booking forms into records, with a consent prompt for identity documents.' },
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
      { q: 'Does OrbitPi have an AI voice agent for property enquiries?', a: 'Not yet. An AI voice agent is in development and is not available. This site does not describe its languages. Enquiry capture, routing and follow-up do not use it.' },
    ],
  },
];

export const getIndustry = (slug: string): Industry | undefined => INDUSTRIES.find((i) => i.slug === slug);
export const industryHref = (slug: string): string => `/industries/${slug}/`;
