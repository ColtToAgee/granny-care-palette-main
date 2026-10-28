import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "et" | "ru";

type TranslationDictionary = typeof translations.en;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationDictionary;
};

const LANGUAGE_KEY = "mygranny-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const translations = {
  en: {
    meta: {
      defaultTitle: "My Granny - Verified Grannies for Estonian Families",
      defaultDescription:
        "MTÜ My Granny connects families with warm, verified grannies for childcare, company and everyday help.",
    },
    common: {
      brand: "My Granny",
      languages: {
        en: "English",
        et: "Eesti",
        ru: "Русский",
      },
      nav: {
        home: "Home",
        about: "About",
        counsellors: "Counsellors",
        booking: "Booking",
        contact: "Contact",
        terms: "Terms",
        importantInformations: "Important Informations",
        news: "News"
      },
      actions: {
        createAccount: "Create Account",
        bankAccountNumber: "Bank Account Number",
        supportUs: "Support Us",
        findGranny: "Find a Granny",
        becomeGranny: "Become a Granny",
        sendRequest: "Send Request",
        sendMessage: "Send message",
      },
      menu: {
        open: "Open menu",
        close: "Close menu",
      },
      notFound: {
        title: "Page not found",
        body: "The page you're looking for doesn't exist or has been moved.",
        action: "Go home",
      },
      error: {
        title: "This page didn't load",
        body: "Something went wrong on our end. You can try refreshing or head back home.",
        retry: "Try again",
        home: "Go home",
      },
    },
    footer: {
      intro:
        "MTÜ My Granny connects families with warm, verified grannies for childcare, company and everyday help across Estonia.",
      verified: "Every granny's background is verified",
      pages: "Pages",
      contact: "Contact",
      terms: "Terms & Conditions",
      rights: "All rights reserved.",
      follow: "Follow us",
      feedback: "Feedback",
      newsletter: "Newsletter",
      social: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "LinkedIn",
        youtube: "YouTube",
      },
    },
    home: {
      metaTitle: "My Granny - Verified Grannies for Childcare & Company in Estonia",
      metaDescription:
        "MTÜ My Granny connects families with warm, verified grannies for childcare, company and everyday help. Book a trusted granny in minutes.",
      badge: "Verified grannies - Estonia",
      title: "My Granny brings generations together",
      intro:
        "Find caring, grannies for childcare, companionship, and everyday help—or share your own experience with a family nearby.",
      stats: [
        ["240+", "Grannies"],
        ["1 100+", "Visits booked"],
        ["4.9", "Average rating"],
      ],
      heroAlt: "A grandmother reading a picture book with a young child at a sunlit kitchen table",
      rating: "4.9 from 380 families",
      ratingQuote: "Like family, from the first visit.",
      audiencesTitle: "Who it's for?",
      audiences: [
        {
          title: "For families",
          text: "Find trusted grannies who can help with childcare, companionship, and everyday support.",
        },
        {
          title: "For grannies",
          text: "Share your experience, skills, and time while building meaningful connections with families.",
        },
        {
          title: "For youngsters",
          text: "Connect with older generations, learn from their experiences, and build valuable relationships.",
        },
        {
          title: "Language practice",
          text: "Practice languages through real conversations and meaningful connections between generations.",
        },
        {
          title: "Counselling",
          text: "Find a safe space for conversation, guidance, emotional support, and intergenerational understanding.",
        },
      ],
      howTitle: "How it works?",
      howIntro: "Three calm steps from first hello to a regular, trusted routine.",
      stepLabel: "STEP",
      steps: [
        {
          title: "Tell us what you need",
          text: "Share your family's schedule, language and the kind of help you are looking for.",
        },
        {
          title: "Meet verified grannies",
          text: "Every granny passes identity checks, references and a personal interview.",
        },
        {
          title: "Start with a warm hello",
          text: "Have a free first meeting, then book regular visits whenever it suits you.",
        },
      ],
      safetyBadge: "Safety first",
      safetyTitle: "Trust you can feel before the door opens",
      safetyText:
        "We do background check on every granny and family. We support you before you find a suitable granny or family in your area. We try to find a best granny for your family.",
      features: [
        {
          title: "Background verified",
          text: "Documents, references and interviews checked by our team.",
        },
        { title: "Flexible hours", text: "Book one afternoon or a steady weekly rhythm." },
        {
          title: "Fair pay",
          text: "Transparent hourly rates that respect every granny's time.",
        },
        {
          title: "Local and warm",
          text: "Grannies from your own neighbourhood, speaking your language.",
        },
      ],
      testimonials: [
        {
          quote:
            "Granny Maie picks up our daughter twice a week. The house is calmer and warmer since she came.",
          name: "Kadri, Tallinn",
        },
        {
          quote:
            "After retiring my days felt long. Now I read stories every Tuesday and I am needed again.",
          name: "Granny Leili, Tartu",
        },
        {
          quote: "The verification and the first free meeting made the decision easy for us.",
          name: "Martin, Parnu",
        },
      ],
      ctaTitle: "Ready to meet your granny?",
      ctaText:
        "Send a request today and we will introduce you to grannies in your area within two working days.",
    },
    about: {
      metaTitle: "About MTÜ My Granny - Connecting Generations in Estonia",
      metaDescription:
        "MTÜ My Granny is a non-profit connecting families with verified grannies. Learn about our mission, values and verification process.",
      title: "We believe no generation should feel alone",
      intro:
        "MTÜ My Granny is an Estonian non-profit. We match families who need a caring hand with grannies who have time, experience and love to share.",
      imageAlt: "Grannies and young families sharing tea and conversation in a community room",
      storyTitle: "Our story",
      storyTagline: "My Granny — Connecting Generations, Growing Community",
      story: [
        "My Granny Project was born in Tallinn, Estonia in 2026 from a simple but powerful idea: what if the wisdom, warmth and life experience of older people could become a meaningful part of everyday family life?",
        "The project was created by a group of peer counsellors who wanted to turn a real social need into something practical, warm and human. We saw that many young parents struggle to balance work, childcare and everyday responsibilities, while many active older people have valuable skills, time and energy they would love to share.",
        "At first, it was a simple neighbourly idea — grannies helping young parents by picking children up from school or kindergarten in the afternoon. It quickly became much more than childcare: connection, trust, learning and a special bond between generations, including help with the Estonian language for families who needed it most.",
        "Our grannies bring something no textbook can teach: patience, life experience, kindness and the ability to make ordinary moments feel special. After school, a child might come home with a granny to bake, cook a simple meal, read a favourite book or just talk about the day — spending meaningful time with someone who has stories, knowledge and skills to share, instead of simply waiting for their parents to finish work.",
        "A granny might teach a child to make pancakes from an old family recipe, grow herbs on a windowsill, plant flowers, identify trees and birds, or explain where food really comes from. In summer, the adventures move outdoors — picking berries, foraging mushrooms, exploring nature trails or making homemade preserves, sometimes over a longer stay together in the countryside.",
        "There is plenty of room for creativity, too. Many of our grannies have wonderful traditional skills — knitting, sewing, embroidery, crocheting and handicrafts. A granny and a child might knit a scarf, sew a small bag, make a soft toy or repair an old favourite piece of clothing together. The result is never just a handmade object; it is a shared memory and a skill passed from one generation to the next.",
        "Children receive attention, encouragement and new experiences. Parents receive trusted support and a little more breathing space in their busy lives. And grannies gain a sense of purpose, connection and appreciation for everything they have learned over a lifetime — feeling needed and wanted matters at every age, and it matters for the mental wellbeing of older people too.",
        "What began as a neighbourly favour has the potential to grow into a nationwide intergenerational network connecting families and active older people across Estonia. Our vision is a society where ageing is not seen as becoming less useful, but as entering a new stage where knowledge, experience and time can be shared in meaningful ways.",
      ],
      storyClosing:
        "My Granny — where generations meet, skills are shared and everyday moments become memories.",
      missionTitle: "Mission",
      mission:
        "To reconnect generations through meaningful relationships that reduce loneliness, promote active ageing, and strengthen communities.",
      visionTitle: "Vision",
      vision:
        "To become Europe's leading platform for intergenerational relationships, reducing loneliness while strengthening communities through meaningful human connections.",
      challengesTitle: "Why this matters",
      challengesIntro: "Modern society is experiencing:",
      challenges: [
        "Ageing populations",
        "Increased loneliness",
        "Family fragmentation",
        "Urban isolation",
        "Reduced contact between generations",
        "Mental health challenges",
        "Loss of traditional knowledge",
      ],
      challengesText:
        "Older adults often possess valuable experience and skills but lack opportunities to contribute, while younger generations increasingly seek guidance, mentorship, and authentic human relationships.",
      valuesTitle: "What we stand for",
      values: [
        {
          title: "Warmth",
          text: "Care given in a patient and personal way.",
        },
        {
          title: "Safety",
          text: "Verification, background checks and clear agreements with both parties.",
        },
        {
          title: "Belonging",
          text: "Older people stay needed, children grow up with stories, and together they create memories that last.",
        },
        {
          title: "Sustainability",
          text: "A project that creates meaningful meetings, with fair pay for every granny.",
        },
      ],
      verifyTitle: "How we verify every granny",
      verifySteps: [
        ["Identity & documents", "ID verification and a criminal record check before approval."],
        [
          "References & interview",
          "Previous references plus a personal interview with a member of our team.",
        ],
        ["Ongoing support", "Feedback is collected after every visit."],
      ],
    },
    booking: {
      metaTitle: "Book a Granny - Requests & Applications | My Granny",
      metaDescription:
        "Send a booking request to find a verified granny for your family, or apply to become a granny with MTÜ My Granny.",
      title: "Book a granny in a few easy steps",
      intro:
        "Tell us a little about your family or yourself. Our coordinator answers every request within two working days.",
      roleFamily: "For families",
      roleGranny: "For grannies",
      roleYoungster: "For youngsters",
      successTitle: "Request received",
      successText: "Thank you. A coordinator will contact you within two working days.",
      anotherRequest: "Send another request",
      fields: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        city: "City or district",
        familyDate: "Preferred start date",
        numberOfChildren: "Number of children",
        grannyDate: "Available from",
        ageOfChildren: "Age of children",
        hours: "Hours per week",
        familyMessage: "Tell us about your family and what you need",
        grannyMessage: "Tell us about your experience and what you enjoy",
        youngsterMessage: "Tell us about yourself and how you'd like to help",
      },
      placeholders: {
        name: "Kadri Tamm",
        email: "kadri@email.ee",
        phone: "+372 5555 0143",
        city: "Tallinn, Kalamaja",
        hours: "6",
        familyMessage: "We have a 5-year-old and need afternoon pickup twice a week...",
        grannyMessage: "I raised three children, I love baking and reading aloud...",
        youngsterMessage: "I'm a student who loves spending time with older neighbours...",
      },
      consent: "By sending a request you agree to our terms and privacy practices.",
      safeTitle: "Safe by design",
      safeText:
        "Every granny is identity checked, interviewed and insured. Visits are coordinated and you can reach our team any weekday from 9:00 to 18:00.",
      helpTitle: "What we can help with",
      services: [
        "Childcare & school pickup",
        "Company and conversation",
        "Cooking & light household help",
        "Weekend or evening care",
      ],
      pricingTitle: "Pricing",
      pricingText: "From",
      pricingRate: "8 EUR / hour",
      pricingRest:
        "with a small non-profit coordination fee. First meeting free, cancel up to 24 hours ahead.",
    },
    contact: {
      metaTitle: "Contact MTÜ My Granny - Talk to Our Team",
      metaDescription:
        "Questions about grannies, bookings or volunteering? Contact the MTÜ My Granny team in Tallinn by email, phone or message.",
      title: "Talk to our team",
      intro:
        "Whether you are a parent, a granny or a partner organisation, we are happy to hear from you.",
      details: {
        email: "Email",
        phone: "Phone",
        office: "Location",
        officeValue: "No office address - counselling by online booking in advance",
      },
      nonprofit: "MTÜ My Granny is a registered Estonian non-profit. Registry code 80612345.",
      successTitle: "Message sent",
      successText: "We usually reply within one working day.",
      anotherMessage: "Write another message",
      formTitle: "Send us a message",
      fields: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@email.ee",
        subject: "Booking, volunteering, partnership...",
        message: "How can we help?",
      },
    },
    terms: {
      metaTitle: "Terms & Conditions | MTÜ My Granny",
      metaDescription:
        "Read the terms and conditions for using MTÜ My Granny: bookings, payments, cancellations, safety rules, privacy and liability.",
      title: "Terms & Conditions",
      intro: "Clear, plain-language rules for families and grannies using MTÜ My Granny.",
      updated: "Last updated: 1 August 2026",
      onPage: "On this page",
      safety:
        "Safety comes first. If anything feels unclear or unsafe, contact our coordinators before or during a booking. We are here to help.",
      sections: [
        {
          id: "about-service",
          title: "1. About the service",
          body: [
            "MTÜ My Granny (registry code 80612345, Tartu mnt 25, Tallinn) operates a platform that introduces families to verified grannies offering childcare, company and everyday help.",
            "My Granny acts as an intermediary and coordinator. The care itself is provided directly by the granny to the family.",
          ],
        },
        {
          id: "accounts",
          title: "2. Accounts and eligibility",
          body: [
            "You must be at least 18 years old to create an account and provide accurate, up-to-date information.",
            "Grannies must complete identity verification, provide two references and pass a personal interview before receiving bookings.",
            "We may suspend an account that provides false information or breaches these terms.",
          ],
        },
        {
          id: "bookings",
          title: "3. Bookings and cancellations",
          body: [
            "A booking becomes binding once both the family and the granny confirm the date, time and place.",
            "The first introduction meeting is free of charge.",
            "Bookings can be cancelled free of charge up to 24 hours before the agreed start time. Later cancellations may be charged at 50% of the visit fee.",
          ],
        },
        {
          id: "payments",
          title: "4. Prices and payments",
          body: [
            "Hourly rates start from 8 EUR and are shown before you confirm a booking. A small coordination fee supports verification, insurance and support work.",
            "Invoices are issued monthly and are payable within 7 days. All prices include applicable taxes.",
          ],
        },
        {
          id: "safety",
          title: "5. Safety and responsibilities",
          body: [
            "Families are responsible for describing the child's needs, allergies, routines and any medical information before the first visit.",
            "Grannies are responsible for attentive, respectful care and for informing the family immediately about any incident.",
            "Neither party may pass responsibility for a booked visit to a third person without written agreement.",
          ],
        },
        {
          id: "privacy",
          title: "6. Privacy",
          body: [
            "We process personal data only to match families and grannies, coordinate bookings and meet legal obligations, in line with the GDPR.",
            "Data is never sold. You may request access, correction or deletion of your data by writing to mygranny.info@gmail.com.",
          ],
        },
        {
          id: "liability",
          title: "7. Liability",
          body: [
            "My Granny carries liability insurance covering coordinated visits, subject to the insurer's conditions.",
            "My Granny is not liable for indirect damages or for agreements made privately between a family and a granny outside the platform.",
          ],
        },
        {
          id: "changes",
          title: "8. Changes and applicable law",
          body: [
            "We may update these terms; material changes are announced by email at least 14 days in advance.",
            "These terms are governed by Estonian law. Disputes are resolved first through negotiation, and otherwise by Harju County Court.",
          ],
        },
      ],
      questions: "Questions about these terms?",
      contact: "Contact our team",
    },
    importantInformations: {
      metaTitle: "Important Informations | MTÜ My Granny",
      metaDescription:
        "",
      title: "Important Informations",
      updated: "Last updated: 2 October 2026",
      intro: "MyGranny is not simply a service for finding a babysitter or helping hand for a family. Its aim is to create genuine, long-term intergenerational relationships in which both sides can give and receive time, attention, knowledge, experience and care. People of different ages, cultural backgrounds, languages, life experiences and habits may meet in the MyGranny community. It is therefore especially important that all participants follow shared good practice principles. ",
      onPage: "On this page",
      safety:
        "A relationship that connects generations begins with respect, trust and clear agreements.",
      sections: [
        {
          id: "our-shared-principles",
          title: "1. Our Shared principles",
          body: [
            "All MyGranny participants are guided by five key principles:",
            "Respect — We respect another person’s age, opinions, lifestyle, culture, language, habits and personal boundaries.",
            "Care — We notice the needs of others and treat them with kindness.",
            "Safety — We do not do anything that could endanger the physical or emotional well-being of a child, family, Mamma or Papa.",
            "Honest communication — If something does not work, causes discomfort or needs to change, we discuss it calmly and as early as possible.",
            "Mutuality — A MyGranny relationship is not one-sided. Mamma or Papa should also feel appreciated and have a positive experience."
          ],
        },
        {
          id: "before-the-first-meeting",
          title: "2. Before the first meeting",
          body: [
            "Before meeting, both sides discuss: the type of relationship and communication expected; suitable activities; when and how often to meet; where to meet; how to communicate; the child’s needs; Mamma/Papa’s capabilities; activities or situations that are unsuitable; how to give feedback; and what to do if agreements cannot be kept.",
            "Good practice: The clearer the agreements are at the beginning, the fewer misunderstandings are likely later. Important agreements should preferably be recorded in writing."
          ],
        },
        {
          id: "good-practice-for-mamma-papa",
          title: "3. Good practice for Mamma/Papa",
          body: [
            "Mamma or Papa is above all a trusted adult, companion and sharer of intergenerational experience.",
            "Mamma/Papa: keeps agreements; arrives on time; gives notice as soon as possible if unable to attend; listens to the child and considers their needs; respects the family home and rules; does not take over the parent’s role or make important decisions for the child without agreement; does not use physical punishment, humiliate, threaten or frighten a child, or force a child into unwanted activities; keeps personal information confidential; does not publish photos without consent; asks when unsure how to act; and discusses problems honestly and calmly.",
            "Mamma/Papa does not have to be perfect. Honesty about skills, capabilities and limitations is important. For example, if Mamma/Papa is not willing or able to transport a child alone, care for several children at once or do a particular activity, this must be stated before cooperation begins."
          ],
        },
        {
          id: "good-practice-for-the-family",
          title: "4. Good practice for the family",
          body: [
            "The family creates an environment in which Mamma or Papa feels welcome and valued.",
            "The family keeps agreements; respects Mamma/Papa’s time and boundaries; gives early notice of changes; explains the child’s needs honestly and discusses important family rules; does not expect more than agreed or treat Mamma/Papa as free labour or automatically as a professional babysitter; gives feedback respectfully; and informs MyGranny about problems or safety risks.",
            "If Mamma or Papa agrees to play with a child and go for a walk, the family should not gradually assume, without prior agreement, that they will also clean, cook or take on other household tasks."
          ],
        },
        {
          id: "interacting-with-a-child",
          title: "5. Good practice when interacting with a child",
          body: [
            "A child must feel safe and taken into account. Mamma/Papa should listen, ask the child’s opinion, allow time to adjust, notice the child’s mood, offer rather than impose activities, encourage effort, remain calm and patient, and consider the child’s age and developmental level.",
            "Avoid shouting, threats, belittling, comparing the child with others, physical punishment, forcing hugs/conversation/participation, searching personal belongings without need, or knowingly disregarding a parent’s instructions.",
            "Important: Mamma/Papa does not assume the role of a parent. The parent or legal representative is responsible for upbringing and important decisions."
          ],
        },
        {
          id: "childs-personal-boundaries",
          title: "6. A child’s personal boundaries",
          body: [
            "Every child has a right to personal space and boundaries. Respect it if a child does not want to hug, play a particular game, talk immediately, or wishes to be alone for a while, feels afraid or uncomfortable, or says something is unpleasant.",
            "Take a child’s “no” seriously.",
            "The family must also respect Mamma/Papa’s boundaries. Both sides’ boundaries matter."
          ],
        },
        {
          id: "family-and-mamma-papa-home",
          title: "7. The family home and Mamma/Papa’s home",
          body: [
            "When a meeting takes place at home, the rules of that home must be respected.",
            "Mamma/Papa must not enter rooms without invitation, use belongings without permission, invite others to the family home, take a child or family member elsewhere without prior agreement, or photograph the home or personal belongings without consent.",
            "The family respects Mamma/Papa’s home and personal space, does not expect activities at their home that have not been agreed, and takes their capabilities and limits into account."
          ],
        },
        {
          id: "phone-messages-and-communication",
          title: "8. Phone, messages and communication",
          body: [
            "At the outset, agree on the communication channel, such as phone, SMS, WhatsApp or another agreed channel.",
            "Good practice: do not repeatedly message someone who has not replied; do not call late without a good reason; notify the other side immediately of urgent changes; remain polite even when upset; and avoid resolving conflict by messages when a calm conversation would be better.",
            "If communication becomes unpleasant or conflictual, involve a MyGranny counsellor."
          ],
        },
        {
          id: "lateness-and-changes",
          title: "9. Lateness and changes to agreements",
          body: [
            "Unexpected situations happen. If you are late, notify the other side as soon as possible.",
            "If a meeting must be cancelled, give notice as early as possible.",
            "Repeated lateness, last-minute cancellations or failure to keep agreements damages trust.",
            "Reliability is the foundation of a MyGranny relationship."
          ],
        },
        {
          id: "gifts-money-and-compensation",
          title: "10. Gifts, money and compensation",
          body: [
            "The focus of MyGranny is human connection and mutual value, not money.",
            "If the family and Mamma/Papa agree on a paid activity, they must agree in advance on the amount, what it covers and the payment method and time, and consider applicable laws where necessary.",
            "The MyGranny counselling and matching service fee of €54.99 is not payment to Mamma/Papa.",
            "MyGranny does not automatically set the amount of any payment between a family and Mamma/Papa."
          ],
        },
        {
          id: "gifts-and-personal-loans",
          title: "11. Gifts and personal loans",
          body: [
            "It is good practice to avoid financial or material relationships affecting trust.",
            "Do not ask the other party for a loan, give large monetary gifts, or use trust for financial gain.",
            "If money matters become uncomfortable, discuss them with a MyGranny counsellor if needed.",
            "Small symbolic gifts or shared baking, crafts or other activities may be a natural part of the relationship if both sides are comfortable."
          ],
        },
        {
          id: "photos-and-social-media",
          title: "12. Photos and social media",
          body: [
            "Consent is required to photograph a child or family and to publish photos.",
            "Without consent, do not photograph a child, publish the child’s name, share the family’s address or photos on social media, publicly discuss private family matters, or share Mamma/Papa’s personal data.",
            "Even a well-intentioned post can violate privacy.",
            "If in doubt, ask first."
          ],
        },
        {
          id: "trust-develops-gradually",
          title: "13. Trust develops gradually",
          body: [
            "The first meeting does not have to be perfect.",
            "A child may not immediately connect with Mamma/Papa; Mamma/Papa may need time to understand family habits; and the family may not know after one meeting whether the person is a good fit.",
            "This is normal.",
            "MyGranny therefore uses a trial period of 1–3 meetings, during which both sides can assess how cooperation works."
          ],
        },
        {
          id: "if-something-is-not-suitable",
          title: "14. If something is not suitable",
          body: [
            "You always have the right to say, “This does not work for me.”",
            "Mamma/Papa or the family may end the cooperation, and a child may express discomfort.",
            "No one has to continue simply because a match has already been made.",
            "If possible, discuss the reason calmly.",
            "If the issue cannot be resolved between the parties, contact a MyGranny counsellor.",
            "MyGranny can arrange a new match if needed."
          ],
        },
        {
          id: "when-immediate-action-is-needed",
          title: "15. When immediate action is needed",
          body: [
            "If there is suspected violence or child abuse, serious danger to a child or adult, threats, suspected sexual abuse or another immediate safety risk, do not wait for the usual problem-solving process.",
            "First ensure the person’s or child’s safety.",
            "Call 112 if necessary.",
            "Then inform the parent and/or MyGranny counsellor as appropriate.",
            "A MyGranny counsellor does not replace the police, ambulance, doctor, child protection services or other competent authorities."
          ],
        },
        {
          id: "mamma-papa-is-not-a-parent",
          title: "16. Mamma/Papa is not a parent",
          body: [
            "This is one of MyGranny’s most important principles.",
            "Mamma/Papa may support, listen, play, teach, read, go for walks, share knowledge, provide company and be an important, trusted adult for a child.",
            "Mamma/Papa does not make decisions about the child’s treatment, medication, school, upbringing, punishment or other important life arrangements.",
            "These decisions belong to the parent or legal representative."
          ],
        },
        {
          id: "family-is-not-an-employer",
          title: "17. The family is not an employer; Mamma/Papa is not a free service provider",
          body: [
            "MyGranny is based on a relationship, not a one-sided service.",
            "The family should not think, “Now we have someone who can do everything for us.”",
            "Mamma/Papa should not think, “I must agree to everything because they chose me.”",
            "Cooperation works when both sides consider each other’s capabilities and boundaries."
          ],
        },
        {
          id: "respect-for-language-and-culture",
          title: "18. Respect for language and culture",
          body: [
            "MyGranny may bring together people with different native languages, cultures and life experiences.",
            "This is an opportunity to learn from one another.",
            "Be patient if someone does not speak Estonian fluently; do not mock their accent or language skills; repeat or explain when needed; respect different cultural habits; and treat differences as a learning opportunity.",
            "Practising Estonian may be a valuable part of a MyGranny relationship."
          ],
        },
        {
          id: "misunderstanding",
          title: "19. What to do when there is a misunderstanding",
          body: [
            "Ask first instead of making assumptions.",
            "For example: “Have I understood correctly that…?” or “I would like to clarify this agreement.”",
            "If a conflict arises: speak calmly; listen to the other person’s explanation; restate the agreement; and, if no solution is found, contact a MyGranny counsellor."
          ],
        },
        {
          id: "mygranny-golden-rules",
          title: "20. MyGranny golden rules — 10 simple rules for every participant",
          body: [
            "1. Keep your word. If you promised to come, come; if you cannot, let the other person know.",
            "2. Respect boundaries. Do not assume you know what suits someone else.",
            "3. Ask before acting, especially regarding a child, photos, a home or personal information.",
            "4. Do not take the parent’s role. Support the child, but do not make important decisions for the parent.",
            "5. Keep confidences. Family information stays private between the family and Mamma/Papa.",
            "6. Do not exploit trust financially, emotionally or otherwise.",
            "7. Talk about problems. Hiding a problem does not solve it.",
            "8. Do not force. Children and adults may say no.",
            "9. Be patient. Trust and closeness take time.",
            "10. Think mutually. Ask yourself: “Is this good and appropriate for the other person too?”"
          ],
        },
        {
          id: "before-starting-cooperation-checklist",
          title: "21. Before starting cooperation — checklist",
          body: [
            "Mamma/Papa should ask: Do I understand what the family expects? Does the family know what I want and am prepared to do? Have we agreed on time and place? Do I know the child’s important needs? Do I know whom to contact if a problem arises? Are my boundaries clear to the family? Am I ready to respect the family’s agreements? Do I feel comfortable and safe?",
            "The family should ask: Have we described our needs honestly? Does Mamma/Papa know the child’s important needs and characteristics? Have we clearly agreed on activities, communication channel, times and frequency? Have we discussed the child’s boundaries? Do we respect Mamma/Papa’s time and boundaries? Are we ready to give and receive honest feedback?"
          ],
        },
        {
          id: "our-shared-commitment",
          title: "22. Our shared commitment",
          body: [
            "Participation in the MyGranny community means that we seek to build a relationship in which the child feels safe, the family feels supported, Mamma/Papa feels valued, and everyone feels respected.",
            "MyGranny is not simply looking for someone to save a family time. We seek to create a genuine bond between generations.",
            "Mamma or Papa can share time, knowledge, skills and life experience.",
            "The family and younger generation can give in return conversation, new experiences, youthful energy and the feeling of having an important person by their side.",
            "MyGranny — More than childcare. An opportunity to build a relationship that may last for years."
          ],
        }
      ]
    },
    counsellors: {
      metaTitle: "Our Counsellors | My Granny",
      metaDescription:
        "Meet MTÜ My Granny's peer counsellors, ready to listen, support and help you find clarity in life's challenges.",
      title: "Our Counsellors",
      intro:
        "Meet the experienced peer counsellors who listen without judgement and walk alongside you and your family.",
      languagesLabel: "Languages spoken",
      contactLabel: "Get in touch",
      list: [
        {
          id: "airi-kartna",
          name: "Airi Kärtna",
          role: "Peer Counsellor",
          imageAlt: "Portrait of Airi Kärtna, peer counsellor",
          bio: [
            "I support people who need advice, encouragement, and a thoughtful companion in clarifying their wishes, goals, and possibilities and in finding a way to turn them into reality. If you are ready to grow and create change in your life, but need a patient listener and a supportive person alongside you, we can work together to find clarity even in difficult or confusing situations.",
            "I share the life experience, knowledge, and lessons I have gained throughout the years. I believe that even difficult experiences can give us strength, deeper understanding, and the ability to recognise new opportunities. What motivates me is the joy I find in my work and, above all, seeing my clients grow, achieve both small and significant steps forward, and regain their confidence in themselves.",
            "In my work, I combine my long-term experience as a mother, my experience of living abroad and adapting to different environments, as well as my personal experience of grief and a difficult period connected with depression. At the heart of my work is a genuine interest in people and their inner world.",
            "I lived for 20 years in three different countries and returned to Estonia six years ago. I have experienced what it means to integrate into and adapt to a new environment while at the same time carrying the responsibilities of raising a family and children. As a mother of three, I know how much joy, but also how many challenges and unexpected situations, life and parenthood can bring.",
            "My life journey has included both great successes and difficult times, confusion, and grief. I have learned how to move forward step by step even during the darkest periods, how to support myself, and how to find the strength to begin again. I share these experiences with my clients not by giving ready-made answers, but by offering support, understanding, and a willingness to think things through together.",
            "I believe that every person's story is unique, and that we do not always need someone to tell us what we should do. Sometimes what matters most is having someone beside us who listens, helps us organise our thoughts, asks the right questions, and supports us in finding our own answers and making our own choices.",
            "I have completed several coaching courses, Mental Health First Aid training, gained basic knowledge of psychology, and completed peer counsellor training, including practical experience.",
          ],
          goal:
            "My goal is to be there for you – to listen, understand, help you find clarity, and support you on the path you choose for yourself.",
          languages: ["Estonian", "Russian", "English"],
          phone: "+372 55920520",
          email: "airi@mygranny.ee",
        },
        {
          id: "liina-lamson",
          name: "Liina Lamson",
          role: "Peer Counsellor",
          imageAlt: "Portrait of Liina Lamson, project manager and peer counsellor",
          bio: [
            "I am a peer counselor who is passionate about people’s well-being, connecting people, and the possibility of finding a new direction in life, even after difficult and challenging periods.",
            "I have an international educational and professional background from France, Tunisia and Denmark, and I have been involved in various projects focused on bringing people together, coordinating collaboration, and turning new ideas into reality. In addition to my studies and experience in project management, I have trained as a peer counsellor and activity coordinator. These studies have given me both the knowledge and practical skills to support people during challenging stages of life, listen without judgement, and help them gradually rebuild their confidence and belief in their own possibilities.",
            "As a peer counsellor, I support people who have experienced a life crisis or are facing a significant transition. My aim is to help people find a new direction – whether that means finding a new job, starting or returning to studies, retraining, or simply taking the first realistic step forward. I believe that a crisis does not have to mean that life has come to a standstill. In many cases, a difficult period can become the starting point for a new and meaningful chapter in life.",
            "This experience also strongly shapes my contribution to the My Granny project. I see great value in intergenerational connections and believe that older people have an enormous amount to contribute to society. Their life experience, knowledge, stories, skills, and wisdom should not be overlooked or left behind. At the same time, I believe that younger people need opportunities to listen, learn, and receive support from people whose life journeys have been longer and more diverse.",
            "Through the My Granny project, I see an opportunity to create more of these meaningful encounters. For me, intergenerational connection is not about one-sided support or helping one group by another. It is about a mutual relationship in which both generations have something to give and something to receive. An older person can share their experience, knowledge, stories, and wisdom, while a younger person can bring fresh energy, new knowledge, perspectives, and ideas into the relationship.",
            "For me, My Granny is, above all, about connecting people. It is an opportunity to bring together different generations, experiences, and stories and to create relationships that foster greater care, belonging, understanding, and mutual respect.",
            "I believe that no life crisis has to be the end of the road – it can be the beginning of a new chapter. And sometimes, the most important thing a person needs when looking for a new beginning is simply someone who listens, believes in them, and helps them see the next possible step."
          ],
          goal:
            "Liina believes that no life crisis has to be the end of the road – it can be the beginning of a new chapter. And sometimes, the most important thing a person needs when looking for a new beginning is simply someone who listens, believes in them, and helps them see the next possible step.",
          languages: ["Estonian", "French", "English"],
          phone: "+372 58596615",
          email: "liina@mygranny.ee",
        },
        {
          id: "anne-kaljas",
          name: "Anne Kaljas",
          role: "Peer Counsellor",
          imageAlt: "Portrait of Anne Kaljas, peer counsellor",
          bio: [
            "I am deeply curious about people, their inner worlds, and the ways in which they relate to the world around them.",
            "My background brings together science, counselling, and a longstanding interest in the spiritual practices, healing traditions, and approaches of different cultures.",
            "I have completed the Fontes Career Counselling and Leadership Development Programme, which has given me a modern and practical foundation for supporting people through periods of change, important decisions, and new beginnings. As a career counsellor, I support people in making professional and life choices by helping them gain a clearer understanding of their strengths, needs, values, and genuine aspirations.",
            "Years of dedicated exploration of spiritual practices and healing approaches from different cultures have shaped my counselling style. This allows me to look at each person from multiple perspectives and recognise connections that may otherwise remain unnoticed.",
            "My approach is holistic and deeply individual. When appropriate, I also incorporate sound and nature-based practices into my work, supporting people not only through thoughts and words, but through a more complete and embodied experience.",
            "Every person has a unique story, unique needs, and their own path. My role as a counsellor is not to provide ready-made answers, but to help you arrive at the insight you need in the present moment, so that you can find your own way forward.",
          ],
          goal:
            "My goal is to help you gain clarity, build confidence and create meaningful and sustainable choices for both your professional and personal life.",
          languages: ["Estonian", "Russian", "English"],
          phone: "+372 5178959",
          email: "anne@mygranny.ee",
        },
      ],
    },
  },
  et: {
    meta: {
      defaultTitle: "My Granny - kontrollitud vanaemad Eesti peredele",
      defaultDescription:
        "MTÜ My Granny ühendab pered soojade ja kontrollitud vanaemadega lastehoiu, seltsi ja igapäevase abi jaoks.",
    },
    common: {
      brand: "My Granny",
      languages: {
        en: "English",
        et: "Eesti",
        ru: "Русский",
      },
      nav: {
        home: "Avaleht",
        about: "Meist",
        counsellors: "Nõustajad",
        booking: "Broneerimine",
        contact: "Kontakt",
        terms: "Tingimused",
        importantInformations: "Oluline Teave",
        news: "Uudised"
      },
      actions: {
        createAccount: "Loo konto",
        bankAccountNumber: "Pangakonto number",
        supportUs: "Toeta meid",
        findGranny: "Leia vanaema",
        becomeGranny: "Hakka vanaemaks",
        sendRequest: "Saada päring",
        sendMessage: "Saada sõnum",
      },
      menu: {
        open: "Ava menüü",
        close: "Sulge menüü",
      },
      notFound: {
        title: "Lehte ei leitud",
        body: "Otsitud lehte ei ole olemas või see on teisaldatud.",
        action: "Avalehele",
      },
      error: {
        title: "Lehte ei õnnestunud laadida",
        body: "Midagi läks meie poolel valesti. Proovi värskendada või mine avalehele.",
        retry: "Proovi uuesti",
        home: "Avalehele",
      },
    },
    footer: {
      intro:
        "MTÜ My Granny ühendab pered soojade ja kontrollitud vanaemadega lastehoiu, seltsi ja igapäevase abi jaoks üle Eesti.",
      verified: "Iga vanaema taust on kontrollitud",
      pages: "Lehed",
      contact: "Kontakt",
      terms: "Tingimused",
      rights: "Kõik õigused kaitstud.",
      follow: "Jälgi meid",
      feedback: "Tagasiside",
      newsletter: "Uudiskiri",
      social: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "LinkedIn",
        youtube: "YouTube",
      },
    },
    home: {
      metaTitle: "My Granny - kontrollitud vanaemad lastehoiuks ja seltsiks Eestis",
      metaDescription:
        "MTÜ My Granny ühendab pered soojade ja kontrollitud vanaemadega lastehoiu, seltsi ja igapäevase abi jaoks. Broneeri usaldusväärne vanaema mõne minutiga.",
      badge: "Kontrollitud vanaemad - Eesti",
      title: "My Granny toob põlvkonnad kokku",
      intro:
        "Leia hoolivaid, kontrollitud vanaemasid lastehoiuks, seltsiks ja igapäevaseks abiks — või jaga oma kogemust lähedal elava perega.",
      stats: [
        ["240+", "Vanaema"],
        ["1 100+", "Broneeritud külastust"],
        ["4.9", "Keskmine hinnang"],
      ],
      heroAlt: "Vanaema loeb päikeselises köögis lapsega pildiraamatut",
      rating: "4.9 hinnang 380 perelt",
      ratingQuote: "Nagu oma pere, juba esimesest külastusest.",
      audiencesTitle: "Kellele me pakume tuge?",
      audiences: [
        {
          title: "Peredele",
          text: "Leia usaldusväärseid vanaemasid, kes aitavad lastehoiu, seltsi ja igapäevase toega.",
        },
        {
          title: "Vanaematele",
          text: "Jaga oma kogemust, oskusi ja aega, luues samal ajal sisulisi suhteid peredega.",
        },
        {
          title: "Noortele",
          text: "Suhtle vanema põlvkonnaga, õpi nende kogemustest ja loo väärtuslikke suhteid.",
        },
        {
          title: "Keelepraktika",
          text: "Harjuta keeli päris vestluste kaudu, luues sisukaid põlvkondadevahelisi sidemeid.",
        },
        {
          title: "Nõustamine",
          text: "Leia turvaline koht vestluseks, nõu saamiseks, emotsionaalseks toeks ja põlvkondadevaheliseks mõistmiseks.",
        },
      ],
      howTitle: "Kuidas see töötab?",
      howIntro: "Kolm rahulikku sammu esimesest tutvusest usaldusväärse rutiinini.",
      stepLabel: "SAMM",
      steps: [
        {
          title: "Räägi, mida vajad",
          text: "Jaga oma pere ajakava, keelt ja abi, mida otsid.",
        },
        {
          title: "Tutvu kontrollitud vanaemadega",
          text: "Iga vanaema läbib isikutuvastuse, soovituste kontrolli ja vestluse.",
        },
        {
          title: "Alusta sooja tervitusega",
          text: "Kohtuge esimesel tasuta tutvumisel ja broneeri edaspidi ajad, mis sulle sobivad.",
        },
      ],
      safetyBadge: "Turvalisus ennekõike",
      safetyTitle: "Usaldus, mida tunned juba enne ukse avamist",
      safetyText:
        "Kontrollime iga vanaema ja pere tausta. Toetame teid enne, kui leiate oma piirkonnas sobiva vanaema või pere. Püüame leida teie perele parima vanaema.",
      features: [
        {
          title: "Taust kontrollitud",
          text: "Meie tiim kontrollib dokumendid, soovitajad ja vestluse tulemused.",
        },
        { title: "Paindlik aeg", text: "Broneeri üks pärastlõuna või püsiv nädalane rütm." },
        {
          title: "Õiglane tasu",
          text: "Läbipaistvad tunnitasud, mis väärtustavad iga vanaema aega.",
        },
        {
          title: "Kohalik ja soe",
          text: "Vanaemad sinu piirkonnast, sinu pere keeles.",
        },
      ],
      testimonials: [
        {
          quote:
            "Vanaema Maie toob meie tütre kaks korda nädalas lasteaiast koju. Kodus on sellest ajast rahulikum ja soojem.",
          name: "Kadri, Tallinn",
        },
        {
          quote:
            "Pärast pensionile jäämist tundusid päevad pikad. Nüüd loen igal teisipäeval lugusid ja tunnen, et mind on vaja.",
          name: "Vanaema Leili, Tartu",
        },
        {
          quote: "Kontroll ja esimene tasuta kohtumine tegid otsuse meie jaoks lihtsaks.",
          name: "Martin, Pärnu",
        },
      ],
      ctaTitle: "Valmis oma vanaemaga kohtuma?",
      ctaText:
        "Saada päring juba täna ja tutvustame sulle sinu piirkonna vanaemasid kahe tööpäeva jooksul.",
    },
    about: {
      metaTitle: "MTÜ My Granny - põlvkondade ühendamine Eestis",
      metaDescription:
        "MTÜ My Granny on mittetulundusühing, mis ühendab pered kontrollitud vanaemadega. Loe meie missioonist, väärtustest ja kontrolliprotsessist.",
      title: "Usume, et ükski põlvkond ei peaks end üksi tundma",
      intro:
        "MTÜ My Granny on Eesti mittetulundusühing. Viime kokku pered, kes vajavad hoolivat abikätt, ja vanaemad, kellel on aega, kogemust ja armastust jagada.",
      imageAlt: "Vanaemad ja noored pered joovad kogukonnaruumis teed ja vestlevad",
      storyTitle: "Meie lugu",
      storyTagline: "My Granny – põlvkondi ühendav, kogukonda kasvatav",
      story: [
        "My Granny sündis Tallinnas 2026. aastal lihtsast, ent jõulisest ideest: mis oleks, kui vanemate inimeste tarkus, soojus ja elukogemus võiksid saada tähendusrikkaks osaks pere igapäevaelust?",
        "Projekti lõid kogemusnõustajad, kes soovisid muuta reaalse ühiskondliku vajaduse millekski praktiliseks, soojaks ja inimlikuks. Nägime, et paljud noored vanemad võitlevad töö, lastehoiu ja igapäevaste kohustuste tasakaalustamisega, samal ajal kui paljudel aktiivsetel eakatel on väärtuslikud oskused, aeg ja energia, mida nad sooviksid jagada.",
        "Alguses oli see lihtne naabrilik mõte — vanaemad aitavad noori vanemaid, tuues lapsi pärastlõunal koolist või lasteaiast koju. Sellest kasvas kiiresti välja palju enamat kui lastehoid: side, usaldus, õppimine ja eriline põlvkondadevaheline suhe, sealhulgas abi eesti keele õppimisel peredele, kes seda kõige rohkem vajasid.",
        "Meie vanaemad toovad kaasa midagi, mida õpikust ei õpi: kannatlikkust, elukogemust, headust ja oskuse muuta tavalised hetked erilisteks. Pärast kooli võib laps minna vanaema juurde küpsetama, süüa valmistama, lemmikraamatut lugema või lihtsalt päevast rääkima — veetes sisukat aega inimesega, kellel on jagada lugusid, teadmisi ja oskusi, selle asemel, et lihtsalt vanemate töölt tulekut oodata.",
        "Vanaema võib õpetada last valmistama pannkooke vana peretraditsiooni järgi, kasvatama aknalaual maitsetaimi, istutama lilli, tundma puid ja linde või selgitama, kust toit tegelikult pärineb. Suvel liiguvad seiklused õue — marjul ja seenel käiakse, looduse õpperadu avastatakse või valmistatakse kodumoosi, mõnikord ka pikema maal veedetud aja jooksul koos vanaemaga.",
        "Ruumi jagub ka loovusele. Paljudel meie vanaematel on suurepärased traditsioonilised oskused — kudumine, õmblemine, tikkimine, heegeldamine ja käsitöö. Vanaema ja laps võivad koos kududa salli, õmmelda väikese kotikese, teha pehme mänguasja või parandada vana lemmikriideeseme. Tulemuseks ei ole pelgalt käsitööese — see on ühine mälestus ja oskus, mis kandub ühelt põlvkonnalt teisele.",
        "Lapsed saavad tähelepanu, julgustust ja uusi kogemusi. Vanemad saavad usaldusväärset tuge ja pisut rohkem hingamisruumi oma kiires elutempos. Vanaemad aga saavad eesmärgitunde, side ja tunnustuse kõige eest, mida nad on elu jooksul õppinud — vajalik ja oodatud olemise tunne on oluline igas eas ning see toetab ka eakate vaimset heaolu.",
        "Sellest, mis algas naabriliku teenena, võib kasvada üleriigiline põlvkondadevaheline võrgustik, mis ühendab peresid ja aktiivseid eakaid üle kogu Eesti. Meie visioon on ühiskond, kus vananemist ei nähta kui vähem kasulikuks muutumist, vaid kui uue etapi algust, kus teadmisi, kogemusi ja aega saab jagada tähendusrikkalt.",
      ],
      storyClosing:
        "My Granny — koht, kus põlvkonnad kohtuvad, oskused liiguvad edasi ja argipäevased hetked saavad mälestusteks.",
      missionTitle: "Missioon",
      mission:
        "Ühendada põlvkonnad tähendusrikaste suhete kaudu, mis vähendavad üksindust, toetavad aktiivset vananemist ja tugevdavad kogukondi.",
      visionTitle: "Visioon",
      vision:
        "Saada Euroopa juhtivaks põlvkondadevaheliste suhete platvormiks, vähendades üksindust ja tugevdades kogukondi tähendusrikaste inimsuhete kaudu.",
      challengesTitle: "Miks see oluline on",
      challengesIntro: "Tänapäeva ühiskond seisab silmitsi järgmiste väljakutsetega:",
      challenges: [
        "Vananev rahvastik",
        "Kasvav üksindus",
        "Perede killustumine",
        "Linnastumisest tulenev isolatsioon",
        "Vähenenud kontakt põlvkondade vahel",
        "Vaimse tervise väljakutsed",
        "Traditsiooniliste teadmiste kadumine",
      ],
      challengesText:
        "Eakatel on sageli väärtuslikud kogemused ja oskused, kuid vähe võimalusi neid panustada, samal ajal kui nooremad põlvkonnad otsivad üha enam juhendamist, mentorlust ja ehedaid inimsuhteid.",
      valuesTitle: "Mille eest seisame",
      values: [
        {
          title: "Soojus",
          text: "Hool, mida pakutakse kannatlikult ja isiklikult.",
        },
        {
          title: "Turvalisus",
          text: "Kontroll, taustakontroll ja selged kokkulepped mõlema poolega.",
        },
        {
          title: "Kuuluvus",
          text: "Eakad tunnevad end vajalikuna, lapsed kasvavad koos lugudega ning koos luuakse mälestusi, mis jäävad kestma.",
        },
        {
          title: "Kestlikkus",
          text: "Projekt, mis loob kohtumisi õiglase tasu eest.",
        },
      ],
      verifyTitle: "Kuidas iga vanaema kontrollime",
      verifySteps: [
        ["Isik ja dokumendid", "Enne kinnitamist kontrollime isikut ja karistusregistrit."],
        ["Soovitajad ja vestlus", "Varasemad soovitajad ning isiklik vestlus meie tiimiliikmega."],
        ["Pidev tugi", "Tagasiside kogutakse pärast iga külastust."],
      ],
    },
    booking: {
      metaTitle: "Broneeri vanaema - päringud ja avaldused | My Granny",
      metaDescription:
        "Saada broneerimispäring, et leida perele kontrollitud vanaema, või kandideeri MTÜ My Granny vanaemaks.",
      title: "Broneeri vanaema mõne lihtsa sammuga",
      intro:
        "Räägi meile veidi oma perest või endast. Meie koordinaator vastab igale päringule kahe tööpäeva jooksul.",
      roleFamily: "Peredele",
      roleGranny: "Vanaematele",
      roleYoungster: "Noortele",
      successTitle: "Päring on saadetud",
      successText: "Aitäh. Koordinaator võtab sinuga ühendust kahe tööpäeva jooksul.",
      anotherRequest: "Saada uus päring",
      fields: {
        name: "Täisnimi",
        email: "E-post",
        phone: "Telefon",
        city: "Linn või piirkond",
        familyDate: "Soovitud alguskuupäev",
        grannyDate: "Saadaval alates",
        hours: "Tunde nädalas",
        familyMessage: "Räägi oma perest ja sellest, mida vajad",
        grannyMessage: "Räägi oma kogemusest ja sellest, mida naudid",
        youngsterMessage: "Räägi endast ja sellest, kuidas sooviksid aidata",
      },
      placeholders: {
        name: "Kadri Tamm",
        email: "kadri@email.ee",
        phone: "+372 5555 0143",
        city: "Tallinn, Kalamaja",
        hours: "6",
        familyMessage:
          "Meil on 5-aastane laps ja vajame kaks korda nädalas pärastlõunast järeletulekut...",
        grannyMessage: "Kasvatasin üles kolm last, mulle meeldib küpsetada ja ette lugeda...",
        youngsterMessage: "Olen õpilane, kellele meeldib veeta aega vanemate naabritega...",
      },
      consent: "Päringu saatmisega nõustud meie tingimuste ja privaatsuspõhimõtetega.",
      safeTitle: "Turvaline algusest peale",
      safeText:
        "Iga vanaema isik on kontrollitud, temaga on vesteldud ja ta on kindlustatud. Külastused on koordineeritud ning meie tiim on tööpäeviti kättesaadav kell 9:00-18:00.",
      helpTitle: "Millega saame aidata",
      services: [
        "Lastehoid ja koolist või lasteaiast toomine",
        "Selts ja vestlus",
        "Toiduvalmistamine ja kerge koduabi",
        "Nädalavahetuse või õhtune hoid",
      ],
      pricingTitle: "Hind",
      pricingText: "Alates",
      pricingRate: "8 EUR / tund",
      pricingRest:
        "lisandub väike mittetulunduslik koordineerimistasu. Esimene kohtumine on tasuta, tühistamine kuni 24 tundi ette.",
    },
    contact: {
      metaTitle: "Kontakt | MTÜ My Granny",
      metaDescription:
        "Küsimused vanaemade, broneeringute või vabatahtliku töö kohta? Võta MTÜ My Granny Tallinna tiimiga ühendust e-posti, telefoni või sõnumi teel.",
      title: "Räägi meie tiimiga",
      intro: "Oled lapsevanem, vanaema või partnerorganisatsioon - meil on hea meel sinust kuulda.",
      details: {
        email: "E-post",
        phone: "Telefon",
        office: "Asukoht",
        officeValue: "Kontorit ei ole - nõustamine veebis, eelneval kokkuleppel",
      },
      nonprofit: "MTÜ My Granny on registreeritud Eesti mittetulundusühing. Registrikood 80612345.",
      successTitle: "Sõnum saadetud",
      successText: "Vastame tavaliselt ühe tööpäeva jooksul.",
      anotherMessage: "Kirjuta uus sõnum",
      formTitle: "Saada meile sõnum",
      fields: {
        name: "Nimi",
        email: "E-post",
        subject: "Teema",
        message: "Sõnum",
      },
      placeholders: {
        name: "Sinu nimi",
        email: "sina@email.ee",
        subject: "Broneering, vabatahtlik töö, koostöö...",
        message: "Kuidas saame aidata?",
      },
    },
    terms: {
      metaTitle: "Tingimused | MTÜ My Granny",
      metaDescription:
        "Loe MTÜ My Granny kasutustingimusi: broneeringud, maksed, tühistamised, turvareeglid, privaatsus ja vastutus.",
      title: "Tingimused",
      intro:
        "Selged ja lihtsas keeles reeglid peredele ja vanaemadele, kes kasutavad MTÜ My Granny teenust.",
      updated: "Viimati uuendatud: 1. august 2026",
      onPage: "Sellel lehel",
      safety:
        "Turvalisus on esikohal. Kui miski tundub ebaselge või ebaturvaline, võta enne broneeringut või selle ajal ühendust meie koordinaatoritega. Oleme siin, et aidata.",
      sections: [
        {
          id: "about-service",
          title: "1. Teenusest",
          body: [
            "MTÜ My Granny (registrikood 80612345, Tartu mnt 25, Tallinn) haldab platvormi, mis tutvustab peredele kontrollitud vanaemasid lastehoiu, seltsi ja igapäevase abi jaoks.",
            "My Granny tegutseb vahendaja ja koordinaatorina. Hooldust pakub vanaema perele otse.",
          ],
        },
        {
          id: "accounts",
          title: "2. Kontod ja sobivus",
          body: [
            "Konto loomiseks pead olema vähemalt 18-aastane ning esitama täpsed ja ajakohased andmed.",
            "Vanaemad peavad enne broneeringute saamist läbima isikutuvastuse, esitama kaks soovitajat ja osalema vestlusel.",
            "Võime peatada konto, mis esitab valeandmeid või rikub neid tingimusi.",
          ],
        },
        {
          id: "bookings",
          title: "3. Broneeringud ja tühistamised",
          body: [
            "Broneering muutub siduvaks, kui nii pere kui vanaema kinnitavad kuupäeva, kellaaja ja koha.",
            "Esimene tutvumiskohtumine on tasuta.",
            "Broneeringu saab tasuta tühistada kuni 24 tundi enne kokkulepitud algusaega. Hilisemal tühistamisel võib rakenduda tasu 50% külastuse hinnast.",
          ],
        },
        {
          id: "payments",
          title: "4. Hinnad ja maksed",
          body: [
            "Tunnitasud algavad 8 eurost ja neid näidatakse enne broneeringu kinnitamist. Väike koordineerimistasu toetab kontrolli, kindlustust ja tugitegevust.",
            "Arved väljastatakse kord kuus ja kuuluvad tasumisele 7 päeva jooksul. Kõik hinnad sisaldavad kehtivaid makse.",
          ],
        },
        {
          id: "safety",
          title: "5. Turvalisus ja vastutus",
          body: [
            "Pered vastutavad lapse vajaduste, allergiate, rutiinide ja meditsiinilise info kirjeldamise eest enne esimest külastust.",
            "Vanaemad vastutavad tähelepaneliku ja lugupidava hoole eest ning teavitavad peret kohe igast juhtumist.",
            "Kumbki pool ei tohi anda broneeritud külastuse vastutust kolmandale isikule ilma kirjaliku kokkuleppeta.",
          ],
        },
        {
          id: "privacy",
          title: "6. Privaatsus",
          body: [
            "Töötleme isikuandmeid ainult perede ja vanaemade kokkuviimiseks, broneeringute koordineerimiseks ja seadusest tulenevate kohustuste täitmiseks kooskõlas GDPR-iga.",
            "Andmeid ei müüda. Oma andmetele ligipääsu, parandamist või kustutamist saad taotleda aadressil mygranny.info@gmail.com.",
          ],
        },
        {
          id: "liability",
          title: "7. Vastutus",
          body: [
            "My Grannyl on vastutuskindlustus koordineeritud külastuste jaoks vastavalt kindlustusandja tingimustele.",
            "My Granny ei vastuta kaudsete kahjude ega platvormiväliste eraviisiliste kokkulepete eest pere ja vanaema vahel.",
          ],
        },
        {
          id: "changes",
          title: "8. Muudatused ja kohaldatav õigus",
          body: [
            "Võime tingimusi uuendada; olulistest muudatustest teatame e-posti teel vähemalt 14 päeva ette.",
            "Tingimustele kohaldub Eesti õigus. Vaidlused lahendatakse esmalt läbirääkimiste teel ning muul juhul Harju Maakohtus.",
          ],
        },
      ],
      questions: "Küsimused nende tingimuste kohta?",
      contact: "Võta meie tiimiga ühendust",
    },
    importantInformations: {
      metaTitle: "Oluline teave | MTÜ My Granny",
      metaDescription:
        "",
      title: "Oluline Teave",
      updated: "Viimati uuendatud: 2. oktoobril 2026",
      intro: "MyGranny ei ole lihtsalt teenus, mille kaudu leida lapsele hoidja või perele abiline. MyGranny eesmärk on luua päris inimlikke ja pikaajalisi põlvkondade vahelisi suhteid, kus mõlemad pooled saavad anda ja vastu võtta aega, tähelepanu, teadmisi, kogemusi ja hoolivust. MyGranny kogukonnas võivad kohtuda erineva vanuse, kultuurilise tausta, keele, elukogemuse ja harjumustega inimesed. Seetõttu on eriti oluline, et kõik osalejad järgiksid ühiseid hea tava põhimõtteid.",
      onPage: "Sellel Lehel",
      safety: "Põlvkondi ühendav suhe algab austusest, usaldusest ja headest kokkulepetest.",
      sections: [

        {
          id: "meie-ühised-põhimõtted",
          title: "1. Meie ühised põhimõtted",
          body: [
            "Kõik MyGranny osalejad lähtuvad viiest olulisest põhimõttest:",
            "🤝 Austus — Me austame teise inimese vanust, arvamust, eluviisi, kultuuri, keelt, harjumusi ja isiklikke piire.",
            "❤️ Hoolivus — Me märkame teise inimese vajadusi ja suhtume temasse heatahtlikult.",
            "🔐 Turvalisus — Me ei tee midagi, mis võiks ohustada lapse, pere või Mamma/Papa füüsilist või vaimset heaolu.",
            "💬 Aus suhtlemine — Kui miski ei sobi, tekitab ebamugavust või vajab muutmist, räägime sellest rahulikult ja võimalikult varakult.",
            "🌱 Vastastikkus — MyGranny suhe ei ole ühepoolne. Ka Mamma või Papa peab tundma, et teda hinnatakse ja ta saab suhtest positiivse kogemuse."
          ],
        },
        {
          id: "enne-esimest-kohtumist",
          title: "2. Enne esimest kohtumist",
          body: [
            "Enne kohtumist räägivad mõlemad pooled läbi:",
            "· millist suhet ja suhtlust oodatakse;",
            "· millised tegevused on sobivad;",
            "· millal ja kui sageli kohtutakse;",
            "· kus kohtutakse;",
            "· kuidas omavahel suheldakse;",
            "· millised on lapse vajadused;",
            "· millised on Mamma/Papa võimalused;",
            "· millised tegevused või olukorrad ei sobi;",
            "· kuidas anda tagasisidet;",
            "· mida teha olukorras, kui kokkuleppeid ei ole võimalik täita.",
            "Hea tava: mida selgemad on kokkulepped alguses, seda vähem tekib hiljem arusaamatusi.",
            "Olulised kokkulepped on soovitatav kirjalikult fikseerida."
          ],
        },
        {
          id: "mamma-papa-hea-tava-pohialused",
          title: "3. Mamma/Papa hea tava põhi alused",
          body: [
            "Mamma või Papa on MyGranny suhtes eelkõige usaldusväärne täiskasvanu, suhtluskaaslane ja põlvkondade vahelise kogemuse jagaja.",
            "Mamma/Papa:",
            "· peab kokkulepetest kinni;",
            "· saabub kokkulepitud ajal;",
            "· annab võimalikult kiiresti teada, kui kohtumisele tulla ei saa;",
            "· kuulab last ja arvestab tema vajadustega;",
            "· austab pere kodu ja pere reegleid;",
            "· ei sekku vanema rolli;",
            "· ei tee lapse eest olulisi otsuseid ilma vanemaga kokku leppimata;",
            "· ei kasuta füüsilist karistamist;",
            "· ei alanda, ähvarda ega hirmuta last;",
            "· ei sunni last tegevusele, milles laps ei soovi osaleda;",
            "· hoiab pere ja lapse isikliku info konfidentsiaalsena;",
            "· ei avalda lapse ega pere fotosid ilma nõusolekuta;",
            "· küsib, kui ta ei tea, kuidas mingis olukorras käituda;",
            "· räägib probleemidest ausalt ja rahulikult.",
            "Mamma/Papa ei pea olema ideaalne.",
            "Oluline on olla aus oma oskuste, võimaluste ja piirangute suhtes.",
            "Kui Mamma/Papa ei ole näiteks valmis last üksi transportima, mitme lapsega korraga tegelema või mingit tegevust tegema, tuleb sellest enne koostöö algust teada anda."
          ],
        },
        {
          id: "pere-hea-tava",
          title: "4. Pere hea tava",
          body: [
            "Pere loob omalt poolt keskkonna, kus Mamma või Papa tunneb ennast oodatud ja väärtustatuna.",
            "Pere:",
            "· peab kokkulepetest kinni;",
            "· austab Mamma/Papa aega;",
            "· annab muudatustest võimalikult varakult teada;",
            "· selgitab ausalt lapse vajadusi;",
            "· räägib läbi pere olulised reeglid;",
            "· ei eelda, et Mamma/Papa peab tegema rohkem, kui kokku lepitud;",
            "· austab Mamma/Papa isiklikke piire;",
            "· ei kohtle Mammat/Papat kui tasuta tööjõudu;",
            "· ei eelda automaatselt, et Mamma/Papa on professionaalne lapsehoidja;",
            "· annab tagasisidet lugupidavalt;",
            "· teavitab MyGrannyt probleemidest või turvariskidest.",
            "Hea tava perele",
            "Kui Mamma või Papa tuleb perele appi, ei tähenda see, et temalt võib hakata järk-järgult ootama üha rohkem ülesandeid.",
            "Näiteks kui kokku lepiti lapsega mängimine ja jalutamine, ei tohiks ilma eelneva kokkuleppeta eeldada, et Mamma hakkab lisaks koristama, süüa tegema või täitma muid pere ülesandeid."
          ],
        },
        {
          id: "lapsega-suhtlemise-hea-tava",
          title: "5. Lapsega suhtlemise hea tava",
          body: [
            "Laps peab tundma, et ta on suhtes turvaline ja temaga arvestatakse.",
            "Mamma/Papa võiks:",
            "· kuulata last;",
            "· küsida tema arvamust;",
            "· anda talle aega harjumiseks;",
            "· märgata lapse meeleolu;",
            "· pakkuda tegevusi, mitte sundida;",
            "· tunnustada lapse pingutusi;",
            "· olla rahulik ja kannatlik;",
            "· arvestada lapse vanuse ja arengutasemega.",
            "Väldi:",
            "· karjumist;",
            "· ähvardamist;",
            "· halvustamist;",
            "· võrdlemist teiste lastega;",
            "· füüsilist karistamist;",
            "· lapse sundimist kallistama, rääkima või osalema;",
            "· lapse isiklike asjade uurimist ilma vajaduseta;",
            "· vanema korralduste teadlikku eiramist.",
            "Oluline: Mamma/Papa ei võta endale lapsevanema rolli. Lapse kasvatamise ja oluliste otsuste eest vastutab lapsevanem või seaduslik esindaja."
          ],
        },
        {
          id: "lapse-isiklikud-piirid",
          title: "6. Lapse isiklikud piirid",
          body: [
            "Igal lapsel on õigus oma isiklikule ruumile ja piiridele.",
            "Mamma/Papa peab arvestama näiteks sellega, kui laps:",
            "· ei soovi kallistada;",
            "· ei soovi mingit mängu mängida;",
            "· ei taha kohe rääkida;",
            "· soovib mõnda aega omaette olla;",
            "· kardab või tunneb ennast ebamugavalt;",
            "· ütleb, et miski talle ei meeldi.",
            "Lapse „ei“ tuleb võtta tõsiselt.",
            "Samuti peab pere austama Mamma/Papa piire.",
            "MyGranny hea tava tähendab, et mõlema poole piirid on olulised."
          ],
        },
        {
          id: "pere-kodu-ja-mamma-papa-kodu",
          title: "7. Pere kodu ja Mamma/Papa kodu",
          body: [
            "Kui kohtumine toimub kodus, austatakse selle kodu reegleid.",
            "Mamma/Papa:",
            "· ei liigu omavoliliselt ruumides, kuhu teda ei ole kutsutud;",
            "· ei kasuta pere isiklikke asju ilma loata;",
            "· ei kutsu teisi inimesi pere koju;",
            "· ei vii last ega teisi pereliikmeid kuhugi ilma eelneva kokkuleppeta;",
            "· ei pildista kodu ega pere isiklikke asju ilma nõusolekuta.",
            "Pere:",
            "· austab Mamma/Papa kodu ja isiklikku ruumi;",
            "· ei eelda, et Mamma/Papa peab oma kodus tegema midagi, milles ei ole kokku lepitud;",
            "· arvestab Mamma/Papa võimaluste ja piiridega."
          ],
        },
        {
          id: "telefon-sonumid-ja-suhtlus",
          title: "8. Telefon, sõnumid ja suhtlus",
          body: [
            "Osapooled lepivad alguses kokku, millist suhtluskanalit kasutatakse.",
            "Näiteks:",
            "· telefonikõne;",
            "· SMS;",
            "· WhatsApp;",
            "· muu kokkulepitud kanal.",
            "Hea tava:",
            "· ära kirjuta teisele inimesele korduvalt, kui ta ei ole vastanud;",
            "· ära helista hilisel ajal ilma mõjuva põhjuseta;",
            "· kiireloomulisest muudatusest anna teada kohe;",
            "· suhtle viisakalt ka siis, kui oled ärritunud;",
            "· ära lahenda konflikti sõnumite kaudu, kui rahulik vestlus oleks parem.",
            "Kui suhtlus hakkab muutuma ebameeldivaks või konfliktseks, soovitame kaasata MyGranny nõustaja."
          ],
        },
        {
          id: "hilinemine-ja-kokkulepete-muutmine",
          title: "9. Hilinemine ja kokkulepete muutmine",
          body: [
            "Kõigil võib ette tulla ootamatusi.",
            "Kui jääd hiljaks: anna sellest teada esimesel võimalusel.",
            "Kui kohtumine tuleb ära jätta: teata sellest võimalikult varakult.",
            "Korduv hilinemine, kohtumiste tühistamine viimasel hetkel või kokkulepetest mitte kinnipidamine kahjustab usaldust.",
            "MyGranny suhte aluseks on usaldusväärsus."
          ],
        },
        {
          id: "kingitused-raha-ja-tasu",
          title: "10. Kingitused, raha ja tasu",
          body: [
            "MyGranny suhte keskmes ei ole raha, vaid inimlik kontakt ja vastastikune väärtus.",
            "Kui pere ja Mamma/Papa soovivad kokku leppida tasulises tegevuses, tuleb:",
            "· tasu suurus eelnevalt kokku leppida;",
            "· kokku leppida, mille eest tasu makstakse;",
            "· kokku leppida maksmise viis ja aeg;",
            "· vajadusel arvestada kehtivate õigusaktidega.",
            "MyGranny nõustamis- ja sobitamisteenuse tasu 54,99 € ei ole Mamma/Papa tasu.",
            "MyGranny ei määra automaatselt pere ja Mamma/Papa vahelise võimaliku tasu suurust."
          ],
        },
        {
          id: "kingitused-ja-isiklikud-laenud",
          title: "11. Kingitused ja isiklikud laenud",
          body: [
            "Hea tava on vältida olukordi, kus rahalised või materiaalsed suhted hakkavad mõjutama usalduslikku MyGranny suhet.",
            "Soovitatav on:",
            "· mitte küsida teiselt poolelt raha laenuks;",
            "· mitte anda suuri rahalisi kingitusi;",
            "· mitte kasutada tekkinud usaldust rahalise kasu saamiseks;",
            "· arutada ebamugavaks muutunud rahateemad vajadusel MyGranny nõustajaga.",
            "Väikesed sümboolsed kingitused või ühine küpsetamine, meisterdamine või muu tegevus võivad olla loomulik osa suhtest, kui mõlemad pooled tunnevad ennast selles mugavalt."
          ],
        },
        {
          id: "fotod-ja-sotsiaalmeedia",
          title: "12. Fotod ja sotsiaalmeedia",
          body: [
            "Lapse või pere pildistamiseks ja foto avaldamiseks peab olema nõusolek.",
            "Ilma nõusolekuta ei tohi:",
            "· teha lapsest fotosid;",
            "· avaldada lapse nime;",
            "· jagada pere aadressi;",
            "· postitada pere pilte sotsiaalmeedias;",
            "· kirjutada avalikult pere isiklikest asjadest;",
            "· jagada Mamma/Papa isiklikke andmeid.",
            "Ka hea kavatsusega tehtud postitus võib rikkuda teise inimese privaatsust.",
            "Kui kahtled, küsi enne."
          ],
        },
        {
          id: "usaldus-tekib-jarkjargult",
          title: "13. Usaldus tekib järk-järgult",
          body: [
            "Esimene kohtumine ei pea olema täiuslik.",
            "Laps ei pruugi kohe Mamma või Papaga kontakti saada.",
            "Mamma/Papa ei pruugi kohe aru saada kõigist pere harjumustest.",
            "Pere ei pruugi esimesel kohtumisel veel teada, kas see inimene sobib nende perega.",
            "See on normaalne.",
            "Seetõttu kasutatakse MyGranny puhul 1–3 kohtumisest koosnevat prooviperioodi, mille jooksul saavad mõlemad pooled hinnata, kuidas koostöö toimib."
          ],
        },
        {
          id: "kui-miski-ei-sobi",
          title: "14. Kui miski ei sobi",
          body: [
            "Sul on alati õigus öelda:",
            "„See ei sobi mulle.“",
            "Mamma/Papa võib koostööst loobuda.",
            "Pere võib koostööst loobuda.",
            "Laps võib väljendada, et ta ei tunne ennast olukorras hästi.",
            "Keegi ei pea jätkama suhet ainult sellepärast, et sobitamine on juba toimunud.",
            "Kui võimalik, räägitakse põhjus rahulikult läbi.",
            "Kui probleemi ei ole võimalik omavahel lahendada, pöördutakse MyGranny nõustaja poole.",
            "Vajadusel saab MyGranny korraldada uue sobitamise."
          ],
        },
        {
          id: "millal-tuleb-kohe-reageerida",
          title: "15. Millal tuleb kohe reageerida?",
          body: [
            "Kui tekib:",
            "· vägivalla kahtlus;",
            "· lapse väärkohtlemise kahtlus;",
            "· tõsine oht lapsele või täiskasvanule;",
            "· ähvardamine;",
            "· seksuaalse väärkohtlemise kahtlus;",
            "· muu otsene turvarisk,",
            "ei pea ootama tavapärast probleemilahenduse protsessi.",
            "Esmalt tuleb tagada inimese või lapse turvalisus.",
            "Vajadusel helista 112.",
            "Seejärel teavita lapsevanemat ja/või MyGranny nõustajat vastavalt olukorrale.",
            "MyGranny nõustaja ei asenda politseid, kiirabi, arsti, lastekaitset ega teisi pädevaid asutusi."
          ],
        },
        {
          id: "mamma-papa-ei-ole-lapsevanem",
          title: "16. Mamma/Papa ei ole lapsevanem",
          body: [
            "See on üks MyGranny kõige olulisemaid põhimõtteid.",
            "Mamma/Papa võib:",
            "· toetada;",
            "· kuulata;",
            "· mängida;",
            "· õpetada;",
            "· lugeda;",
            "· jalutada;",
            "· jagada teadmisi;",
            "· pakkuda seltsi;",
            "· olla lapse jaoks oluline ja usaldusväärne täiskasvanu.",
            "Mamma/Papa ei otsusta lapse:",
            "· ravi;",
            "· ravimite;",
            "· kooli;",
            "· kasvatamise;",
            "· karistamise;",
            "· muude oluliste elukorralduslike küsimuste üle.",
            "Need otsused kuuluvad lapsevanemale või seaduslikule esindajale."
          ],
        },
        {
          id: "pere-ei-ole-tooandja",
          title: "17. Pere ei ole tööandja, Mamma/Papa ei ole tasuta teenusepakkuja",
          body: [
            "MyGranny põhineb suhtel, mitte ühepoolsel teenusel.",
            "Pere ei tohiks mõelda:",
            "„Meil on nüüd inimene, kes saab kõik meie eest ära teha.“",
            "Mamma/Papa ei tohiks mõelda:",
            "„Ma pean perele kõiges vastu tulema, sest nad valisid minu.“",
            "Koostöö toimib siis, kui mõlemad pooled arvestavad teineteise võimaluste ja piiridega."
          ],
        },
        {
          id: "keele-ja-kultuuri-austamine",
          title: "18. Keele ja kultuuri austamine",
          body: [
            "MyGranny võib ühendada inimesi, kelle emakeel, kultuur ja elukogemus on erinevad.",
            "See on võimalus üksteiselt õppida.",
            "Hea tava on:",
            "· olla kannatlik, kui teine inimene ei räägi täiuslikult eesti keelt;",
            "· mitte naerda teise inimese aktsendi või keeleoskuse üle;",
            "· vajadusel korrata või selgitada;",
            "· austada erinevaid kultuurilisi harjumusi;",
            "· kasutada erinevusi õppimise võimalusena.",
            "Eesti keele praktiseerimine võib olla MyGranny suhte üks väärtuslikke osi."
          ],
        },
        {
          id: "mida-teha-arusaamatuse-korral",
          title: "19. Mida teha arusaamatuse korral?",
          body: [
            "Kõigepealt küsi, mitte ära eelda.",
            "Näiteks:",
            "„Kas ma sain õigesti aru, et…?“",
            "„Ma sooviksin selle kokkuleppe veel üle täpsustada.“",
            "Kui tekib konflikt:",
            "1. räägi rahulikult;",
            "2. kuula teise poole selgitust;",
            "3. sõnastage kokkulepe uuesti;",
            "4. kui lahendust ei leita, pöörduge MyGranny nõustaja poole."
          ],
        },
        {
          id: "mygranny-kuldreeglid",
          title: "20. MyGranny kuldreeglid",
          body: [
            "10 lihtsat reeglit igale osalejale",
            "1. Pea oma sõna.",
            "Kui lubasid tulla, tule. Kui ei saa, anna teada.",
            "2. Austa teise inimese piire.",
            "Ära eelda, et tead, mis teisele sobib.",
            "3. Küsi enne, kui teed.",
            "Eriti lapse, foto, kodu või isikliku info puhul.",
            "4. Ära võta lapsevanema rolli.",
            "Toeta last, kuid ära tee vanema eest olulisi otsuseid.",
            "5. Hoia saladust.",
            "Pere isiklik info jääb pere ja Mamma/Papa vaheliseks.",
            "6. Ära kasuta usaldust ära.",
            "Ei rahaliselt, emotsionaalselt ega muul viisil.",
            "7. Räägi probleemidest.",
            "Probleemi varjamine ei lahenda seda.",
            "8. Ära sunni.",
            "Lapsel ja täiskasvanul on õigus öelda „ei“.",
            "9. Ole kannatlik.",
            "Usaldus ja lähedane suhe vajavad aega.",
            "10. Mõtle vastastikku.",
            "Küsi endalt: „Kas see on hea ja sobiv ka teisele poolele?“"
          ],
        },
        {
          id: "enne-koostoo-alustamist-kontrollkusimused",
          title: "21. Enne koostöö alustamist – kontrollküsimused",
          body: [
            "Mamma/Papa võiks endalt küsida:",
            "☐ Kas ma saan aru, mida pere minult ootab?",
            "☐ Kas pere teab, mida mina soovin ja milleks valmis olen?",
            "☐ Kas oleme kokku leppinud kohtumise aja ja koha?",
            "☐ Kas olen teadlik lapse olulistest vajadustest?",
            "☐ Kas tean, kelle poole pöörduda probleemi korral?",
            "☐ Kas minu piirid on perele teada?",
            "☐ Kas olen valmis austama pere kokkuleppeid?",
            "☐ Kas tunnen ennast selles suhtes hästi ja turvaliselt?",
            "Pere võiks endalt küsida:",
            "☐ Kas oleme Mamma/Papale ausalt kirjeldanud oma vajadusi?",
            "☐ Kas ta teab lapse olulisi vajadusi ja eripärasid?",
            "☐ Kas oleme selgelt kokku leppinud tegevused?",
            "☐ Kas oleme kokku leppinud suhtluskanali?",
            "☐ Kas oleme arutanud ajad ja kohtumiste sageduse?",
            "☐ Kas oleme rääkinud läbi lapse piirid?",
            "☐ Kas austame Mamma/Papa aega ja piire?",
            "☐ Kas oleme valmis andma ja vastu võtma ausat tagasisidet?"
          ],
        },
        {
          id: "meie-ühine-kokkulepe",
          title: "22. Meie ühine kokkulepe",
          body: [
            "MyGranny kogukonnas osalemine tähendab, et me püüame luua suhte, kus:",
            "laps tunneb ennast turvaliselt,",
            "pere tunneb ennast toetatuna,",
            "Mamma/Papa tunneb ennast väärtustatuna",
            "ja kõik osapooled tunnevad, et neid austatakse.",
            "MyGranny ei otsi lihtsalt inimest, kes aitaks perel aega kokku hoida.",
            "Me otsime võimalust luua päris põlvkondade vaheline side.",
            "Mamma või Papa võib anda perele oma aega, teadmisi, oskusi ja elukogemust.",
            "Pere ja noorem põlvkond võivad vastu anda suhtlust, uusi kogemusi, nooruslikku energiat ja võimaluse tunda, et nende kõrval on oluline inimene.",
            "MyGranny",
            "Rohkem kui lapsehoid.",
            "Võimalus luua suhe, mis võib kesta aastaid."
          ],
        }
      ]
    },
    counsellors: {
      metaTitle: "Meie nõustajad | My Granny",
      metaDescription:
        "Tutvu MTÜ My Granny kogemusnõustajatega, kes on valmis kuulama, toetama ja aitama leida selgust elu väljakutsetes.",
      title: "Meie nõustajad",
      intro:
        "Tutvu kogenud kogemusnõustajatega, kes kuulavad ilma hinnanguteta ja seisavad Sinu ja Su pere kõrval.",
      languagesLabel: "Räägitavad keeled",
      contactLabel: "Võta ühendust",
      list: [
        {
          id: "airi-kartna",
          name: "Airi Kärtna",
          role: "Kogemusnõustaja",
          imageAlt: "Airi Kärtna, kogemusnõustaja portree",
          bio: [
            "Toetan Sind, kui vajad nõu, tuge ja kaasamõtlejat oma soovide, eesmärkide ja võimaluste selgitamisel ning nende elluviimisel. Kui oled valmis kasvama ja oma elus muutusi looma, kuid vajad sellel teel kannatlikku kuulajat ja toetavat inimest, siis saame koos leida selgust ka keerulisemates ja segasemates olukordades.",
            "Jagan oma elukogemust, teadmisi ja õppetunde, mis on minuga aastate jooksul kaasa tulnud. Usun, et ka keerulised kogemused võivad anda meile jõudu, sügavamat mõistmist ja oskust märgata uusi võimalusi. Mind motiveerib rõõm tehtud tööst ning eelkõige see, kui näen oma klientide arengut, väikeseid ja suuri edusamme ning nende usku iseendasse taastumas.",
            "Oma töös ühendan pikaajalise pereema kogemuse, välismaal elamise ja erinevates elukohtades kohanemise kogemuse ning isiklikult läbi elatud leina ja depressiooniga seotud keerulise perioodi. Kõige selle kõrval kannab minu tööd siiras huvi inimese ja tema sisemaailma vastu.",
            "Olen elanud 20 aastat kolmes erinevas riigis ning kuus aastat tagasi Eestisse tagasi pöördunud. Olen kogenud, mida tähendab uude keskkonda integreerumine ja kohanemine, samal ajal pere ja laste kasvatamisega seotud vastutuse kandmine. Kolme lapse emana tean, kui palju rõõmu, aga ka väljakutseid ja ootamatuid olukordi võib elu endaga kaasa tuua.",
            "Minu eluteel on olnud nii suuri õnnestumisi kui ka raskusi, segadust ja leina. Olen õppinud, kuidas ka väga pimedatel hetkedel samm-sammult edasi liikuda, iseennast toetada ja leida endas jõudu uuesti alustada. Neid kogemusi jagan oma klientidega mitte valmis vastuste, vaid toetuse, mõistmise ja kaasamõtlemise kaudu.",
            "Usun, et iga inimese lugu on erinev ning alati ei ole vaja kellelgi öelda, mida ta peab tegema. Mõnikord on kõige olulisem, et kõrval oleks inimene, kes kuulab, aitab mõtteid korrastada, esitab õigeid küsimusi ja toetab Sind Sinu enda valikute leidmisel.",
            "Olen läbinud mitmeid coaching'u-koolitusi, vaimse tervise esmaabi koolituse, omandanud psühholoogia baasteadmised ning läbinud kogemusnõustaja väljaõppe koos praktikaga.",
          ],
          goal:
            "Minu eesmärk on olla Sulle toeks – kuulata, mõista, aidata leida selgust ja toetada Sind teel, mille valid Sina ise.",
          languages: ["Eesti", "Vene", "Inglise"],
          phone: "+372 55920520",
          email: "airi@mygranny.ee",
        },
        {
          id: "liina-lamson",
          name: "Liina Lamson",
          role: "Kogemusnõustaja",
          imageAlt: "Liina Lamson, projektijuht ja kogemusnõustaja portree",
          bio: [
            "Olen kogemusnõustaja, kelle jaoks on olulised inimeste heaolu, inimeste kokkuviimine ning võimalus leida elus uus suund ka pärast keerulisi ja väljakutseid pakkuvaid eluperioode.",
            "Mul on rahvusvaheline haridus- ja töökogemus Prantsusmaalt, Tuneesiast ja Taanist ning olen osalenud erinevates projektides, mille keskmes on olnud inimeste kokkuviimine, koostöö koordineerimine ja uute ideede elluviimine. Lisaks projektijuhtimise õpingutele ja töökogemusele olen õppinud kogemusnõustajaks ja tegevusjuhendajaks. Need õpingud on andnud mulle nii teadmised kui ka praktilised oskused, et toetada inimesi keerulistel eluetappidel, kuulata neid hinnanguid andmata ning aidata neil samm-sammult taastada enesekindlust ja usku oma võimalustesse.",
            "Kogemusnõustajana toetan inimesi, kes on läbi elanud elukriisi või seisavad silmitsi olulise muutusega. Minu eesmärk on aidata neil leida uus suund – olgu selleks uus töökoht, õpingute alustamine või jätkamine, ümberõppimine või lihtsalt esimese realistliku sammu tegemine edasi. Usun, et kriis ei pea tähendama elu peatumist. Sageli võib keeruline periood olla hoopis uue ja tähendusliku peatüki alguseks.",
            "See kogemus kujundab tugevalt ka minu panust My Granny projekti. Näen suurt väärtust põlvkondadevahelistes suhetes ning usun, et vanematel inimestel on ühiskonnale väga palju anda. Nende elukogemust, teadmisi, lugusid, oskusi ja elutarkust ei tohiks kõrvale jätta ega kaotsi lasta. Samal ajal vajavad nooremad inimesed võimalusi kuulata, õppida ja saada tuge inimestelt, kelle elutee on olnud pikem ja mitmekesisem.",
            "My Granny projekti kaudu näen võimalust luua rohkem selliseid tähenduslikke kohtumisi. Minu jaoks ei tähenda põlvkondadevaheline suhtlus ühepoolset abistamist, kus üks põlvkond annab ja teine võtab. See on vastastikune suhe, milles mõlemal poolel on midagi anda ja midagi saada. Vanem inimene saab jagada oma kogemusi, teadmisi, lugusid ja elutarkust, samal ajal kui noorem saab suhtesse tuua värsket energiat, uusi teadmisi, vaatenurki ja ideid.",
            "Minu jaoks tähendab My Granny eelkõige inimeste ühendamist. See on võimalus tuua kokku erinevad põlvkonnad, kogemused ja lood ning luua suhteid, mis suurendavad hoolivust, kuuluvustunnet, mõistmist ja vastastikust austust.",
            "Usun, et ükski elukriis ei pea olema teekonna lõpp – see võib olla uue peatüki algus. Ja mõnikord vajab inimene uue alguse leidmisel kõige rohkem lihtsalt kedagi, kes teda kuulab, temasse usub ja aitab tal näha järgmist võimalikku sammu.",
          ],
          goal:
            "Liina usub, et ükski elukriis ei pea olema lõpp – see võib olla uue peatüki algus. Ja mõnikord on uue alguse leidmiseks kõige olulisem lihtsalt inimene, kes kuulab, usub sinusse ja aitab näha järgmist võimalikku sammu.",
          languages: ["Eesti", "Prantsuse", "Inglise"],
          phone: "+372 58596615",
          email: "liina@mygranny.ee",
        },
        {
          id: "anne-kaljas",
          name: "Anne Kaljas",
          role: "Projektijuht ja kogemusnõustaja",
          imageAlt: "Anne Kaljas, projektijuht ja kogemusnõustaja portree",
          bio: [
            "Mind iseloomustab sügav huvi inimese, tema sisemaailma ja selle vastu, kuidas ta ümbritseva maailmaga suhestub.",
            "Minu taust ühendab teaduse, nõustamise, ning teadmised erinevate kultuuride vaimsetest praktikatest, tervendamistraditsioonidest ning -võtetest.",
            "Olen läbinud Fontese karjäärinõustaja ja juhi arenguprogrammi, mis on andnud mulle kaasaegse ja praktilise aluse inimese toetamiseks muutuste ja valikute perioodil. Karjäärinõustajana toetan inimesi tööalaste ja eluliste valikute tegemisel, aidates neil paremini mõista oma tugevusi, vajadusi ja tegelikke soove.",
            "Aastatepikkune pühendumine erinevate kultuuride vaimsete praktikate uurimisse ja tervendusvõtete praktiseerimine on kindlalt kujundanud nõustamisstiili, mis võimaldab mul vaadelda inimest erinevatest vaatenurkadest ning märgata olulisi seoseid. ",
            "Minu lähenemine on terviklik ning individuaalne - vajadusel kasutan oma töös ka heli- ja loodusteraapiat, et toetada inimest mitte ainult mõtete ja sõnade, vaid tervikliku kogemuse kaudu.",
            "Iga inimese lugu, vajadused ja tee on erinevad. Minu roll nõustajana ei ole anda valmis vastuseid, vaid on aidata Sul jõuda vajaliku arusaamiseni hetkes, selleks, et jõuda lahenduseni.",
          ],
          goal:
            "Minu eesmärk on aidata sul saavutada selgust, kasvatada enesekindlust ning teha nii tööalases kui ka isiklikus elus tähendusrikkaid ja jätkusuutlikke valikuid.",
          languages: ["Eesti", "Vene", "Inglise"],
          phone: "+372 5178959",
          email: "anne@mygranny.ee",
        },
      ],
    },
  },
  ru: {
    meta: {
      defaultTitle: "My Granny - проверенные бабушки для эстонских семей",
      defaultDescription:
        "MTÜ My Granny соединяет семьи с добрыми и проверенными бабушками для ухода за детьми, общения и повседневной помощи.",
    },
    common: {
      brand: "My Granny",
      languages: {
        en: "English",
        et: "Eesti",
        ru: "Русский",
      },
      nav: {
        home: "Главная",
        about: "О нас",
        counsellors: "Консультанты",
        booking: "Бронирование",
        contact: "Контакты",
        terms: "Условия",
        importantInformations: "Важная информациа",
        news: "новости"
      },
      actions: {
        createAccount: "Зарегистрироваться",
        bankAccountNumber: "Номер банковского счета",
        supportUs: "Поддержите нас",
        findGranny: "Найти бабушку",
        becomeGranny: "Стать бабушкой",
        sendRequest: "Отправить заявку",
        sendMessage: "Отправить сообщение",
      },
      menu: {
        open: "Открыть меню",
        close: "Закрыть меню",
      },
      notFound: {
        title: "Страница не найдена",
        body: "Страница, которую вы ищете, не существует или была перемещена.",
        action: "На главную",
      },
      error: {
        title: "Страница не загрузилась",
        body: "Что-то пошло не так на нашей стороне. Попробуйте обновить страницу или вернитесь на главную.",
        retry: "Повторить",
        home: "На главную",
      },
    },
    footer: {
      intro:
        "MTÜ My Granny соединяет семьи с добрыми и проверенными бабушками для ухода за детьми, общения и повседневной помощи по всей Эстонии.",
      verified: "Каждая бабушка проходит проверку",
      pages: "Страницы",
      contact: "Контакты",
      terms: "Условия использования",
      rights: "Все права защищены.",
      follow: "Мы в соцсетях",
      feedback: "Отзывы",
      newsletter: "Рассылка",
      social: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "LinkedIn",
        youtube: "YouTube",
      },
    },
    home: {
      metaTitle: "My Granny - проверенные бабушки для ухода за детьми и общения в Эстонии",
      metaDescription:
        "MTÜ My Granny соединяет семьи с добрыми и проверенными бабушками для ухода за детьми, общения и повседневной помощи. Забронируйте бабушку за пару минут.",
      badge: "Проверенные бабушки - Эстония",
      title: "My Granny объединяет поколения",
      intro:
        "Найдите заботливых, проверенных бабушек для ухода за детьми, общения и повседневной помощи — или поделитесь своим опытом с семьёй неподалёку.",
      stats: [
        ["240+", "Бабушек"],
        ["1 100+", "Забронированных визитов"],
        ["4.9", "Средняя оценка"],
      ],
      heroAlt: "Бабушка читает книжку с картинками ребенку за освещенным солнцем кухонным столом",
      rating: "4.9 от 380 семей",
      ratingQuote: "Как родные, с первого визита.",
      audiencesTitle: "Кому мы помогаем?",
      audiences: [
        {
          title: "Для семей",
          text: "Найдите надёжных бабушек, которые помогут с уходом за детьми, общением и повседневной поддержкой.",
        },
        {
          title: "Для бабушек",
          text: "Делитесь опытом, навыками и временем, выстраивая значимые связи с семьями.",
        },
        {
          title: "Для молодёжи",
          text: "Общайтесь со старшим поколением, учитесь на их опыте и стройте ценные отношения.",
        },
        {
          title: "Языковая практика",
          text: "Практикуйте языки через настоящие разговоры и значимые связи между поколениями.",
        },
        {
          title: "Консультирование",
          text: "Найдите безопасное пространство для разговора, поддержки, эмоциональной помощи и взаимопонимания между поколениями.",
        },
      ],
      howTitle: "Как это работает?",
      howIntro: "Три спокойных шага от первого знакомства до постоянного, надежного распорядка.",
      stepLabel: "ШАГ",
      steps: [
        {
          title: "Расскажите, что вам нужно",
          text: "Поделитесь расписанием вашей семьи, языком и тем, какая помощь вам нужна.",
        },
        {
          title: "Познакомьтесь с проверенными бабушками",
          text: "Каждая бабушка проходит проверку личности, рекомендаций и личное собеседование.",
        },
        {
          title: "Начните с теплого знакомства",
          text: "Проведите бесплатную первую встречу, а затем бронируйте регулярные визиты, когда вам удобно.",
        },
      ],
      safetyBadge: "Безопасность прежде всего",
      safetyTitle: "Доверие, которое вы почувствуете еще до открытия двери",
      safetyText:
        "Мы проверяем биографические данные каждой няни и каждой семьи. Мы оказываем вам поддержку на всех этапах — до того, как вы найдете подходящую няню или семью в своем районе. Мы стремимся подобрать для вашей семьи самую лучшую няню.",
      features: [
        {
          title: "Проверенное прошлое",
          text: "Документы, рекомендации и собеседования проверяет наша команда.",
        },
        { title: "Гибкий график", text: "Забронируйте один вечер или постоянный недельный ритм." },
        {
          title: "Справедливая оплата",
          text: "Прозрачные почасовые ставки, уважающие время каждой бабушки.",
        },
        {
          title: "Местные и душевные",
          text: "Бабушки из вашего района, говорящие на вашем языке.",
        },
      ],
      testimonials: [
        {
          quote:
            "Бабушка Майе забирает нашу дочь два раза в неделю. С тех пор дома стало спокойнее и теплее.",
          name: "Кадри, Таллинн",
        },
        {
          quote:
            "После выхода на пенсию дни казались длинными. Теперь каждый вторник я читаю истории и снова чувствую себя нужной.",
          name: "Бабушка Лейли, Тарту",
        },
        {
          quote: "Проверка и первая бесплатная встреча облегчили нам принятие решения.",
          name: "Мартин, Пярну",
        },
      ],
      ctaTitle: "Готовы познакомиться со своей бабушкой?",
      ctaText:
        "Отправьте заявку сегодня, и мы познакомим вас с бабушками в вашем районе в течение двух рабочих дней.",
    },
    about: {
      metaTitle: "О MTÜ My Granny - объединяя поколения в Эстонии",
      metaDescription:
        "MTÜ My Granny - некоммерческая организация, соединяющая семьи с проверенными бабушками. Узнайте о нашей миссии, ценностях и процессе проверки.",
      title: "Мы верим, что ни одно поколение не должно чувствовать себя одиноким",
      intro:
        "MTÜ My Granny - эстонская некоммерческая организация. Мы соединяем семьи, которым нужна заботливая рука, с бабушками, у которых есть время, опыт и любовь, которыми они хотят поделиться.",
      imageAlt: "Бабушки и молодые семьи пьют чай и беседуют в общественной комнате",
      storyTitle: "Наша история",
      storyTagline: "My Granny — объединяя поколения, укрепляя сообщество",
      story: [
        "My Granny родился в Таллинне в 2026 году из простой, но сильной идеи: что если мудрость, теплота и жизненный опыт пожилых людей могли бы стать значимой частью повседневной жизни семьи?",
        "Проект создала группа равных консультантов, которые захотели превратить реальную социальную потребность во что-то практичное, тёплое и человечное. Мы увидели, что многим молодым родителям трудно совмещать работу, уход за детьми и повседневные обязанности, в то время как у многих активных пожилых людей есть ценные навыки, время и энергия, которыми они хотели бы поделиться.",
        "Сначала это была простая соседская идея — бабушки помогают молодым родителям, забирая детей после обеда из школы или детского сада. Но это быстро переросло в нечто большее, чем уход за детьми: связь, доверие, обучение и особую связь между поколениями, включая помощь с эстонским языком для семей, которые нуждались в этом больше всего.",
        "Наши бабушки приносят то, чему невозможно научиться по учебнику: терпение, жизненный опыт, доброту и умение делать обычные моменты особенными. После школы ребёнок может прийти к бабушке, чтобы вместе печь, готовить простую еду, читать любимую книгу или просто рассказывать о своём дне — проводя содержательное время с человеком, у которого есть истории, знания и навыки, которыми можно поделиться, вместо того чтобы просто ждать, пока родители освободятся с работы.",
        "Бабушка может научить ребёнка печь блины по старому семейному рецепту, выращивать зелень на подоконнике, сажать цветы, узнавать деревья и птиц или объяснить, откуда на самом деле берётся еда. Летом приключения переносятся на улицу — сбор ягод, грибов, исследование природных троп или домашние заготовки, а иногда и более длительное время, проведённое вместе с бабушкой за городом.",
        "Есть место и для творчества. У многих наших бабушек прекрасные традиционные навыки — вязание, шитьё, вышивка, вязание крючком и рукоделие. Бабушка и ребёнок могут вместе связать шарф, сшить небольшую сумку, сделать мягкую игрушку или починить любимую старую вещь. Результат — это не просто изделие ручной работы, а общее воспоминание и навык, передаваемый от одного поколения к другому.",
        "Дети получают внимание, поддержку и новые впечатления. Родители получают надёжную помощь и немного больше свободного времени в своём напряжённом графике. А бабушки обретают чувство цели, связи и признание всего, чему они научились за свою жизнь — ощущение нужности и востребованности важно в любом возрасте и благотворно влияет на психическое благополучие пожилых людей.",
        "То, что начиналось как соседская услуга, может вырасти в общенациональную сеть межпоколенческих связей, объединяющую семьи и активных пожилых людей по всей Эстонии. Наше видение — общество, где старение воспринимается не как утрата полезности, а как начало нового этапа, на котором знания, опыт и время можно передавать значимым образом.",
      ],
      storyClosing:
        "My Granny — там, где встречаются поколения, передаются навыки, а обычные моменты становятся воспоминаниями.",
      missionTitle: "Миссия",
      mission:
        "Воссоединять поколения через значимые отношения, которые снижают одиночество, поддерживают активное старение и укрепляют сообщества.",
      visionTitle: "Видение",
      vision:
        "Стать ведущей европейской платформой межпоколенческих отношений, снижающей одиночество и укрепляющей сообщества через значимые человеческие связи.",
      challengesTitle: "Почему это важно",
      challengesIntro: "Современное общество сталкивается со следующими вызовами:",
      challenges: [
        "Старение населения",
        "Рост одиночества",
        "Разобщённость семей",
        "Изоляция в городской среде",
        "Снижение контактов между поколениями",
        "Проблемы психического здоровья",
        "Утрата традиционных знаний",
      ],
      challengesText:
        "У пожилых людей часто есть ценный опыт и навыки, но мало возможностей их применить, в то время как молодое поколение всё больше нуждается в наставничестве, поддержке и настоящих человеческих отношениях.",
      valuesTitle: "За что мы выступаем",
      values: [
        {
          title: "Теплота",
          text: "Забота, проявленная терпеливо и лично.",
        },
        {
          title: "Безопасность",
          text: "Проверка, проверка биографии и чёткие договорённости с обеими сторонами.",
        },
        {
          title: "Принадлежность",
          text: "Пожилые люди остаются нужными, дети растут вместе с историями, и вместе они создают воспоминания, которые остаются надолго.",
        },
        {
          title: "Устойчивость",
          text: "Проект, который создаёт встречи при справедливой оплате.",
        },
      ],
      verifyTitle: "Как мы проверяем каждую бабушку",
      verifySteps: [
        ["Личность и документы", "Проверка личности и справки о судимости перед одобрением."],
        [
          "Рекомендации и собеседование",
          "Предыдущие рекомендации и личное собеседование с членом нашей команды.",
        ],
        ["Постоянная поддержка", "Обратная связь собирается после каждого визита."],
      ],
    },
    booking: {
      metaTitle: "Забронировать бабушку - заявки и анкеты | My Granny",
      metaDescription:
        "Отправьте заявку на бронирование, чтобы найти проверенную бабушку для вашей семьи, или подайте заявку, чтобы стать бабушкой в MTÜ My Granny.",
      title: "Закажите услуги «бабушки» за несколько простых шагов.",
      intro:
        "Расскажите немного о вашей семье или о себе. Наш координатор отвечает на каждую заявку в течение двух рабочих дней.",
      roleFamily: "Для семей",
      roleGranny: "Для бабушек",
      roleYoungster: "Для молодежи",
      successTitle: "Заявка получена",
      successText: "Спасибо. Координатор свяжется с вами в течение двух рабочих дней.",
      anotherRequest: "Отправить еще одну заявку",
      fields: {
        name: "Полное имя",
        email: "Эл. почта",
        phone: "Телефон",
        city: "Город или район",
        familyDate: "Желаемая дата начала",
        grannyDate: "Доступна с",
        hours: "Часов в неделю",
        familyMessage: "Расскажите о своей семье и о том, что вам нужно",
        grannyMessage: "Расскажите о своем опыте и о том, что вам нравится",
        youngsterMessage: "Расскажите о себе и о том, как вы хотели бы помочь",
      },
      placeholders: {
        name: "Кадри Тамм",
        email: "kadri@email.ee",
        phone: "+372 5555 0143",
        city: "Таллинн, Каламая",
        hours: "6",
        familyMessage: "У нас пятилетний ребенок, и нам нужен послеобеденный забор два раза в неделю...",
        grannyMessage: "Я вырастила троих детей, люблю печь и читать вслух...",
        youngsterMessage: "Я студент, который любит проводить время с пожилыми соседями...",
      },
      consent: "Отправляя заявку, вы соглашаетесь с нашими условиями и правилами конфиденциальности.",
      safeTitle: "Безопасность по умолчанию",
      safeText:
        "Личность каждой бабушки проверена, с ней проведено собеседование, она застрахована. Визиты координируются, и вы можете связаться с нашей командой в любой будний день с 9:00 до 18:00.",
      helpTitle: "С чем мы можем помочь",
      services: [
        "Уход за детьми и забор из школы",
        "Общение и беседа",
        "Готовка и легкая помощь по дому",
        "Уход по выходным или вечерам",
      ],
      pricingTitle: "Цены",
      pricingText: "От",
      pricingRate: "8 EUR / час",
      pricingRest:
        "плюс небольшая некоммерческая координационная плата. Первая встреча бесплатна, отмена возможна за 24 часа.",
    },
    contact: {
      metaTitle: "Связаться с MTÜ My Granny - поговорите с нашей командой",
      metaDescription:
        "Вопросы о бабушках, бронированиях или волонтерстве? Свяжитесь с командой MTÜ My Granny в Таллинне по эл. почте, телефону или сообщению.",
      title: "Поговорите с нашей командой",
      intro:
        "Являетесь ли вы родителем, бабушкой или партнерской организацией, мы рады услышать вас.",
      details: {
        email: "Эл. почта",
        phone: "Телефон",
        office: "Расположение",
        officeValue: "Офиса нет - консультации онлайн по предварительной записи",
      },
      nonprofit: "MTÜ My Granny - зарегистрированная эстонская некоммерческая организация. Регистрационный код 80612345.",
      successTitle: "Сообщение отправлено",
      successText: "Обычно мы отвечаем в течение одного рабочего дня.",
      anotherMessage: "Написать еще одно сообщение",
      formTitle: "Отправьте нам сообщение",
      fields: {
        name: "Имя",
        email: "Эл. почта",
        subject: "Тема",
        message: "Сообщение",
      },
      placeholders: {
        name: "Ваше имя",
        email: "you@email.ee",
        subject: "Бронирование, волонтерство, партнерство...",
        message: "Чем мы можем помочь?",
      },
    },
    terms: {
      metaTitle: "Условия использования | MTÜ My Granny",
      metaDescription:
        "Прочитайте условия использования MTÜ My Granny: бронирования, платежи, отмены, правила безопасности, конфиденциальность и ответственность.",
      title: "Условия использования",
      intro: "Понятные правила простым языком для семей и бабушек, использующих MTÜ My Granny.",
      updated: "Последнее обновление: 1 августа 2026",
      onPage: "На этой странице",
      safety:
        "Безопасность прежде всего. Если что-то кажется неясным или небезопасным, свяжитесь с нашими координаторами до или во время бронирования. Мы здесь, чтобы помочь.",
      sections: [
        {
          id: "about-service",
          title: "1. О сервисе",
          body: [
            "MTÜ My Granny (регистрационный код 80612345, Tartu mnt 25, Таллинн) управляет платформой, которая знакомит семьи с проверенными бабушками, предлагающими уход за детьми, общение и повседневную помощь.",
            "My Granny выступает посредником и координатором. Саму заботу оказывает бабушка непосредственно семье.",
          ],
        },
        {
          id: "accounts",
          title: "2. Аккаунты и требования",
          body: [
            "Для создания аккаунта вам должно быть не менее 18 лет, и вы должны предоставить точную и актуальную информацию.",
            "Бабушки должны пройти проверку личности, предоставить две рекомендации и пройти личное собеседование перед получением бронирований.",
            "Мы можем приостановить аккаунт, который предоставляет ложную информацию или нарушает эти условия.",
          ],
        },
        {
          id: "bookings",
          title: "3. Бронирования и отмены",
          body: [
            "Бронирование становится обязательным, как только и семья, и бабушка подтвердят дату, время и место.",
            "Первая ознакомительная встреча бесплатна.",
            "Бронирование можно бесплатно отменить не позднее чем за 24 часа до согласованного времени начала. За более поздние отмены может взиматься плата в размере 50% от стоимости визита.",
          ],
        },
        {
          id: "payments",
          title: "4. Цены и платежи",
          body: [
            "Почасовые ставки начинаются от 8 евро и отображаются перед подтверждением бронирования. Небольшая координационная плата поддерживает проверку, страхование и работу по поддержке.",
            "Счета выставляются ежемесячно и подлежат оплате в течение 7 дней. Все цены включают применимые налоги.",
          ],
        },
        {
          id: "safety",
          title: "5. Безопасность и ответственность",
          body: [
            "Семьи несут ответственность за описание потребностей ребенка, аллергий, распорядка и любой медицинской информации перед первым визитом.",
            "Бабушки несут ответственность за внимательный и уважительный уход и за немедленное информирование семьи о любом инциденте.",
            "Ни одна из сторон не может передать ответственность за забронированный визит третьему лицу без письменного согласия.",
          ],
        },
        {
          id: "privacy",
          title: "6. Конфиденциальность",
          body: [
            "Мы обрабатываем персональные данные только для подбора семей и бабушек, координации бронирований и выполнения юридических обязательств в соответствии с GDPR.",
            "Данные никогда не продаются. Вы можете запросить доступ, исправление или удаление ваших данных, написав на mygranny.info@gmail.com.",
          ],
        },
        {
          id: "liability",
          title: "7. Ответственность",
          body: [
            "My Granny имеет страхование ответственности, покрывающее координируемые визиты, в соответствии с условиями страховщика.",
            "My Granny не несет ответственности за косвенные убытки или за договоренности, заключенные напрямую между семьей и бабушкой вне платформы.",
          ],
        },
        {
          id: "changes",
          title: "8. Изменения и применимое право",
          body: [
            "Мы можем обновлять эти условия; о существенных изменениях сообщается по эл. почте не менее чем за 14 дней.",
            "Эти условия регулируются законодательством Эстонии. Споры разрешаются сначала путем переговоров, а в ином случае - в Харьюском уездном суде.",
          ],
        },
      ],
      questions: "Есть вопросы об этих условиях?",
      contact: "Связаться с нашей командой",
    },
    importantInformations: {
      metaTitle: "Важная информация | MTÜ My Granny",
      metaDescription:
        "",
      title: "Важная информация",
      updated: "Последнее обновление: 2 октября 2026 г.",
      intro: "MyGranny — это не просто услуга по поиску няни или помощника для семьи. Цель проекта — создавать настоящие, долгосрочные отношения между поколениями, в которых обе стороны могут делиться временем, вниманием, знаниями, опытом и заботой и получать их в ответ. В сообществе MyGranny могут встречаться люди разного возраста, культурного и языкового происхождения, жизненного опыта и привычек. Поэтому особенно важно, чтобы все участники соблюдали общие принципы добросовестного поведения.",
      onPage: "На этой странице",
      safety: "Отношения, объединяющие поколения, начинаются с уважения, доверия и чётких договорённостей.",
      sections: [
        {
          id: "nashi-obshchie-printsipy",
          title: "1. Наши общие принципы",
          body: [
            "Все участники MyGranny руководствуются пятью основными принципами:",
            "🤝 Уважение — мы уважаем возраст, мнение, образ жизни, культуру, язык, привычки и личные границы другого человека.",
            "❤️ Забота — замечаем потребности другого и относимся к нему доброжелательно.",
            "🔐 Безопасность — не совершаем действий, которые могут угрожать физическому или психологическому благополучию ребёнка, семьи, Мамы или Папы.",
            "💬 Открытое общение — если что-то не подходит, вызывает дискомфорт или требует изменений, обсуждаем это спокойно и как можно раньше.",
            "🌱 Взаимность — отношения MyGranny не должны быть односторонними. Мама или Папа также должны чувствовать признательность и получать положительный опыт."
          ],
        },
        {
          id: "pered-pervoy-vstrechey",
          title: "2. Перед первой встречей",
          body: [
            "До встречи обе стороны обсуждают:",
            "Ожидаемый характер отношений и общения.",
            "Подходящие занятия.",
            "Время и частоту встреч.",
            "Место встреч.",
            "Способы связи.",
            "Потребности ребёнка.",
            "Возможности Мамы/Папы.",
            "Неподходящие занятия или ситуации.",
            "Порядок обратной связи.",
            "Действия на случай невозможности выполнить договорённости.",
            "Рекомендация: чем яснее договорённости в начале, тем меньше вероятность недоразумений в дальнейшем. Важные договорённости рекомендуется фиксировать письменно."
          ],
        },
        {
          id: "pravila-dlya-mamy-papy",
          title: "3. Правила для Мамы/Папы",
          body: [
            "Мама или Папа в отношениях MyGranny прежде всего является надёжным взрослым, собеседником и человеком, делящимся межпоколенческим опытом.",
            "Мама/Папа соблюдает договорённости, приходит вовремя, как можно скорее сообщает, если не может прийти, слушает ребёнка и учитывает его потребности, уважает дом и правила семьи, не подменяет родителя и не принимает важных решений за ребёнка без согласования.",
            "Запрещены физические наказания, унижение, угрозы, запугивание и принуждение ребёнка к нежелательным занятиям.",
            "Мама/Папа сохраняет конфиденциальность личной информации семьи и ребёнка, не публикует фотографии без согласия, задаёт вопросы, если не знает, как поступить, и спокойно и честно обсуждает проблемы.",
            "Мама/Папа не обязан быть идеальным. Важно честно говорить о своих навыках, возможностях и ограничениях. Например, если человек не готов самостоятельно перевозить ребёнка, заниматься одновременно несколькими детьми или выполнять определённое занятие, об этом нужно сообщить до начала сотрудничества."
          ],
        },
        {
          id: "pravila-dlya-semi",
          title: "4. Правила для семьи",
          body: [
            "Семья создаёт условия, в которых Мама или Папа чувствует себя желанным гостем и ощущает свою значимость.",
            "Семья соблюдает договорённости, уважает время и личные границы Мамы/Папы, заранее сообщает об изменениях, честно объясняет потребности ребёнка и правила семьи, не ожидает выполнения большего объёма задач, чем было согласовано, не относится к Маме/Папе как к бесплатной рабочей силе или автоматически как к профессиональной няне, уважительно даёт обратную связь и сообщает MyGranny о проблемах или рисках безопасности.",
            "Если договорились играть с ребёнком и гулять, нельзя без предварительного согласования постепенно ожидать, что Мама/Папа также будет убирать, готовить или выполнять другие домашние обязанности."
          ],
        },
        {
          id: "pravila-obshcheniya-s-rebenkom",
          title: "5. Правила общения с ребёнком",
          body: [
            "Ребёнок должен чувствовать себя в безопасности и понимать, что с ним считаются. Маме/Папе следует слушать ребёнка, спрашивать его мнение, давать время привыкнуть, замечать настроение, предлагать занятия, а не заставлять, поддерживать старания, сохранять спокойствие и терпение, учитывать возраст и уровень развития ребёнка.",
            "Следует избегать крика, угроз, унижения, сравнений с другими детьми, физических наказаний, принуждения к объятиям, разговору или участию, необоснованного изучения личных вещей ребёнка и сознательного игнорирования указаний родителя.",
            "Важно: Мама/Папа не принимает на себя роль родителя. За воспитание и важные решения отвечает родитель или законный представитель."
          ],
        },
        {
          id: "lichnye-granitsy-rebenka",
          title: "6. Личные границы ребёнка",
          body: [
            "Каждый ребёнок имеет право на личное пространство и границы.",
            "Учитывайте, если ребёнок не хочет обниматься, играть в определённую игру, сразу разговаривать, хочет побыть один, испытывает страх или дискомфорт либо говорит, что ему что-то не нравится.",
            "К детскому «нет» нужно относиться серьёзно.",
            "Семья также обязана уважать границы Мамы/Папы. Границы обеих сторон важны."
          ],
        },
        {
          id: "dom-semi-i-dom-mamy-papy",
          title: "7. Дом семьи и дом Мамы/Папы",
          body: [
            "Во время встречи дома необходимо уважать правила этого дома.",
            "Мама/Папа не входит без разрешения в помещения, куда его не приглашали, не пользуется личными вещами без разрешения, не приглашает посторонних в дом семьи, не уводит ребёнка или членов семьи в другое место без предварительной договорённости и не фотографирует дом или личные вещи без согласия.",
            "Семья уважает дом и личное пространство Мамы/Папы, не ожидает от него действий у себя дома, о которых не договаривались, и учитывает его возможности и ограничения."
          ],
        },
        {
          id: "telefon-soobshcheniya-i-obshchenie",
          title: "8. Телефон, сообщения и общение",
          body: [
            "В начале сотрудничества договоритесь о канале связи: телефон, SMS, WhatsApp или другой согласованный способ.",
            "Рекомендации:",
            "Не пишите многократно, если человек не ответил.",
            "Не звоните поздно без уважительной причины.",
            "Срочные изменения сообщайте сразу.",
            "Сохраняйте вежливость даже при раздражении.",
            "Не выясняйте конфликт в сообщениях, если спокойный разговор будет лучше.",
            "Если общение становится неприятным или конфликтным, рекомендуем обратиться к консультанту MyGranny."
          ],
        },
        {
          id: "opozdaniya-i-izmenenie-dogovorennostey",
          title: "9. Опоздания и изменение договорённостей",
          body: [
            "Непредвиденные обстоятельства могут возникнуть у каждого.",
            "Если опаздываете, сообщите об этом при первой возможности.",
            "Если встречу необходимо отменить, предупредите как можно раньше.",
            "Регулярные опоздания, отмены в последний момент и несоблюдение договорённостей подрывают доверие.",
            "Надёжность — основа отношений MyGranny."
          ],
        },
        {
          id: "podarki-dengi-i-voznagrazhdenie",
          title: "10. Подарки, деньги и вознаграждение",
          body: [
            "В центре MyGranny находятся человеческое общение и взаимная ценность, а не деньги.",
            "Если семья и Мама/Папа договариваются о платной деятельности, заранее согласуйте размер оплаты, за что она выплачивается, способ и срок оплаты, а при необходимости учитывайте действующее законодательство.",
            "Плата за консультацию и подбор MyGranny в размере 54,99 € не является вознаграждением Мамы/Папы.",
            "MyGranny автоматически не устанавливает размер возможной оплаты между семьёй и Мамой/Папой."
          ],
        },
        {
          id: "podarki-i-lichnye-zaymy",
          title: "11. Подарки и личные займы",
          body: [
            "Рекомендуется избегать ситуаций, когда финансовые или материальные отношения начинают влиять на доверие.",
            "Не просите деньги в долг у другой стороны, не дарите крупные денежные подарки и не используйте доверие ради финансовой выгоды.",
            "Если разговоры о деньгах становятся неприятными, при необходимости обсудите это с консультантом MyGranny.",
            "Небольшие символические подарки, совместная выпечка, рукоделие или другие занятия могут быть естественной частью отношений, если обеим сторонам комфортно."
          ],
        },
        {
          id: "fotografii-i-sotsialnye-seti",
          title: "12. Фотографии и социальные сети",
          body: [
            "Для фотографирования ребёнка или семьи и публикации фотографий необходимо согласие.",
            "Без согласия нельзя фотографировать ребёнка, публиковать его имя, сообщать адрес семьи, размещать семейные фотографии в социальных сетях, публично рассказывать о личных делах семьи или распространять личные данные Мамы/Папы.",
            "Даже публикация с добрыми намерениями может нарушить частную жизнь.",
            "Если сомневаетесь — сначала спросите."
          ],
        },
        {
          id: "doverie-formiruetsya-postepenno",
          title: "13. Доверие формируется постепенно",
          body: [
            "Первая встреча не обязана быть идеальной.",
            "Ребёнок может не сразу установить контакт с Мамой/Папой; человеку может потребоваться время, чтобы понять привычки семьи; семья не всегда может после первой встречи определить, подходит ли ей этот человек.",
            "Это нормально.",
            "Поэтому MyGranny предусматривает пробный период из 1–3 встреч, в течение которого обе стороны могут оценить сотрудничество."
          ],
        },
        {
          id: "esli-chto-to-ne-podkhodit",
          title: "14. Если что-то не подходит",
          body: [
            "Вы всегда вправе сказать: «Мне это не подходит».",
            "Мама/Папа или семья могут отказаться от сотрудничества. Ребёнок может выразить, что ему некомфортно.",
            "Никто не обязан продолжать отношения только потому, что подбор уже состоялся.",
            "По возможности спокойно обсудите причину.",
            "Если решить проблему самостоятельно не удаётся, обратитесь к консультанту MyGranny.",
            "При необходимости MyGranny может организовать новый подбор."
          ],
        },
        {
          id: "kogda-nuzhno-reagirovat-nemedlenno",
          title: "15. Когда нужно реагировать немедленно",
          body: [
            "При подозрении на насилие или жестокое обращение с ребёнком, серьёзной угрозе ребёнку или взрослому, угрозах, подозрении на сексуальное насилие или иной непосредственной угрозе безопасности не нужно ждать обычной процедуры разрешения проблемы.",
            "Сначала обеспечьте безопасность человека или ребёнка.",
            "При необходимости звоните 112.",
            "Затем, в зависимости от ситуации, сообщите родителю и/или консультанту MyGranny.",
            "Консультант MyGranny не заменяет полицию, скорую помощь, врача, органы защиты детей или другие компетентные учреждения."
          ],
        },
        {
          id: "mama-papa-ne-roditel",
          title: "16. Мама/Папа — не родитель",
          body: [
            "Это один из важнейших принципов MyGranny.",
            "Мама/Папа может поддерживать ребёнка, слушать, играть, обучать, читать, гулять, делиться знаниями, составлять компанию и быть важным надёжным взрослым.",
            "Мама/Папа не принимает решений о лечении ребёнка, лекарствах, школе, воспитании, наказаниях и других важных вопросах его жизни.",
            "Эти решения относятся к компетенции родителя или законного представителя."
          ],
        },
        {
          id: "semya-ne-rabotodatel",
          title: "17. Семья — не работодатель, а Мама/Папа — не бесплатный поставщик услуг",
          body: [
            "MyGranny строится на отношениях, а не на односторонней услуге.",
            "Семье не следует думать: «Теперь у нас есть человек, который всё сделает за нас».",
            "Маме/Папе не следует думать: «Я должен соглашаться на всё, потому что меня выбрали».",
            "Сотрудничество возможно, когда обе стороны учитывают возможности и границы друг друга."
          ],
        },
        {
          id: "uvazhenie-yazyka-i-kultury",
          title: "18. Уважение языка и культуры",
          body: [
            "MyGranny может объединять людей с разными родными языками, культурами и жизненным опытом.",
            "Это возможность учиться друг у друга.",
            "Будьте терпеливы, если человек не говорит по-эстонски свободно.",
            "Не высмеивайте акцент или языковые навыки.",
            "При необходимости повторяйте или объясняйте.",
            "Уважайте культурные привычки.",
            "Воспринимайте различия как возможность учиться.",
            "Практика эстонского языка может стать ценной частью отношений MyGranny."
          ],
        },
        {
          id: "chto-delat-pri-nedoponimanii",
          title: "19. Что делать при недопонимании",
          body: [
            "Сначала спросите, а не делайте предположений.",
            "Например: «Правильно ли я понял(а), что…?» или «Я хотел(а) бы ещё раз уточнить нашу договорённость».",
            "Если возник конфликт:",
            "Говорите спокойно.",
            "Выслушайте объяснение другой стороны.",
            "Сформулируйте договорённость заново.",
            "Если решение не найдено, обратитесь к консультанту MyGranny."
          ],
        },
        {
          id: "zolotye-pravila-mygranny",
          title: "20. Золотые правила MyGranny — 10 простых правил для каждого участника",
          body: [
            "1. Держите слово. Если обещали прийти — приходите; если не можете, предупредите.",
            "2. Уважайте границы другого человека. Не считайте, что вы знаете, что ему подходит.",
            "3. Спрашивайте, прежде чем действовать, особенно когда речь о ребёнке, фотографиях, доме или личной информации.",
            "4. Не берите на себя роль родителя. Поддерживайте ребёнка, но не принимайте важные решения вместо родителя.",
            "5. Соблюдайте конфиденциальность. Личная информация семьи остаётся между семьёй и Мамой/Папой.",
            "6. Не злоупотребляйте доверием — финансово, эмоционально или иным образом.",
            "7. Говорите о проблемах. Сокрытие проблемы её не решает.",
            "8. Не принуждайте. Ребёнок и взрослый вправе сказать «нет».",
            "9. Будьте терпеливы. Доверие и близость требуют времени.",
            "10. Думайте о взаимности. Спросите себя: «Хорошо и приемлемо ли это также для другой стороны?»"
          ],
        },
        {
          id: "pered-nachalom-sotrudnichestva",
          title: "21. Перед началом сотрудничества — контрольные вопросы",
          body: [
            "Маме/Папе стоит спросить себя:",
            "Понимаю ли я ожидания семьи?",
            "Знает ли семья, чего хочу я и к чему готов(а)?",
            "Согласовали ли мы время и место встречи?",
            "Знаю ли я важные потребности ребёнка?",
            "Знаю ли, к кому обратиться при проблеме?",
            "Известны ли семье мои границы?",
            "Готов(а) ли я соблюдать договорённости семьи?",
            "Чувствую ли я себя комфортно и безопасно?",
            "Семье стоит спросить себя:",
            "Честно ли мы описали свои потребности?",
            "Знает ли Мама/Папа важные потребности и особенности ребёнка?",
            "Чётко ли согласованы занятия, канал связи, время и частота встреч?",
            "Обсудили ли мы границы ребёнка?",
            "Уважаем ли время и границы Мамы/Папы?",
            "Готовы ли мы давать и принимать честную обратную связь?"
          ],
        },
        {
          id: "nasha-obshchaya-dogovorennost",
          title: "22. Наша общая договорённость",
          body: [
            "Участие в сообществе MyGranny означает, что мы стремимся создавать отношения, в которых ребёнок чувствует себя в безопасности, семья ощущает поддержку, Мама/Папа чувствует свою значимость, а все стороны ощущают уважение.",
            "MyGranny ищет не просто человека, который поможет семье сэкономить время. Мы стремимся создать настоящую связь между поколениями.",
            "Мама или Папа может делиться временем, знаниями, навыками и жизненным опытом. Семья и младшее поколение могут ответить общением, новыми впечатлениями, энергией молодости и возможностью чувствовать, что рядом есть важный человек.",
            "MyGranny — Больше, чем присмотр за ребёнком. Возможность создать отношения, которые могут длиться годами."
          ],
        },
      ]
    },
    counsellors: {
      metaTitle: "Наши консультанты | My Granny",
      metaDescription:
        "Познакомьтесь с равными консультантами MTÜ My Granny, готовыми выслушать, поддержать и помочь найти ясность в жизненных трудностях.",
      title: "Наши консультанты",
      intro:
        "Познакомьтесь с опытными равными консультантами, которые слушают без осуждения и поддерживают вас и вашу семью.",
      languagesLabel: "Языки общения",
      contactLabel: "Связаться",
      list: [
        {
          id: "airi-kartna",
          name: "Айри Кяртна",
          role: "Равный консультант",
          imageAlt: "Портрет Айри Кяртна, равного консультанта",
          bio: [
            "Я поддерживаю людей, которым нужен совет, ободрение и внимательный собеседник в прояснении их желаний, целей и возможностей, а также в поиске пути к их воплощению. Если вы готовы расти и создавать перемены в своей жизни, но нуждаетесь в терпеливом слушателе и поддерживающем человеке рядом, мы можем вместе найти ясность даже в сложных и запутанных ситуациях.",
            "Я делюсь жизненным опытом, знаниями и уроками, которые накопились у меня за долгие годы. Я верю, что даже трудный опыт может дать нам силу, более глубокое понимание и умение замечать новые возможности. Меня мотивирует радость от работы и, прежде всего, то, что я вижу развитие своих клиентов, их маленькие и большие успехи и то, как возвращается их вера в себя.",
            "В своей работе я объединяю многолетний опыт материнства, опыт жизни за границей и адаптации в разных местах, а также личный опыт переживания горя и сложного периода, связанного с депрессией. Помимо всего этого, мою работу отличает искренний интерес к человеку и его внутреннему миру.",
            "Я прожила 20 лет в трёх разных странах и шесть лет назад вернулась в Эстонию. Я знаю, что значит интегрироваться и адаптироваться в новой среде, одновременно неся ответственность за семью и воспитание детей. Как мать троих детей, я знаю, сколько радости, но также сложностей и неожиданных ситуаций может принести жизнь.",
            "На моём жизненном пути были как большие успехи, так и трудности, растерянность и горе. Я научилась двигаться вперёд шаг за шагом даже в самые тёмные моменты, поддерживать саму себя и находить в себе силы начать заново. Этим опытом я делюсь с клиентами не через готовые ответы, а через поддержку, понимание и готовность размышлять вместе.",
            "Я верю, что история каждого человека уникальна, и не всегда нужно, чтобы кто-то говорил, что делать. Иногда важнее всего, чтобы рядом был человек, который слушает, помогает упорядочить мысли, задаёт правильные вопросы и поддерживает вас в поиске собственных решений.",
            "Я прошла несколько курсов по коучингу, обучение по оказанию первой помощи в области психического здоровья, получила базовые знания психологии и прошла обучение равного консультанта вместе с практикой.",
          ],
          goal:
            "Моя цель — быть рядом с вами: слушать, понимать, помогать найти ясность и поддерживать вас на пути, который вы выбираете сами.",
          languages: ["Эстонский", "Русский", "Английский"],
          phone: "+372 55920520",
          email: "airi@mygranny.ee",
        },
        {
          id: "liina-lamson",
          name: "Лийна Ламсон",
          role: "Равный консультант",
          imageAlt: "Портрет Лийны Ламсон, руководителя проектов и равного консультанта",
          bio: [
            "Лийна Ламсон — руководитель проектов, лидер общественных инициатив и равный консультант, для которой важны благополучие людей, значимые отношения и возможность найти новое направление в жизни даже после сложных периодов.",
            "У Лийны международное образование и опыт работы: она участвовала в различных проектах, где ключевым было объединение людей, организация сотрудничества и воплощение новых идей. Лийна жила и работала за границей — во Франции, Тунисе и Дании. Помимо проектного менеджмента, Лийна прошла обучение на равного консультанта и координатора деятельности. Эти занятия дали ей знания и практические навыки, как поддерживать человека на сложном жизненном этапе, слушать без осуждения и помогать ему шаг за шагом восстановить уверенность в себе и веру в свои возможности.",
            "Как равный консультант, Лийна помогает людям, пережившим жизненный кризис или стоящим перед важными переменами. Её цель — поддержать человека в поиске нового направления: будь то новая работа, начало учёбы, переквалификация или просто первый реальный шаг вперёд. Лийна исходит из убеждения, что кризис не обязательно означает остановку жизни. Часто сложный период становится моментом, с которого начинается новый и значимый этап жизни.",
            "Именно этот опыт формирует вклад Лийны в проект My Granny. Она видит большую ценность в общении между поколениями и верит, что пожилые люди могут дать обществу очень многое — их жизненный опыт, знания, истории и навыки нельзя оставлять в стороне. В то же время молодым людям тоже нужна возможность слушать, учиться и получать поддержку от тех, чей жизненный путь был длиннее и разнообразнее.",
            "Лийна также участвовала в создании и развитии телефонной службы поддержки «SILD», цель которой — уменьшить одиночество среди пожилых людей и создать возможности для новых значимых контактов. Этот опыт укрепил её убеждение, что иногда один разговор, внимательное слушание или регулярный контакт могут очень много значить для человека.",
            "В проекте My Granny Лийна видит возможность создавать больше таких значимых встреч. Для неё общение между поколениями — это не односторонняя помощь, а взаимные отношения, в которых обеим сторонам есть что дать и что получить. Пожилой человек может поделиться своим опытом, знаниями и историями, а молодой — привнести в отношения свежую энергию, новые знания и современный взгляд.",
            "Лийна верит, что каждому человеку нужно чувствовать себя нужным, услышанным и ценным. Особенно это важно во времена перемен и кризисов. Так же, как она, будучи равным консультантом, помогает людям после жизненного кризиса найти новую работу, начать учёбу или открыть для себя новое направление, она хочет через My Granny помочь создать среду, где люди не остаются одни со своими тревогами и одиночеством.",
            "Для Лийны My Granny — это прежде всего объединение людей. Это возможность собрать вместе разные поколения, опыт и истории и создать отношения, из которых рождается больше заботы, принадлежности и взаимопонимания.",
          ],
          goal:
            "Лийна верит, что ни один жизненный кризис не обязан быть концом — он может стать началом новой главы. И иногда для того, чтобы найти новое начало, человеку важнее всего просто иметь рядом того, кто слушает, верит в него и помогает увидеть следующий возможный шаг.",
          languages: ["Эстонский", "Французский", "Английский"],
          phone: "+372 58596615",
          email: "liina@mygranny.ee",
        },
        {
          id: "anne-kaljas",
          name: "Анне Кальяс",
          role: "Равный консультант",
          imageAlt: "Портрет Анне Кальяс, равного консультанта",
          bio: [
            "Меня отличает глубокий интерес к человеку, его внутреннему миру и тому, как он взаимодействует с окружающей действительностью.",
            "Мой профессиональный и личный опыт объединяет научные знания, консультирование, а также многолетний интерес к духовным практикам, традициям исцеления и различным подходам к работе с человеком, сформировавшимся в разных культурах.",
            "Я прошла программу Fontes по карьерному консультированию и развитию руководителей, которая дала мне современную и практическую основу для поддержки людей в периоды перемен, принятия важных решений и профессионального и личностного развития. Как карьерный консультант, я помогаю людям осознанно подходить к профессиональному и жизненному выбору, лучше понимать свои сильные стороны, потребности, ценности и истинные стремления.",
            "Многолетнее изучение духовных практик и методов исцеления различных культур, а также их практическое применение значительно сформировали мой стиль консультирования. Это позволяет мне смотреть на человека целостно, с разных точек зрения, и замечать важные взаимосвязи, которые не всегда очевидны на первый взгляд.",
            "Мой подход целостный и индивидуальный. В зависимости от потребностей человека в своем подходе к консультированию я также использую индйискую астрологию, звуковую терапию и практики на природе, помогая поддержать человека через более глубокий, целостный опыт.",
            "У каждого человека своя история, свои потребности и свой путь. Моя роль как консультанта - не давать готовых ответов, а помочь Вам прийти к необходимому пониманию в настоящем моменте, чтобы увидеть собственный путь к решению и дальнейшему движению.",
          ],
          goal:
            "Моя цель — помочь вам обрести ясность, укрепить уверенность в себе и сделать осознанный, взвешенный выбор как в профессиональной, так и в личной жизни.",
          languages: ["Эстонский", "Русский", "Английский"],
          phone: "+372 5178959",
          email: "anne@mygranny.ee",
        },
      ],
    },
  },
} as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start in English so server and client render identically.
  const [language, setLanguageState] = useState<Language>("en");
  const [hydrated, setHydrated] = useState(false);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  // After hydration, restore the visitor's saved preference (English stays default).
  useEffect(() => {
    const saved = window.localStorage.getItem(LANGUAGE_KEY);
    if (saved === "et") {
      setLanguageState("et");
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language;
  }, [hydrated, language]);


  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language] as TranslationDictionary,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    return {
      language: "en" as const,
      setLanguage: () => undefined,
      t: translations.en as TranslationDictionary,
    };
  }

  return context;
}

export function useTranslatedMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    descriptionMeta?.setAttribute("content", description);
  }, [description, title]);
}
