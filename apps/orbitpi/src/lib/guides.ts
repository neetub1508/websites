// Guides: original explainers on the workflows the OrbitPi products handle.
// Each entry generates /guides/<slug>/, appears on /guides/, the related product
// page, the sitemap and structured data.
// Rules and figures must be checked against the official source listed in `sources`;
// update `modified` whenever a guide changes. Guides describe the law and the practice,
// never a product capability that is not already stated in products.ts.
import type { Faq } from './products';

export interface GuideTable { caption: string; head: string[]; rows: string[][] }
export interface GuideSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean; // render `list` as numbered steps
  table?: GuideTable;
  after?: string[]; // paragraphs after the list or table
}

export interface Guide {
  slug: string;
  topic: string;
  title: string; // H1 and Article headline
  metaTitle: string;
  metaDescription: string;
  summary: string; // direct answer shown first on the page
  takeaways: string[];
  published: string; // ISO date
  modified: string; // ISO date
  product: string; // related product slug
  productPitch: string; // how that product helps, in shipped-feature terms only
  disclaimer?: boolean; // tax, legal or accounting topic
  sections: GuideSection[];
  faqs: Faq[];
  sources: { label: string; url: string }[];
}

export const GUIDES: Guide[] = [
  {
    slug: 'e-way-bill-rules',
    topic: 'GST compliance',
    title: 'E-way bill rules: when you need one, Part A and Part B, and validity',
    metaTitle: 'E-way Bill Rules: Limit, Part A and B, Validity | OrbitPi',
    metaDescription:
      'When an e-way bill is required under GST, what goes in Part A and Part B, how validity is calculated by distance, and how to extend or cancel one.',
    summary:
      'An e-way bill is an electronic document generated on the GST e-way bill portal before goods are moved. Under Rule 138 of the CGST Rules, it is needed when the value of a consignment is more than ₹50,000, with each state setting its own limit for movement within the state. It has two parts: Part A holds the invoice or challan details and Part B holds the vehicle or transport document. Validity starts when Part B is first entered and is one day for every 200 km of normal cargo.',
    takeaways: [
      'The general limit is a consignment value above ₹50,000, including GST. States can set a different limit for movement within the state.',
      'Some movements need an e-way bill whatever the value, such as inter-state movement of goods sent to a job worker.',
      'Part A covers the document, value, HSN code and delivery PIN. Part B covers the vehicle number or transport document.',
      'Validity is one day per 200 km for normal cargo and one day per 20 km for over-dimensional cargo.',
      'An e-way bill can be cancelled within 24 hours of generation, but not after it has been verified in transit.',
    ],
    published: '2026-09-27',
    modified: '2026-09-27',
    product: 'warehouse-inventory-management',
    productPitch:
      'OrbitPi Stock handles the e-way bill lifecycle from the shipment through a GST compliance provider, including Part A and Part B, vehicle updates, extension, cancellation and consolidated bills. Dispatch is blocked until the e-way bill is active, and delivery challans are created per branch series.',
    disclaimer: true,
    sections: [
      {
        id: 'what-is-an-e-way-bill',
        heading: 'What is an e-way bill?',
        paragraphs: [
          'An e-way bill (electronic way bill) is a document generated on the government’s e-way bill portal for the movement of goods under GST. It records who is sending the goods, who is receiving them, what is being moved, its value and how it is travelling. Each e-way bill gets a unique 12-digit number (EBN) that the supplier, recipient and transporter can all see.',
          'The rules are set out in Rule 138 of the Central Goods and Services Tax Rules, 2017, read with section 68 of the CGST Act. Tax officers can stop a vehicle and check the e-way bill against the goods and documents it is carrying.',
        ],
      },
      {
        id: 'when-is-it-required',
        heading: 'When is an e-way bill required?',
        paragraphs: [
          'An e-way bill is required when goods are moved in relation to a supply, for reasons other than a supply (such as a return or a branch transfer), or because of an inward supply from an unregistered person, and the consignment value is more than ₹50,000.',
          'Consignment value means the value declared on the invoice, bill of supply or delivery challan, including CGST, SGST or UTGST, IGST and cess. The value of exempt goods on the same invoice is left out.',
        ],
        list: [
          'Inter-state movement: the ₹50,000 limit applies across India.',
          'Intra-state movement: each state and union territory notifies its own limit and exemptions, so check the rule for the state where the goods move.',
          'Regardless of value: an e-way bill is required for inter-state movement of goods by a principal to a job worker, and for inter-state movement of handicraft goods by a dealer exempted from registration.',
        ],
        after: [
          'Several movements are exempt, including goods carried by a non-motorised conveyance, goods moved from a port, airport, air cargo complex or land customs station to an inland container depot or container freight station for customs clearance, empty cargo containers, and goods listed in the annexure to Rule 138(14).',
        ],
      },
      {
        id: 'who-generates-it',
        heading: 'Who generates the e-way bill?',
        paragraphs: [
          'The registered person causing the movement, either the supplier or the recipient, generates the e-way bill before the goods leave. If neither does, the transporter must generate it on the basis of the invoice, bill of supply or delivery challan handed over. Transporters who are not registered under GST enrol on the portal and receive a transporter ID (TRANSIN) for this purpose.',
          'When goods are handed to a transporter, the person who generated Part A can assign the e-way bill to that transporter, who then updates Part B.',
        ],
      },
      {
        id: 'part-a-and-part-b',
        heading: 'What goes in Part A and Part B?',
        table: {
          caption: 'Information captured in each part of an e-way bill',
          head: ['Part', 'Details', 'Filled by'],
          rows: [
            ['Part A', 'GSTIN of the recipient, PIN code of the place of delivery, document number and date, value of goods, HSN code, reason for transport and transport document number where available', 'Supplier or recipient, or the transporter on their behalf'],
            ['Part B', 'Vehicle number for road transport, or the transport document number for rail, air or ship', 'The person generating the bill, or the assigned transporter'],
          ],
        },
        after: [
          'Part B can be left blank when goods travel up to 50 km within the same state or union territory from the consignor’s place of business to the transporter’s place of business for onward transport. It must be filled in before the onward journey.',
          'When goods are moved from one vehicle to another, Part B is updated with the new vehicle number. A transporter carrying several consignments in one vehicle can generate a consolidated e-way bill that lists each individual e-way bill.',
        ],
      },
      {
        id: 'validity',
        heading: 'How long is an e-way bill valid?',
        paragraphs: [
          'Validity depends on the distance and is counted from the time the e-way bill is generated with Part B filled in. Each day ends at midnight of the day after the date of generation, so an e-way bill created at 10 am on 5 June with one day’s validity is valid until midnight between 6 and 7 June.',
        ],
        table: {
          caption: 'E-way bill validity by distance',
          head: ['Type of cargo', 'First validity period', 'Each additional period'],
          rows: [
            ['Normal cargo', '1 day for up to 200 km', '1 more day for every further 200 km or part of it'],
            ['Over-dimensional cargo', '1 day for up to 20 km', '1 more day for every further 20 km or part of it'],
          ],
        },
        after: [
          'Worked example: a truck carrying normal cargo 650 km needs 1 day for the first 200 km plus 3 more days for the remaining 450 km (200 + 200 + 50), so the e-way bill is valid for 4 days.',
          'If goods cannot reach the destination in time because of circumstances such as a breakdown or transhipment, the person in charge can extend validity on the portal close to expiry, currently from eight hours before to eight hours after it lapses. An extension needs the reason, the current location and the remaining distance.',
        ],
      },
      {
        id: 'cancel-or-reject',
        heading: 'Can an e-way bill be cancelled or rejected?',
        paragraphs: [
          'An e-way bill can be cancelled within 24 hours of generation, for example if the goods were not moved or the details were entered wrongly. It cannot be cancelled once an officer has verified it in transit. There is no edit option for Part A: a wrong entry is fixed by cancelling and generating a new bill.',
          'The other party named on the e-way bill can reject it within 72 hours of its details being made available, or before delivery if that is earlier. If they do not act in that time, the bill is treated as accepted.',
          'Generation can also be blocked for a GSTIN that has not filed its GST returns for two consecutive tax periods, under Rule 138E, so return filing affects dispatch as well as compliance.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common e-way bill mistakes in warehouses',
        list: [
          'Dispatching before Part B is filled in, so the e-way bill is not yet valid for movement.',
          'Changing the vehicle at a hub without updating Part B.',
          'Using an invoice value that leaves out GST, which can put a consignment under the limit by mistake.',
          'Letting validity lapse on long routes because the distance was entered as a round figure.',
          'Missing the 24-hour window to cancel a bill for a shipment that never left.',
        ],
        after: [
          'Goods moving without a valid e-way bill, or with details that do not match, can be detained along with the vehicle, and penalties under section 129 of the CGST Act can apply. Tying e-way bill status to the dispatch step is the simplest way to prevent these errors.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the e-way bill limit?', a: 'An e-way bill is generally required when the consignment value, including GST, is more than ₹50,000. States and union territories can set a different limit for movement within their territory, and some movements need an e-way bill regardless of value.' },
      { q: 'Is an e-way bill required for a branch transfer?', a: 'Yes, if the consignment value is above the limit. Branch transfers are movements for reasons other than a supply and are covered by the e-way bill rules, usually with a delivery challan as the document.' },
      { q: 'How is e-way bill validity calculated?', a: 'For normal cargo, validity is one day for the first 200 km and one more day for every further 200 km or part of it. For over-dimensional cargo, it is one day per 20 km. Each day ends at midnight of the day after generation.' },
      { q: 'Can I change the vehicle number on an e-way bill?', a: 'Yes. Update Part B with the new vehicle number whenever goods are transferred to another vehicle. Part A cannot be edited; a wrong Part A entry is corrected by cancelling the bill within 24 hours and generating a new one.' },
      { q: 'Who can cancel an e-way bill?', a: 'The person who generated it can cancel it within 24 hours of generation, provided it has not been verified in transit by an officer.' },
    ],
    sources: [
      { label: 'E-way bill system portal (GSTN)', url: 'https://ewaybillgst.gov.in/' },
      { label: 'CGST Act and Rules, Central Board of Indirect Taxes and Customs', url: 'https://cbic-gst.gov.in/' },
    ],
  },
  {
    slug: 'gst-e-invoice-qr-code',
    topic: 'GST compliance',
    title: 'GST e-invoice QR code: what it contains and how to check it',
    metaTitle: 'GST E-invoice QR Code: Contents and Verification | OrbitPi',
    metaDescription:
      'What the signed QR code on a GST e-invoice contains, how IRN and QR checks work, and a verification checklist for accounts payable teams.',
    summary:
      'A GST e-invoice carries a QR code signed by the Invoice Registration Portal (IRP). It contains the supplier and buyer GSTINs, invoice number, date and value, the number of line items, the HSN code of the main item, and the Invoice Reference Number (IRN) with its date. Comparing the QR data with the printed invoice, and checking that the IRN is still active, helps accounts payable teams catch altered or unregistered invoices before claiming input tax credit.',
    takeaways: [
      'E-invoicing applies to businesses whose aggregate turnover in any financial year from 2017-18 has exceeded ₹5 crore.',
      'The IRP returns an IRN and a digitally signed QR code for each registered invoice.',
      'The QR code holds nine key fields, including both GSTINs, invoice value and IRN.',
      'A readable QR code only proves what was registered; confirm the IRN has not been cancelled.',
      'An invoice that must be e-invoiced but has no IRN is not treated as a valid tax invoice.',
    ],
    published: '2026-09-27',
    modified: '2026-09-27',
    product: 'ai-document-ocr',
    productPitch:
      'OrbitPi DocAI reads supplier invoices with their line items, reads the QR code on GST e-invoices and compares it with the extracted values. Values that fail a check go to a reviewer, and approved data is exported to Excel, CSV or your own systems.',
    disclaimer: true,
    sections: [
      {
        id: 'what-is-e-invoicing',
        heading: 'What is GST e-invoicing?',
        paragraphs: [
          'Under GST e-invoicing, a notified business prepares its invoice in its own software and reports it in a standard JSON format to an Invoice Registration Portal (IRP). The IRP validates it, generates a unique Invoice Reference Number (IRN), signs the data and returns a QR code. The invoice is then shared with the buyer with that QR code printed on it.',
          'E-invoicing applies to B2B invoices, credit notes, debit notes and export invoices. Since 1 August 2023 it covers registered persons whose aggregate turnover in any financial year from 2017-18 onwards has exceeded ₹5 crore. Some sectors are excluded, including SEZ units, insurers, banking companies and NBFCs, goods transport agencies and passenger transport services.',
        ],
      },
      {
        id: 'what-is-irn',
        heading: 'What is the IRN?',
        paragraphs: [
          'The IRN is a 64-character hash generated from the supplier’s GSTIN, the financial year, the document type and the document number. Because it is built from these values, the same invoice number cannot be registered twice by the same supplier in a financial year.',
          'An IRN can be cancelled on the IRP within 24 hours of generation. The invoice cannot be partly cancelled or amended there; changes after that are made through credit or debit notes and in the GST return.',
        ],
      },
      {
        id: 'qr-code-contents',
        heading: 'What does the e-invoice QR code contain?',
        paragraphs: [
          'The QR code carries a signed summary of the registered invoice. Anyone can read the fields with a QR reader, but only a valid digital signature from the IRP proves they have not been changed.',
        ],
        table: {
          caption: 'Fields in the signed QR code of a GST e-invoice',
          head: ['Field', 'What to compare it with'],
          rows: [
            ['Supplier GSTIN', 'The supplier on the invoice and in your vendor master'],
            ['Recipient GSTIN', 'Your own GSTIN for the branch that bought the goods'],
            ['Invoice number', 'The printed invoice number'],
            ['Invoice date', 'The printed invoice date'],
            ['Invoice value', 'The total value on the invoice'],
            ['Number of line items', 'The count of rows in the item table'],
            ['HSN code of the main item', 'The item with the highest taxable value'],
            ['IRN', 'The IRN printed on the invoice'],
            ['IRN date', 'Should be on or after the invoice date'],
          ],
        },
      },
      {
        id: 'why-check',
        heading: 'Why accounts payable teams should check the QR code',
        paragraphs: [
          'Input tax credit depends on a valid invoice. If a supplier is required to issue e-invoices, an invoice without an IRN is not a valid tax invoice under Rule 48(5) of the CGST Rules, which puts the related credit at risk.',
          'A PDF can be edited after the QR code was generated. Comparing the QR fields with the printed values catches a changed total, a wrong buyer GSTIN or an invoice number that does not match, before the bill is booked and paid.',
        ],
      },
      {
        id: 'how-to-verify',
        heading: 'How to verify an e-invoice QR code',
        list: [
          'Scan the QR code with the verification facility on the e-invoice portal, or the government’s e-invoice QR verification app, which checks the IRP signature.',
          'Compare each decoded field with the printed invoice, especially GSTINs, invoice number, date and value.',
          'Check the number of line items against the item table, which catches pages missing from a multi-page invoice.',
          'Check the IRN status on the e-invoice portal or in your GST records to confirm it has not been cancelled after the invoice was sent.',
          'Record the result with the invoice, so auditors can see which checks were done and by whom.',
        ],
        ordered: true,
        after: [
          'A QR code that cannot be read is not always a sign of fraud: scans, stamps and folds often damage it. In that case, verify using the IRN, or ask the supplier for a clean copy.',
          'GSTN has also introduced a time limit for reporting invoices to the IRP for larger taxpayers. Check the current threshold on the e-invoice portal, because an invoice registered too late is rejected by the IRP.',
        ],
      },
      {
        id: 'automating-checks',
        heading: 'Automating QR checks at volume',
        paragraphs: [
          'Checking a few invoices a week by hand is manageable. At hundreds a month, teams usually automate the comparison: extract the printed fields and line items, decode the QR, compare the two and send only mismatches to a person. The reviewer then spends time on the invoices that need it rather than on every document.',
        ],
      },
    ],
    faqs: [
      { q: 'Who has to issue GST e-invoices?', a: 'Registered persons whose aggregate turnover in any financial year from 2017-18 onwards has exceeded ₹5 crore, for B2B supplies, exports, credit notes and debit notes. Some sectors, such as banks, insurers, goods transport agencies and SEZ units, are excluded.' },
      { q: 'What information is in the e-invoice QR code?', a: 'Supplier GSTIN, recipient GSTIN, invoice number, invoice date, invoice value, number of line items, HSN code of the main item, the IRN and the IRN generation date.' },
      { q: 'How can I verify an e-invoice QR code?', a: 'Scan it with the verification facility on the e-invoice portal or the official QR verification app, which checks the IRP’s digital signature. Then compare the decoded fields with the printed invoice and confirm the IRN is still active.' },
      { q: 'Is an invoice valid without an IRN?', a: 'If the supplier is required to issue e-invoices, an invoice issued without an IRN is not treated as a valid tax invoice, which can affect the buyer’s input tax credit.' },
      { q: 'Can an e-invoice be cancelled?', a: 'The IRN can be cancelled on the IRP within 24 hours of generation. After that, changes are handled through credit or debit notes and the GST return.' },
    ],
    sources: [
      { label: 'E-invoice system portal (GSTN)', url: 'https://einvoice1.gst.gov.in/' },
      { label: 'GST portal', url: 'https://www.gst.gov.in/' },
      { label: 'CGST Act and Rules, Central Board of Indirect Taxes and Customs', url: 'https://cbic-gst.gov.in/' },
    ],
  },
  {
    slug: 'caro-2020-fixed-asset-physical-verification',
    topic: 'Fixed assets and audit',
    title: 'CARO 2020 physical verification of fixed assets: a practical guide',
    metaTitle: 'CARO 2020 Fixed Asset Physical Verification Guide | OrbitPi',
    metaDescription:
      'What CARO 2020 clause 3(i) requires on property, plant and equipment, which companies it covers, and a step-by-step physical verification process.',
    summary:
      'Clause 3(i) of the Companies (Auditor’s Report) Order, 2020 (CARO 2020) requires the auditor to report whether the company keeps proper records of its property, plant and equipment, whether management has physically verified them at reasonable intervals, and whether material discrepancies found were properly dealt with in the books. In practice that means a complete fixed asset register, a planned verification programme, and documented reconciliation of every difference.',
    takeaways: [
      'CARO 2020 applies to financial years starting on or after 1 April 2021, with exemptions for banks, insurers, section 8 companies, one-person companies, small companies and some small private companies.',
      'Clause 3(i) covers asset records, physical verification, title deeds, revaluation and benami proceedings.',
      'Verification is management’s responsibility; the auditor reports on whether it was done and how discrepancies were handled.',
      'Reasonable intervals depend on the nature and value of assets. Many companies verify every asset at least once over a planned cycle.',
      'Evidence matters: keep who counted what, where and when, and how each variance was resolved.',
    ],
    published: '2026-09-27',
    modified: '2026-09-27',
    product: 'asset-management-software',
    productPitch:
      'OrbitPi Assets keeps the fixed asset register with QR tags, runs physical verification campaigns by branch, splits the work between counters and records how every variance was resolved. It also produces gross block, accumulated depreciation and net block at any date.',
    disclaimer: true,
    sections: [
      {
        id: 'what-is-caro-2020',
        heading: 'What is CARO 2020?',
        paragraphs: [
          'The Companies (Auditor’s Report) Order, 2020 is issued by the Ministry of Corporate Affairs under section 143(11) of the Companies Act, 2013. It lists specific matters the statutory auditor must report on, in addition to the audit opinion. It applies to audits of financial years beginning on or after 1 April 2021.',
        ],
        list: [
          'Banking companies and insurance companies',
          'Companies licensed under section 8 (not-for-profit companies)',
          'One-person companies and small companies',
          'Private companies that are not a holding or subsidiary of a public company, whose paid-up capital and reserves are not more than ₹1 crore, whose borrowings from banks or financial institutions are not more than ₹1 crore at any time in the year, and whose total revenue is not more than ₹10 crore',
        ],
        after: [
          'The companies above are exempt. The order also does not apply to the auditor’s report on consolidated financial statements, apart from one clause on qualifications in group companies.',
        ],
      },
      {
        id: 'clause-3i',
        heading: 'What does clause 3(i) require?',
        table: {
          caption: 'CARO 2020 clause 3(i) reporting points on property, plant and equipment',
          head: ['Sub-clause', 'The auditor reports whether'],
          rows: [
            ['3(i)(a)', 'The company maintains proper records showing full particulars, including quantitative details and situation, of property, plant and equipment, and proper records of intangible assets'],
            ['3(i)(b)', 'Property, plant and equipment have been physically verified by management at reasonable intervals, whether material discrepancies were noticed, and whether they were properly dealt with in the books'],
            ['3(i)(c)', 'Title deeds of immovable property are held in the name of the company, with details of any that are not'],
            ['3(i)(d)', 'The company revalued property, plant and equipment or intangible assets, whether a registered valuer was used, and any change of 10% or more in the net carrying value of a class'],
            ['3(i)(e)', 'Proceedings have been started or are pending against the company for holding benami property'],
          ],
        },
        after: [
          '“Full particulars” in practice means each asset can be identified: description, asset code, quantity, location, cost, date of acquisition, depreciation and net book value. A register that only holds totals by class makes both verification and reporting difficult.',
        ],
      },
      {
        id: 'reasonable-intervals',
        heading: 'How often should fixed assets be physically verified?',
        paragraphs: [
          'CARO 2020 does not fix a frequency. The auditor judges whether the interval is reasonable given the number, nature and location of assets. High-value, portable or theft-prone items such as laptops, tools and instruments are often verified every year. Large fixed plant can be covered by a programme that verifies every asset at least once over a planned cycle, often of up to three years, with a set share covered each year.',
          'Whatever interval you choose, write it into an approved verification policy and follow it. An auditor looks for the plan, the evidence that it was carried out and the treatment of what was found.',
        ],
      },
      {
        id: 'step-by-step',
        heading: 'Step-by-step physical verification process',
        list: [
          'Freeze the register: take a dated extract of the fixed asset register for the locations in scope.',
          'Plan the campaign: decide locations, dates, teams and who approves results. Keep counters independent of the asset custodians where possible.',
          'Tag every asset: fix a unique label, such as a QR code, so each item can be matched to one register line.',
          'Count and record: scan or note each asset found, its location, condition and custodian, and photograph damaged items.',
          'Reconcile: match what was found with the register and list every difference.',
          'Investigate: trace missing items, record found items that are not in the register, and correct locations.',
          'Approve and adjust: get approval for write-offs, transfers and register corrections, and pass accounting entries where needed.',
          'File the evidence: keep count sheets, reconciliation, approvals and a summary report for the auditor.',
        ],
        ordered: true,
      },
      {
        id: 'handling-discrepancies',
        heading: 'How to classify and deal with discrepancies',
        table: {
          caption: 'Worked example: results of verifying a register of 1,200 assets',
          head: ['Result', 'Assets', 'Typical action'],
          rows: [
            ['Found at the recorded location', '1,142', 'No action'],
            ['Found at a different location', '38', 'Update the location and custodian after confirmation'],
            ['Not found', '14', 'Investigate; if not traced, approve a write-off and remove from the books'],
            ['Found but not in the register', '6', 'Trace the purchase record and capitalise, or record why it is excluded'],
          ],
        },
        after: [
          'In this example 1,180 of 1,200 register lines (98.3%) were traced, 14 were missing and 6 extra items were found. Whether a discrepancy is material is a judgement for management and the auditor, based on value and nature. Even small differences should be resolved and recorded, because an unexplained list of missing assets is itself a control finding.',
        ],
      },
      {
        id: 'common-findings',
        heading: 'Common audit findings on fixed assets',
        list: [
          'A register that does not show location or asset-level detail, so verification cannot be traced.',
          'Verification done, but no record of who counted, when, or how differences were resolved.',
          'Missing assets left in the books year after year without investigation or approval.',
          'Assets disposed of physically without a disposal record or accounting entry.',
          'Title deeds for immovable property not held in the company’s name after a merger or name change.',
        ],
      },
    ],
    faqs: [
      { q: 'Is physical verification of fixed assets mandatory under CARO 2020?', a: 'CARO requires the auditor to report whether management has physically verified property, plant and equipment at reasonable intervals and dealt with material discrepancies. For companies covered by CARO, not doing it results in an adverse reporting point.' },
      { q: 'Which companies are exempt from CARO 2020?', a: 'Banking and insurance companies, section 8 companies, one-person companies, small companies, and private companies that are not a holding or subsidiary of a public company and meet the limits of ₹1 crore paid-up capital and reserves, ₹1 crore borrowings and ₹10 crore revenue.' },
      { q: 'How often should fixed assets be verified?', a: 'CARO does not set a frequency. It must be reasonable for the nature of the assets. Many companies verify portable and high-value assets every year and cover all other assets through a programme over a planned cycle.' },
      { q: 'Who is responsible for physical verification?', a: 'Management carries out physical verification. The auditor reviews the process and results and reports on them under clause 3(i)(b).' },
      { q: 'What should be done with assets that are not found?', a: 'Investigate first. If an asset cannot be traced, record the finding, get approval for the write-off and pass the accounting entry, so the register and the books match.' },
    ],
    sources: [
      { label: 'Ministry of Corporate Affairs: Companies Act, 2013 and CARO 2020', url: 'https://www.mca.gov.in/' },
      { label: 'Institute of Chartered Accountants of India: guidance notes', url: 'https://www.icai.org/' },
    ],
  },
  {
    slug: 'fifo-vs-weighted-average-inventory-valuation',
    topic: 'Inventory',
    title: 'FIFO vs weighted average inventory valuation, with a worked example',
    metaTitle: 'FIFO vs Weighted Average Inventory Valuation | OrbitPi',
    metaDescription:
      'How FIFO and weighted average cost work, a worked example with the same purchases and sales, and how each changes cost of goods sold and profit.',
    summary:
      'FIFO (first in, first out) assumes the oldest stock is sold first, so closing stock is valued at the most recent purchase prices. Weighted average cost values every unit at the average cost of the stock available. Both are permitted under Indian accounting standards (AS 2 and Ind AS 2); LIFO is not. When prices are rising, FIFO gives a lower cost of goods sold, a higher closing stock value and a higher profit than weighted average.',
    takeaways: [
      'AS 2, Ind AS 2 and ICDS II allow FIFO and weighted average cost. LIFO is not permitted.',
      'Inventories are measured at the lower of cost and net realisable value, whichever formula you use.',
      'Weighted average can be calculated periodically or as a moving average after each receipt.',
      'The same cost formula should be used for inventories of a similar nature and use.',
      'The formula is a valuation choice. Physical issue rules, such as earliest expiry first, can differ.',
    ],
    published: '2026-09-27',
    modified: '2026-09-27',
    product: 'warehouse-inventory-management',
    productPitch:
      'OrbitPi Stock values inventory in rupees by FIFO or weighted average, supports landed cost and revaluation, and reports valuation as at any date. Physical allocation rules, such as FIFO, earliest expiry or a named lot, are set separately for reservations.',
    disclaimer: true,
    sections: [
      {
        id: 'why-cost-formula-matters',
        heading: 'Why the cost formula matters',
        paragraphs: [
          'When you buy the same item several times at different prices, you need a rule for which cost goes out with each sale and which stays in closing stock. That rule, the cost formula, decides your cost of goods sold, your closing inventory on the balance sheet and so your gross profit.',
          'Under AS 2 (Valuation of Inventories), Ind AS 2 (Inventories) and, for income tax, Income Computation and Disclosure Standard II, the cost of interchangeable items is assigned using FIFO or the weighted average cost formula. Items that are not ordinarily interchangeable, such as custom-built goods, use specific identification.',
        ],
      },
      {
        id: 'how-fifo-works',
        heading: 'How FIFO works',
        paragraphs: [
          'FIFO assumes the items bought or made first are sold first. Each sale takes its cost from the oldest remaining purchase layer, and closing stock is made up of the most recent layers.',
        ],
      },
      {
        id: 'how-weighted-average-works',
        heading: 'How weighted average cost works',
        paragraphs: [
          'Weighted average values each unit at the average cost of all similar units available. It can be calculated in two ways.',
        ],
        list: [
          'Periodic weighted average: total cost of opening stock and purchases for the period divided by total units available, applied to all sales in the period.',
          'Moving (perpetual) weighted average: the average is recalculated after every receipt, and each sale is costed at the average at that moment.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked example: the same month under each method',
        paragraphs: [
          'A distributor starts April with no stock of an item and records these movements.',
        ],
        table: {
          caption: 'April purchases and sales of one item',
          head: ['Date', 'Movement', 'Units', 'Rate (₹)', 'Value (₹)'],
          rows: [
            ['1 April', 'Purchase', '100', '50.00', '5,000'],
            ['10 April', 'Purchase', '200', '56.00', '11,200'],
            ['15 April', 'Sale', '150', '', ''],
            ['25 April', 'Purchase', '100', '60.00', '6,000'],
            ['30 April', 'Sale', '150', '', ''],
          ],
        },
        after: [
          'FIFO: the 15 April sale uses 100 units at ₹50 and 50 units at ₹56, costing ₹7,800. The 30 April sale uses the remaining 150 units at ₹56, costing ₹8,400. Cost of goods sold is ₹16,200 and the 100 units left are valued at ₹60, or ₹6,000.',
          'Periodic weighted average: 400 units were available at a total cost of ₹22,200, an average of ₹55.50. Cost of goods sold is 300 × ₹55.50 = ₹16,650 and closing stock is 100 × ₹55.50 = ₹5,550.',
          'Moving weighted average: after 10 April the average is ₹16,200 ÷ 300 = ₹54.00, so the first sale costs ₹8,100. The 150 units left (₹8,100) plus the 25 April purchase give 250 units at ₹14,100, an average of ₹56.40, so the second sale costs ₹8,460. Cost of goods sold is ₹16,560 and closing stock is 100 × ₹56.40 = ₹5,640.',
        ],
      },
      {
        id: 'comparison',
        heading: 'FIFO vs weighted average: side-by-side results',
        table: {
          caption: 'Results of the April example (sales of 300 units)',
          head: ['Method', 'Cost of goods sold (₹)', 'Closing stock (₹)', 'Closing rate (₹/unit)'],
          rows: [
            ['FIFO', '16,200', '6,000', '60.00'],
            ['Moving weighted average', '16,560', '5,640', '56.40'],
            ['Periodic weighted average', '16,650', '5,550', '55.50'],
          ],
        },
        after: [
          'In every case cost of goods sold plus closing stock equals the ₹22,200 spent, so the methods only move cost between the profit and loss account and the balance sheet. With rising prices, FIFO shows ₹450 more gross profit than periodic weighted average in this example. With falling prices the effect reverses.',
        ],
      },
      {
        id: 'choosing',
        heading: 'Which method should you use?',
        list: [
          'FIFO suits perishable, batch-controlled or fast-moving goods, where the valuation should follow the way stock actually moves, and gives a balance sheet value close to current prices.',
          'Weighted average suits large volumes of identical items, such as bulk materials, where individual purchase layers have little meaning, and it smooths price swings.',
          'Use the same formula for inventories of a similar nature and use, and apply it consistently from year to year. A change of method is a change in accounting policy that must be justified and disclosed.',
        ],
        after: [
          'Whichever formula you use, test closing stock against net realisable value, the estimated selling price less costs to complete and sell. Slow-moving, damaged or near-expiry stock is written down where its net realisable value is below cost.',
        ],
      },
    ],
    faqs: [
      { q: 'Is LIFO allowed in India?', a: 'No. AS 2, Ind AS 2 and ICDS II permit FIFO and weighted average cost for interchangeable items, and specific identification for items that are not interchangeable. LIFO is not permitted.' },
      { q: 'Which gives higher profit, FIFO or weighted average?', a: 'When purchase prices are rising, FIFO usually gives a lower cost of goods sold and a higher profit, because older, cheaper stock is charged first. When prices are falling, weighted average usually gives the higher profit.' },
      { q: 'What is the difference between periodic and moving weighted average?', a: 'Periodic weighted average calculates one average for the whole period. Moving weighted average recalculates the average after every receipt and costs each sale at the average at that moment.' },
      { q: 'Can I pick stock by expiry date but value it by weighted average?', a: 'Yes. The cost formula is an accounting valuation rule. How stock is physically picked, such as earliest expiry first, is an operational rule and can differ from it.' },
      { q: 'Can a business change its inventory valuation method?', a: 'Only if the change results in more appropriate presentation or is required by a standard or law. It is a change in accounting policy and must be disclosed with its effect.' },
    ],
    sources: [
      { label: 'Institute of Chartered Accountants of India: AS 2, Valuation of Inventories', url: 'https://www.icai.org/' },
      { label: 'Ministry of Corporate Affairs: Indian Accounting Standards (Ind AS 2)', url: 'https://www.mca.gov.in/' },
      { label: 'Income Tax Department: Income Computation and Disclosure Standards', url: 'https://incometaxindia.gov.in/' },
    ],
  },
  {
    slug: 'straight-line-vs-written-down-value-depreciation',
    topic: 'Fixed assets and audit',
    title: 'Straight-line vs written down value depreciation: how to calculate both',
    metaTitle: 'SLM vs WDV Depreciation: Formula and Example | OrbitPi',
    metaDescription:
      'How straight-line (SLM) and written down value (WDV) depreciation are calculated, with a worked example and how they differ from income tax depreciation.',
    summary:
      'Straight-line depreciation (SLM) charges the same amount every year: cost less residual value, divided by useful life. Written down value depreciation (WDV) charges a fixed percentage of the remaining book value, so the charge is highest in the first year and falls each year. Under Schedule II of the Companies Act, 2013, companies depreciate assets over their useful lives using either method, while income tax depreciation is calculated separately on blocks of assets at prescribed WDV rates.',
    takeaways: [
      'SLM charge = (cost − residual value) ÷ useful life, the same every year.',
      'WDV rate = 1 − (residual value ÷ cost)^(1 ÷ useful life), applied to the opening book value each year.',
      'Schedule II gives indicative useful lives, such as 3 years for laptops and desktops, and residual value is normally not more than 5% of cost.',
      'Income tax depreciation uses block-wise WDV rates and a half-rate rule for assets used for less than 180 days in the year.',
      'Book and tax depreciation usually differ, which creates a deferred tax difference.',
    ],
    published: '2026-09-27',
    modified: '2026-09-27',
    product: 'asset-management-software',
    productPitch:
      'OrbitPi Assets runs depreciation monthly using straight-line, declining-balance or double-declining methods, and shows gross block, accumulated depreciation and net block at any date. It supports bulk import of existing assets with opening written-down values.',
    disclaimer: true,
    sections: [
      {
        id: 'what-is-depreciation',
        heading: 'What is depreciation?',
        paragraphs: [
          'Depreciation spreads the cost of an asset, less its expected residual value, over the years the business uses it. It reflects that machines, vehicles and computers wear out or become obsolete, and matches their cost with the revenue they help earn.',
          'For companies in India, Schedule II of the Companies Act, 2013 sets indicative useful lives for classes of assets and says the residual value is normally not more than 5% of original cost. A company can use a different useful life or residual value if it has a technical justification and discloses it.',
        ],
      },
      {
        id: 'straight-line-method',
        heading: 'Straight-line method (SLM)',
        paragraphs: [
          'Under SLM the depreciable amount is charged evenly over the useful life. The formula is: annual depreciation = (cost − residual value) ÷ useful life in years. SLM suits assets that give roughly equal benefit each year, such as buildings, furniture and many machines.',
        ],
      },
      {
        id: 'written-down-value-method',
        heading: 'Written down value method (WDV)',
        paragraphs: [
          'Under WDV, also called the declining-balance method, a fixed rate is applied each year to the asset’s opening written-down value. The charge is largest in the first year and falls over time, which suits assets that lose value or usefulness quickly, such as computers and vehicles.',
          'To find the WDV rate that brings an asset down to its residual value by the end of its useful life, use: rate = 1 − (residual value ÷ cost)^(1 ÷ useful life).',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked example: a ₹1,00,000 laptop over 3 years',
        paragraphs: [
          'A company buys a laptop for ₹1,00,000. Schedule II gives end-user devices such as laptops a useful life of 3 years, and the company uses a residual value of 5%, or ₹5,000.',
          'SLM charge: (₹1,00,000 − ₹5,000) ÷ 3 = ₹31,666.67 a year. WDV rate: 1 − (5,000 ÷ 1,00,000)^(1/3) = 63.16%.',
        ],
        table: {
          caption: 'Depreciation of a ₹1,00,000 laptop with a 3-year life and ₹5,000 residual value',
          head: ['Year', 'SLM charge (₹)', 'SLM closing value (₹)', 'WDV charge at 63.16% (₹)', 'WDV closing value (₹)'],
          rows: [
            ['1', '31,666.67', '68,333.33', '63,159.69', '36,840.31'],
            ['2', '31,666.67', '36,666.66', '23,268.23', '13,572.08'],
            ['3', '31,666.66', '5,000.00', '8,572.08', '5,000.00'],
          ],
        },
        after: [
          'Both methods charge the same ₹95,000 in total. WDV charges two-thirds of it in the first year, so profits are lower early and higher later compared with SLM.',
        ],
      },
      {
        id: 'useful-lives-and-tax-rates',
        heading: 'Companies Act useful lives and income tax rates',
        paragraphs: [
          'Income tax depreciation is calculated separately under section 32 of the Income-tax Act on blocks of assets using WDV rates. If an asset is put to use for less than 180 days in the year it is bought, only half the rate is allowed that year.',
        ],
        table: {
          caption: 'Common asset classes: indicative useful life under Schedule II and general income tax WDV rate',
          head: ['Asset', 'Useful life, Schedule II', 'Income tax WDV rate'],
          rows: [
            ['Laptops and desktops (end-user devices)', '3 years', '40%'],
            ['Servers and networks', '6 years', '40%'],
            ['Furniture and fittings (general)', '10 years', '10%'],
            ['Office equipment', '5 years', '15%'],
            ['Plant and machinery (general)', '15 years', '15%'],
            ['Motor cars (not used in a hire business)', '8 years', '15%'],
          ],
        },
        after: [
          'Rates and lives above are the general entries; special categories and later amendments can apply. Always confirm against the current Schedule II and the depreciation rate table under the Income-tax Rules before using them.',
        ],
      },
      {
        id: 'which-method',
        heading: 'Which method should a company use?',
        list: [
          'Choose the method that best reflects how the asset’s benefits are used up, and apply it consistently to the class of assets.',
          'Depreciate significant parts of an asset with different useful lives separately (component accounting), as Schedule II requires.',
          'Review useful lives and residual values periodically, and disclose the method and any changes in the accounts.',
          'Keep an asset-level register, so gross block, accumulated depreciation and net block reconcile to the books at any date.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between SLM and WDV depreciation?', a: 'SLM charges the same amount each year, calculated as cost less residual value divided by useful life. WDV applies a fixed rate to the remaining book value, so the charge is highest in the first year and falls each year.' },
      { q: 'How do I calculate the WDV depreciation rate?', a: 'Rate = 1 − (residual value ÷ cost)^(1 ÷ useful life). For an asset costing ₹1,00,000 with a ₹5,000 residual value and a 3-year life, the rate is about 63.16%.' },
      { q: 'What is the useful life of a laptop under the Companies Act?', a: 'Schedule II gives end-user devices such as desktops and laptops an indicative useful life of 3 years.' },
      { q: 'What is the income tax depreciation rate for computers?', a: 'Computers, including software, are generally depreciated at 40% on the WDV of the block. If the asset is used for less than 180 days in the year of purchase, half the rate applies in that year.' },
      { q: 'Can a company use different depreciation methods for different assets?', a: 'Yes. The method should reflect how each class of asset is used, and it should be applied consistently and disclosed in the financial statements.' },
    ],
    sources: [
      { label: 'Ministry of Corporate Affairs: Companies Act, 2013, Schedule II', url: 'https://www.mca.gov.in/' },
      { label: 'Income Tax Department: depreciation rates under the Income-tax Rules', url: 'https://incometaxindia.gov.in/' },
    ],
  },
  {
    slug: 'lead-routing-round-robin-vs-rules',
    topic: 'Sales operations',
    title: 'Lead routing: round-robin vs rule-based assignment',
    metaTitle: 'Lead Routing: Round-Robin vs Rule-Based Assignment | OrbitPi',
    metaDescription:
      'How lead routing works, when to use round-robin, rules or shared pools, and how to design routing for a multi-branch sales team, with an example.',
    summary:
      'Lead routing decides which sales rep or team gets each new enquiry. Round-robin assigns leads to reps in turn, which spreads work evenly. Rule-based routing assigns leads by attributes such as branch, product, channel or language, which sends each lead to the best-placed person. Most teams combine them: ordered rules choose the right team, round-robin spreads leads within it, and a shared pool with a response-time target catches anything left unassigned.',
    takeaways: [
      'Round-robin is simple and fair but ignores fit; rule-based routing matches fit but can overload one person.',
      'Order routing rules from most specific to most general, and always finish with a fallback.',
      'Round-robin should skip reps who are on leave, off shift or at capacity.',
      'Shared pools work for small teams if every pooled lead has a first-response target.',
      'Measure routing by time to first response and by conversion per source, not only by volume.',
    ],
    published: '2026-09-27',
    modified: '2026-09-27',
    product: 'lead-management-software',
    productPitch:
      'OrbitPi Leads assigns leads with ordered routing rules by branch, channel and purpose, spreads them by round-robin that skips reps on leave, off shift or at capacity, and keeps unassigned leads in shared pools. First-response and stage SLAs warn before a breach.',
    sections: [
      {
        id: 'what-is-lead-routing',
        heading: 'What is lead routing?',
        paragraphs: [
          'Lead routing is the set of rules that decides who owns a new enquiry as soon as it arrives, whether from a website form, an ad campaign, a walk-in or an imported list. Good routing gets each lead to someone who can help, quickly, without a manager assigning it by hand.',
          'Poor routing shows up as leads nobody follows up, two reps calling the same person, or a few reps overloaded while others wait for work.',
        ],
      },
      {
        id: 'routing-methods',
        heading: 'The main lead routing methods',
        table: {
          caption: 'Comparison of lead routing methods',
          head: ['Method', 'How it works', 'Best for', 'Watch out for'],
          rows: [
            ['Manual', 'A manager reads each lead and assigns it', 'Very low volumes', 'Delays outside office hours; bottleneck on one person'],
            ['Round-robin', 'Leads go to each rep in turn', 'Teams where any rep can handle any lead', 'Ignores language, location and product fit'],
            ['Weighted round-robin', 'Some reps get a larger share', 'Mixed seniority or part-time reps', 'Weights drifting from real capacity'],
            ['Rule-based', 'Attributes such as branch, product or channel decide the owner', 'Multi-branch or multi-product teams', 'Rule conflicts and gaps with no fallback'],
            ['Shared pool', 'Leads wait in a queue for any team member to claim', 'Small teams and overflow', 'Cherry-picking and leads left waiting'],
          ],
        },
      },
      {
        id: 'when-round-robin',
        heading: 'When round-robin works best',
        paragraphs: [
          'Round-robin works when reps are interchangeable: the same product, the same region and the same language. It is easy to explain, feels fair to the team and needs no maintenance.',
          'Plain round-robin breaks down when a rep is on leave, off shift or already handling too many open leads, because the next lead still lands with them. Availability-aware round-robin skips those reps and moves to the next person, which is the version worth using.',
        ],
      },
      {
        id: 'when-rules',
        heading: 'When rule-based routing works best',
        paragraphs: [
          'Rules are needed as soon as fit matters. Typical routing attributes are the branch or city nearest the customer, the product or project enquired about, the channel (website, ad campaign, partner, walk-in), the customer’s language, and deal size for B2B.',
          'Rules are evaluated in order, and the first match wins. Put the most specific rules first, such as a named key account or a premium project, and general rules later, such as city-based assignment. Always end with a fallback rule, so no lead is left without an owner.',
        ],
      },
      {
        id: 'worked-example',
        heading: 'Worked example: routing for a three-branch business',
        paragraphs: [
          'A company with branches in Pune, Nashik and Mumbai receives enquiries from its website, Google and Meta ads, and walk-ins. It sets up these ordered rules.',
        ],
        list: [
          'Enquiries for bulk or enterprise orders go to the key accounts team, round-robin among its two managers.',
          'Walk-ins are assigned to the rep who logged them at that branch.',
          'Enquiries with a Pune, Nashik or Mumbai PIN code go to that branch team, round-robin among reps who are on shift and below their open-lead limit.',
          'Everything else goes to a shared inside-sales pool with a 30-minute first-response target and escalation to the sales manager.',
        ],
        ordered: true,
        after: [
          'The key accounts rule comes first because a bulk enquiry from Pune should not be handled as a routine Pune lead. The pool at the end is the fallback, and the response target stops pooled leads from waiting unseen.',
        ],
      },
      {
        id: 'measuring',
        heading: 'How to measure whether routing is working',
        list: [
          'Time to first response, by source and by branch.',
          'Share of leads that breached the first-response target, and where they were waiting.',
          'Open leads per rep, to spot overload.',
          'Conversion from lead to next stage, by source and by rep.',
          'Number of leads reassigned by hand, which points to missing or wrong rules.',
        ],
        after: [
          'Review these every month. When manual reassignments cluster around one type of lead, add a rule for it rather than relying on a manager to fix it each time.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common lead routing mistakes',
        list: [
          'No fallback rule, so leads that match nothing sit unowned.',
          'Round-robin that still assigns to reps who are on leave.',
          'Duplicate enquiries from the same phone number or email routed to different reps.',
          'Routing on data the form does not collect, such as city, when the form only asks for a phone number.',
          'Changing rules without recording why, so nobody knows how a lead reached its owner.',
        ],
      },
    ],
    faqs: [
      { q: 'What is round-robin lead assignment?', a: 'Round-robin assigns each new lead to the next rep in a fixed order, so leads are spread evenly across the team. Better versions skip reps who are on leave, off shift or at their open-lead limit.' },
      { q: 'What is rule-based lead routing?', a: 'Rule-based routing assigns leads using their attributes, such as branch, product, channel or language. Rules are checked in order and the first matching rule decides the owner.' },
      { q: 'Should I use round-robin or rules?', a: 'Use rules to choose the right team and round-robin to spread leads within that team. Pure round-robin suits small teams where every rep can handle any lead.' },
      { q: 'What should happen to leads that match no rule?', a: 'They should go to a fallback, such as a shared pool or a named owner, with a first-response target and escalation, so no enquiry is left without an owner.' },
      { q: 'How do I stop the same lead being assigned twice?', a: 'Match new enquiries against existing leads by phone number and email before routing, and attach the new enquiry to the existing lead and its owner.' },
    ],
    sources: [],
  },
];

export const guideHref = (slug: string): string => `/guides/${slug}/`;
export const guidesFor = (productSlug: string): Guide[] => GUIDES.filter((g) => g.product === productSlug);
