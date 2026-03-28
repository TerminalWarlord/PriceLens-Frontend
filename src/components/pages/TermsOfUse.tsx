
const TERMS = [
  {
    title: 'Service',
    desc: 'PriceLens helps users compare product prices from third-party websites. We do not sell products directly.'
  },
  {
    title: 'Use',
    desc: `You agree not to:
	•	Use the service for illegal purposes
	•	Disrupt or abuse the platform
	•	Copy or misuse data from the site`
  },
  {
    title: 'Third-Party Content',
    desc: `Prices and product details come from external websites. We do not guarantee accuracy or availability.

All purchases are handled by third-party providers.`
  },
  {
    title: 'No Warranty',
    desc: 'The service is provided “as is” without guarantees of accuracy, uptime, or reliability.'
  },
  {
    title: 'Limitation of Liability',
    desc: 'PriceLens is not responsible for any loss, damage, or issues arising from using the service or third-party websites.'
  },
  {
    title: 'Changes',
    desc: 'We may update these terms at any time. Continued use means you accept the changes.'
  },
  {
    title: 'Contact',
    desc: 'For questions, contact: support@joybiswas.com'
  }
]

const TermsOfUse = () => {
  return (
    <div className="flex flex-col mt-24 mb-8  min-h-[calc(100vh-14rem)] space-y-2">
      <h1 className="text-2xl tracking-tight font-bold">Terms of Service</h1>
      <p>Last updated: March 28, 2026</p>
      <p>By using PriceLens, you agree to these terms.</p>
      <ul className="list-decimal px-8 flex flex-col space-y-4">
        {TERMS.map(term => {
          return <li className="font-medium">
            <span className="text-md md:text-lg font-medium">{term.title}</span>
            <p className="text-sm md:font-normal">
              {term.desc}
            </p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default TermsOfUse