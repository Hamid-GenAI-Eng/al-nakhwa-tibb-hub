import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, ArrowLeft, ArrowRight, Check, User, MapPin, GraduationCap, Stethoscope, Building, Shield, FileText, Camera } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FormData {
  // Basic Information
  fullName: string;
  fatherName: string;
  profilePicture: File | null;
  gender: string;
  dateOfBirth: string;
  
  // Contact & Location
  phoneNumber: string;
  email: string;
  clinicAddress: string;
  mapLocation: string;
  city: string;
  province: string;
  country: string;
  
  // Professional Credentials
  degrees: string[];
  instituteName: string;
  degreeUpload: File | null;
  licenseNumber: string;
  cnicUpload: File | null;
  yearsExperience: string;
  
  // Specialization
  specialties: string[];
  areasOfFocus: string[];
  
  // Clinic & Services
  clinicName: string;
  consultationType: string[];
  consultationFee: string;
  availableDays: string[];
  availableTimings: string;
  servicesOffered: string[];
  paymentMethods: string[];
  
  // Professional Proof
  verificationVideo: File | null;
  
  // Additional Information
  biography: string;
  experienceHighlights: string;
  socialMediaLinks: string;
  awards: string;
}

const steps = [
  { id: 1, title: "Basic Information", icon: User },
  { id: 2, title: "Contact & Location", icon: MapPin },
  { id: 3, title: "Professional Credentials", icon: GraduationCap },
  { id: 4, title: "Specialization", icon: Stethoscope },
  { id: 5, title: "Clinic & Services", icon: Building },
  { id: 6, title: "Professional Proof", icon: Shield },
  { id: 7, title: "Additional Information", icon: FileText },
];

