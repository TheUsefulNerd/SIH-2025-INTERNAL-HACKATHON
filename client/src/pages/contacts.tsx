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

      {/* SPOC */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">SPOC</h2>
          <div className="max-w-md mx-auto">
            <Card className="bg-blue-50 border-blue-200 text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="text-white h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">-</h3>
                <p className="text-blue-600 font-medium mb-4">Assistant Professor</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4 text-blue-600" />
                    <span> - </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Faculty Coordinators</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Mrs. S. Jyotsna", designation: "Assistant Professor", dept: "CSE (Data Science)", phone: "+91 94944 09907" },
              { name: "-", designation: "Assistant Professor",  dept: "CSE (AIML)", phone: "-" },
              { name: "-", designation: "Assistant Professor", dept: "CSE (Cybersecurity)", phone: "-" },
              { name: "-", designation: "Assistant Professor",  dept: "CSE", phone: "-" },
              { name: "-", designation: "Assistant Professor", dept: "CSE (IOT)", phone: "-" },
              { name: "-", designation: "Assistant Professor", dept: "CSE (AI&DS)", phone: "-" },
             
              
            ].map((coordinator, index) => (
              <Card key={index} className="bg-yellow-100 border-gray-200 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="text-gray-500 h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{coordinator.name}</h3>
                      <p className="text-gray-800 text-xs mb-2">{coordinator.dept}</p>
                      <p className="text-gray-900 font-medium text-xs mb-1">{coordinator.designation}</p>

                  <div className="flex items-center justify-center text-xs text-gray-600">
                    <Phone className="mr-1 h-3 w-3 text-gray-500" />
                    <span>{coordinator.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* Student Coordinators */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Coordinators</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Rishab Jain", year: "4th Year", dept: "CSE (Data Science)", phone: "+91 97045 26359" },
              { name: "Manchikanti Prachatih", year: "3rd Year", dept: "CSE (Data Science)", phone: "+91 83748 65356" },
              { name: "-", year: "-", dept: "CSE (Cybersecurity)", phone: "-" },
              { name: "-", year: "-", dept: "CSE", phone: "-" },
              { name: "-", year: "-", dept: "CSE(IOT)", phone: "-" },
              { name: "-", year: "-", dept: "CSE (AI&DS)", phone: "-" },
              { name: "-", year: "-", dept: "CSE(AIML)", phone: "-" },
              
            ].map((coordinator, index) => (
              <Card key={index} className="bg-lime-100 border-gray-200 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="text-gray-400 h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{coordinator.name}</h3>
                  <p className="text-gray-600 font-medium text-xs mb-1">{coordinator.year}</p>
                  <p className="text-gray-500 text-xs mb-2">{coordinator.dept}</p>
                  <div className="flex items-center justify-center text-xs text-gray-600">
                    <Phone className="mr-1 h-3 w-3 text-gray-500" />
                    <span>{coordinator.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Jury Members */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Faculty Jury Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "-", dept: "CSE", Designation: "-" },
              { name: "-", dept: "CSE", Designation: "-" },
              { name: "-", dept: "CSE", Designation: "-" },
              { name: "-", dept: "CSE", Designation: "-" },
              { name: "-", dept: "CSE", Designation: "-" }
            ].map((faculty, index) => (
              <Card key={index} className="bg-gray-50 border-gray-200 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-1">{faculty.dept}</p>
                  <p className="text-gray-600 text-xs">{faculty.Designation}</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact your Department Faculty Coordinators</h3>
                  <p className="text-gray-600 text-sm mb-2">For any queries regarding the hackathon</p>
                  <p className="text-blue-600 font-medium">SVIT</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <Phone className="text-green-600 h-8 w-8 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm mb-2">Contact our coordinators directly</p>
                  <p className="text-blue-600 font-medium">SVIT</p>

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