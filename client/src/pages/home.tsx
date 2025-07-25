import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Target, Building, Clock, Trophy, CheckCircle, Code, Presentation, Laptop, Star, Gavel, User, Award } from "lucide-react";
import { Link } from "wouter";
import heroImage from './images/sih-image-hero.png';
import { ListChecks } from "lucide-react";




export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container-max">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">SIH 2025</h1>
                <p className="text-sm text-gray-600">Internal Hackathon</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#overview" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Overview</a>
              <a href="#schedule" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Schedule</a>
              <a href="#registration" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Registration</a>
              <a href="#requirements" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Requirements</a>
              <Link href="/contacts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Coordinator Details</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'fit',
            backgroundPosition: 'cover'
          }}
        />

        
        <div className="relative container-max section-padding py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Smart India Hackathon
              <span className="block text-amber-300">Internal Selection</span>
            </h1>
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-500 text-white">
                <Calendar className="mr-2 h-4 w-4" />
                August 14th, 21st, 22nd 2025
              </span>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join our Internal Hackathon to represent SVIT in SIH 2025. 
              Showcase your Innovation, Collaborate with Peers, and Build Solutions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#registration">
                <Button className="btn-primary text-lg px-8 py-4">
                  <Trophy className="mr-2 h-5 w-5" />
                  Register Now!
                </Button>
              </a>
              <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-white border border-white border-opacity-30">
                <User className="mr-2 h-4 w-4" />
                <span><strong>SPOC:</strong> - </span>
              </div>
            </div>
            <div className="mt-12 text-sm text-blue-100">
              <p><strong>Organized by:</strong> Department of CSE (Data Science)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
<section id="overview" className="section-padding bg-white">
  <div className="container-max">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hackathon Overview</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our internal hackathon is designed to identify, mentor, and prepare the best teams to represent our college in SIH 2025
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Students collaborating on hackathon project" 
          className="rounded-2xl shadow-xl w-full"
        />
      </div>
      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center">
              <Target className="text-blue-600 mr-3 h-6 w-6" />
              Objective
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The internal hackathon is aimed at identifying, mentoring, and shortlisting top-performing teams to represent our college in the upcoming Smart India Hackathon (SIH) 2025. The hackathon will also promote collaboration, critical thinking, and solution-driven innovation among students.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-50 border-purple-200">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center">
              <ListChecks className="text-purple-600 mr-3 h-6 w-6" />
              Rules
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
              <li>Follow the official SIH PPT format. It will be shared in the WhatsApp group by the admins.</li>
              <li>AI tools are allowed. Use them responsibly and give credit if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-amber-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Days of Competition</div>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">5</div>
              <div className="text-sm text-gray-600">Expert Faculty Judges</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Schedule Section */}
      <section id="schedule" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Schedule</h2>
            <p className="text-xl text-gray-600">Three days of intensive competition and innovation</p>
          </div>

          <div className="space-y-8">
            {/* Day 1 */}
            <Card className="border-l-4 border-blue-600 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Day 1 - Presentation Round</h3>
                    <p className="text-lg text-blue-600 font-semibold">August 14th, 2025</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      <Presentation className="mr-2 h-4 w-4" />
                      Presentation
                    </span>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center">
                    <Users className="text-blue-600 mr-3 h-5 w-5" />
                    Each team presents their SIH problem statement and proposed solution
                  </p>
                  <p className="flex items-center">
                    <Gavel className="text-blue-600 mr-3 h-5 w-5" />
                    Judging based on clarity, feasibility, and innovation
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-l-4 border-amber-500 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Day 2 - Coding Round (Part 1)</h3>
                    <p className="text-lg text-amber-600 font-semibold">August 21st, 2025</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                      <Code className="mr-2 h-4 w-4" />
                      Development
                    </span>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center">
                    <Laptop className="text-amber-500 mr-3 h-5 w-5" />
                    Development begins during regular college hours
                  </p>
                  <p className="flex items-center">
                    <Building className="text-amber-500 mr-3 h-5 w-5" />
                    Students continue coding from home post-college hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="border-l-4 border-green-500 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Day 3 - Final Judging</h3>
                    <p className="text-lg text-green-600 font-semibold">August 22nd, 2025</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <Trophy className="mr-2 h-4 w-4" />
                      Final Round
                    </span>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center">
                    <Clock className="text-green-500 mr-3 h-5 w-5" />
                    From 11:00 AM onwards, teams demonstrate their functional prototypes
                  </p>
                  <p className="flex items-center">
                    <Star className="text-green-500 mr-3 h-5 w-5" />
                    Evaluation based on execution, technical depth, and presentation
                  </p>
                  <p className="flex items-center">
                    <Award className="text-green-500 mr-3 h-5 w-5" />
                    Valedictory Ceremony
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Details Section */}
      <section id="registration" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registration Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to showcase your skills? Register for the SIH 2025 Internal Hackathon and take the first step towards representing our college
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Trophy className="text-blue-600 mr-3 h-6 w-6" />
                      How to Register
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <p className="text-gray-700">Form your team of 6 members - Minimum 1 girl is mandatory - All girls teams are highly appreciated</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <p className="text-gray-700">Fill out the registration form with all team member details - Inter department teams are permitted</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <p className="text-gray-700">Submit your preferred problem statement choices</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <p className="text-gray-700">Wait for confirmation and further instructions - Team Leaders must join the whatsapp group mentioned in the google form.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                  <Trophy className="h-16 w-16 text-amber-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-blue-100 mb-6">
                    Click below to access the official registration form and begin your journey to SIH 2025
                  </p>
                 <a
                    href="https://forms.gle/SjVnkwewqAASakyU7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                      <span className="mr-2">📝</span>
                      Google Form
                    </Button>
                  </a>

                  <div className="mt-6 text-sm text-blue-100">
                    <p><strong>Registration Deadline:</strong> August 10th, 2025</p>
                    <p><strong>Contact:</strong> Mrs. S. Jyotsna (SPOC)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Requirements</h3>
              <div className="space-y-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Venue</h4>
                      <p className="text-gray-700">Seminar Hall</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Jury Panel</h4>
                      <p className="text-gray-700">5 faculty members for evaluation</p>
                    </div>
                  </CardContent>
                </Card>


              </div>
            </div>

            {/* Expected Outcomes */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Expected Outcomes</h3>
              
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Trophy className="text-green-600 mr-2 h-5 w-5" />
                    What We Aim to Achieve
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Shortlisted, well-prepared teams for SIH 2025</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Improved peer learning and problem-solving exposure</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Enhanced collaboration and critical thinking skills</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Promotion of solution-driven innovation among students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-max">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="text-white text-sm" />
              </div>
              <h3 className="text-xl font-semibold">SIH 2025 Internal Hackathon</h3>
            </div>
            <p className="text-gray-400 mb-6">Department of CSE (Data Science)</p>
            <div className="flex justify-center space-x-8">
              <Link href="/contacts" className="text-gray-400 hover:text-white transition-colors">
                Coordinator Details
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}