import Link from "next/link";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title?: string;
  price?: string;
  interval?: string;
  features?: Feature[];
  href?: string;
  buttonText?: string;
}

export default function PricingCard({
  title = "Standard plan",
  price = "$49",
  features = [],
  href = "/",
  buttonText = "Pilih Paket"
}: PricingCardProps) {
  return (
    <div className="w-xs hover:scale-105 transition-all max-w-2xl p-6 bg-white rounded-md border border-gray-200 shadow-sm">
      <h5 className="mb-4 text-xl font-medium text-gray-900">{title}</h5>
      
      <div className="flex items-baseline text-blue-500">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
      </div>

      <ul role="list" className="space-y-4 my-6">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className={`flex items-center ${!feature.included ? 'line-through text-gray-400' : 'text-gray-600'}`}
          >
            <svg 
              className={`w-5 h-5 shrink-0 me-1.5 ${feature.included ? 'text-blue-500' : 'text-gray-300'}`} 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center text-center">
        <Link 
          href={href} 
          className="w-full text-white rounded-full inset-shadow-sm inset-shadow-blue-300 bg-blue-500 hover:bg-blue-600 font-medium text-sm px-4 py-2.5 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}