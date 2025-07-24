import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, User, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container-max">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">SIH 2025</h1>
                <p className="text-sm text-gray-600">Internal Hackathon</p>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <span className="text-blue-600 font-medium">Coordinator Details</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Coordinator Details</h1>
          <p className="text-xl text-blue-100">Meet our organizers and faculty jury members</p>
        </div>
      </section>

      {/* Faculty Coordinator */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Faculty Coordinator</h2>
          <div className="max-w-md mx-auto">
            <Card className="bg-blue-50 border-blue-200 text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="text-white h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">S. Jyotsna</h3>
                <p className="text-blue-600 font-medium mb-4">Faculty Coordinator</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4 text-blue-600" />
                    <span>s.jyotsna@college.edu</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4 text-blue-600" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Coordinators */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Coordinators</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-amber-50 border-amber-200 text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="text-white h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rishab Jain</h3>
                <p className="text-amber-600 font-medium mb-1">4th Year</p>
                <p className="text-gray-600 text-sm mb-4">CSE (Data Science)</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4 text-amber-600" />
                    <span>rishab.jain@student.edu</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4 text-amber-600" />
                    <span>+91 98765 43211</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="text-white h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advait Joshi</h3>
                <p className="text-green-600 font-medium mb-1">3rd Year</p>
                <p className="text-gray-600 text-sm mb-4">CSE (Data Science)</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4 text-green-600" />
                    <span>advait.joshi@student.edu</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4 text-green-600" />
                    <span>+91 98765 43212</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Jury Members */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Faculty Jury Members</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Rajesh Kumar", dept: "Computer Science", specialization: "AI & Machine Learning" },
              { name: "Dr. Priya Sharma", dept: "Data Science", specialization: "Data Analytics" },
              { name: "Dr. Amit Singh", dept: "Information Technology", specialization: "Cybersecurity" },
              { name: "Dr. Sneha Patel", dept: "Computer Science", specialization: "Software Engineering" },
              { name: "Dr. Ravi Gupta", dept: "Data Science", specialization: "Big Data" },
              { name: "Dr. Anita Verma", dept: "Computer Science", specialization: "Database Systems" },
              { name: "Dr. Vikram Reddy", dept: "Information Technology", specialization: "Web Technologies" }
            ].map((faculty, index) => (
              <Card key={index} className="bg-gray-50 border-gray-200 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-1">{faculty.dept}</p>
                  <p className="text-gray-600 text-xs">{faculty.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Coordinator Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <Mail className="text-blue-600 h-8 w-8 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm mb-2">For any queries regarding the hackathon</p>
                  <p className="text-blue-600 font-medium">sih2025@college.edu</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <Phone className="text-green-600 h-8 w-8 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-2">Contact our coordinators directly</p>
                  <p className="text-green-600 font-medium">+91 98765 43210</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-max">
          <div className="text-center">
            <Link href="/" className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white text-sm" />
              </div>
              <h3 className="text-xl font-semibold">SIH 2025 Internal Hackathon</h3>
            </Link>
            <p className="text-gray-400">Department of CSE (Data Science)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}