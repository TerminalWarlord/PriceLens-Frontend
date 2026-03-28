
export const DISCLAIMER_ITEMS = [
  {
    title: "No Guarantee of Accuracy",
    desc: "We strive to keep information up to date, but we do not guarantee that product details, prices, or availability are accurate or complete."
  },
  {
    title: "Third-Party Responsibility",
    desc: `All products, prices, and transactions are handled by third-party websites.

PriceLens is not responsible for:
•  Purchases or transactions  
•  Product quality or warranties  
•  Issues with third-party services`
  },
  {
    title: "No Professional Advice",
    desc: "The information on PriceLens is for general informational purposes only and should not be considered financial, commercial, or professional advice."
  },
  {
    title: "Use at Your Own Risk",
    desc: "You use PriceLens at your own risk. We are not liable for any losses or damages resulting from the use of our service."
  },
  {
    title: "Changes",
    desc: "We may update this disclaimer at any time. Continued use means you accept the changes."
  },
  {
    title: "Contact",
    desc: "For questions, contact: support@joybiswas.com"
  }
];

const Disclaimer = () => {
  return (
    <div className="flex flex-col mt-24 mb-8  min-h-[calc(100vh-14rem)] space-y-2">
      <h1 className="text-2xl tracking-tight font-bold">Disclaimer</h1>
      <p>Last updated: March 28, 2026</p>
      <p>PriceLens provides product pricing and information for comparison purposes only.</p>
      <ul className="list-decimal px-8 flex flex-col space-y-4">
        {DISCLAIMER_ITEMS.map(item => {
          return <li className="font-medium ">
            <span className="text-md md:text-lg font-medium">{item.title}</span>
            <p className="text-sm md:font-normal whitespace-pre-line">
              {item.desc}
            </p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Disclaimer