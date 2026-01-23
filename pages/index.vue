<template>
  <div class="px-4">
    <!-- Features Section -->
    <section class="max-w-7xl mx-auto py-20">
      <Card
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200"
        label="Innovation"
        title="Next-Gen Technology"
        description="Experience cutting-edge features powered by AI and machine learning. Our advanced algorithms adapt to your needs, providing personalized experiences that evolve with you." />

      <Card
        shouldReverse
        image="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200"
        label="Performance"
        title="Lightning Fast Speed"
        description="Built for performance from the ground up. Enjoy seamless navigation, instant loading times, and smooth animations that make every interaction feel effortless and responsive." />

      <Card
        image="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200"
        label="Security"
        title="Bank-Level Protection"
        description="Your data is protected with military-grade encryption and advanced security protocols. Rest easy knowing your information is safe with our comprehensive security measures." 
        actionUrl="#" />
    </section>

    <!-- FAQ Section -->
    <Faq :faqItems="faqData"/>
  </div>
</template>

<script setup>
const faqData = [
  { 
    question: 'What makes this app different from others?', 
    answer: 'Our app combines cutting-edge technology with intuitive design, offering features that adapt to your needs. We focus on delivering a seamless experience with regular updates and responsive customer support.' 
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption and follow industry best practices to protect your data. All information is stored securely and we never share your personal details with third parties.'
  },
  {
    question: 'What devices are supported?',
    answer: 'Our app is available on iOS, macOS, and coming soon to Android and Windows. We ensure optimal performance across all supported platforms with regular compatibility updates.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply download the app from the App Store or Mac App Store, create your account in seconds, and follow our interactive onboarding guide. You\'ll be up and running in less than a minute!'
  },
];
</script>