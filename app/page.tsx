"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  CreditCard,
  Mail,
  BarChart3,
  Settings,
  Check,
  ExternalLink,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { number: "500+", label: "Organizations" },
    { number: "50K+", label: "Donations" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
<header
  className={`fixed top-0 z-50 w-full transition-all duration-500 ${
    scrollY > 20 
      ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
      : "bg-slate-900/60 backdrop-blur-lg border-b border-white/5"
  }`}
>
  <div className="container mx-auto px-6">
    <div className="flex h-20 items-center justify-between">
     {/* Enhanced Logo Section */}
      <Link href="/" className="flex items-center gap-4 group">
        <div className="relative">
          {/* Logo without container - much larger and cleaner */}
          <Image 
            src="/images/dp-logo.png" 
            alt="ShulPad Logo" 
            width={50} 
            height={50} 
            className="rounded-xl transition-all duration-300 transform group-hover:scale-110 drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(20,184,166,0.5)]" 
          />
        </div>
        
        <div className="flex flex-col">
          {/* Enhanced text visibility - larger and more prominent */}
         <span className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors duration-300 drop-shadow-lg">
  ShulPad
</span>
      <span 
  className="text-base font-medium -mt-1 hidden sm:block transition-colors duration-300 drop-shadow-sm"
  style={{ color: '#A5619C' }}
>
  Donation Platform
</span>
        </div>
      </Link>

      {/* Enhanced Navigation Menu */}
      <nav className="hidden lg:flex items-center space-x-2">
        {[
          { name: "Features", href: "#features" },
          { name: "How It Works", href: "#how-it-works" },
          { name: "Testimonials", href: "#testimonials" },
          { name: "Pricing", href: "#pricing" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 group rounded-xl hover:bg-white/10 backdrop-blur-sm"
          >
            <span className="relative z-10">{item.name}</span>
            {/* Enhanced hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full group-hover:w-8 transition-all duration-300"></div>
          </Link>
        ))}
      </nav>

      {/* Enhanced Action Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href="#contact"
          className="px-5 py-2.5 text-sm font-medium text-white/90 hover:text-white rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40"
        >
          Contact
        </Link>
        <Button 
  className="text-white px-6 py-2.5 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-white/20"
 style={{
  background: 'linear-gradient(90deg, #426BC8 0%, #426BC8 15%, #4D54AC 60%, #E67097 100%)'
}}
>
          <span className="font-medium">Get Started</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Enhanced Mobile Menu Button */}
      <button
        className="lg:hidden relative w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center border border-white/20 hover:border-white/40 group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="relative w-6 h-6">
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 top-3" : "top-2"
            }`}
          ></span>
          <span
            className={`absolute block w-6 h-0.5 bg-white top-3 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 top-3" : "top-4"
            }`}
          ></span>
        </div>
        {/* Button glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      </button>
    </div>

    {/* Enhanced Mobile Menu with Slide-out Effect */}
    <div
      className={`lg:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 bg-slate-900/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-all duration-500 ease-out ${
        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      
      {/* Menu content */}
      <div className="relative h-full overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Menu header */}
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <p className="text-sm text-white/60 mt-1">Explore ShulPad</p>
          </div>
          
          {/* Navigation items */}
          <div className="space-y-2">
            {[
              { name: "Features", href: "#features", icon: "⚡" },
              { name: "How It Works", href: "#how-it-works", icon: "🔄" },
              { name: "Testimonials", href: "#testimonials", icon: "💬" },
              { name: "Pricing", href: "#pricing", icon: "💎" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group block p-4 text-white/90 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 border border-transparent hover:border-white/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      Learn more about {item.name.toLowerCase()}
                    </div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
          
          {/* Action buttons */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <Link
              href="#contact"
              className="block w-full p-4 text-center text-white/90 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-2xl py-4 font-medium shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 border border-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Footer info */}
          <div className="border-t border-white/10 pt-6">
            <div className="text-center text-white/50 text-sm">
              <p>Transform your donation experience</p>
              <p className="text-xs mt-1 text-white/30">© 2024 ShulPad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-blob"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* Floating Particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400/60 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-float animation-delay-2000"></div>

          <div className="relative container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_550px] items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20 group hover:bg-white/20 transition-all duration-300">
                    <div className="relative">
                      <Star className="w-4 h-4 fill-teal-400 text-teal-400" />
                      <div className="absolute inset-0 bg-teal-400 rounded-full blur-sm opacity-50 animate-pulse"></div>
                    </div>
                    <span>Trusted by 500+ Organizations</span>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Main Heading with Enhanced Typography */}
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl text-white leading-tight">
                    Transform Your iPad Into a{" "}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                        Donation Kiosk
                      </span>
                      {/* Underline Effect */}
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full transform scale-x-0 animate-[scale-x_2s_ease-in-out_infinite]"></div>
                    </span>
                  </h1>

                  {/* Enhanced Description */}
                  <div className="relative">
                    <p className="max-w-[600px] text-xl text-white/80 leading-relaxed">
                      ShulPad helps synagogues, churches, and nonprofits collect donations with ease using Square
                      payment integration.{" "}
                      <span className="text-teal-300 font-semibold">Increase donations by 40%</span> with our
                      professional kiosk solution.
                    </p>
                    {/* Accent Line */}
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-blue-400 rounded-full"></div>
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
                  >
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Download on App Store</span>
                    <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white/70 backdrop-blur-md transition-all duration-300 transform hover:scale-105 group shadow-lg"
                  >
                    <span>Watch Demo</span>
                    <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse group-hover:animate-ping"></div>
                  </Button>
                </div>

                {/* Enhanced Feature List */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  {[
                    { icon: Check, text: "Square Integration", color: "text-teal-400" },
                    { icon: Check, text: "Customizable", color: "text-blue-400" },
                    { icon: Check, text: "Email Receipts", color: "text-purple-400" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 group">
                      <div className="relative">
                        <item.icon
                          className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform duration-200`}
                        />
                        <div
                          className={`absolute inset-0 ${item.color.replace("text-", "bg-")} rounded-full blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-200`}
                        ></div>
                      </div>
                      <span className="text-white/80 font-medium group-hover:text-white transition-colors duration-200">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Floating Stats Cards */}
                <div className="hidden lg:flex gap-4 mt-8">
                  {[
                    { label: "Active Users", value: "10K+", icon: Users },
                    { label: "Success Rate", value: "99.9%", icon: TrendingUp },
                  ].map((stat, index) => (
                    <div key={index} className="group">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 transform group-hover:-translate-y-1">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <stat.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-lg">{stat.value}</div>
                            <div className="text-white/60 text-xs">{stat.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Hero Image Section */}
              <div className="relative group">
                {/* Floating UI Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-2xl backdrop-blur-sm border border-white/10 animate-float hidden lg:block">
                  <div className="w-full h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-20 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl backdrop-blur-sm border border-white/10 animate-float animation-delay-1000 hidden lg:block">
                  <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Main Image Container */}
                <div className="relative transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                  {/* Glow Effects */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-teal-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/30 to-blue-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image */}
                  <div className="relative">
                    <Image
                      src="/images/payment-terminal-1.png"
                      alt="ShulPad Payment Terminal with Square Integration"
                      width={550}
                      height={550}
                      className="w-full h-auto object-contain relative z-10"
                      style={{
                        filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))",
                      }}
                    />

                    {/* Interactive Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Floating Action Indicators */}
                  <div className="absolute top-1/4 -right-4 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Success Notification Popup */}
                <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-green-400/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span>Payment Successful!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors duration-300 cursor-pointer group">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors duration-300">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-blob"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

          <div className="relative container px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                Trusted Worldwide
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Join the{" "}
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  donation revolution
                </span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Organizations worldwide trust ShulPad to transform their donation experience
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:border-teal-400/50 transition-all duration-500"></div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-blue-400/0 group-hover:from-teal-400/10 group-hover:to-blue-400/10 rounded-2xl transition-all duration-500"></div>

                  {/* Content */}
                  <div className="relative p-8 text-center">
                    {/* Animated Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {index === 0 && <Users className="w-6 h-6 text-white" />}
                      {index === 1 && <TrendingUp className="w-6 h-6 text-white" />}
                      {index === 2 && <Shield className="w-6 h-6 text-white" />}
                      {index === 3 && <Star className="w-6 h-6 text-white" />}
                    </div>

                    {/* Number with Counter Animation */}
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                      <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        {stat.number}
                      </span>
                    </div>

                    {/* Label */}
                    <div className="text-white/70 font-medium text-sm uppercase tracking-wider">{stat.label}</div>

                    {/* Progress Bar */}
                    <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"
                        style={{ animationDelay: `${index * 200 + 500}ms` }}
                      ></div>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400/30 rounded-full animate-ping group-hover:animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400/30 rounded-full animate-ping animation-delay-1000 group-hover:animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                <span>See how we compare</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute top-1/2 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
                <Settings className="w-4 h-4" />
                <span>Features</span>
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Everything you need for{" "}
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  seamless donations
                </span>
              </h2>
              <p className="max-w-[800px] text-xl text-white/70 leading-relaxed">
                ShulPad provides powerful tools to help your organization collect and manage donations effectively.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {[
                {
                  icon: CreditCard,
                  title: "Square Integration",
                  description:
                    "Accept credit cards, contactless payments, and mobile wallets with seamless Square integration.",
                  color: "from-blue-500 to-blue-600",
                  particles: "bg-blue-400/20",
                },
                {
                  icon: Settings,
                  title: "Customizable Donations",
                  description:
                    "Set custom donation amounts and create personalized donation experiences for your supporters.",
                  color: "from-purple-500 to-purple-600",
                  particles: "bg-purple-400/20",
                },
                {
                  icon: Mail,
                  title: "Automatic Receipts",
                  description: "Send professional email receipts automatically after each donation for tax purposes.",
                  color: "from-green-500 to-green-600",
                  particles: "bg-green-400/20",
                },
                {
                  icon: BarChart3,
                  title: "Real-time Analytics",
                  description:
                    "Track donations in real-time and access comprehensive reports through the admin dashboard.",
                  color: "from-orange-500 to-orange-600",
                  particles: "bg-orange-400/20",
                },
              ].map((feature, index) => (
                <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Floating Particles */}
                  <div
                    className={`absolute -top-4 -right-4 w-8 h-8 ${feature.particles} rounded-full blur-sm animate-float`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 -left-4 w-6 h-6 ${feature.particles} rounded-full blur-sm animate-float animation-delay-1000`}
                  ></div>

                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:-translate-y-2">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex items-start gap-6">
                      <div
                        className={`rounded-2xl p-4 bg-gradient-to-r ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}
                      >
                        <feature.icon className="h-8 w-8 text-white relative z-10" />
                        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {feature.description}
                        </p>

                        {/* Progress Line */}
                        <div className="h-px bg-white/10 rounded-full overflow-hidden mt-4">
                          <div className="h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="relative w-full py-20 md:py-32 overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100/80 backdrop-blur-sm rounded-full text-teal-700 text-sm font-medium border border-teal-200/50">
                <TrendingUp className="w-4 h-4" />
                <span>How It Works</span>
                <div className="w-1 h-1 bg-teal-500 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Simple setup,{" "}
                <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">
                  powerful results
                </span>
              </h2>
              <p className="max-w-[800px] text-xl text-gray-600 leading-relaxed">
                Get your donation kiosk up and running in minutes with these simple steps.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 items-center">
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Download ShulPad",
                    description: "Download ShulPad from the App Store onto your iPad device.",
                    color: "from-teal-500 to-teal-600",
                  },
                  {
                    step: "2",
                    title: "Connect Square Account",
                    description: "Link your Square merchant account to start accepting payments.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    step: "3",
                    title: "Customize Your Settings",
                    description: "Set your organization name, logo, donation amounts, and email receipt templates.",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    step: "4",
                    title: "Start Collecting Donations",
                    description: "Place your iPad in a visible location and start accepting donations immediately.",
                    color: "from-green-500 to-green-600",
                  },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    {/* Connection Line */}
                    {index < 3 && (
                      <div className="absolute left-6 top-16 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    )}

                    <div className="flex gap-6 relative">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative`}
                      >
                        {item.step}
                        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                      </div>
                      <div className="space-y-2 bg-white/60 backdrop-blur-sm rounded-2xl p-6 flex-1 border border-white/40 group-hover:bg-white/80 group-hover:border-white/60 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {item.description}
                        </p>

                        {/* Animated Dot */}
                        <div className="flex items-center gap-2 mt-3">
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                          <div className="h-px bg-gradient-to-r from-teal-400 to-transparent flex-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative group">
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-teal-200/30 rounded-full blur-xl animate-float"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float animation-delay-1000"></div>

                <div className="relative transform transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <Image
                    src="/images/payment-terminal-2.png"
                    alt="ShulPad Square Payment Process"
                    width={400}
                    height={300}
                    className="relative w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          {/* Mesh Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium border border-white/20">
                <Users className="w-4 h-4" />
                <span>Testimonials</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-200"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-400"></div>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Trusted by organizations{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  worldwide
                </span>
              </h2>
              <p className="max-w-[800px] text-xl text-white/70 leading-relaxed">
                See what our customers have to say about ShulPad.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {[
                {
                  quote:
                    "ShulPad has transformed how we collect donations during services. Our members love the simplicity, and we've seen a 40% increase in contributions since implementing it.",
                  name: "Rabbi Stern",
                  title: "Beth Israel Synagogue",
                  initials: "RS",
                  rating: 5,
                  gradient: "from-pink-500 to-purple-500",
                },
                {
                  quote:
                    "As a small nonprofit, we needed an affordable solution for event donations. ShulPad has been perfect - easy to set up, professional looking, and the Square integration works flawlessly.",
                  name: "Jennifer Davis",
                  title: "Community Outreach Foundation",
                  initials: "JD",
                  rating: 5,
                  gradient: "from-blue-500 to-indigo-500",
                },
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  {/* Floating Particles */}
                  <div className="absolute -top-4 -right-4 w-6 h-6 bg-white/10 rounded-full blur-sm animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-white/10 rounded-full blur-sm animate-float animation-delay-1000"></div>

                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:-translate-y-2">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-white/20 to-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white/60 text-lg font-bold">"</span>
                    </div>

                    <div className="space-y-6">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>

                      <p className="text-white/90 text-lg leading-relaxed italic group-hover:text-white transition-colors duration-300">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center gap-4">
                        <div
                          className={`rounded-full bg-gradient-to-r ${testimonial.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}
                        >
                          <span className="text-lg font-bold text-white relative z-10">{testimonial.initials}</span>
                          <div className="absolute inset-0 bg-white/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                        </div>
                        <div>
                          <p className="font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative w-full py-20 md:py-32 overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-teal-50/30 to-blue-50/30"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.1),transparent_40%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_40%)]"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-teal-400/30 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>

          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-teal-700 text-sm font-medium border border-teal-200/50 shadow-lg">
                <Shield className="w-4 h-4" />
                <span>Pricing</span>
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Simple,{" "}
                <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">
                  transparent pricing
                </span>
              </h2>
              <p className="max-w-[800px] text-xl text-gray-600 leading-relaxed">
                Choose the plan that's right for your organization.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  name: "Standard",
                  price: "$9.99",
                  description: "Perfect for small organizations and places of worship.",
                  features: [
                    "Unlimited donations",
                    "Square payment integration",
                    "Email receipts",
                    "Basic analytics",
                    "Single device license",
                  ],
                  popular: false,
                  gradient: "from-gray-100 to-white",
                  borderGradient: "from-gray-200 to-gray-300",
                },
                {
                  name: "Premium",
                  price: "$19.99",
                  description: "For growing organizations with multiple events.",
                  features: [
                    "Everything in Standard",
                    "Multi-device licenses (up to 3)",
                    "Advanced analytics & reporting",
                    "Custom branding",
                    "Priority support",
                  ],
                  popular: true,
                  gradient: "from-teal-600 to-blue-600",
                  borderGradient: "from-teal-400 to-blue-400",
                },
              ].map((plan, index) => (
                <div key={index} className="group relative">
                  {plan.popular && (
                    <>
                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                      {/* Popular Badge */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                          Most Popular
                        </div>
                      </div>
                    </>
                  )}

                  {/* Floating Particles */}
                  {plan.popular && (
                    <>
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-teal-400/40 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400/40 rounded-full animate-ping animation-delay-500"></div>
                    </>
                  )}

                  <div
                    className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden ${
                      plan.popular ? "scale-105" : ""
                    }`}
                  >
                    {/* Card Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} ${plan.popular ? "" : "opacity-90"}`}
                    ></div>

                    {/* Border Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${plan.borderGradient} opacity-20 rounded-3xl`}
                    ></div>

                    {/* Content */}
                    <div className="relative p-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                            {plan.name}
                          </h3>
                          <div className="mt-4">
                            <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                              {plan.price}
                            </span>
                            <span className={`text-lg ${plan.popular ? "text-teal-100" : "text-gray-600"}`}>
                              /month
                            </span>
                          </div>
                          <p className={`mt-4 ${plan.popular ? "text-teal-100" : "text-gray-600"}`}>
                            {plan.description}
                          </p>
                        </div>

                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3 group/item">
                              <div
                                className={`rounded-full p-1 ${plan.popular ? "bg-teal-200/20" : "bg-teal-100"} group-hover/item:scale-110 transition-transform duration-200`}
                              >
                                <Check className={`h-4 w-4 ${plan.popular ? "text-teal-200" : "text-teal-500"}`} />
                              </div>
                              <span
                                className={`${plan.popular ? "text-teal-50" : "text-gray-700"} group-hover/item:translate-x-1 transition-transform duration-200`}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <Button
                          className={`w-full transition-all duration-300 transform hover:scale-105 ${
                            plan.popular
                              ? "bg-white text-teal-600 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                              : "bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-700 hover:to-teal-600 shadow-lg hover:shadow-xl"
                          }`}
                        >
                          <span>Get Started</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600">
                Need more devices or custom features?{" "}
                <Link
                  href="#contact"
                  className="text-teal-600 hover:text-teal-700 font-medium underline underline-offset-4 hover:underline-offset-2 transition-all duration-200"
                >
                  Contact us
                </Link>{" "}
                for enterprise pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 bg-gradient-to-r from-teal-600 to-blue-600 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Ready to transform your donation experience?
              </h2>
              <p className="max-w-[600px] text-xl text-teal-100 leading-relaxed">
                Join hundreds of organizations already using ShulPad to increase donations and simplify giving.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  Download on App Store
                  <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white/70 backdrop-blur-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Request Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-teal-100">
                {["Free 14-day trial", "No credit card required", "Cancel anytime"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                <Link href="#" className="block hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
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
                <Link href="#" className="block hover:text-white transition-colors">
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
                <Link href="#" className="block hover:text-white transition-colors">
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
