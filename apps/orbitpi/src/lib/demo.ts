// Sample data for the home page demo and product page previews. Illustrative only;
// activity and actions must describe shipped behaviour (Ledger is a design preview).
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
    kpis: [{ label: 'Read today', value: '1,284' }, { label: 'Passed checks', value: '1,247' }, { label: 'Needs review', value: '37' }],
    fieldLabels: ['Supplier GSTIN', 'Amount', 'Line items', 'Checks'],
    activity: ['Received by email intake', 'E-invoice QR matched to fields', 'Line items add up to total'],
    action: 'Approve & export', done: 'Sent to your Excel export',
    rows: [
      { name: 'Shree Balaji Traders', ref: 'INV-4471', status: 'Extracted', tone: 'ok', fields: ['06AABCS1429B1Z5', '₹1,84,560', '3 + tax', 'All passed'] },
      { name: 'Apex Polymers', ref: 'INV-0932', status: 'Extracted', tone: 'ok', fields: ['07AAFCA2210K1Z2', '₹62,300', '5 + tax', 'All passed'] },
      { name: 'Kaveri Logistics', ref: 'LR-22817', status: 'Review', tone: 'warn', fields: ['29AACCK7781M1Z9', '₹18,450', '2', 'Check date'] },
      { name: 'Nova Paper Mills', ref: 'INV-7710', status: 'Extracted', tone: 'ok', fields: ['24AAECN4410P1Z1', '₹2,10,900', '8 + tax', 'All passed'] },
      { name: 'Sai Packaging', ref: 'CN-2291', status: 'Credit note', tone: 'info', fields: ['06AAHCS9012Q1Z4', '₹44,800', '4', 'All passed'] },
    ],
  },
  {
    slug: 'warehouse-inventory-management', path: 'stock/on-hand', title: 'Stock on hand', subtitle: '3 warehouses · 1,240 bins', status: 'Live',
    kpis: [{ label: 'SKUs', value: '4,812' }, { label: 'Stock value', value: '₹2.4 Cr' }, { label: 'Low stock', value: '18' }],
    fieldLabels: ['On hand', 'Reserved', 'Reorder level', 'Lot'],
    activity: ['Scanned in on GRN at dock 2', 'Put-away rule chose bin', 'Low-stock alert rule checked'],
    action: 'Create reorder', done: 'Suggested PO created',
    rows: [
      { name: 'Kraft box 5-ply', ref: 'WH-A · R12-B3', status: '12,400', tone: 'ok', fields: ['12,400', '1,200', '4,000', 'L-2609-A'] },
      { name: 'Stretch film 23µ', ref: 'WH-A · R04-A1', status: '680', tone: 'ok', fields: ['680', '120', '500', 'L-2608-C'] },
      { name: 'Pallet wrap', ref: 'WH-B · R02-C2', status: 'Low · 84', tone: 'warn', fields: ['84', '40', '300', 'L-2607-B'] },
      { name: 'Barcode labels', ref: 'WH-C · R07-D4', status: '31,000', tone: 'ok', fields: ['31,000', '6,000', '10,000', 'L-2609-D'] },
      { name: 'Corner guards', ref: 'WH-B · R09-A2', status: 'Reserved', tone: 'info', fields: ['1,150', '1,150', '800', 'L-2606-A'] },
    ],
  },
  {
    slug: 'lead-management-ai-voice-agent', path: 'leads/worklist', title: 'Lead worklist', subtitle: 'Follow-ups due today', status: 'Live',
    kpis: [{ label: 'New today', value: '64' }, { label: 'Follow-ups due', value: '38' }, { label: 'SLA at risk', value: '5' }],
    fieldLabels: ['Source', 'Owner', 'Stage', 'Next action'],
    activity: ['Captured from website form with UTM', 'Assigned by branch routing rule', 'WhatsApp template sent'],
    action: 'Log call outcome', done: 'Follow-up scheduled',
    rows: [
      { name: 'Rohit Mehta', ref: 'Google Ads', status: 'New', tone: 'info', fields: ['Website form · Google Ads', 'Priya S.', 'New', 'First call due 11:30'] },
      { name: 'Sara Thomas', ref: 'Walk-in', status: 'Follow-up', tone: 'warn', fields: ['Walk-in · Pune branch', 'Aman K.', 'Contacted', 'Send price list'] },
      { name: 'Imran Qureshi', ref: 'Meta Ads', status: 'SLA at risk', tone: 'warn', fields: ['Website form · Meta Ads', 'Unassigned pool', 'New', 'Claim and call'] },
      { name: 'Neha Gupta', ref: 'Referral', status: 'Qualified', tone: 'ok', fields: ['Import · Referral list', 'Priya S.', 'Qualified', 'Site visit Sat'] },
      { name: 'Arjun Rao', ref: 'Website', status: 'Contacted', tone: 'ok', fields: ['Website form · Organic', 'Dev M.', 'Contacted', 'Call back 5 pm'] },
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
    activity: ['Entered by accounts team', 'Tax code applied', 'Awaiting approver'],
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
