export interface ChangeDetails {
  section: string;
  difference: string;
  impact: string;
  highlighted_phrases_from_version_1: string[];
  highlighted_phrases_from_version_2: string[];
}

// interface Changes {
//   [key: string]: ChangeDetails;
// }

export const changes: ChangeDetails[] = [
  {
    section: 'Introduction',
    difference:
      'Version 2 introduces the concept of legal persons in the scope of e-KYC applications and expands the focus on the onboarding process, while Version 1 emphasizes the risks associated with digitalisation and the importance of technology robustness.',
    impact:
      'The inclusion of legal persons in Version 2 broadens the applicability of the e-KYC policy, potentially increasing compliance requirements for financial institutions. This change may enhance the effectiveness of AML/CFT measures by ensuring that both individuals and entities are subject to the same rigorous identification and verification processes. Additionally, the focus on onboarding in Version 2 suggests a proactive approach to integrating e-KYC solutions, which may improve customer experience but also necessitate careful management of associated risks.',
    highlighted_phrases_from_version_1: [
      'The digitalisation of identification and verification processes is an important enabler to increase the convenience and reach, as well as lower the costs of financial services.',
      'The digitalisation process, if not effectively managed, can become a source of risk to a financial institution and can undermine the integrity of financial transactions.',
      'The Bank expects the outcome of e-KYC technology adoption in the financial sector to include uncompromised accuracy in customer identification and verification.',
      'ensuring effective Anti-Money Laundering and Counter Financing of Terrorism (AML/CFT) control measures.',
    ],
    highlighted_phrases_from_version_2: [
      'digitalisation of the customer identification and verification processes has become an increasingly prominent enabler in the onboarding process for financial services.',
      'Growing adoption and understanding of e-KYC solutions in the financial sector call for enhancements to existing requirements to ensure e-KYC solutions continue to remain relevant, robust and reliable.',
      'This includes expanding the scope of e-KYC applications to cover both individuals and legal persons, providing guidance on e-KYC solutions that can cater to the unbanked, while ensuring uncompromised accuracy in customer identification and verification.',
      'ensuring effective anti-money laundering, countering financing of terrorism and countering proliferation financing (AML/CFT/CPF) control measures.',
    ],
  },
  {
    section: 'Applicability',
    difference:
      "Version 2 expands the applicability to include 'any other institution that may be specified by the Bank' and updates the date of the Agent Banking Policy Document.",
    impact:
      "The inclusion of 'any other institution that may be specified by the Bank' in version 2 broadens the scope of the policy, allowing the Bank greater flexibility in determining which institutions are subject to the policy. This could lead to increased regulatory oversight or compliance requirements for additional entities. The update of the date for the Agent Banking Policy Document may also reflect changes in regulatory standards or practices since the previous version, potentially impacting how agent banking is governed.",
    highlighted_phrases_from_version_1: [
      'This policy document is applicable to all financial institutions as defined in paragraph 5.2.',
      'This policy document shall not apply to agent banking channels governed under the policy document on Agent Banking dated 30 April 2015.',
    ],
    highlighted_phrases_from_version_2: [
      'This document is applicable to all financial institutions as defined in paragraph 5.2 and any other institution that may be specified by the Bank.',
      'This policy document shall not apply to agent banking channels governed under the Agent Banking Policy Document dated 30 June 2022.',
    ],
  },
  {
    section: 'Legal provisions',
    difference:
      "In version 2, the phrase '2001 Act' has been removed from the title of the Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act.",
    impact:
      "The removal of '2001 Act' may lead to ambiguity regarding the specific legislation being referenced, potentially causing confusion among stakeholders about the applicability of the law. This could affect compliance and enforcement efforts, as stakeholders may not clearly understand which version of the law is being cited.",
    highlighted_phrases_from_version_1: [
      'Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities 2001 Act (AMLA)',
    ],
    highlighted_phrases_from_version_2: [
      'Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA)',
    ],
  },
  {
    section: 'Effective date',
    difference:
      'The effective date of the policy document has been changed from 30 June 2020 in version 1 to 15 April 2024 in version 2.',
    impact:
      'This change in the effective date may delay the implementation of the policy, affecting stakeholders who rely on the policy for compliance and operational guidance. It could also impact any planned initiatives or regulatory timelines that were aligned with the original effective date.',
    highlighted_phrases_from_version_1: [
      'This policy document comes into effect on 30 June 2020.',
    ],
    highlighted_phrases_from_version_2: [
      'This Policy Document comes into effect on 15 April 2024.',
    ],
  },
  {
    section: 'Interpretation',
    difference:
      "Version 2 introduces new definitions for 'authorised person' and 'beneficial owner', while removing the detailed definition of 'customer' in the context of money service business and designated payment instruments.",
    impact:
      "The addition of definitions for 'authorised person' and 'beneficial owner' in Version 2 enhances clarity regarding the roles and responsibilities of individuals in business relationships with financial institutions. However, the removal of specific references to 'customer' in the context of money service business may lead to ambiguity regarding the application of the policy in that sector, potentially affecting compliance and enforcement.",
    highlighted_phrases_from_version_1: [
      '\u201ccustomer\u201d refers to a person for whom the licensee undertakes or intends to undertake business transactions.',
      '\u201cthe Bank\u201d means Bank Negara Malaysia.',
    ],
    highlighted_phrases_from_version_2: [
      '\u201cauthorised person\u201d in the context of a business relationship with a financial institution, refers to a natural person appointed in writing by a legal person to operate and maintain an account with a financial institution.',
      '\u201cbeneficial owner\u201d in the context of a legal person, refers to the natural person(s) who ultimately owns or controls a customer and/or the natural person on whose behalf a transaction is being conducted.',
    ],
  },
  {
    section: 'Related legal instruments and policy documents',
    difference:
      'Version 2 includes additional types of documents (circulars and supplementary documents) and updates the dates and titles of several referenced documents.',
    impact:
      "The inclusion of 'circulars' and 'supplementary documents' broadens the scope of related materials that must be considered, potentially increasing compliance obligations for stakeholders. The updated dates and titles reflect more current regulatory requirements, which may necessitate adjustments in practices and policies for financial institutions to remain compliant with the latest standards.",
    highlighted_phrases_from_version_1: [
      'this policy document must be read together with any relevant legal instruments, policy documents and guidelines issued by the Bank, in particular',
      'Anti-Money Laundering, Counter Financing of Terrorism and Targeted Financial Sanctions for Financial Institutions (AML/CFT and TFS for FIs) dated 1 January 2020;',
      'Risk Management in Technology (RMiT) dated 19 June 2020;',
      'Management of Customer Information and Permitted Disclosures dated 17 October 2017;',
    ],
    highlighted_phrases_from_version_2: [
      'this policy document must be read together with any relevant legal instruments, policy documents, guidelines, circulars, and supplementary documents issued by the Bank, in particular',
      'Anti-Money Laundering, Countering Financing of Terrorism, Countering Proliferation Financing and Targeted Financial Sanctions for Financial Institutions (AML/CFT/CPF and TFS for FIs) policy document issued on 5 February 2024;',
      'Risk Management in Technology (RMiT) dated 1 June 2023;',
      'Management of Customer Information and Permitted Disclosures dated 3 April 2023;',
    ],
  },
  {
    section: 'Policy documents superseded',
    difference: '',
    impact:
      'The section establishes that the current policy document replaces the previous e-KYC policy issued on 30 June 2020. This indicates a shift in regulatory framework, which may reflect updates in technology, compliance requirements, or operational practices. Stakeholders, including financial institutions and regulatory bodies, will need to adapt to the new guidelines, which could lead to improved customer verification processes. However, there may also be challenges in transitioning from the old policy to the new one, particularly in training staff and updating systems. The supersession may also affect ongoing compliance assessments and audits, necessitating a review of existing practices to align with the new policy. Overall, this change aims to enhance the effectiveness of customer verification while ensuring that stakeholders remain compliant with the latest standards.',
    highlighted_phrases_from_version_1: [],
    highlighted_phrases_from_version_2: [
      'This policy document supersedes the Electronic Know-Your-Customer (e-KYC) policy document issued on 30 June 2020.',
    ],
  },
  {
    section: 'e-KYC implementation',
    difference:
      'The section on the roles and responsibilities of the Board has been expanded in version 2 to include specific responsibilities regarding the performance of the e-KYC solution and the need for regular improvements, which were not explicitly mentioned in version 1.',
    impact:
      "This change emphasizes the Board's accountability for the ongoing performance and effectiveness of the e-KYC solution, potentially leading to more rigorous oversight and proactive measures to enhance the system. It may also increase the legal and operational responsibilities of the Board, as they must ensure that the e-KYC solution does not undermine the integrity of the identification and verification process.",
    highlighted_phrases_from_version_1: [
      'A financial institution shall obtain Board approval on the overall risk appetite and internal framework governing the implementation of e-KYC.',
      'The framework shall address high risk or material risk scenarios that require subsequent Board approval;',
      'The Board shall set and ensure the effective implementation of appropriate policies and procedures to address any risks associated with the implementation of e-KYC.',
    ],
    highlighted_phrases_from_version_2: [
      'A financial institution shall obtain Board approval on the overall risk appetite and internal framework governing the implementation of e-KYC for both individuals and legal persons.',
      'The Board of financial institutions shall be responsible for ensuring satisfactory measures are undertaken by the financial institution such that an appropriate level of performance of the e-KYC solution is maintained at all times.',
      'Such responsibilities of the Board should include but are not limited to ensuring improvements are undertaken by the financial institution to enhance the e-KYC solution in a regular and timely manner.',
    ],
  },
  {
    section: 'Reporting requirements',
    difference:
      'The section numbers have changed from 8 to 9, and the submission platform has been renamed and specified in more detail.',
    impact:
      "The change in section numbering may affect cross-references within the document and could lead to confusion if not updated consistently throughout. The specification of the submission platform as 'STATsmart Integrated Submission Platform (ISP) accessible via Kijang.Net' provides clearer guidance for financial institutions, potentially improving compliance and efficiency in submissions.",
    highlighted_phrases_from_version_1: [
      '8.1 In monitoring the effectiveness and accuracy of e-KYC solutions utilising artificial intelligence, machine learning or other forms of predictive algorithms, a financial institution shall maintain a record of the performance of the e-KYC solution segregated on a monthly basis in accordance with the reporting template specified in Appendix 3.',
      '8.3 A financial institution shall submit the record in relation to paragraph 8.1 in accordance with instructions set out in Appendix 5 via the Integrated Submission Platform, a web-based application set up by the Bank.',
    ],
    highlighted_phrases_from_version_2: [
      '9.1 In monitoring the effectiveness and accuracy of e-KYC solutions utilising artificial intelligence, machine learning or other forms of predictive algorithms, a financial institution shall maintain a record of the performance of the e-KYC solution segregated on a monthly basis.',
      '9.3 A financial institution shall submit the record in relation to paragraph 9.1 via the STATsmart Integrated Submission Platform (ISP) accessible via Kijang.Net (refer to Appendix 6 for details).',
    ],
  },
  {
    section:
      'Notification for licensed persons and prescribed development financial',
    difference:
      'The section numbers have changed from 9.x in version 1 to 10.x in version 2, and the requirements for submitting information have been expanded to include compliance details regarding the technology provider.',
    impact:
      'The change in section numbering indicates a potential restructuring of the document, which may affect cross-references throughout the policy. The addition of requirements for demonstrating compliance of the technology provider may impose additional burdens on licensed persons and prescribed development financial institutions, potentially delaying the implementation of e-KYC solutions. This could lead to increased scrutiny from the Bank and may affect the operational timelines for institutions looking to adopt or change their e-KYC solutions.',
    highlighted_phrases_from_version_1: [
      'where a licensed person or a prescribed development financial institution meets the requirements stipulated in this policy document and intends to implement an e-KYC solution described in paragraph 7.7 for the first time, a complete list of information as set out in Appendix 4 shall be submitted to the Bank.',
      'the submission of information to the Bank shall be made to Jabatan Penyeliaan Konglomerat Kewangan, Jabatan Penyeliaan Perbankan or Jabatan Penyeliaan Insurans dan Takaful, as the case may be and shall be signed off by the Chief Executive Officer, Chief Risk Officer or Chief Operating Officer who has the responsibility to ensure that the information submitted pursuant to this paragraph is complete and accurate.',
      'where a licensed person or a prescribed development financial institution intends to implement the e-KYC solution for the first time and the product to be offered qualifies as a new product as defined under the Introduction of New Products policy document, the information required under the aforementioned policy document and this policy document may be submitted together to the Bank.',
      'a licensed person or a prescribed development financial institution, where relevant, shall ensure compliance to the Bank\u2019s RMiT and Outsourcing policy documents.',
    ],
    highlighted_phrases_from_version_2: [
      'where a licensed person or a prescribed development financial institution meets the requirements stipulated in this policy document and intends to implement an e-KYC solution described in paragraph 8.19 for the first time or change the appointed technology provider for the e-KYC solution, a complete list of information as set out in Appendix 5 shall be submitted to the Bank. This shall also include a complete list of information to demonstrate that the technology provider complies with requirements set out in paragraph 8.22 and Appendix 3 of this policy document.',
      'the submission of information to the Bank shall be made to Jabatan Penyeliaan Konglomerat Kewangan, Jabatan Penyeliaan Perbankan or Jabatan Penyeliaan Insurans dan Takaful, as the case may be and shall be signed off by the Chief Executive Officer, Chief Risk Officer or Chief Operating Officer who has the responsibility to ensure that the information submitted pursuant to this paragraph is complete and accurate.',
      'where a licensed person or a prescribed development financial institution intends to implement the e-KYC solution for the first time and the product to be offered qualifies as a new product as defined under the Introduction of New Products policy document, the information required under the aforementioned policy document and this policy document may be submitted together to the Bank.',
      'a licensed person or a prescribed development financial institution, shall ensure, where relevant, approvals such as those in relation to the Bank\u2019s RMiT and Outsourcing policy documents are obtained.',
    ],
  },
  {
    section:
      'Approval for licensed money-changing operators, licensed remittance',
    difference: '',
    impact:
      'The section establishes a regulatory framework requiring licensed money-changing operators, remittance service providers, and non-bank issuers of payment instruments to obtain prior written approval from the Bank before implementing electronic Know Your Customer (e-KYC) processes. This requirement aims to enhance compliance with Anti-Money Laundering (AML), Counter Financing of Terrorism (CFT), and Targeted Financial Sanctions (TFS) regulations. The impact on stakeholders includes increased operational oversight for financial institutions, potential delays in service implementation due to the approval process, and heightened security measures to prevent financial crimes. Additionally, this could lead to improved consumer trust in digital financial services. However, it may also create barriers for smaller operators who may struggle with the compliance burden, potentially reducing competition in the market. Overall, the section aims to strengthen the integrity of the financial system while balancing the need for innovation in financial services.',
    highlighted_phrases_from_version_1: [
      'shall obtain a written approval from the Bank prior to implementing e-KYC',
      'an application for approval shall include a complete list of information as set out in Appendix 4',
      'subject to paragraphs 7.1 and 7.2 and as required under the policy document on AML/CFT and TFS for FIs',
    ],
    highlighted_phrases_from_version_2: [],
  },
  {
    section: 'Approval for licensed money services business',
    difference: '',
    impact:
      'The section establishes a regulatory framework requiring licensed money services businesses to obtain prior written approval before implementing electronic Know Your Customer (e-KYC) solutions or changing their technology providers. This aims to enhance compliance with Anti-Money Laundering (AML), Counter Financing of Terrorism (CFT), and Counter Proliferation Financing (CPF) regulations. The requirement for a comprehensive application process ensures that only compliant technology providers are utilized, potentially increasing the overall security and integrity of financial transactions. Stakeholders, including financial institutions and technology providers, may face increased operational burdens due to the need for detailed documentation and approval processes. However, this could also lead to improved trust in the financial system and better protection against illicit activities. The impact on existing policies may include a tightening of compliance measures and a potential shift in the technology landscape as providers adapt to meet regulatory standards. Unintended consequences could involve delays in the implementation of e-KYC solutions, which may hinder innovation and efficiency in the sector.',
    highlighted_phrases_from_version_1: [],
    highlighted_phrases_from_version_2: [
      'licensed money-changing operators, licensed remittance service providers',
      'obtain a written approval from Jabatan Pemantauan Perkhidmatan Pembayaran',
      'prior to implementing e-KYC or changing the appointed technology provider',
      'application for approval shall include a complete list of information',
      'demonstrate that the technology provider complies with requirements',
    ],
  },
  {
    section: 'Enforcement',
    difference:
      'The section number has changed from 11 to 12, and additional clauses have been introduced in version 2, including specific references to development financial institutions and conditions regarding enforcement actions based on the Financial Assessment Ratio (FAR).',
    impact:
      'The change in section number indicates a possible restructuring of the document, which may affect cross-referencing. The introduction of specific conditions related to development financial institutions and FAR provides clearer guidelines for enforcement actions, potentially leading to more targeted regulatory oversight. This could enhance compliance but may also increase the burden on financial institutions to monitor their FAR and implement necessary measures.',
    highlighted_phrases_from_version_1: [
      '11 Enforcement',
      'Where the Bank deems that the requirements in this document have not been complied with, the Bank may take appropriate enforcement action against the financial institution, including the directors, officers and employees, with any provision marked as \u201cS\u201d in this document or direct a financial institution to (i) undertake corrective action to address any identified shortcomings; and/or (ii) suspend or discontinue implementation of e-KYC.',
    ],
    highlighted_phrases_from_version_2: [
      '12 Enforcement',
      'Where the Bank deems that the requirements in this document have not been complied with, the Bank may take appropriate enforcement action against the financial institution, including the directors, officers and employees with any provision marked as \u201cS\u201d in this document or direct a financial institution to (i) undertake corrective action to address any identified shortcomings; and/or (ii) suspend or discontinue implementation of e-KYC.',
      'This includes cases where a prescribed development financial institution licensed to conduct remittance service under the Money Services Business Act 2011 (MSBA) intends to implement e-KYC for remittance services.',
      'Where FAR exceeds 5% and the Bank assesses a financial institution and its Board did not effectively undertake the expected rectification measures on vulnerabilities that were identified, relevant enforcement action may be taken against the financial institution. The Bank may also specify controls or intervention measures as deemed necessary.',
    ],
  },
];