interface HakeemRegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HakeemRegistrationForm = ({ open, onOpenChange }: HakeemRegistrationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    fatherName: "",
    profilePicture: null,
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    clinicAddress: "",
    mapLocation: "",
    city: "",
    province: "",
    country: "Pakistan",
    degrees: [],
    instituteName: "",
    degreeUpload: null,
    licenseNumber: "",
    cnicUpload: null,
    yearsExperience: "",
    specialties: [],
    areasOfFocus: [],
    clinicName: "",
    consultationType: [],
    consultationFee: "",
    availableDays: [],
    availableTimings: "",
    servicesOffered: [],
    paymentMethods: [],
    verificationVideo: null,
    biography: "",
    experienceHighlights: "",
    socialMediaLinks: "",
    awards: "",
  });

  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (field: keyof FormData, file: File) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleArrayToggle = (field: keyof FormData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const handleSubmit = () => {
    toast({
      title: "Registration Submitted!",
      description: "Your application will be reviewed within 48 hours.",
    });
    onOpenChange(false);
    setCurrentStep(1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  placeholder="As per CNIC/official document"
                />
              </div>
              <div>
                <Label htmlFor="fatherName">Father's Name</Label>
                <Input
                  id="fatherName"
                  value={formData.fatherName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fatherName: e.target.value }))}
                  placeholder="Optional"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <Label>Profile Picture *</Label>
              <div className="mt-2 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-dashed border-muted rounded-md">
                <div className="space-y-1 text-center">
                  <Camera className="mx-auto h-12 w-12 text-muted-foreground" />
                  <div className="flex text-sm text-muted-foreground">
                    <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" accept="image/*" onChange={(e) => e.target.files?.[0] && handleFileUpload('profilePicture', e.target.files[0])} />
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phoneNumber">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  placeholder="+92 XXX XXXXXXX"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="clinicAddress">Clinic/Practice Address *</Label>
              <Textarea
                id="clinicAddress"
                value={formData.clinicAddress}
                onChange={(e) => setFormData(prev => ({ ...prev, clinicAddress: e.target.value }))}
                placeholder="Full physical location with landmarks"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Select value={formData.city} onValueChange={(value) => setFormData(prev => ({ ...prev, city: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="karachi">Karachi</SelectItem>
                    <SelectItem value="lahore">Lahore</SelectItem>
                    <SelectItem value="islamabad">Islamabad</SelectItem>
                    <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                    <SelectItem value="faisalabad">Faisalabad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="province">Province *</Label>
                <Select value={formData.province} onValueChange={(value) => setFormData(prev => ({ ...prev, province: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="punjab">Punjab</SelectItem>
                    <SelectItem value="sindh">Sindh</SelectItem>
                    <SelectItem value="kpk">KPK</SelectItem>
                    <SelectItem value="balochistan">Balochistan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  disabled
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>Degrees/Diplomas *</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {["BEMS", "Tibb-e-Unani", "Hikmat", "DHMS", "Other"].map((degree) => (
                  <div key={degree} className="flex items-center space-x-2">
                    <Checkbox
                      id={degree}
                      checked={formData.degrees.includes(degree)}
                      onCheckedChange={() => handleArrayToggle('degrees', degree)}
                    />
                    <Label htmlFor={degree} className="text-sm">{degree}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="instituteName">Institute/University Name *</Label>
              <Input
                id="instituteName"
                value={formData.instituteName}
                onChange={(e) => setFormData(prev => ({ ...prev, instituteName: e.target.value }))}
                placeholder="Name of educational institution"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="licenseNumber">Professional License Number</Label>
                <Input
                  id="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, licenseNumber: e.target.value }))}
                  placeholder="If issued by regulatory body"
                />
              </div>
              <div>
                <Label htmlFor="yearsExperience">Years of Experience *</Label>
                <Select value={formData.yearsExperience} onValueChange={(value) => setFormData(prev => ({ ...prev, yearsExperience: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="4-7">4-7 years</SelectItem>
                    <SelectItem value="8-15">8-15 years</SelectItem>
                    <SelectItem value="15+">15+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Upload Degree/Certificate *</Label>
                <div className="mt-2 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-dashed border-muted rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                      <span>Upload PDF/Image</span>
                      <input type="file" className="sr-only" accept=".pdf,image/*" onChange={(e) => e.target.files?.[0] && handleFileUpload('degreeUpload', e.target.files[0])} />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <Label>Upload CNIC *</Label>
                <div className="mt-2 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-dashed border-muted rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                      <span>Upload CNIC</span>
                      <input type="file" className="sr-only" accept="image/*,.pdf" onChange={(e) => e.target.files?.[0] && handleFileUpload('cnicUpload', e.target.files[0])} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label>Specialties *</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {[
                  "Stomach Issues", "Joint Pain", "Liver Diseases", "Skin Conditions",
                  "Infertility", "Mardana Kamzori", "Respiratory", "Cardiovascular",
                  "Mental Health", "Women's Health", "Pediatric", "General Medicine"
                ].map((specialty) => (
                  <div key={specialty} className="flex items-center space-x-2">
                    <Checkbox
                      id={specialty}
                      checked={formData.specialties.includes(specialty)}
                      onCheckedChange={() => handleArrayToggle('specialties', specialty)}
                    />
                    <Label htmlFor={specialty} className="text-sm">{specialty}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label>Areas of Focus *</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {[
                  "General Hakeem", "Herbalist", "Alternative Medicine",
                  "Spiritual Healing", "Cupping Therapy", "Diet & Nutrition"
                ].map((focus) => (
                  <div key={focus} className="flex items-center space-x-2">
                    <Checkbox
                      id={focus}
                      checked={formData.areasOfFocus.includes(focus)}
                      onCheckedChange={() => handleArrayToggle('areasOfFocus', focus)}
                    />
                    <Label htmlFor={focus} className="text-sm">{focus}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="clinicName">Clinic Name</Label>
                <Input
                  id="clinicName"
                  value={formData.clinicName}
                  onChange={(e) => setFormData(prev => ({ ...prev, clinicName: e.target.value }))}
                  placeholder="Optional"
                />
              </div>
              <div>
                <Label htmlFor="consultationFee">Consultation Fee (Rs.) *</Label>
                <Input
                  id="consultationFee"
                  type="number"
                  value={formData.consultationFee}
                  onChange={(e) => setFormData(prev => ({ ...prev, consultationFee: e.target.value }))}
                  placeholder="e.g., 2000"
                />
              </div>
            </div>
            <div>
              <Label>Consultation Type *</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {["In-person", "Online", "Home Visits"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={formData.consultationType.includes(type)}
                      onCheckedChange={() => handleArrayToggle('consultationType', type)}
                    />
                    <Label htmlFor={type} className="text-sm">{type}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label>Available Days *</Label>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <div key={day} className="flex items-center space-x-2">
                    <Checkbox
                      id={day}
                      checked={formData.availableDays.includes(day)}
                      onCheckedChange={() => handleArrayToggle('availableDays', day)}
                    />
                    <Label htmlFor={day} className="text-sm">{day}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="availableTimings">Available Timings *</Label>
              <Input
                id="availableTimings"
                value={formData.availableTimings}
                onChange={(e) => setFormData(prev => ({ ...prev, availableTimings: e.target.value }))}
                placeholder="e.g., 9:00 AM - 5:00 PM"
              />
            </div>
            <div>
              <Label>Payment Methods *</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {["Cash", "JazzCash", "Easypaisa", "Bank Transfer", "Credit Card"].map((method) => (
                  <div key={method} className="flex items-center space-x-2">
                    <Checkbox
                      id={method}
                      checked={formData.paymentMethods.includes(method)}
                      onCheckedChange={() => handleArrayToggle('paymentMethods', method)}
                    />
                    <Label htmlFor={method} className="text-sm">{method}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <Label>Verification Video (2 minutes) *</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Record a short video introducing yourself and your practice for authenticity verification.
              </p>
              <div className="mt-2 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-dashed border-muted rounded-md">
                <div className="space-y-1 text-center">
                  <Camera className="mx-auto h-12 w-12 text-muted-foreground" />
                  <div className="flex text-sm text-muted-foreground">
                    <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                      <span>Upload Video</span>
                      <input type="file" className="sr-only" accept="video/*" onChange={(e) => e.target.files?.[0] && handleFileUpload('verificationVideo', e.target.files[0])} />
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">MP4, MOV up to 50MB</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Verification Process:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Documents will be verified within 48 hours</li>
                <li>• CNIC verification through NADRA database</li>
                <li>• Educational credentials cross-checked</li>
                <li>• Video review for authenticity</li>
                <li>• Verification badge displayed upon approval</li>
              </ul>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="biography">About Me / Biography</Label>
              <Textarea
                id="biography"
                value={formData.biography}
                onChange={(e) => setFormData(prev => ({ ...prev, biography: e.target.value }))}
                placeholder="Brief introduction about your journey and philosophy..."
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="experienceHighlights">Experience Highlights</Label>
              <Textarea
                id="experienceHighlights"
                value={formData.experienceHighlights}
                onChange={(e) => setFormData(prev => ({ ...prev, experienceHighlights: e.target.value }))}
                placeholder="e.g., '20 years in treating stomach & liver diseases'"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="socialMediaLinks">Social Media Links / Website</Label>
              <Input
                id="socialMediaLinks"
                value={formData.socialMediaLinks}
                onChange={(e) => setFormData(prev => ({ ...prev, socialMediaLinks: e.target.value }))}
                placeholder="Optional professional links"
              />
            </div>
            <div>
              <Label htmlFor="awards">Awards & Achievements</Label>
              <Textarea
                id="awards"
                value={formData.awards}
                onChange={(e) => setFormData(prev => ({ ...prev, awards: e.target.value }))}
                placeholder="Any recognition, awards, or achievements..."
                rows={3}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Register as Hakeem
          </DialogTitle>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Step {currentStep} of {steps.length}</span>
            <Badge variant="secondary">{Math.round(progress)}% Complete</Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
                  step.id === currentStep
                    ? 'bg-primary text-primary-foreground'
                    : step.id < currentStep
                    ? 'bg-muted text-muted-foreground'
                    : 'bg-muted/50 text-muted-foreground'
                }`}
              >
                {step.id < currentStep ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Icon className="h-4 w-4" />
                )}
                <span className="hidden md:inline">{step.title}</span>
              </div>
            );
          })}
        </div>

        {/* Form Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5" })}
              <span>{steps[currentStep - 1].title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          {currentStep === steps.length ? (
            <Button variant="hero" onClick={handleSubmit}>
              <Check className="h-4 w-4 mr-2" />
              Submit Application
            </Button>
          ) : (
            <Button variant="hero" onClick={handleNext}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HakeemRegistrationForm;