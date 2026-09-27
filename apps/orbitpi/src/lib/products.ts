// Product catalogue. Each entry generates /products/<slug>/, appears in the
// header menu, footer, home page, sitemap and structured data.
// Feature claims are taken from the OrbitPi product modules — keep them accurate.

export type ProductTheme = 'docai' | 'stock' | 'leads' | 'assets' | 'ledger';

export interface Faq { q: string; a: string }
export interface Block { title: string; body: string }

export interface Product {
  slug: string;
  name: string;
  fullName: string;
  category: string;
  abbr: string;
  theme: ProductTheme;
  color: string;
  soft: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  summary: string;
  highlights: string[];
  features: Block[];
  steps: Block[];
  useCases: Block[];
  connects: { slug: string; body: string }[];
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
    color: '#2F4BFF',
    soft: '#EEF1FF',
    metaTitle: 'AI Document OCR Software for Invoices & Forms | OrbitPi DocAI',
    metaDescription:
      'OrbitPi DocAI is AI OCR software that extracts data from invoices, purchase orders and forms. Email and folder intake, line items, human review and exports.',
    h1: 'AI document OCR that turns paperwork into clean data',
    intro:
      'DocAI reads invoices, purchase orders, delivery notes and custom forms, then extracts every field and line item into structured data your team can trust.',
    summary: 'Turn invoices, POs and forms into structured data.',
    highlights: ['Email, upload and watched-folder intake', 'Line items, tax fields and totals', 'Learns from reviewer corrections'],
    features: [
      { title: 'Intake from anywhere', body: 'Upload files, forward to a dedicated email inbox or point DocAI at a watched folder. Batches are tracked end to end.' },
      { title: 'Custom document types', body: 'Define the document types and fields you need, from GST invoices to lorry receipts and application forms.' },
      { title: 'Line-item extraction', body: 'Capture every row of a table, including quantities, rates, tax and totals, not just header fields.' },
      { title: 'Side-by-side review', body: 'Reviewers see each extracted value highlighted on the source page, with keyboard shortcuts for fast approval.' },
      { title: 'Learns from corrections', body: 'Every correction is saved as an example, so extraction improves on your own documents over time.' },
      { title: 'Value mapping', body: 'Map vendor names, units and codes to your master data with value aliases, so exports match your systems.' },
      { title: 'Accuracy you can measure', body: 'Keep a golden set of verified documents and run evaluations before changing prompts or models.' },
      { title: 'Deliver anywhere', body: 'Send approved data to OrbitPi Ledger and Stock, download saved exports or deliver to your own destinations.' },
    ],
    steps: [
      { title: 'Capture', body: 'Documents arrive by upload, email or watched folder.' },
      { title: 'Extract', body: 'AI reads fields and line items and scores its confidence.' },
      { title: 'Review', body: 'Low-confidence fields go to a reviewer; the rest pass straight through.' },
      { title: 'Deliver', body: 'Approved data posts to Ledger, Stock or your destination.' },
    ],
    useCases: [
      { title: 'Accounts payable', body: 'Capture supplier invoices and post purchase bills without manual entry.' },
      { title: 'Logistics paperwork', body: 'Read lorry receipts, delivery challans and proof-of-delivery documents.' },
      { title: 'Onboarding forms', body: 'Digitise application and KYC forms into records your team can search.' },
    ],
    connects: [
      { slug: 'accounting-software', body: 'Approved invoices become purchase vouchers in Ledger.' },
      { slug: 'warehouse-inventory-management', body: 'Received line items update stock in the right warehouse.' },
    ],
    faqs: [
      { q: 'What is AI document OCR?', a: 'AI document OCR combines optical character recognition with AI models that understand document structure, so it extracts named fields and tables rather than plain text.' },
      { q: 'Which documents can DocAI read?', a: 'Invoices, purchase orders, delivery challans, lorry receipts, receipts and custom forms. You define the document types and fields you need.' },
      { q: 'Can DocAI extract line items from invoices?', a: 'Yes. DocAI extracts every line item with quantity, rate, tax and amount, as well as header fields such as vendor, GSTIN, invoice number and date.' },
      { q: 'How do documents get into DocAI?', a: 'By direct upload, by forwarding to a dedicated email inbox, or from a watched folder that DocAI checks automatically.' },
      { q: 'Does DocAI get more accurate over time?', a: 'Yes. Reviewer corrections are stored as examples that guide future extraction, and you can measure accuracy against a set of verified documents.' },
      { q: 'Can I use DocAI without other OrbitPi products?', a: 'Yes. DocAI works on its own with exports, or connects to OrbitPi Ledger and Stock to post data automatically.' },
    ],
  },
  {
    slug: 'warehouse-inventory-management',
    name: 'Stock',
    fullName: 'OrbitPi Stock',
    category: 'Warehouse inventory management',
    abbr: 'WH',
    theme: 'stock',
    color: '#0E8A6A',
    soft: '#E6F6F1',
    metaTitle: 'Warehouse Inventory Management Software | OrbitPi Stock',
    metaDescription:
      'OrbitPi Stock is warehouse inventory management software for multi-warehouse stock, bins, lots, serials, pallets, reservations and scanner-led tasks.',
    h1: 'Warehouse inventory management for every bin, lot and serial',
    intro:
      'Stock gives you live inventory across every warehouse and bin location, with lot and serial tracking, reservations and scanner-led tasks for receiving, picking and dispatch.',
    summary: 'Live stock across warehouses, bins, lots and serials.',
    highlights: ['Scanner-led receive, pick and dispatch', 'Lots, serials and pallets (LPN)', 'Low-stock alert rules'],
    features: [
      { title: 'Multi-warehouse, multi-bin', body: 'Model every warehouse, zone and bin location and see stock on hand by position in real time.' },
      { title: 'Lots and serials', body: 'Track batches, expiry and individual serial numbers from receipt to dispatch.' },
      { title: 'Pallets and LPNs', body: 'Move whole pallets and cartons with license plate numbers instead of item by item.' },
      { title: 'Reservations and allocation', body: 'Reserve stock for orders and apply allocation strategies so the right lots ship first.' },
      { title: 'Warehouse tasks and scanning', body: 'Assign receiving, put-away, picking and counting tasks to mobile scanning devices.' },
      { title: 'Units and kits', body: 'Convert between units of measure and define kits built from component items.' },
      { title: 'Alert rules', body: 'Get alerts for low stock, stock-outs and other conditions you define.' },
      { title: 'Period close and accounting', body: 'Close stock periods and hand stock movements to accounting using posting rules.' },
    ],
    steps: [
      { title: 'Receive', body: 'Scan goods in against a purchase order or goods receipt.' },
      { title: 'Put away', body: 'Tasks direct staff to the right bin location.' },
      { title: 'Pick and dispatch', body: 'Reserved stock is picked by lot or serial and shipped.' },
      { title: 'Count and close', body: 'Cycle counts reconcile stock and periods close cleanly.' },
    ],
    useCases: [
      { title: 'Distributors', body: 'Run several warehouses with one live view of stock and value.' },
      { title: '3PL operators', body: 'Hold stock on behalf of many clients with separate ownership.' },
      { title: 'Manufacturers', body: 'Track raw material lots and finished goods by bin.' },
    ],
    connects: [
      { slug: 'ai-document-ocr', body: 'Supplier invoices read by DocAI create goods receipts.' },
      { slug: 'accounting-software', body: 'Stock movements post to the ledger with posting rules.' },
    ],
    faqs: [
      { q: 'What is warehouse inventory management software?', a: 'It is software that tracks stock quantities and locations inside one or more warehouses and manages the tasks that move stock, such as receiving, put-away, picking and counting.' },
      { q: 'Does OrbitPi Stock support multiple warehouses?', a: 'Yes. You can run any number of warehouses, each with its own zones and bin locations, and see stock across all of them.' },
      { q: 'Can I track batches, expiry dates and serial numbers?', a: 'Yes. Stock tracks lots with expiry and individual serial numbers through every movement.' },
      { q: 'Does it work with barcode scanners?', a: 'Yes. Warehouse tasks run on mobile scanning devices for receiving, put-away, picking and counting.' },
      { q: 'Can a 3PL use OrbitPi Stock for many clients?', a: 'Yes. Stock supports multiple stock owners, so a 3PL can hold and report inventory separately for each client.' },
      { q: 'How does Stock connect to accounting?', a: 'Posting rules hand stock movements to OrbitPi Ledger, so inventory value and the books stay in step.' },
    ],
  },
  {
    slug: 'lead-management-ai-voice-agent',
    name: 'Leads',
    fullName: 'OrbitPi Leads',
    category: 'Lead management + AI voice agent',
    abbr: 'AI',
    theme: 'leads',
    color: '#C2410C',
    soft: '#FDEEE6',
    metaTitle: 'Lead Management Software with AI Voice Agent | OrbitPi Leads',
    metaDescription:
      'OrbitPi Leads is lead management software with an AI voice agent that calls, qualifies and routes leads in English, Hindi and French. Pipelines, SLAs and routing.',
    h1: 'Lead management with an AI voice agent that calls every lead',
    intro:
      'Leads captures enquiries from every channel, routes them to the right person and lets an AI voice agent call, qualify and follow up, so no lead waits.',
    summary: 'An AI voice agent calls, qualifies and routes every lead.',
    highlights: ['AI calls in English, Hindi and French', 'Routing rules and response SLAs', 'Pipelines and follow-ups'],
    features: [
      { title: 'AI voice agent', body: 'The agent calls new leads, asks your qualifying questions and records the outcome and transcript.' },
      { title: 'Multilingual calling', body: 'Choose English, Hindi or French voice models to match your market.' },
      { title: 'Routing rules', body: 'Assign leads automatically by source, location, product or any field you define.' },
      { title: 'Lead pools', body: 'Share unassigned leads in pools that sales reps can pick from.' },
      { title: 'Response-time SLAs', body: 'Set SLA policies and watch live clocks so every lead is contacted on time.' },
      { title: 'Pipelines', body: 'Move leads through pipeline stages with activities and dispositions for every call.' },
      { title: 'Virtual numbers', body: 'Track calls through virtual numbers assigned to campaigns and teams.' },
      { title: 'Consent and privacy', body: 'Manage do-not-contact lists, data retention policies and data subject requests.' },
    ],
    steps: [
      { title: 'Capture', body: 'Leads arrive from web forms, ads, marketplaces and calls.' },
      { title: 'Call', body: 'The AI voice agent calls and qualifies the lead.' },
      { title: 'Route', body: 'Qualified leads are assigned to the right rep with context.' },
      { title: 'Close', body: 'Reps follow up through the pipeline with SLAs tracked.' },
    ],
    useCases: [
      { title: 'Inbound enquiries', body: 'Call every website and ad enquiry quickly, day or night.' },
      { title: 'Real estate', body: 'Qualify high volumes of property enquiries before a site visit.' },
      { title: 'B2B distribution', body: 'Follow up dealer and bulk-order enquiries consistently.' },
    ],
    connects: [
      { slug: 'accounting-software', body: 'Won customers become parties in Ledger for invoicing.' },
      { slug: 'ai-document-ocr', body: 'Documents collected from leads are read by DocAI.' },
    ],
    faqs: [
      { q: 'What is an AI voice agent for leads?', a: 'It is an AI system that places phone calls to leads, holds a natural conversation to qualify them, and records the outcome in your lead management software.' },
      { q: 'Which languages does the OrbitPi voice agent speak?', a: 'English, Hindi and French.' },
      { q: 'How are leads assigned to sales reps?', a: 'Routing rules assign leads automatically by source, location, product or other fields. Unassigned leads can sit in shared pools.' },
      { q: 'Can I track response times?', a: 'Yes. SLA policies set target response times and live SLA clocks show which leads are at risk.' },
      { q: 'Does OrbitPi Leads handle do-not-call requests?', a: 'Yes. Suppression lists stop contact with people who opt out, and retention policies and data subject requests are managed in the product.' },
      { q: 'Can I use Leads without the AI voice agent?', a: 'Yes. Pipelines, routing, SLAs and activities work on their own. The voice agent can be switched on when you need it.' },
    ],
  },
  {
    slug: 'asset-management-software',
    name: 'Assets',
    fullName: 'OrbitPi Assets',
    category: 'Asset management software',
    abbr: 'AS',
    theme: 'assets',
    color: '#7C3AED',
    soft: '#F2EDFF',
    metaTitle: 'Asset Management Software with QR Tracking | OrbitPi Assets',
    metaDescription:
      'OrbitPi Assets is asset management software to tag assets with QR codes, assign and transfer them with approvals, and manage complaints, warranties and depreciation.',
    h1: 'Asset management software to track every asset you own',
    intro:
      'Assets keeps one register for laptops, machines, vehicles and tools. Tag them with QR codes, assign and transfer them with approvals, and manage repairs, warranties and depreciation.',
    summary: 'Tag, assign, transfer and maintain every asset.',
    highlights: ['QR labels with a scan page', 'Transfers with approval chains', 'Warranty and depreciation'],
    features: [
      { title: 'Asset register', body: 'Record every asset with category, model, serial number, location, condition and status.' },
      { title: 'QR code labels', body: 'Print QR labels in batches. Scanning opens a page with the asset’s details.' },
      { title: 'Assign and return', body: 'Check assets out to employees with expected return dates and see who is overdue.' },
      { title: 'Transfers with approvals', body: 'Move assets between locations through configurable approval chains.' },
      { title: 'Complaints and repairs', body: 'Raise complaints against an asset and route them automatically with assignment rules.' },
      { title: 'Warranties, insurance and leases', body: 'Track coverage dates and terms so nothing expires unnoticed.' },
      { title: 'Depreciation', body: 'Apply depreciation methods and see book value for every asset.' },
      { title: 'Purchase orders and vendors', body: 'Buy assets through purchase orders and keep vendor records in one place.' },
    ],
    steps: [
      { title: 'Register', body: 'Add or import assets and print QR labels.' },
      { title: 'Assign', body: 'Check assets out to people and locations.' },
      { title: 'Maintain', body: 'Handle complaints, repairs and warranty claims.' },
      { title: 'Account', body: 'Run depreciation and report on the register.' },
    ],
    useCases: [
      { title: 'IT assets', body: 'Track laptops and devices issued to employees.' },
      { title: 'Plant and machinery', body: 'Schedule service and track warranties for equipment.' },
      { title: 'Multi-site teams', body: 'Transfer assets between offices and warehouses with approvals.' },
    ],
    connects: [
      { slug: 'accounting-software', body: 'Depreciation and asset purchases post to Ledger.' },
      { slug: 'ai-document-ocr', body: 'Asset invoices read by DocAI create register entries.' },
    ],
    faqs: [
      { q: 'What is asset management software?', a: 'It is software that keeps a central register of physical assets and tracks who has them, where they are, their condition, maintenance and value over time.' },
      { q: 'How does QR code asset tracking work?', a: 'Each asset gets a QR label. Scanning it with a phone opens a page with the asset’s details, so staff can identify and update assets quickly.' },
      { q: 'Can asset transfers require approval?', a: 'Yes. You configure approval chains, and transfers between locations wait for approval before they complete.' },
      { q: 'Does OrbitPi Assets calculate depreciation?', a: 'Yes. You choose depreciation methods and Assets calculates book value for each asset.' },
      { q: 'Can employees report a problem with an asset?', a: 'Yes. Complaints are raised against an asset and routed to the right team using assignment rules.' },
      { q: 'Can I import my existing asset list?', a: 'Yes. Assets supports bulk import with validation, as well as export to CSV and Excel.' },
    ],
  },
  {
    slug: 'accounting-software',
    name: 'Ledger',
    fullName: 'OrbitPi Ledger',
    category: 'Accounting + GST',
    abbr: 'GL',
    theme: 'ledger',
    color: '#0B0D12',
    soft: '#EEEFF2',
    metaTitle: 'Accounting Software with GST, TDS & Multi-Branch | OrbitPi Ledger',
    metaDescription:
      'OrbitPi Ledger is double-entry accounting software with GST, TDS/TCS, vouchers, journals, banking, multi-company and multi-branch books, trial balance and general ledger.',
    h1: 'Accounting software with GST, TDS and multi-branch books',
    intro:
      'Ledger is double-entry accounting for one company or a group of branches: vouchers, journals, banking and purchasing, with an India statutory pack for GST, TDS/TCS and returns.',
    summary: 'Double-entry accounting with GST, TDS and multi-branch.',
    highlights: ['Vouchers, journals and banking', 'Trial balance and general ledger', 'GST, TDS/TCS and returns'],
    features: [
      { title: 'Vouchers and journals', body: 'Record sales, purchases, receipts, payments, contra and journal vouchers with number series.' },
      { title: 'Day book and general ledger', body: 'See every transaction by day and drill into any account’s ledger.' },
      { title: 'Trial balance', body: 'Produce a trial balance for any period, company or branch.' },
      { title: 'India statutory pack', body: 'GST, TDS/TCS and statutory returns for Indian businesses.' },
      { title: 'Multi-company and branches', body: 'Run several companies and branches with inter-branch clearing.' },
      { title: 'Dimensions and cost centres', body: 'Tag entries with dimensions to report by cost centre, project or region.' },
      { title: 'Multi-currency', body: 'Record foreign-currency transactions with exchange rates.' },
      { title: 'Purchasing and banking', body: 'Raise purchase orders and goods receipts, and manage bank accounts and transfers.' },
    ],
    steps: [
      { title: 'Set up', body: 'Start from a chart of accounts template and fiscal year.' },
      { title: 'Record', body: 'Vouchers arrive manually, by import or from other modules.' },
      { title: 'Reconcile', body: 'Match bank accounts and clear open items.' },
      { title: 'Report', body: 'Close periods and file GST and TDS returns.' },
    ],
    useCases: [
      { title: 'Growing SMBs', body: 'Move from spreadsheets to proper double-entry books.' },
      { title: 'Multi-branch groups', body: 'Consolidate branches with inter-branch clearing.' },
      { title: 'Finance teams', body: 'Control posting windows, approvals and audit trails.' },
    ],
    connects: [
      { slug: 'ai-document-ocr', body: 'Invoices read by DocAI become purchase vouchers.' },
      { slug: 'warehouse-inventory-management', body: 'Stock movements post automatically with posting rules.' },
    ],
    faqs: [
      { q: 'Is OrbitPi Ledger GST compliant?', a: 'Ledger includes an India statutory pack covering GST, TDS/TCS and statutory returns.' },
      { q: 'Does Ledger support multiple companies and branches?', a: 'Yes. You can run several companies and branches, with inter-branch clearing between them.' },
      { q: 'What reports does Ledger provide?', a: 'Day book, general ledger, trial balance and statutory reports, filtered by period, company, branch or dimension.' },
      { q: 'Can I control who posts entries and when?', a: 'Yes. User posting windows, period locks and approvals control when and by whom entries are posted.' },
      { q: 'Does Ledger handle foreign currency?', a: 'Yes. Ledger records foreign-currency transactions using exchange rates.' },
      { q: 'Can I import my existing data?', a: 'Yes. Accounts, parties and opening balances can be imported in batches with validation.' },
    ],
  },
];

export const getProduct = (slug: string): Product | undefined => PRODUCTS.find((p) => p.slug === slug);
export const productHref = (slug: string): string => `/products/${slug}/`;
