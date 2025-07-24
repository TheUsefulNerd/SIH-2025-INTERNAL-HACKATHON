import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Target, Building, Clock, Trophy, CheckCircle, Mail, Phone, Code, Presentation, Laptop, Star, Calculator, Gavel, Briefcase, User } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

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
              <a href="#requirements" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Requirements</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contacts</a>
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
            backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative container-max section-padding py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-500 text-white">
                <Calendar className="mr-2 h-4 w-4" />
                August 14th, 21st, 22nd 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Smart India Hackathon
              <span className="block text-amber-300">Internal Selection</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join our internal hackathon to represent our college in SIH 2025. 
              Showcase your innovation, collaborate with peers, and build solutions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                <Trophy className="mr-2 h-5 w-5" />
                Register Now
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                <Target className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
            <div className="mt-12 text-sm text-blue-100">
              <p><strong>Organized by:</strong> Department of CSE (Data Science)</p>
              <p><strong>Submitted to:</strong> The Principal</p>
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

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-amber-600 mb-1">3</div>
                    <div className="text-sm text-gray-600">Days of Competition</div>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">7</div>
                    <div className="text-sm text-gray-600">Expert Judges</div>
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements & Expenses Section */}
      <section id="requirements" className="section-padding bg-white">
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
                      <p className="text-gray-700">A Seminar Hall + Classrooms/Auditorium space with projector access for Day 1 and Day 3</p>
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
                      <p className="text-gray-700">5 faculty members for evaluation + 2 Industry professionals</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Event Coordinators</h4>
                      <p className="text-gray-700">Rishab Jain (4th Year/CSE Data Science), Advait Joshi (3rd Year/CSE Data Science)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Expenses & Outcomes */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Budget & Outcomes</h3>
              
              {/* Expenses */}
              <Card className="bg-gray-50 border-gray-200 mb-8">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Calculator className="text-blue-600 mr-2 h-5 w-5" />
                    Estimated Expenses
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Food & Refreshments for Judges</span>
                      <span className="font-semibold text-gray-900">₹500</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Certificates & Momentos for winners</span>
                      <span className="font-semibold text-gray-900">₹400</span>
                    </div>
                    <div className="flex justify-between items-center py-2 font-semibold text-lg">
                      <span className="text-gray-900">Total Budget</span>
                      <span className="text-blue-600">₹900</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">*Additional expenses not anticipated at this stage</p>
                </CardContent>
              </Card>

              {/* Expected Outcomes */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="text-green-600 mr-2 h-5 w-5" />
                    Expected Outcomes
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 mt-1 h-5 w-5" />
                      <span className="text-gray-700">Shortlisted, well-prepared teams for SIH</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 mt-1 h-5 w-5" />
                      <span className="text-gray-700">Improved peer learning and problem-solving exposure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">Get in touch with our organizing team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Faculty Coordinator */}
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="S. Jyotsna Faculty Coordinator" 
                    className="profile-image"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">S. Jyotsna</h3>
                <p className="text-blue-600 font-semibold mb-4">Faculty Coordinator</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    jyotsna@college.edu
                  </p>
                  <p className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    +91 98765 43210
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Student Coordinator 1 */}
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Rishab Jain Student Coordinator" 
                    className="profile-image"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rishab Jain</h3>
                <p className="text-amber-600 font-semibold mb-2">Student Co-Coordinator</p>
                <p className="text-gray-600 text-sm mb-4">IV Year, CSE (Data Science)</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    rishab.jain@student.edu
                  </p>
                  <p className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    +91 87654 32109
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Student Coordinator 2 */}
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Advait Joshi Student Coordinator" 
                    className="profile-image"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advait Joshi</h3>
                <p className="text-green-600 font-semibold mb-2">Student Co-Coordinator</p>
                <p className="text-gray-600 text-sm mb-4">III Year, CSE (Data Science)</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    advait.joshi@student.edu
                  </p>
                  <p className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    +91 76543 21098
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Jury Panel Section */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                <Gavel className="text-blue-600 mr-3 h-6 w-6" />
                Jury Panel
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Faculty Members (5)</h4>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <User className="text-white h-5 w-5" />
                        </div>
                        <span className="text-gray-700">Faculty Member {i} (TBA)</span>
                      </div>
                    ))}
                    <div className="text-center text-gray-500 text-sm">+ 2 more faculty members</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Industry Professionals (2)</h4>
                  <div className="space-y-3">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                          <Briefcase className="text-white h-5 w-5" />
                        </div>
                        <span className="text-gray-700">Industry Expert {i} (TBA)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="text-white h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">SIH 2025</h3>
                  <p className="text-gray-400 text-sm">Internal Hackathon</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Department of Computer Science & Engineering (Data Science)
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#requirements" className="hover:text-white transition-colors">Requirements</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Contacts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Important Dates</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Aug 14: Presentation Round</li>
                <li>Aug 21: Coding Round (Part 1)</li>
                <li>Aug 22: Final Judging</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Department of CSE (Data Science). All rights reserved.</p>
            <p className="mt-2">Smart India Hackathon Internal Selection Process</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
