  import { Calendar, Users, Shield, MessageCircle, Bell, Trophy, Star, Play, ArrowRight, Check } from 'lucide-react';

function Promo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 mr-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  C
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200">
                    Crewbie
                  </span>
                </h1>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Connect Through Events
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                Join local events, build lasting friendships, and discover your community in Zagreb. 
                Save money with group discounts and connect with verified, like-minded people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center">
                  <ArrowRight className="mr-2" size={20} />
                  Launch Crewbie App
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2" size={20} />
                  Watch Demo
                </button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
                <div className="flex items-center">
                  <Users className="mr-2" size={16} />
                  <span>150+ Active Users</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  <span>80+ Events Monthly</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-2" size={16} />
                  <span>Zagreb, Croatia</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-orange-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="People connecting at events" 
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Crewbie?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing features that make connecting with your community easier than ever
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Event Discovery",
                description: "Find exciting local events tailored to your interests and schedule"
              },
              {
                icon: Users,
                title: "Group Discounts",
                description: "Save money when you attend events with friends and new connections"
              },
              {
                icon: Shield,
                title: "Verified Community",
                description: "Connect with real, verified people in a safe and trusted environment"
              },
              {
                icon: MessageCircle,
                title: "Real-time Chat",
                description: "Communicate instantly with event organizers and fellow attendees"
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                description: "Never miss an event with personalized alerts and reminders"
              },
              {
                icon: Trophy,
                title: "Team Events",
                description: "Join group activities and build lasting friendships through shared experiences"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-purple-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in just three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Profile",
                description: "Sign up and tell us about your interests and preferences"
              },
              {
                step: "2",
                title: "Discover Events",
                description: "Browse local events that match your interests and schedule"
              },
              {
                step: "3",
                title: "Connect & Attend",
                description: "Join events, meet new people, and build lasting friendships"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Build Real Friendships</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Instant Connections",
                    description: "Meet like-minded people who share your interests and passions"
                  },
                  {
                    icon: Star,
                    title: "Quality Experiences",
                    description: "Attend curated events that create meaningful memories"
                  },
                  {
                    icon: Shield,
                    title: "Safe Environment",
                    description: "Connect in a verified, trusted community of real people"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Friends enjoying events together" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Categories</h2>
            <p className="text-xl text-gray-600">Find events that match your interests</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { emoji: "⚽", name: "Sports" },
              { emoji: "🎮", name: "Games" },
              { emoji: "🎨", name: "Culture" },
              { emoji: "🍕", name: "Food & Drinks" },
              { emoji: "💪", name: "Fitness" },
              { emoji: "🎵", name: "Music" },
              { emoji: "✈️", name: "Trips" },
              { emoji: "🌙", name: "Nightlife" },
              { emoji: "👶", name: "Parents & Kids" },
              { emoji: "💻", name: "Virtual" },
              { emoji: "🔨", name: "DIY & Crafts" },
              { emoji: "🌲", name: "Outdoor" }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-gradient-to-r hover:from-purple-50 hover:to-orange-50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="text-3xl mb-3">{category.emoji}</div>
                <div className="text-sm font-medium text-gray-700">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real stories from our amazing community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Marić",
                role: "Marketing Professional",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face",
                quote: "Crewbie helped me find my tribe in Zagreb! I've made genuine friendships through amazing events.",
                rating: 5
              },
              {
                name: "Marko Petrović",
                role: "Software Developer",
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150&h=150&fit=crop&crop=face",
                quote: "The group discounts are fantastic! I've saved so much money while discovering new activities.",
                rating: 5
              },
              {
                name: "Petra Novak",
                role: "Student",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face",
                quote: "As a newcomer to Zagreb, Crewbie made it so easy to connect with locals and explore the city.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Active Users" },
              { number: "80+", label: "Events Monthly" },
              { number: "12", label: "Categories" },
              { number: "4.9", label: "User Rating" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-gray-600">Powered by cutting-edge tools for the best experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "⚛️", name: "React", description: "Modern UI framework" },
              { emoji: "📱", name: "TypeScript", description: "Type-safe development" },
              { emoji: "🎨", name: "Tailwind CSS", description: "Beautiful styling" },
              { emoji: "🚀", name: "Supabase", description: "Real-time database" }
            ].map((tech, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                <div className="text-4xl mb-4">{tech.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100">
            Join the Crewbie community today and start building meaningful connections through events
          </p>
          <button className="bg-white text-purple-600 px-12 py-4 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl mb-8 flex items-center justify-center mx-auto">
            <ArrowRight className="mr-3" size={24} />
            Launch Crewbie Now
          </button>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center">
              <Check className="mr-2" size={16} />
              Free to use
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center">
              <Check className="mr-2" size={16} />
              No downloads needed
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center">
              <span className="mr-2">🌐</span>
              Web-based platform
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">📱</span>
              Mobile optimized
            </div>
            <div className="flex items-center justify-center">
              <span className="mr-2">⚡</span>
              Real-time updates
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 mr-3 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                C
              </div>
              <span className="text-xl font-bold">Crewbie</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Crewbie. All rights reserved.</p>
            <p className="mt-2">Connect through events, build lasting friendships.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Promo;