"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Mail,
  Phone,
  FileText,
  Shield,
  Users,
  Database,
  Eye,
  ChevronRight,
  ExternalLink,
} from "lucide-react"

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Update active section based on scroll position
      const sections = [
        "introduction",
        "information-we-collect",
        "how-we-use-information",
        "information-sharing",
        "data-security",
        "data-retention",
        "your-rights",
        "childrens-privacy",
        "international-transfers",
        "california-rights",
        "changes",
        "contact",
        "compliance"
      ]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tableOfContents = [
    { id: "introduction", title: "Introduction", icon: FileText },
    { id: "information-we-collect", title: "Information We Collect", icon: Database },
    { id: "how-we-use-information", title: "How We Use Your Information", icon: Eye },
    { id: "information-sharing", title: "Information Sharing and Disclosure", icon: Users },
    { id: "data-security", title: "Data Security", icon: Shield },
    { id: "data-retention", title: "Data Retention", icon: Database },
    { id: "your-rights", title: "Your Rights and Choices", icon: Users },
    { id: "childrens-privacy", title: "Children's Privacy", icon: Shield },
    { id: "international-transfers", title: "International Data Transfers", icon: FileText },
    { id: "california-rights", title: "California Privacy Rights", icon: FileText },
    { id: "changes", title: "Changes to This Privacy Policy", icon: FileText },
    { id: "contact", title: "Contact Information", icon: Mail },
    { id: "compliance", title: "Compliance", icon: Shield },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header - Same as landing page */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrollY > 20 
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
            : "bg-slate-900/90 backdrop-blur-lg border-b border-white/5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <Image 
                  src="/images/dp-logo.png" 
                  alt="ShulPad Logo" 
                  width={50} 
                  height={50} 
                  className="rounded-xl transition-all duration-300 transform group-hover:scale-110 drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]" 
                />
              </div>
              
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors duration-300 drop-shadow-lg">
                  ShulPad
                </span>
                <span className="text-base text-teal-200/90 font-medium -mt-1 hidden sm:block group-hover:text-teal-100 transition-colors duration-300 drop-shadow-sm">
                  Donation Platform
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/90 hover:text-white rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
            {/* Table of Contents */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-teal-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${
                        activeSection === item.id
                          ? "bg-teal-100 text-teal-700 border-l-2 border-teal-500"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white"
                      }`}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="flex-1">{item.title}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl">
              {/* Header */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium mb-6">
                  <Shield className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Privacy Policy for ShulPad
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span><strong>Effective Date:</strong> June 18, 2025</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span><strong>Last Updated:</strong> June 18, 2025</span>
                </div>
              </div>

              {/* Content Sections */}
              <div className="prose prose-lg max-w-none">
                <section id="introduction" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-teal-600" />
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    ShulPad ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").
                  </p>
                </section>

                <section id="information-we-collect" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Database className="w-6 h-6 text-teal-600" />
                    Information We Collect
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Email Addresses:</strong> We collect email addresses when you request donation receipts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Contact Information:</strong> Organization contact details for receipt customization</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Donation Amounts:</strong> Transaction values for receipt generation and record-keeping</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Transaction Data:</strong> Payment identifiers, order numbers, and transaction dates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Note:</strong> Payment card information is processed directly by Square and is not stored on our servers</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Device and Technical Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Device Identifiers:</strong> Unique device IDs for authentication and device management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Location Data:</strong> Your device's location when using card reader functionality (required for Square payment processing)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>App Usage Data:</strong> Information about how you interact with our app for troubleshooting and improvement</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Organization Data</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Business Information:</strong> Organization names, tax identification numbers, and business settings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Receipt Preferences:</strong> Custom messages and branding preferences for donation receipts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="how-we-use-information" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-teal-600" />
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      { title: "Payment Processing", desc: "Facilitate secure donation transactions through Square" },
                      { title: "Receipt Generation", desc: "Send tax-deductible donation receipts via email" },
                      { title: "Service Delivery", desc: "Provide core app functionality including card reader connectivity" },
                      { title: "Customer Support", desc: "Respond to inquiries and provide technical assistance" },
                      { title: "Service Improvement", desc: "Analyze usage patterns to enhance app performance and features" },
                      { title: "Legal Compliance", desc: "Maintain records as required by applicable laws and regulations" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong>{item.title}:</strong> {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="information-sharing" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 text-teal-600" />
                    Information Sharing and Disclosure
                  </h2>
                  <p className="text-gray-700 mb-6">We may share your information in the following circumstances:</p>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Service Providers</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Square:</strong> Payment processing, merchant services, and card reader functionality</li>
                        <li><strong>SendGrid:</strong> Email delivery services for donation receipts</li>
                        <li><strong>PlanetScale:</strong> Secure database hosting and management</li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
                      <p className="text-gray-700">We may disclose your information if required by law, court order, or government regulation.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Transfers</h3>
                      <p className="text-gray-700">In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
                    </div>
                  </div>
                </section>

                <section id="data-security" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-teal-600" />
                    Data Security
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Encrypted data transmission and storage",
                      "Secure authentication protocols",
                      "Regular security assessments and updates",
                      "Limited access to personal information on a need-to-know basis"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="data-retention" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Database className="w-6 h-6 text-teal-600" />
                    Data Retention
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Transaction Records:</strong> Retained for tax and legal compliance purposes</div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Email Addresses:</strong> Retained while you use our services or as required by law</div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Technical Data:</strong> Retained for operational purposes and service improvement</div>
                    </li>
                  </ul>
                </section>

                <section id="your-rights" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 text-teal-600" />
                    Your Rights and Choices
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <div className="grid gap-4">
                    {[
                      { title: "Access", desc: "Request a copy of the personal information we hold about you" },
                      { title: "Correction", desc: "Request correction of inaccurate or incomplete information" },
                      { title: "Deletion", desc: "Request deletion of your personal information (subject to legal requirements)" },
                      { title: "Portability", desc: "Request transfer of your data to another service provider" },
                      { title: "Opt-Out", desc: "Unsubscribe from marketing communications" }
                    ].map((right, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">{right.title}:</strong>
                          <span className="text-gray-700 ml-1">{right.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section id="childrens-privacy" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-teal-600" />
                    Children's Privacy
                  </h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <p className="text-gray-700">
                      Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                    </p>
                  </div>
                </section>

                <section id="international-transfers" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-teal-600" />
                    International Data Transfers
                  </h2>
                  <p className="text-gray-700">
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                  </p>
                </section>

                <section id="california-rights" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-teal-600" />
                    California Privacy Rights
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Right to know what personal information is collected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Right to delete personal information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Right to opt-out of the sale of personal information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Right to non-discrimination for exercising your privacy rights</span>
                    </li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-gray-700 font-medium">
                      We do not sell your personal information to third parties.
                    </p>
                  </div>
                </section>

                <section id="changes" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-teal-600" />
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </section>

                <section id="contact" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Mail className="w-6 h-6 text-teal-600" />
                    Contact Information
                  </h2>
                  <p className="text-gray-700 mb-6">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl border border-teal-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href="mailto:info@shulpad.com" className="text-teal-600 hover:text-teal-700 font-medium">
                          info@shulpad.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <a href="tel:+16179032387" className="text-blue-600 hover:text-blue-700 font-medium">
                          +1 (617) 903-2387
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    For written correspondence, please use our email address above.
                  </p>
                </section>

                <section id="compliance" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-teal-600" />
                    Compliance
                  </h2>
                  <p className="text-gray-700 mb-4">
                    This Privacy Policy is designed to comply with applicable privacy laws, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "General Data Protection Regulation (GDPR)",
                      "California Consumer Privacy Act (CCPA)",
                      "Children's Online Privacy Protection Act (COPPA)",
                      "Other applicable state and federal privacy laws"
                    ].map((law, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{law}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Footer Note */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <p className="text-sm text-gray-600 italic text-center">
                    This privacy policy was last updated on June 18, 2025 and is effective as of June 18, 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Same as landing page */}
      <footer className="w-full border-t bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/dp-logo.png" alt="ShulPad Logo" width={30} height={30} className="rounded-md" />
                <span className="text-lg font-bold">ShulPad</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transform your iPad into a professional donation kiosk with Square integration.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/#features" className="block hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="/#pricing" className="block hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Security
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  Help Center
                </Link>
                <Link href="/#contact" className="block hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Status
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/privacy" className="block hover:text-white transition-colors text-teal-400">
                  Privacy
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ShulPad. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}