export type mobileFaqsType = {
  question: string
  answer: string
}

export type FeatureSwiperType = {
  id: string
  text: string
  title: string
  content: string
}
export const mobileShowCaseFaq: mobileFaqsType[] = [
  {
    question: 'What is included in the package price?',
    answer:
      'All of our journeys are designed to be all-inclusive. Your international and domestic flights, hotel stays, daily meals, cultural activities, park fees, and local transportation are covered. Personal shopping, optional excursions, and a few uncovered meals are the only extras.',
  },
  {
    question: 'Can I travel solo or as a couple?',
    answer:
      'Yes. We welcome solo travelers, couples, and small groups. Pricing is adjusted to reflect group size, with larger groups enjoying lower per-person costs since expenses like guides and transport are shared.',
  },
  {
    question: 'Do you accommodate dietary restrictions?',
    answer:
      'Absolutely. We work with partner hotels and restaurants that provide vegetarian, vegan, halal, and gluten-free meals. Just let us know your requirements ahead of time so we can plan accordingly.',
  },
  {
    question: 'Who will guide the trip?',
    answer:
      'Each journey is led by a Kenyan guide who is deeply connected to the communities you’ll visit. Our guides are not only logistical coordinators but also storytellers and cultural hosts, ensuring your trip is meaningful and authentic.',
  },
  {
    question: 'How do payments work?',
    answer:
      'You can secure your reservation with a $500 deposit. The remaining balance is due by the reservation deadline for your selected journey. This ensures your flights, hotels, and activities are confirmed and guaranteed in advance.',
  },
  {
    question: 'Is it safe to travel in Kenya?',
    answer:
      'Yes. We partner with established hotels, lodges, and transport providers to ensure your safety and comfort. Our guides accompany you throughout the journey, and we always stay updated on the best travel practices for visitors.',
  },
  {
    question: 'Can the itinerary be customized?',
    answer:
      'For private and small group trips, we can tailor parts of the itinerary to match your interests, whether that’s more time on safari, deeper cultural immersion, or extended coastal relaxation',
  },
]

export const featureSwiper: FeatureSwiperType[] = [
  {
    id: '#image1',
    text: '01',
    title: 'Choose the courses you are interested in',
    content:
      'Odio pellentesque faucibus tortor, sit ac mattis tincidunt magna sit. Vitae elementum amet etiam rhoncus, lacinia amet interdum pharetra tincidunt. Ultricies faucibus ac morbi eget nunc pretium id. Velit tristique scelerisque elit sociis convallis ultricies aliquam.',
  },
  {
    id: '#image2',
    text: '02',
    title: 'Track classes in progress and seek new knowledge',
    content:
      'Odio pellentesque faucibus tortor, sit ac mattis tincidunt magna sit. Vitae elementum amet etiam rhoncus, lacinia amet interdum pharetra tincidunt. Ultricies faucibus ac morbi eget nunc pretium id. Velit tristique scelerisque elit sociis convallis ultricies aliquam.',
  },
  {
    id: '#image3',
    text: '03',
    title: 'Study with a teacher in video format at a time convenient for you',
    content:
      'Odio pellentesque faucibus tortor, sit ac mattis tincidunt magna sit. Vitae elementum amet etiam rhoncus, lacinia amet interdum pharetra tincidunt. Ultricies faucibus ac morbi eget nunc pretium id. Velit tristique scelerisque elit sociis convallis ultricies aliquam.',
  },
]
