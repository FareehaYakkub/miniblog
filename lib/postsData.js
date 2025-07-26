export let posts = [
    {
    id: 1,
    slug: 'e-cars',
    title: "Electric Cars: Hype or Hope?",
    image: "/images/evehicle.jpeg",
    body: "Electric cars represent more than just a passing trend—they are a significant step toward a more sustainable future. While there has certainly been hype surrounding electric vehicles (EVs), especially with flashy marketing and celebrity endorsements, the underlying technology and purpose point to genuine hope. EVs offer a clean alternative to traditional fossil-fuel-powered cars, helping reduce carbon emissions and urban air pollution. Advances in battery technology, longer driving ranges, and expanding charging infrastructure are making EVs more practical and accessible. Governments around the world are also pushing for greener transportation through subsidies and policy changes. While challenges remain—such as high upfront costs, battery recycling, and the environmental impact of electricity generation—electric cars hold real promise for transforming the auto industry and addressing climate change. So, while the hype is real, the hope is even more powerful.Moreover, as major car manufacturers invest heavily in electric vehicle research and development, the market is becoming more competitive, driving innovation and reducing costs. Public awareness about environmental issues is also influencing consumer choices, encouraging the shift toward cleaner transportation. In the long run, electric cars are not just a technological advancement—they are part of a global movement toward sustainability. With continuous improvements and stronger support systems, EVs are likely to become the norm rather than the exception. Therefore, while the buzz around electric cars may seem exaggerated at times, the long-term hope they offer for a cleaner and greener future is very real."
  },
  {
    id: 2,
    slug: 'transport',
    title: "Public Transport vs Private Cars",
    image: "/images/transport.jpeg",
    body: "The debate between public transport and private cars is a significant one, especially in the context of growing urbanization, traffic congestion, and environmental concerns. Public transport—such as buses, trains, and metros—offers a cost-effective and eco-friendly mode of travel, especially in cities. It reduces the number of vehicles on the road, which in turn cuts down air pollution, traffic jams, and dependence on fossil fuels. Public transport systems also promote social equity by making mobility accessible to people from all economic backgrounds. On the other hand, private cars offer convenience, comfort, and personal freedom. They allow individuals to travel on their own schedule without relying on fixed routes or time tables, making them ideal for long distances or places not well-connected by public transit.However, the widespread use of private vehicles contributes significantly to traffic congestion, greenhouse gas emissions, and noise pollution. The cost of owning and maintaining a car—fuel, insurance, parking, and repairs—can also be high, particularly in densely populated areas. In contrast, well-managed public transportation systems can move large numbers of people efficiently while reducing the environmental footprint. That said, the effectiveness of public transport depends heavily on government investment, infrastructure, and reliability. In many regions, lack of proper facilities or irregular service discourages people from using it.Ultimately, both modes have their place. A balanced approach—where public transport is strengthened and private car use is minimized or regulated in crowded areas—can lead to more sustainable and livable cities. Encouraging ride-sharing, investing in clean energy public buses, and improving accessibility are ways to combine the benefits of both systems. The choice between public and private transport often comes down to availability, affordability, and lifestyle needs, but from an environmental and societal perspective, public transport clearly holds more long-term advantages."
  },
  {
    id: 3,
    slug: 'inflation',
    title: "Understanding Inflation in 2025",
    image: "/images/economics.jpeg",
    body: "Inflation in 2025 continues to be a critical economic factor affecting individuals, businesses, and governments worldwide. It refers to the general increase in prices of goods and services over time, which reduces the purchasing power of money. Various factors contribute to inflation, including supply chain disruptions, changes in consumer demand, labor market conditions, and monetary policies implemented by central banks. After the economic turbulence caused by recent global events such as the COVID-19 pandemic and geopolitical tensions, many countries have experienced fluctuating inflation rates, impacting everyday expenses like food, housing, and transportation. Central banks are now faced with the challenge of balancing inflation control without stifling economic growth, often adjusting interest rates to influence borrowing and spending. Moreover, inflation can have unequal effects across different income groups, often hitting low- and middle-income families harder as essential goods become more expensive. Businesses, meanwhile, must navigate rising input costs while trying to maintain competitiveness. Understanding inflation trends in 2025 requires monitoring global economic indicators, government fiscal policies, and external shocks that could influence supply and demand. Ultimately, inflation management remains a delicate task for policymakers striving to ensure price stability and sustainable economic development in an increasingly interconnected world."
  },
  {
    id: 4,
    slug: 'superfoods',
    title: "10 Superfoods That Boost Immunity",
    image: "/images/healthyfood.jpg",
    body: "Superfoods are nutrient-dense foods that offer powerful health benefits, especially when it comes to boosting the immune system. Incorporating a variety of these foods into your diet can help strengthen your body’s natural defenses against illnesses. Citrus fruits like oranges, lemons, and grapefruits are rich in vitamin C, which is known to enhance the production of white blood cells, vital for fighting infections. Garlic contains compounds such as allicin that have antimicrobial and immune-boosting properties. Ginger is another powerful root that reduces inflammation and supports immune responses. Yogurt and other probiotic-rich foods promote a healthy gut microbiome, which plays a crucial role in immunity. Leafy greens like spinach and kale are packed with antioxidants, vitamins A, C, and E, as well as minerals like iron and calcium that contribute to immune health. Nuts and seeds, including almonds and sunflower seeds, provide vitamin E and healthy fats that support the immune system. Turmeric contains curcumin, a compound with anti-inflammatory and antioxidant effects. Green tea is rich in flavonoids and amino acids that boost immune function. Lastly, mushrooms such as shiitake and maitake are known for their immune-enhancing beta-glucans. By regularly consuming these superfoods, alongside a balanced diet and healthy lifestyle, you can give your immune system a strong foundation to keep you resilient against infections and diseases."
  },
  {
  id: 5,
  slug: 'sustainable-future',
  title: "The Future of Sustainable Eating",
  image: "/images/food.jpg",
  body: "The future of sustainable eating is shaping how we think about food production, consumption, and its impact on the environment and society. As awareness of climate change and resource depletion grows, more people are embracing diets that prioritize sustainability, focusing on reducing food waste, choosing plant-based foods, and supporting ethical farming practices. Sustainable eating encourages minimizing the consumption of animal products, which generally require more land, water, and energy resources, while promoting locally sourced and seasonal produce to lower carbon footprints. Innovations such as lab-grown meats, alternative protein sources like insects and legumes, and vertical farming are also gaining momentum as solutions to feed a growing global population without further harming the planet. Additionally, reducing packaging waste and improving supply chains to prevent spoilage are crucial steps in this movement. Governments, businesses, and consumers all play important roles in driving sustainable eating habits that not only benefit individual health but also protect ecosystems and biodiversity. By making conscious food choices today, we pave the way for a more resilient and equitable food system tomorrow, ensuring future generations have access to nutritious and environmentally friendly food."
  },
  {
    id: 6,
    slug: 'e-currency',
    title: "What Is a Digital Currency?",
    image: "/images/digitalcurrency.jpg",
    body: "Digital currency refers to any form of money that exists purely in electronic form, without a physical counterpart like coins or banknotes. Unlike traditional currencies issued by governments and central banks, digital currencies can be centralized, like Central Bank Digital Currencies (CBDCs), or decentralized, like cryptocurrencies such as Bitcoin and Ethereum. Digital currencies allow for fast, secure, and borderless transactions using cryptographic techniques and blockchain technology, which ensures transparency and reduces the risk of fraud. As countries explore issuing their own digital currencies, the goal is to modernize financial systems, improve payment efficiency, and increase financial inclusion by providing access to digital payments for unbanked populations. However, digital currencies also raise important questions regarding regulation, privacy, security, and the impact on existing monetary policies. Understanding how digital money differs from traditional cash and cryptocurrencies is crucial for grasping the future of global finance in an increasingly digital world."
  }
];
export function getAllPostSlugs() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
