// Product catalogue. Each entry generates /products/<slug>/, appears in the
// header menu, footer, home page, sitemap and structured data.
// Every claim here must match shipped behaviour in the product task repos
// (ocr-issues, warehouse-issues, leads-issues-2, asset-issues, accounting-issues).
// Planned work is labelled as coming soon, never described as available.

export type ProductTheme = 'docai' | 'stock' | 'leads' | 'assets' | 'ledger';
export type ProductStatus = 'available' | 'coming-soon';

export interface Faq { q: string; a: string }
export interface Block { title: string; body: string }
export interface Illustration { src: string; srcSmall: string; alt: string; width: number; height: number }

export interface Product {
  slug: string;
  name: string;
  fullName: string;
  category: string;
  abbr: string;
  theme: ProductTheme;
  status: ProductStatus;
  color: string;
  soft: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  summary: string;
  highlights: string[];
  image?: Illustration;
  features: Block[];
  steps: Block[];
  useCases: Block[];
  integrations: Block[];
  upcoming?: Block;
  faqs: Faq[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'ai-document-ocr',
    name: 'DocAI',
    fullName: 'OrbitPi DocAI',
    category: 'AI document OCR',
    abbr: 'OC',
    theme: 'docai',
    status: 'available',
    color: '#2F4BFF',
    soft: '#EEF1FF',
    metaTitle: 'AI Document OCR for Invoices & Bank Statements | OrbitPi',
    metaDescription:
      'OrbitPi DocAI reads GST invoices, bank statements, PAN, RC and custom forms into Excel or your systems, with line items, e-invoice QR checks and human review.',
    h1: 'AI document OCR that turns invoices and forms into clean data',
    intro:
      'DocAI reads supplier invoices, bank statements, purchase orders, identity documents and your own forms. It extracts every field and line item, checks the numbers, and sends only doubtful values to a reviewer.',
    summary: 'Invoices, bank statements and forms into clean, checked data.',
    highlights: ['Upload, email and watched-folder intake', 'GST e-invoice QR cross-check', 'Excel, CSV, S3, SFTP and webhook output'],
    image: {
      src: '/images/products/ai-document-ocr.webp',
      srcSmall: '/images/products/ai-document-ocr-640.webp',
      alt: 'Stack of paper invoices passing through a scanning frame and coming out as a structured data card with vendor, invoice number, date, amount and GSTIN fields',
      width: 1254,
      height: 590,
    },
    features: [
      { title: 'Intake from anywhere', body: 'Upload single files, batches or ZIP archives, send documents to email intake, or point DocAI at a watched folder. Duplicate files are caught by fingerprint.' },
      { title: 'Reads the files you really get', body: 'PDF, JPG, PNG, WEBP, multi-page TIFF, HEIC, Excel, Word, CSV and email files. Password-protected PDFs such as bank statements need the password once per batch.' },
      { title: 'Ready-made and custom types', body: 'Start from supplier invoice, purchase order, receipt, bank statement, credit and debit note, proforma invoice, PAN card, driving licence, vehicle RC and insurance schedule, or define your own.' },
      { title: 'Line items and splitting', body: 'Capture every table row, and split a stapled scan of an invoice, e-way bill and challan into separate documents automatically.' },
      { title: 'Checks, not guesses', body: 'Confidence comes from checks: field formats, arithmetic, line items adding up to the total, and GST e-invoice QR codes compared with the extracted values.' },
      { title: 'Fast human review', body: 'Reviewers see the source beside the fields, edit inline, approve or reject with a reason, and work through an assigned queue with keyboard shortcuts.' },
      { title: 'Learns and measures', body: 'Switch on learned examples from reviewer corrections, and test every change against a golden set of verified documents before it goes live.' },
      { title: 'Deliver anywhere', body: 'Download Excel or CSV with one row per document or per line item, or send approved data to S3, SFTP, a webhook or a database table.' },
    ],
    steps: [
      { title: 'Capture', body: 'Documents arrive by upload, ZIP, email or a watched folder.' },
      { title: 'Extract', body: 'AI identifies each document type and reads its fields and line items.' },
      { title: 'Check and review', body: 'Automatic checks score every value. Doubtful ones go to a reviewer.' },
      { title: 'Deliver', body: 'Approved data goes to Excel, CSV or your own systems.' },
    ],
    useCases: [
      { title: 'Accounts payable', body: 'Turn supplier invoices, credit notes and debit notes into rows ready for your accounting system, without retyping.' },
      { title: 'Bank statements', body: 'Read password-protected bank statements into structured transactions your team can search and reconcile.' },
      { title: 'KYC and vehicle papers', body: 'Capture PAN cards, driving licences, vehicle RCs and insurance schedules, with a consent prompt for identity documents.' },
    ],
    integrations: [
      { title: 'Excel and CSV', body: 'Leading zeros in invoice numbers are kept, and each value is available as printed and as interpreted.' },
      { title: 'S3 and SFTP', body: 'Approved results are delivered automatically, with retries and a delivery log.' },
      { title: 'Webhooks and database tables', body: 'Push each approved document straight into the system you already run.' },
      { title: 'Value mappings', body: 'Map each supplier’s item and unit codes to your own codes once, and reuse them on every document.' },
    ],
    faqs: [
      { q: 'What is AI document OCR?', a: 'AI document OCR combines optical character recognition with AI models that understand document layout, so it extracts named fields and tables, such as invoice number, GSTIN and line items, rather than plain text.' },
      { q: 'Which documents can DocAI read?', a: 'DocAI includes ready-made types for supplier invoices, purchase orders, receipts, bank statements, credit notes, debit notes, proforma invoices, PAN cards, driving licences, vehicle RCs and insurance policy schedules. You can add your own document types and fields, such as delivery challans or lorry receipts.' },
      { q: 'Can DocAI extract line items from GST invoices?', a: 'Yes. DocAI extracts line items along with header fields such as supplier name, GSTIN, invoice number and date, and checks that the line items add up to the invoice total. For GST e-invoices it also reads the QR code and compares it with the extracted values.' },
      { q: 'Can DocAI read password-protected bank statements?', a: 'Yes. Enter the PDF password once and DocAI uses it for every file in the batch.' },
      { q: 'How accurate is DocAI?', a: 'Accuracy depends on your documents, so DocAI does not rely on the AI model’s own opinion. Each value is scored by checks such as format, arithmetic and QR matching, doubtful values go to a reviewer, and you can measure accuracy against a golden set of verified documents.' },
      { q: 'How do I get data out of DocAI?', a: 'Download Excel or CSV files with one row per document or per line item, or deliver approved data automatically to S3, SFTP, a webhook or a database table.' },
      { q: 'Does DocAI connect to Tally?', a: 'There is no direct Tally connector today. You can download approved data as Excel or CSV, or deliver it by webhook, S3, SFTP or database table to the system you use.' },
    ],
  },
  {
    slug: 'warehouse-inventory-management',
    name: 'Stock',
    fullName: 'OrbitPi Stock',
    category: 'Warehouse inventory management',
    abbr: 'WH',
    theme: 'stock',
    status: 'available',
    color: '#0E8A6A',
    soft: '#E6F6F1',
    metaTitle: 'Warehouse Inventory Management Software | OrbitPi Stock',
    metaDescription:
      'OrbitPi Stock is warehouse inventory software for Indian businesses: bins, batches and expiry, barcode scanning, FIFO valuation, GRNs, challans and e-way bills.',
    h1: 'Warehouse inventory management for every bin, batch and e-way bill',
    intro:
      'Stock gives distributors, 3PLs and manufacturers one live record of inventory across warehouses and bins, with batch and expiry control, barcode scanning, GST documents and stock valuation built in.',
    summary: 'Bins, batches, expiry and GST documents in one live record.',
    highlights: ['Bins, batches, serials and pallets', 'E-way bills and delivery challans', 'FIFO and weighted-average valuation'],
    image: {
      src: '/images/products/warehouse-inventory-management.webp',
      srcSmall: '/images/products/warehouse-inventory-management-640.webp',
      alt: 'Cardboard cartons moving through a blue frame into an inventory card where every item has a tracked status',
      width: 1254,
      height: 590,
    },
    features: [
      { title: 'Warehouses, zones and bins', body: 'Model each warehouse as zones and bins, generate racks in bulk, block bins when needed, and see stock on hand by exact position.' },
      { title: 'Receiving and GRN', body: 'Receive against purchase orders or without one, record ASNs and dock appointments, flag short and excess quantities, and inspect quality before stock is released.' },
      { title: 'Batches, expiry and recall', body: 'Track lots, serials and pallets with full traceability, filter near-expiry stock, allocate earliest expiry first, and quarantine a recalled batch in place.' },
      { title: 'Reservations, picking and packing', body: 'Reserve stock for orders with FIFO, earliest-expiry or named-lot rules, pick in waves, and verify every pack by scan.' },
      { title: 'Barcode scanning and labels', body: 'Scan-driven screens understand carton and pallet barcodes, read GS1 supplier labels, and print labels on Zebra (ZPL) or PDF printers.' },
      { title: 'GST documents', body: 'GSTIN profiles, HSN and SAC masters, delivery challans per branch series and the full e-way bill lifecycle. Dispatch is blocked until the e-way bill is active.' },
      { title: 'Counts and valuation', body: 'Run blind cycle counts with approval above a limit, value stock by FIFO or weighted average, and apply landed cost.' },
      { title: 'Controls and audit trail', body: 'Role-based access by branch and site, maker-checker approvals, and a tamper-evident audit trail of every stock movement.' },
    ],
    steps: [
      { title: 'Receive', body: 'Goods are received against a PO, inspected and recorded on a GRN.' },
      { title: 'Put away', body: 'Rules suggest the right bin by temperature, capacity and velocity.' },
      { title: 'Pick and dispatch', body: 'Reserved stock is picked, packed by scan and shipped with its e-way bill.' },
      { title: 'Count and value', body: 'Blind counts reconcile stock and valuation stays current.' },
    ],
    useCases: [
      { title: 'Distributors and stockists', body: 'Run several warehouses and branches with one view of stock, value and ageing.' },
      { title: '3PL operators', body: 'Keep an owner on every stock line so each client’s inventory stays separate.' },
      { title: 'Pharma and food', body: 'Control batches, expiry dates and recalls from receipt to dispatch.' },
    ],
    integrations: [
      { title: 'GST compliance provider', body: 'Generate, update, extend and cancel e-way bills, and create e-invoice IRNs for branch transfers.' },
      { title: 'REST API and webhooks', body: 'Named API clients with rotatable keys, and signed webhooks for stock events.' },
      { title: 'Zebra and PDF printing', body: 'Twelve label and document templates, routed to the right printer.' },
      { title: 'Excel import', body: 'Bring in opening stock and masters from Excel, with validation and undo.' },
    ],
    faqs: [
      { q: 'What is warehouse inventory management software?', a: 'It is software that tracks stock quantities and locations inside one or more warehouses and manages the work that moves stock, such as receiving, put-away, picking, packing and counting.' },
      { q: 'Does OrbitPi Stock support multiple warehouses and bins?', a: 'Yes. You set up each warehouse with its own zones and bins and see stock by position across all of them, with transfers between warehouses tracked as send, in transit and receive.' },
      { q: 'Can I track batches, expiry dates and serial numbers?', a: 'Yes. Stock tracks lots, serials and pallets with forward and backward traceability, filters near-expiry stock at 30, 60, 90 or 180 days, and can allocate the earliest expiry first.' },
      { q: 'Does OrbitPi Stock generate e-way bills?', a: 'Yes. Stock handles the e-way bill lifecycle through a GST compliance provider, including Part A and Part B, vehicle updates, extension, cancellation and consolidated bills. Dispatch is blocked until the bill is active.' },
      { q: 'Does it work with barcode scanners?', a: 'Yes. Receiving, picking, packing and counting screens are driven by barcode scans in the web browser, and Stock recognises carton and pallet barcodes as well as GS1 supplier labels. A dedicated handheld app is not available yet.' },
      { q: 'How does Stock value inventory?', a: 'Stock values inventory by FIFO or weighted average in rupees, supports landed cost and revaluation, and reports valuation as at any date.' },
      { q: 'Can a 3PL use OrbitPi Stock for many clients?', a: 'Yes. Every stock line carries an owner, so a 3PL can hold and report inventory separately for each client. A client portal and billing runs are planned.' },
    ],
  },
  {
    slug: 'lead-management-ai-voice-agent',
    name: 'Leads',
    fullName: 'OrbitPi Leads',
    category: 'Lead management',
    abbr: 'LD',
    theme: 'leads',
    status: 'available',
    color: '#C2410C',
    soft: '#FDEEE6',
    metaTitle: 'Lead Management Software for Indian Businesses | OrbitPi',
    metaDescription:
      'OrbitPi Leads captures enquiries with their campaign source, routes them by rule, tracks follow-ups and response SLAs, and sends WhatsApp and email messages.',
    h1: 'Lead management software that follows up every enquiry',
    intro:
      'Leads captures each enquiry with its source, assigns it by rule, reminds reps when follow-ups are due and warns you before a response-time target is missed, so no enquiry is forgotten.',
    summary: 'Capture, route and follow up every enquiry on time.',
    highlights: ['Web form with UTM and ad-click tracking', 'Routing rules, pools and round-robin', 'Response-time SLAs and reminders'],
    image: {
      src: '/images/products/lead-management-ai-voice-agent.webp',
      srcSmall: '/images/products/lead-management-ai-voice-agent-640.webp',
      alt: 'A phone call bubble connected to a lead pipeline with New leads, In conversation and Follow up columns',
      width: 1254,
      height: 570,
    },
    features: [
      { title: 'Capture with source tracking', body: 'A hosted web form records UTM tags, Google and Meta click IDs, referrer and landing page, blocks spam and removes duplicates. Walk-ins and imports follow the same rules.' },
      { title: 'No duplicate leads', body: 'Leads are matched by phone number and email across every stage, so the same person is not chased twice.' },
      { title: 'Routing, pools and round-robin', body: 'Ordered rules assign leads by branch, channel and purpose. Round-robin skips reps who are on leave, off shift or at capacity.' },
      { title: 'Pipelines and dispositions', body: 'Run several pipelines with their own stages, allowed moves and outcome reasons, starting from B2B or B2C templates.' },
      { title: 'Follow-ups that do not slip', body: 'Log each call in two quick steps, keep one timeline per lead, and get reminders when a follow-up is due or overdue.' },
      { title: 'Response-time SLAs', body: 'Set first-response and stage targets, see warnings before a breach, and escalate leads that wait too long.' },
      { title: 'WhatsApp and email', body: 'Send approved WhatsApp and email templates from the lead, with a do-not-contact check before every message.' },
      { title: 'Consent and reports', body: 'Record consent per channel and purpose, keep a do-not-contact list, and track funnel, ageing, SLA and rep activity reports.' },
    ],
    steps: [
      { title: 'Capture', body: 'Enquiries arrive from your web form, walk-ins or imports, with their source.' },
      { title: 'Route', body: 'Rules assign each lead to the right branch and rep.' },
      { title: 'Follow up', body: 'Reps log calls, send WhatsApp or email and get reminders.' },
      { title: 'Measure', body: 'Reports show the funnel, ageing leads, SLA breaches and rep activity.' },
    ],
    useCases: [
      { title: 'Inbound enquiries', body: 'Know which campaign produced each website enquiry and who is following it up.' },
      { title: 'Multi-branch sales teams', body: 'Send leads to the right branch and balance the load across reps.' },
      { title: 'Real estate and B2B', body: 'Manage long follow-up cycles with pipelines, reminders and SLAs.' },
    ],
    integrations: [
      { title: 'WhatsApp', body: 'Approved message templates sent through AiSensy or Twilio.' },
      { title: 'Email', body: 'Template emails sent from the lead, logged on its timeline.' },
      { title: 'Hosted web form', body: 'Capture enquiries with campaign, click ID and landing-page details.' },
      { title: 'Excel and CSV', body: 'Import lead lists with validation first, and export any report.' },
    ],
    upcoming: {
      title: 'AI voice agent, coming soon',
      body: 'We are building an AI voice agent that calls new leads in Hindi and English, asks your qualifying questions and logs the outcome in Leads. It is not available yet. Everything else on this page works today.',
    },
    faqs: [
      { q: 'What is lead management software?', a: 'Lead management software records every enquiry, assigns it to the right person, tracks each follow-up and reports on how leads move towards a sale.' },
      { q: 'How are leads assigned to sales reps?', a: 'Ordered routing rules assign leads by branch, channel and purpose. Round-robin spreads leads across reps and skips anyone on leave, off shift or at capacity, and unassigned leads can wait in shared pools.' },
      { q: 'Can I see which campaign a lead came from?', a: 'Yes. The web capture form records UTM tags, Google and Meta click IDs, the referrer and the landing page with each lead.' },
      { q: 'Can I track response times?', a: 'Yes. SLA policies set first-response and stage targets, warn before a breach and record every breach for reporting.' },
      { q: 'Can I send WhatsApp messages from OrbitPi Leads?', a: 'Yes. Reps can send approved WhatsApp and email templates from the lead, and Leads checks the do-not-contact list before every message. SMS is not supported.' },
      { q: 'Does OrbitPi Leads have an AI voice agent?', a: 'Not yet. An AI voice agent that calls and qualifies leads in Hindi and English is in development. Every other part of Leads works today without it.' },
      { q: 'Does Leads handle do-not-contact requests?', a: 'Yes. A do-not-contact list with a mandatory reason blocks further messages, consent is recorded per channel and purpose, and retention policies and data requests are managed in the product.' },
    ],
  },
  {
    slug: 'asset-management-software',
    name: 'Assets',
    fullName: 'OrbitPi Assets',
    category: 'Asset management software',
    abbr: 'AS',
    theme: 'assets',
    status: 'available',
    color: '#7C3AED',
    soft: '#F2EDFF',
    metaTitle: 'Fixed Asset Management Software with QR Tags | OrbitPi',
    metaDescription:
      'OrbitPi Assets keeps your fixed asset register with QR tags, assignments, AMC and warranty tracking, maintenance, depreciation and CARO physical verification.',
    h1: 'Asset management software for every asset you own',
    intro:
      'Assets keeps one register for laptops, machines, vehicles and equipment. Tag them with QR codes, assign and transfer them with approvals, schedule maintenance, track AMCs and warranties, and give auditors a fixed asset register they can trust.',
    summary: 'Tag, assign, maintain and verify every asset.',
    highlights: ['QR tags with a scan-to-report page', 'AMC, warranty and insurance alerts', 'Depreciation and CARO verification'],
    features: [
      { title: 'Fixed asset register', body: 'Record category, model, serial number, location, condition and status, with custom fields, parent and child components, and bulk import with an error report.' },
      { title: 'QR code tagging', body: 'Print QR label sheets in batches. Scanning opens the asset’s page, where anyone can report a problem without logging in.' },
      { title: 'Assign, return and self-service', body: 'Assign assets to people, departments or locations with return dates, chase overdue returns, and let employees acknowledge or report issues from My Assets.' },
      { title: 'Transfers with approvals', body: 'Move assets between branches through multi-level approval chains, with separate dispatch and arrival confirmation.' },
      { title: 'Maintenance and complaints', body: 'Schedule preventive maintenance, raise work orders, route complaints by rule, and track downtime, MTTR and MTBF.' },
      { title: 'AMC, warranty, insurance, leases', body: 'Track warranties, AMC and CAMC contracts, insurance policies and leases, with alerts 90, 60, 30 and 7 days before expiry.' },
      { title: 'Depreciation and book value', body: 'Straight-line, declining-balance and double-declining methods, run monthly, with gross block, accumulated depreciation and net block at any date.' },
      { title: 'Verification and disposal', body: 'Run physical verification campaigns for CARO 2020, resolve variances, and dispose of assets with approvals, profit or loss and e-waste certificates.' },
    ],
    steps: [
      { title: 'Register', body: 'Add or import assets and print QR labels.' },
      { title: 'Assign', body: 'Issue assets to people, departments or locations.' },
      { title: 'Maintain', body: 'Handle complaints, service schedules and AMC claims.' },
      { title: 'Verify and report', body: 'Run depreciation and physical verification for your auditors.' },
    ],
    useCases: [
      { title: 'IT assets', body: 'Laptops and devices issued to employees, plus software licences with seat counts and renewals.' },
      { title: 'Plant, facilities and vehicles', body: 'DG sets, lifts, machines and vehicles, with statutory certificates such as PUC and calibration on record.' },
      { title: 'Finance and audit', body: 'A fixed asset register with block values, depreciation schedules and CARO verification.' },
    ],
    integrations: [
      { title: 'Excel and CSV', body: 'Bulk import assets and masters with validation, and export any register or report.' },
      { title: 'PDF labels and slips', body: 'QR label sheets, issue and return slips, and a one-page asset sheet.' },
      { title: 'Scheduled email reports', body: 'Send the fixed asset register and compliance digest on a schedule.' },
      { title: 'Public QR scan page', body: 'Opens in any phone browser, with no app to install.' },
    ],
    faqs: [
      { q: 'What is asset management software?', a: 'It is software that keeps a central register of physical assets and tracks who has them, where they are, their condition, maintenance and value over time.' },
      { q: 'How does QR code asset tracking work?', a: 'Each asset gets a QR label. Scanning it with a phone camera opens the asset’s page, so staff can identify it and report a problem without logging in. Labels for disposed or lost assets reveal nothing.' },
      { q: 'Can OrbitPi Assets track AMC and warranty expiry?', a: 'Yes. Assets tracks manufacturer and extended warranties, AMC and CAMC contracts covering many assets, insurance policies and leases, and sends alerts 90, 60, 30 and 7 days before cover ends.' },
      { q: 'Does OrbitPi Assets calculate depreciation?', a: 'Yes. You choose straight-line, declining-balance or double-declining depreciation. Assets runs it monthly and shows gross block, accumulated depreciation and net block at any date.' },
      { q: 'Does it support physical verification for CARO 2020?', a: 'Yes. You run verification campaigns by branch, split the work between counters, and resolve every variance with a record your auditors can review.' },
      { q: 'Can I import my existing asset list?', a: 'Yes. Assets supports bulk import with validation and a downloadable error file, including opening written-down values, and exports to CSV and Excel.' },
      { q: 'Is there a mobile app for OrbitPi Assets?', a: 'Assets runs in the web browser. QR scan pages open on any phone, so staff can identify an asset or report a problem without installing an app.' },
    ],
  },
  {
    slug: 'accounting-software',
    name: 'Ledger',
    fullName: 'OrbitPi Ledger',
    category: 'Accounting software',
    abbr: 'GL',
    theme: 'ledger',
    status: 'coming-soon',
    color: '#0B0D12',
    soft: '#EEEFF2',
    metaTitle: 'OrbitPi Ledger: Accounting Software (Coming Soon)',
    metaDescription:
      'OrbitPi Ledger is double-entry accounting software in development for Indian businesses, with voucher types, Day Book, bank reconciliation and Tally export.',
    h1: 'Accounting software for Indian businesses, coming soon',
    intro:
      'Ledger is double-entry accounting that is being designed around how Indian finance teams already work: familiar voucher types, a Day Book and trial balance, bank reconciliation, and export to Tally. It is not available yet.',
    summary: 'Double-entry accounting, now in development.',
    highlights: ['Voucher types, Day Book and trial balance', 'Bank statement import and reconciliation', 'Planned export to Tally Prime'],
    features: [
      { title: 'Familiar voucher types', body: 'Sales, purchase, receipt, payment, contra and journal vouchers with gapless number series.' },
      { title: 'Day Book and trial balance', body: 'A Day Book that follows the Tally way of working, and a trial balance for any period.' },
      { title: 'Posted entries stay posted', body: 'Posted entries cannot be edited, only reversed with a reason, so the audit trail stays complete.' },
      { title: 'Maker-checker approvals', body: 'The person who approves an entry cannot be the person who made it.' },
      { title: 'Receivables and payables', body: 'Invoices, credit notes, receipts, bills, debit notes, ageing and statements, including cheques and post-dated cheques.' },
      { title: 'Bank reconciliation', body: 'Import bank statements, match them automatically and reconcile the rest.' },
      { title: 'Chart of accounts templates', body: 'Start from trading, services or manufacturing templates, or import your own chart of accounts.' },
      { title: 'Export to Tally', body: 'Export to Tally Prime XML and CSV, so your accountant can keep working in the tools they know.' },
    ],
    steps: [
      { title: 'Set up', body: 'Start from a chart of accounts template.' },
      { title: 'Record', body: 'Enter vouchers with approvals where you need them.' },
      { title: 'Reconcile', body: 'Match bank statements and clear open items.' },
      { title: 'Report', body: 'See the Day Book, trial balance and financial statements.' },
    ],
    useCases: [
      { title: 'Growing businesses', body: 'Move from spreadsheets to proper double-entry books.' },
      { title: 'Finance teams', body: 'Control posting with approvals, period locks and a full audit trail.' },
      { title: 'Tally users', body: 'Keep your accountant’s workflow with export to Tally Prime.' },
    ],
    integrations: [],
    upcoming: {
      title: 'Ledger is in development',
      body: 'The features on this page describe what we are building, not a product you can buy today. Book a call if you want early access or want to tell us what your finance team needs.',
    },
    faqs: [
      { q: 'Is OrbitPi Ledger available?', a: 'Not yet. Ledger is in development. The features on this page describe the planned product, and you can contact us for early access.' },
      { q: 'Will OrbitPi Ledger work with Tally?', a: 'Ledger is planned to export to Tally Prime XML as well as CSV. Importing from Tally is not part of the current plan.' },
      { q: 'Will Ledger support GST and TDS?', a: 'Ledger is being designed with tax codes that support reverse charge and withholding such as TDS. GST return filing is not part of the first release.' },
      { q: 'Which OrbitPi products can I use today?', a: 'DocAI for document OCR, Stock for warehouse inventory, Leads for lead management and Assets for asset management are all available now.' },
    ],
  },
];

export const getProduct = (slug: string): Product | undefined => PRODUCTS.find((p) => p.slug === slug);
export const productHref = (slug: string): string => `/products/${slug}/`;
export const isAvailable = (p: Product): boolean => p.status === 'available';
