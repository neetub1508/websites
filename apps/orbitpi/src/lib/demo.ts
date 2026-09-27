// Sample data for the interactive product demo on the home page. Illustrative only.
export type Tone = 'ok' | 'warn' | 'info';

export interface DemoRow { name: string; ref: string; status: string; tone: Tone; fields: string[] }
export interface DemoPanel {
  slug: string; path: string; title: string; subtitle: string; status: string;
  kpis: { label: string; value: string }[];
  fieldLabels: string[]; activity: string[]; action: string; done: string;
  rows: DemoRow[];
}

export const DEMO: DemoPanel[] = [
  {
    slug: 'ai-document-ocr', path: 'docai/inbox', title: 'Documents', subtitle: 'Inbox · purchase invoices', status: 'Processing',
    kpis: [{ label: 'Read today', value: '1,284' }, { label: 'Auto-approved', value: '91%' }, { label: 'Needs review', value: '37' }],
    fieldLabels: ['Vendor GSTIN', 'Amount', 'Line items', 'Confidence'],
    activity: ['Read from ap@ inbox', 'Matched vendor master', 'Checked against PO'],
    action: 'Approve & post to Ledger', done: 'Posted to Ledger and Stock',
    rows: [
      { name: 'Shree Balaji Traders', ref: 'INV-4471', status: 'Extracted', tone: 'ok', fields: ['06AABCS1429B1Z5', '₹1,84,560', '3 + tax', '98%'] },
      { name: 'Apex Polymers', ref: 'INV-0932', status: 'Extracted', tone: 'ok', fields: ['07AAFCA2210K1Z2', '₹62,300', '5 + tax', '97%'] },
      { name: 'Kaveri Logistics', ref: 'LR-22817', status: 'Review', tone: 'warn', fields: ['29AACCK7781M1Z9', '₹18,450', '2', '71% · check date'] },
      { name: 'Nova Paper Mills', ref: 'INV-7710', status: 'Extracted', tone: 'ok', fields: ['24AAECN4410P1Z1', '₹2,10,900', '8 + tax', '99%'] },
      { name: 'Sai Packaging', ref: 'PO-2291', status: 'Matched to PO', tone: 'info', fields: ['06AAHCS9012Q1Z4', '₹44,800', '4', '96%'] },
    ],
  },
  {
    slug: 'warehouse-inventory-management', path: 'stock/on-hand', title: 'Stock on hand', subtitle: '3 warehouses · 1,240 bins', status: 'Live',
    kpis: [{ label: 'SKUs', value: '4,812' }, { label: 'Stock value', value: '₹2.4 Cr' }, { label: 'Low stock', value: '18' }],
    fieldLabels: ['On hand', 'Reserved', 'Reorder level', 'Lot'],
    activity: ['Scanned at receiving dock', 'Put away to bin', 'Alert rule checked'],
    action: 'Create reorder', done: 'Purchase request raised',
    rows: [
      { name: 'Kraft box 5-ply', ref: 'WH-A · R12-B3', status: '12,400', tone: 'ok', fields: ['12,400', '1,200', '4,000', 'L-2609-A'] },
      { name: 'Stretch film 23µ', ref: 'WH-A · R04-A1', status: '680', tone: 'ok', fields: ['680', '120', '500', 'L-2608-C'] },
      { name: 'Pallet wrap', ref: 'WH-B · R02-C2', status: 'Low · 84', tone: 'warn', fields: ['84', '40', '300', 'L-2607-B'] },
      { name: 'Barcode labels', ref: 'WH-C · R07-D4', status: '31,000', tone: 'ok', fields: ['31,000', '6,000', '10,000', 'L-2609-D'] },
      { name: 'Corner guards', ref: 'WH-B · R09-A2', status: 'Reserved', tone: 'info', fields: ['1,150', '1,150', '800', 'L-2606-A'] },
    ],
  },
  {
    slug: 'lead-management-ai-voice-agent', path: 'leads/ai-calls', title: 'AI calls', subtitle: 'Voice agent · today', status: 'Calling',
    kpis: [{ label: 'Calls made', value: '342' }, { label: 'Qualified', value: '96' }, { label: 'Meetings', value: '41' }],
    fieldLabels: ['Source', 'Language', 'Need', 'Next step'],
    activity: ['Called soon after enquiry', 'Asked 4 qualifying questions', 'Transcript saved'],
    action: 'Assign to sales rep', done: 'Assigned to Priya S.',
    rows: [
      { name: 'Rohit Mehta', ref: 'Hindi · 2m 14s', status: 'Qualified', tone: 'ok', fields: ['Website form', 'Hindi', '20,000 boxes / mo', 'Demo Thu 11:00'] },
      { name: 'Sara Thomas', ref: 'English · 1m 02s', status: 'Callback', tone: 'warn', fields: ['Google Ads', 'English', 'Pricing sheet', 'Call back 5 pm'] },
      { name: 'Imran Qureshi', ref: 'Hindi · 3m 40s', status: 'Meeting booked', tone: 'info', fields: ['Marketplace', 'Hindi', 'Custom printing', 'Meeting booked'] },
      { name: 'Neha Gupta', ref: 'English · 2m 51s', status: 'Qualified', tone: 'ok', fields: ['Referral', 'English', 'Bulk order', 'Send quote'] },
      { name: 'Arjun Rao', ref: 'In progress', status: 'Live', tone: 'info', fields: ['Website chat', 'English', 'Qualifying…', 'Live call'] },
    ],
  },
  {
    slug: 'asset-management-software', path: 'assets/register', title: 'Asset register', subtitle: 'All locations', status: 'Synced',
    kpis: [{ label: 'Assets', value: '2,906' }, { label: 'Assigned', value: '2,318' }, { label: 'Open complaints', value: '12' }],
    fieldLabels: ['Assigned to', 'Location', 'Warranty', 'Book value'],
    activity: ['QR scanned at Gurugram HQ', 'Warranty checked', 'Depreciation run for Sep'],
    action: 'Approve transfer', done: 'Transfer approved',
    rows: [
      { name: 'Dell Latitude 7440', ref: 'AST-00918', status: 'Assigned', tone: 'info', fields: ['Anjali K.', 'Gurugram HQ', 'Till Mar 2028', '₹84,200'] },
      { name: 'Forklift Toyota 8FB', ref: 'AST-00211', status: 'In service', tone: 'warn', fields: ['Warehouse team', 'WH-B Manesar', 'AMC active', '₹9,40,000'] },
      { name: 'HP LaserJet M404', ref: 'AST-01377', status: 'Available', tone: 'ok', fields: ['None', 'Pune office', 'Till Jan 2027', '₹18,900'] },
      { name: 'Zebra TC52 scanner', ref: 'AST-02051', status: 'Transfer pending', tone: 'warn', fields: ['Rakesh P.', 'WH-A → WH-C', 'Till Aug 2027', '₹31,500'] },
      { name: 'MacBook Air M3', ref: 'AST-02210', status: 'Assigned', tone: 'info', fields: ['Dev M.', 'Bengaluru', 'Till Feb 2029', '₹1,12,000'] },
    ],
  },
  {
    slug: 'accounting-software', path: 'ledger/day-book', title: 'Day book', subtitle: 'FY 2026-27 · Gurugram HQ', status: 'Balanced',
    kpis: [{ label: 'Vouchers today', value: '218' }, { label: 'GST input', value: '₹7.2 L' }, { label: 'Unreconciled', value: '6' }],
    fieldLabels: ['Debit', 'Credit', 'GST / TDS', 'Branch'],
    activity: ['Created from DocAI bill', 'GST rules applied', 'Awaiting approver'],
    action: 'Approve voucher', done: 'Voucher posted',
    rows: [
      { name: 'Purchase · Shree Balaji', ref: 'PV-26-4471', status: 'Posted', tone: 'ok', fields: ['Purchases ₹1,56,407', 'Shree Balaji ₹1,84,560', 'ITC ₹28,153', 'Gurugram'] },
      { name: 'Receipt · Apex Retail', ref: 'RV-26-1180', status: 'Posted', tone: 'ok', fields: ['Bank ₹62,300', 'Apex Retail ₹62,300', '—', 'Gurugram'] },
      { name: 'Contra · HDFC → ICICI', ref: 'CV-26-0092', status: 'Posted', tone: 'ok', fields: ['ICICI ₹5,00,000', 'HDFC ₹5,00,000', '—', 'Head office'] },
      { name: 'Journal · Depreciation', ref: 'JV-26-0310', status: 'Draft', tone: 'warn', fields: ['Depreciation ₹1,24,000', 'Fixed assets ₹1,24,000', '—', 'All'] },
      { name: 'Payment · Kaveri Logistics', ref: 'PY-26-0771', status: 'Approval', tone: 'info', fields: ['Kaveri ₹18,450', 'Bank ₹18,081', 'TDS ₹369', 'Pune'] },
    ],
  },
];
